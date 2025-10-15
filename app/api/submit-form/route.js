export async function POST(request) {
  try {
    const body = await request.json();
    
    // Get the origin from the request for the return URL
    const origin = request.headers.get('origin') || '/';
    const thankYouUrl = `${origin}/thank-you`; // Your thank you page URL
    
    // Create URLSearchParams instead of FormData for better compatibility
    const formData = new URLSearchParams();
    formData.append('mauticform[f_name]', body.f_name || '');
    formData.append('mauticform[business_email]', body.business_email || '');
    formData.append('mauticform[phone]', body.phone || '');
    formData.append('mauticform[team_size]', body.team_size || '');
    formData.append('mauticform[formId]', '14');
    formData.append('mauticform[return]', thankYouUrl); // Set return URL
    formData.append('mauticform[formName]', 'syncchatform');
    formData.append('mauticform[submit]', '1');
    formData.append('mauticform[messenger]', '1');

    console.log('Submitting to Mautic:', Object.fromEntries(formData));

    const response = await fetch('https://mautic.abacusdesk.co.in/form/submit?formId=14', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
      redirect: 'manual',
    });

    console.log('Mautic response status:', response.status);
    console.log('Mautic response headers:', Object.fromEntries(response.headers.entries()));

    // Check for redirects (Mautic typically uses 302)
    if (response.status === 302 || response.status === 301) {
      const redirectUrl = response.headers.get('location');
      console.log('Redirect URL from Mautic:', redirectUrl);
      
      return Response.json({ 
        success: true, 
        message: 'Form submitted successfully',
        redirect: redirectUrl || thankYouUrl
      }, { status: 200 });
    }

    // For 200 responses, parse the response body
    if (response.ok) {
      const responseText = await response.text();
      console.log('Mautic response body:', responseText);
      
      // Try to parse JSON response from Mautic
      try {
        const jsonResponse = JSON.parse(responseText);
        if (jsonResponse.redirect) {
          return Response.json({ 
            success: true, 
            message: 'Form submitted successfully',
            redirect: jsonResponse.redirect
          }, { status: 200 });
        }
      } catch (e) {
        console.log('Response is not JSON, using default redirect');
      }
      
      // If no redirect in response, use our thank you page
      return Response.json({ 
        success: true, 
        message: 'Form submitted successfully',
        redirect: thankYouUrl
      }, { status: 200 });
    }

    // If we get here, something went wrong
    const errorText = await response.text();
    console.error('Mautic error response:', errorText);
    
    return Response.json({ 
      success: false, 
      message: 'Error submitting form to Mautic' 
    }, { status: response.status });

  } catch (error) {
    console.error('API Error:', error);
    return Response.json({ 
      success: false, 
      message: 'Error submitting form: ' + error.message 
    }, { status: 500 });
  }
}