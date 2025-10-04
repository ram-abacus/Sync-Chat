import { useEffect } from "react";
import { Mail } from "lucide-react"; // your imported icon

const MauticSubscribe = () => {
  useEffect(() => {
    if (typeof window.MauticSDKLoaded === "undefined") {
      window.MauticSDKLoaded = true;

      const head = document.getElementsByTagName("head")[0];
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "https://mautic.abacusdesk.co.in/media/js/mautic-form.js?v5fc52c99";
      script.onload = function () {
        if (window.MauticSDK) window.MauticSDK.onLoad();
      };
      head.appendChild(script);

      window.MauticDomain = "https://mautic.abacusdesk.co.in";
      window.MauticLang = { submittingMessage: "Please wait..." };
    } else if (typeof window.MauticSDK !== "undefined") {
      window.MauticSDK.onLoad();
    }
  }, []);

  const formHTML = `
    <div id="mauticform_wrapper_syncchatnewsletterform" class="mauticform_wrapper">
      <form autocomplete="false" role="form" method="post" 
            action="https://mautic.abacusdesk.co.in/form/submit?formId=18" 
            id="mauticform_syncchatnewsletterform" 
            data-mautic-form="syncchatnewsletterform" 
            enctype="multipart/form-data">
        
        <div class="mauticform-error" id="mauticform_syncchatnewsletterform_error"></div>
        <div class="mauticform-message" id="mauticform_syncchatnewsletterform_message"></div>
        
        <div class="mauticform-innerform">
          <div class="mauticform-page-wrapper mauticform-page-1" data-mautic-form-page="1">
            <div class="mauticform-row mauticform-email mauticform-field-1 mauticform-required relative">
              <!-- Icon placeholder -->
              <div id="mail-icon-placeholder" class="absolute left-2 top-1/2 transform -translate-y-1/2"></div>

              <input type="email" name="mauticform[email]" value="" 
                     id="mauticform_input_syncchatnewsletterform_email" 
                     placeholder="Enter Your Email" 
                     class="mauticform-input pl-8">
              <span class="mauticform-errormsg" style="display:none;">This field is required</span>
            </div>
            <div class="mauticform-row mauticform-button-wrapper mauticform-field-2">
              <button class="btn btn-ghost mauticform-button" name="mauticform[submit]" value="1" 
                      id="mauticform_input_syncchatnewsletterform_submit" type="submit">Subscribe</button>
            </div>
          </div>
        </div>
        
        <input type="hidden" name="mauticform[formId]" value="18">
        <input type="hidden" name="mauticform[return]" value="">
        <input type="hidden" name="mauticform[formName]" value="syncchatnewsletterform">
      </form>
    </div>

    <style>
      .mauticform_wrapper { max-width: 600px; margin: 10px auto; }
      .mauticform-input { width: 100%; padding: 0.5em; border: 1px solid #CCC; border-radius: 4px; box-sizing: border-box; }
      .mauticform-input.pl-8 { padding-left: 2rem; } /* space for icon */
      .mauticform-button { width: 100%; padding: 0.5em; background: linear-gradient(to right, #3b82f6, #2563eb); color: #fff; border: none; border-radius: 4px; cursor: pointer; }
      .mauticform-button:hover { opacity: 0.9; }
      .mauticform-error { color: red; margin-bottom: 10px; }
      .mauticform-message { color: green; margin-bottom: 10px; }
    </style>
  `;

  return (
    <div className="relative">
      <Mail className="absolute left-2 top-5 transform -translate-y-2 w-5 h-5 text-gray-400 z-10" />
      <div dangerouslySetInnerHTML={{ __html: formHTML }} />
    </div>
  );
};

export default MauticSubscribe;
