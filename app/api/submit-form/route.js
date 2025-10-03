export async function POST(request) {
  try {
    const body = await request.json();
    
    const formData = new FormData();
    formData.append('mauticform[f_name]', body.f_name);
    formData.append('mauticform[business_email]', body.business_email);
    formData.append('mauticform[phone]', body.phone);
    formData.append('mauticform[team_size]', body.team_size);
    formData.append('mauticform[formId]', '14');
    formData.append('mauticform[return]', '');
    formData.append('mauticform[formName]', 'syncchatform');
    formData.append('mauticform[submit]', '1');

    const response = await fetch('https://mautic.abacusdesk.co.in/form/submit?formId=14', {
      method: 'POST',
      body: formData,
      redirect: 'manual', // Don't follow redirects automatically
    });

    // Check if Mautic is redirecting (302 status)
    if (response.status === 302 || response.status === 301) {
      const redirectUrl = response.headers.get('location');
      return Response.json({ 
        success: true, 
        message: 'Form submitted successfully',
        redirect: redirectUrl // Return the redirect URL
      }, { status: 200 });
    }

    // Return success for other successful responses
    return Response.json({ 
      success: true, 
      message: 'Form submitted successfully' 
    }, { status: 200 });

  } catch (error) {
    console.error('API Error:', error);
    return Response.json({ 
      success: false, 
      message: 'Error submitting form' 
    }, { status: 500 });
  }
}