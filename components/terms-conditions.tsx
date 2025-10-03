export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 z-10 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">Terms and Conditions</h1>
          <p className="mt-2 text-sm text-slate-600">Last Updated: September 30, 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 lg:p-12">
          
          {/* Agreement to Terms */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Agreement to Terms</h2>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <p className="text-slate-700 leading-relaxed mb-4">
                These Terms and Conditions ("Terms," "Terms of Service") constitute a legally binding agreement between you ("you," "your," or "user") and GetSync.chat ("we," "us," "our," or "GetSync.chat") governing your access to and use of the GetSync.chat platform, website, applications, and services (collectively, the "Services").
              </p>
              <p className="text-slate-700 leading-relaxed">
                By clicking "I Accept," creating an account, or using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms, along with our Privacy Policy. If you do not agree to these Terms, you must not access or use our Services.
              </p>
            </div>
          </section>

          {/* Eligibility */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Eligibility</h2>
            
            <div className="space-y-4">
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Age Requirements</h3>
                <p className="text-slate-700 leading-relaxed">
                  You must be at least 13 years of age (or the minimum age required in your jurisdiction) to use GetSync.chat. If you are under 18 years of age, you must have permission from a parent or legal guardian to use our Services.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Account Registration</h3>
                <p className="text-slate-700 leading-relaxed mb-3">To access certain features, you must create an account by providing accurate, current, and complete information. You agree to:</p>
                
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="flex items-start text-slate-700 text-sm">
                    <span className="text-purple-600 mr-2 mt-1">✓</span>
                    <span>Provide truthful and accurate registration information</span>
                  </div>
                  <div className="flex items-start text-slate-700 text-sm">
                    <span className="text-purple-600 mr-2 mt-1">✓</span>
                    <span>Maintain and promptly update your account information</span>
                  </div>
                  <div className="flex items-start text-slate-700 text-sm">
                    <span className="text-purple-600 mr-2 mt-1">✓</span>
                    <span>Keep your password secure and confidential</span>
                  </div>
                  <div className="flex items-start text-slate-700 text-sm">
                    <span className="text-purple-600 mr-2 mt-1">✓</span>
                    <span>Notify us of any unauthorized access</span>
                  </div>
                </div>
                
                <p className="text-slate-700 leading-relaxed mt-4 text-sm">
                  You may not share your account credentials, create accounts with false information, or transfer/sell your account to another party.
                </p>
              </div>
            </div>
          </section>

          {/* Acceptable Use */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Acceptable Use</h2>
            
            <div className="bg-green-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">License Grant</h3>
              <p className="text-slate-700 leading-relaxed">
                Subject to your compliance with these Terms, GetSync.chat grants you a limited, non-exclusive, non-transferable, revocable license to access and use our Services for your internal business or personal communication purposes.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-6 py-2">
                <h4 className="font-semibold text-slate-900 mb-2">Prohibited Activities - Illegal Actions</h4>
                <p className="text-slate-700 text-sm leading-relaxed">Use the Services for any illegal, fraudulent, or unauthorized purpose, or violate any applicable laws or regulations.</p>
              </div>
              
              <div className="border-l-4 border-orange-500 pl-6 py-2">
                <h4 className="font-semibold text-slate-900 mb-2">Prohibited Activities - Harmful Content</h4>
                <p className="text-slate-700 text-sm leading-relaxed">Upload malicious code, viruses, or malware. Engage in harassment, bullying, or threats. Share defamatory, obscene, or hateful content.</p>
              </div>
              
              <div className="border-l-4 border-yellow-500 pl-6 py-2">
                <h4 className="font-semibold text-slate-900 mb-2">Prohibited Activities - Security Violations</h4>
                <p className="text-slate-700 text-sm leading-relaxed">Attempt unauthorized access to our systems, interfere with service integrity, or circumvent security measures.</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-6 py-2">
                <h4 className="font-semibold text-slate-900 mb-2">Prohibited Activities - Misuse of Services</h4>
                <p className="text-slate-700 text-sm leading-relaxed">Impersonate others, collect user information without consent, reverse engineer our software, or use automated tools without permission.</p>
              </div>
            </div>
          </section>

          {/* Content Ownership */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Content Ownership and Rights</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Your Content</h3>
                <p className="text-slate-700 text-sm leading-relaxed mb-3">
                  You retain all ownership rights to the content you create, upload, and share through GetSync.chat.
                </p>
                <p className="text-slate-700 text-sm leading-relaxed">
                  By using our Services, you grant us a worldwide, non-exclusive, royalty-free license to use, store, reproduce, modify, and distribute Your Content solely for providing and improving our Services.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Our Content</h3>
                <p className="text-slate-700 text-sm leading-relaxed mb-3">
                  All intellectual property rights in the GetSync.chat platform, including software, design, trademarks, logos, and documentation, are owned by GetSync.chat or our licensors.
                </p>
                <p className="text-slate-700 text-sm leading-relaxed">
                  You may not use our intellectual property without express written permission.
                </p>
              </div>
            </div>
          </section>

          {/* Organization Accounts */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Organization Accounts</h2>
            
            <div className="bg-amber-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Administrator Rights</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                If you are using GetSync.chat through an organization account, your organization's administrators may have the ability to:
              </p>
              
              <div className="space-y-2">
                <div className="flex items-start text-slate-700">
                  <span className="text-amber-600 mr-2 mt-1 font-bold">→</span>
                  <span className="text-sm">Access, monitor, and control your account and communications</span>
                </div>
                <div className="flex items-start text-slate-700">
                  <span className="text-amber-600 mr-2 mt-1 font-bold">→</span>
                  <span className="text-sm">Restrict or remove your access to the Services</span>
                </div>
                <div className="flex items-start text-slate-700">
                  <span className="text-amber-600 mr-2 mt-1 font-bold">→</span>
                  <span className="text-sm">Configure retention policies and compliance settings</span>
                </div>
                <div className="flex items-start text-slate-700">
                  <span className="text-amber-600 mr-2 mt-1 font-bold">→</span>
                  <span className="text-sm">Export data and communications for legal or business purposes</span>
                </div>
                <div className="flex items-start text-slate-700">
                  <span className="text-amber-600 mr-2 mt-1 font-bold">→</span>
                  <span className="text-sm">Enforce organization-specific policies and guidelines</span>
                </div>
              </div>
            </div>
          </section>

          {/* Subscription and Payments */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Subscription and Payments</h2>
            
            <div className="space-y-6">
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Pricing and Plans</h3>
                <p className="text-slate-700 leading-relaxed">
                  GetSync.chat offers various subscription plans with different features and pricing. Current pricing is available on our website at <a href="https://getsync.chat/pricing" className="text-blue-600 hover:underline">https://getsync.chat/pricing</a>. We reserve the right to modify our pricing with 30 days' notice to existing subscribers.
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="border border-slate-200 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-800 mb-2 text-sm">Billing</h4>
                  <p className="text-slate-700 text-sm leading-relaxed">Subscription fees are billed in advance on a monthly or annual basis. All payments are non-refundable except as required by law.</p>
                </div>
                
                <div className="border border-slate-200 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-800 mb-2 text-sm">Auto-Renewal</h4>
                  <p className="text-slate-700 text-sm leading-relaxed">Subscriptions automatically renew at the end of each billing period unless you cancel before the renewal date.</p>
                </div>
                
                <div className="border border-slate-200 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-800 mb-2 text-sm">Failed Payments</h4>
                  <p className="text-slate-700 text-sm leading-relaxed">If a payment fails, we may suspend or terminate your access to paid features after attempting to process payment again.</p>
                </div>
                
                <div className="border border-slate-200 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-800 mb-2 text-sm">Taxes</h4>
                  <p className="text-slate-700 text-sm leading-relaxed">You are responsible for all applicable taxes, duties, and government assessments related to your use of the Services.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Deployment Options */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Deployment Options</h2>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-5">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">On-Premise</h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  You're responsible for providing infrastructure, installing software, ensuring security and updates, and data backup.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-5">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Private Cloud</h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  We provide dedicated instances on your chosen cloud provider with strict tenancy isolation. You handle cloud account and billing.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-5">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Hybrid</h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Combines on-premise and cloud components. You ensure secure connectivity between environments.
                </p>
              </div>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Limitation of Liability</h2>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-red-900 mb-2">NO WARRANTIES</h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, OR ACCURACY.
                </p>
              </div>
              
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-red-900 mb-2">LIMITATION OF LIABILITY</h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  GETSYNC.CHAT SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-red-900 mb-2">MAXIMUM LIABILITY</h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  OUR TOTAL LIABILITY TO YOU SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE 12 MONTHS PRECEDING THE CLAIM, OR $100 IF YOU HAVE NOT MADE ANY PAYMENTS.
                </p>
              </div>
            </div>
          </section>

          {/* Term and Termination */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Term and Termination</h2>
            
            <div className="space-y-4">
              <div className="bg-slate-50 rounded-lg p-5">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Termination by You</h3>
                <p className="text-slate-700 leading-relaxed text-sm">
                  You may terminate your account at any time by canceling your subscription through account settings, contacting our support team, or ceasing all use of the Services.
                </p>
              </div>
              
              <div className="bg-orange-50 rounded-lg p-5">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Termination by Us</h3>
                <p className="text-slate-700 leading-relaxed text-sm mb-2">We may suspend or terminate your account immediately if:</p>
                <ul className="space-y-1 text-slate-700 text-sm">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>You violate these Terms or our policies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>We detect fraudulent, abusive, or illegal activity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Your account has been inactive for over 12 months (free accounts)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>We are required to do so by law</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-5">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Data After Termination</h3>
                <p className="text-slate-700 leading-relaxed text-sm">
                  You have 30 days after termination to export your data. After this period, we may permanently delete your data unless we are required to retain it for legal or compliance reasons.
                </p>
              </div>
            </div>
          </section>

          {/* Dispute Resolution */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Dispute Resolution</h2>
            
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-5 py-2">
                <h3 className="font-semibold text-slate-900 mb-2">Governing Law</h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  These Terms are governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to conflict of law principles.
                </p>
              </div>
              
              <div className="border-l-4 border-green-600 pl-5 py-2">
                <h3 className="font-semibold text-slate-900 mb-2">Informal Resolution</h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Before filing a formal claim, you agree to attempt to resolve any dispute informally by contacting us at legal@getsync.chat. We will attempt to resolve the dispute within 60 days.
                </p>
              </div>
              
              <div className="border-l-4 border-purple-600 pl-5 py-2">
                <h3 className="font-semibold text-slate-900 mb-2">Arbitration</h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  For users in the United States, any disputes not resolved informally shall be resolved through binding arbitration in accordance with the American Arbitration Association rules.
                </p>
              </div>
            </div>
          </section>

          {/* General Provisions */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">General Provisions</h2>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-slate-50 rounded p-4">
                <h4 className="font-semibold text-slate-800 mb-2 text-sm">Entire Agreement</h4>
                <p className="text-slate-700 text-xs leading-relaxed">These Terms, together with our Privacy Policy, constitute the entire agreement between you and GetSync.chat.</p>
              </div>
              
              <div className="bg-slate-50 rounded p-4">
                <h4 className="font-semibold text-slate-800 mb-2 text-sm">Severability</h4>
                <p className="text-slate-700 text-xs leading-relaxed">If any provision is found invalid, it will be limited to the minimum extent necessary, and remaining provisions remain in effect.</p>
              </div>
              
              <div className="bg-slate-50 rounded p-4">
                <h4 className="font-semibold text-slate-800 mb-2 text-sm">Waiver</h4>
                <p className="text-slate-700 text-xs leading-relaxed">Our failure to enforce any right or provision will not constitute a waiver of that right or provision.</p>
              </div>
              
              <div className="bg-slate-50 rounded p-4">
                <h4 className="font-semibold text-slate-800 mb-2 text-sm">Assignment</h4>
                <p className="text-slate-700 text-xs leading-relaxed">You may not assign these Terms without our written consent. We may assign to any affiliate or successor.</p>
              </div>
            </div>
          </section>

          {/* Updates to Terms */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Updates to Terms</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
              <p className="text-slate-700 leading-relaxed mb-3">
                We may revise these Terms from time to time. We will notify you of material changes by posting the updated Terms on our website, sending an email notification, or displaying a prominent notice within the Services.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Your continued use of the Services after changes are posted constitutes acceptance of the updated Terms. If you do not agree to the updated Terms, you must stop using the Services.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="mb-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Information</h2>
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg p-6">
              <p className="mb-4">If you have questions, concerns, or feedback regarding these Terms, please contact us:</p>
              
              <div className="space-y-2 text-sm">
                <div className="flex items-center flex-wrap">
                  <span className="font-semibold mr-2">Email:</span>
                  <a href="mailto:legal@getsync.chat" className="underline hover:text-indigo-200">legal@getsync.chat</a>
                </div>
                <div className="flex items-center flex-wrap">
                  <span className="font-semibold mr-2">Support:</span>
                  <a href="mailto:support@getsync.chat" className="underline hover:text-indigo-200">support@getsync.chat</a>
                </div>
                {/* <div className="flex items-start">
                  <span className="font-semibold mr-2">Address:</span>
                  <span>[Your Company Address]</span>
                </div> */}
                <div className="flex items-center flex-wrap">
                  <span className="font-semibold mr-2">Website:</span>
                  <a href="https://getsync.chat" className="underline hover:text-indigo-200">https://getsync.chat</a>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}