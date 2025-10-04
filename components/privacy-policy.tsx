import { MapPin } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">Privacy Policy</h1>
          <p className="mt-2 text-sm text-slate-600">Last Updated: September 30, 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 lg:p-12">
          
          {/* Introduction */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Introduction</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Welcome to GetSync.chat ("we," "us," "our," or "GetSync.chat"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform and services.
            </p>
            <p className="text-slate-700 leading-relaxed">
              By using GetSync.chat, you agree to the collection and use of information in accordance with this policy. If you do not agree with the terms of this Privacy Policy, please do not access or use our services.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Information We Collect</h2>
            
            <div className="space-y-6">
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Information You Provide to Us</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Account Information</h4>
                    <p className="text-slate-700 leading-relaxed">When you create an account, we collect your name, email address, username, password, and organization details.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Profile Information</h4>
                    <p className="text-slate-700 leading-relaxed">You may choose to provide additional information such as profile pictures, job titles, department information, and other professional details.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Communications Data</h4>
                    <p className="text-slate-700 leading-relaxed">We collect the content of messages, files, and other communications you share through our platform, including direct messages, channel posts, threads, and file attachments.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Payment Information</h4>
                    <p className="text-slate-700 leading-relaxed">If you subscribe to paid services, our payment processors collect billing information including credit card details, billing address, and transaction history. We do not directly store complete payment card information.</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Automatically Collected Information</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Usage Data</h4>
                    <p className="text-slate-700 leading-relaxed">We collect information about how you interact with our services, including features used, actions taken, timestamps, and frequency of use.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Device Information</h4>
                    <p className="text-slate-700 leading-relaxed">We collect information about the devices you use to access GetSync.chat, including hardware model, operating system, browser type, IP address, unique device identifiers, and mobile network information.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Log Data</h4>
                    <p className="text-slate-700 leading-relaxed">Our servers automatically record information including IP addresses, access times, browser types, pages viewed, and the URLs you visited before navigating to our services.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Cookies and Similar Technologies</h4>
                    <p className="text-slate-700 leading-relaxed">We use cookies, web beacons, and similar tracking technologies to collect information about your browsing activities and preferences. You can control cookie settings through your browser preferences.</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Information from Third Parties</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Single Sign-On (SSO)</h4>
                    <p className="text-slate-700 leading-relaxed">If you authenticate through SSO providers (Google, Microsoft, etc.), we receive basic profile information from those services.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Integrations</h4>
                    <p className="text-slate-700 leading-relaxed">When you connect third-party applications or services to GetSync.chat, we may receive information from those platforms in accordance with their privacy policies and your authorization.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">How We Use Your Information</h2>
            <p className="text-slate-700 leading-relaxed mb-4">We use the information we collect for the following purposes:</p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="border border-slate-200 rounded-lg p-4">
                <h4 className="font-semibold text-slate-800 mb-2">Service Delivery</h4>
                <p className="text-slate-700 text-sm leading-relaxed">To provide, maintain, and improve our communication platform, including message delivery, file storage, and real-time collaboration features.</p>
              </div>
              
              <div className="border border-slate-200 rounded-lg p-4">
                <h4 className="font-semibold text-slate-800 mb-2">Account Management</h4>
                <p className="text-slate-700 text-sm leading-relaxed">To create and manage your account, authenticate users, and provide customer support.</p>
              </div>
              
              <div className="border border-slate-200 rounded-lg p-4">
                <h4 className="font-semibold text-slate-800 mb-2">Communication</h4>
                <p className="text-slate-700 text-sm leading-relaxed">To send you service-related notifications, updates, security alerts, and administrative messages.</p>
              </div>
              
              <div className="border border-slate-200 rounded-lg p-4">
                <h4 className="font-semibold text-slate-800 mb-2">Security and Fraud Prevention</h4>
                <p className="text-slate-700 text-sm leading-relaxed">To detect, prevent, and address technical issues, unauthorized access, fraudulent activity, and potential security threats.</p>
              </div>
              
              <div className="border border-slate-200 rounded-lg p-4">
                <h4 className="font-semibold text-slate-800 mb-2">Analytics and Improvement</h4>
                <p className="text-slate-700 text-sm leading-relaxed">To analyze usage patterns, understand user preferences, and improve our services, features, and user experience.</p>
              </div>
              
              <div className="border border-slate-200 rounded-lg p-4">
                <h4 className="font-semibold text-slate-800 mb-2">Compliance</h4>
                <p className="text-slate-700 text-sm leading-relaxed">To comply with legal obligations, enforce our terms of service, and protect the rights, property, and safety of GetSync.chat, our users, and the public.</p>
              </div>
            </div>
          </section>

          {/* Data Storage and Security */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Data Storage and Security</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Data Encryption</h3>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">End-to-End Encryption (E2EE)</h4>
                      <p className="text-slate-700 text-sm leading-relaxed">Private direct messages are protected with end-to-end encryption, ensuring that only you and your intended recipients can read the content.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">Encryption in Transit</h4>
                      <p className="text-slate-700 text-sm leading-relaxed">All data transmitted between your devices and our servers is encrypted using industry-standard TLS protocols.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">Encryption at Rest</h4>
                      <p className="text-slate-700 text-sm leading-relaxed">Data stored on our servers is encrypted using AES-256 encryption or equivalent security standards.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Security Measures</h3>
                <p className="text-slate-700 leading-relaxed mb-3">We implement comprehensive security measures including:</p>
                
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="flex items-center text-slate-700 text-sm">
                    <span className="text-amber-600 mr-2">✓</span> Multi-factor authentication (MFA)
                  </div>
                  <div className="flex items-center text-slate-700 text-sm">
                    <span className="text-amber-600 mr-2">✓</span> Role-based access control (RBAC)
                  </div>
                  <div className="flex items-center text-slate-700 text-sm">
                    <span className="text-amber-600 mr-2">✓</span> IP whitelisting and device management
                  </div>
                  <div className="flex items-center text-slate-700 text-sm">
                    <span className="text-amber-600 mr-2">✓</span> Regular security audits
                  </div>
                  <div className="flex items-center text-slate-700 text-sm">
                    <span className="text-amber-600 mr-2">✓</span> Audit logging and monitoring
                  </div>
                  <div className="flex items-center text-slate-700 text-sm">
                    <span className="text-amber-600 mr-2">✓</span> Intrusion detection systems
                  </div>
                </div>
                
                <p className="text-slate-600 text-sm mt-4 italic">Despite our security measures, no system is completely secure. We cannot guarantee absolute security of your information.</p>
              </div>
            </div>
          </section>

          {/* Data Sharing */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Sharing and Disclosure</h2>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-6">
              <h3 className="text-xl font-bold text-red-900 mb-2">We Do Not Sell Your Data</h3>
              <p className="text-slate-700 leading-relaxed">GetSync.chat does not sell, rent, or trade your personal information to third parties for their marketing purposes.</p>
            </div>
            
            <h3 className="text-lg font-semibold text-slate-900 mb-4">When We Share Information</h3>
            
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-slate-800 mb-2">With Your Consent</h4>
                <p className="text-slate-700 leading-relaxed">We share information when you explicitly authorize us to do so.</p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-slate-800 mb-2">Service Providers</h4>
                <p className="text-slate-700 leading-relaxed">We work with trusted third-party service providers who assist us in operating our platform. These providers are contractually obligated to protect your information.</p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-slate-800 mb-2">Legal Requirements</h4>
                <p className="text-slate-700 leading-relaxed">We may disclose your information when required by law, legal process, or government request.</p>
              </div>
              
              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold text-slate-800 mb-2">Organization Administrators</h4>
                <p className="text-slate-700 leading-relaxed">If you use GetSync.chat through an organization account, your organization's administrators may have access to your account information and communications.</p>
              </div>
            </div>
          </section>

          {/* Your Rights */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Your Rights and Choices</h2>
            
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Access and Control</h3>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white bg-opacity-70 rounded p-4">
                  <h4 className="font-semibold text-slate-800 mb-2">Access Your Data</h4>
                  <p className="text-slate-700 text-sm">You can access, review, and download your personal information through your account settings.</p>
                </div>
                
                <div className="bg-white bg-opacity-70 rounded p-4">
                  <h4 className="font-semibold text-slate-800 mb-2">Update Information</h4>
                  <p className="text-slate-700 text-sm">You can update your account and profile information at any time.</p>
                </div>
                
                <div className="bg-white bg-opacity-70 rounded p-4">
                  <h4 className="font-semibold text-slate-800 mb-2">Delete Your Account</h4>
                  <p className="text-slate-700 text-sm">You can delete your account, which will permanently remove your personal data.</p>
                </div>
                
                <div className="bg-white bg-opacity-70 rounded p-4">
                  <h4 className="font-semibold text-slate-800 mb-2">Export Your Data</h4>
                  <p className="text-slate-700 text-sm">You can export your messages, files, and other content from the platform.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Regional Rights</h3>
                <div className="space-y-3">
                  <div className="bg-slate-50 rounded p-4">
                    <h4 className="font-semibold text-slate-800 mb-1">European Economic Area (EEA)</h4>
                    <p className="text-slate-700 text-sm">If you are located in the EEA, you have additional rights under GDPR, including the right to access, rectification, erasure, restriction of processing, data portability, and objection to processing.</p>
                  </div>
                  
                  <div className="bg-slate-50 rounded p-4">
                    <h4 className="font-semibold text-slate-800 mb-1">California Residents</h4>
                    <p className="text-slate-700 text-sm">California residents have specific rights under CCPA, including the right to know what personal information is collected, the right to delete personal information, and the right to opt out of the sale of personal information.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Children's Privacy */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Children's Privacy</h2>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <p className="text-slate-700 leading-relaxed">
                GetSync.chat is not intended for children under the age of 13 (or the minimum age required in your country). We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately, and we will take steps to delete such information.
              </p>
            </div>
          </section>

          {/* Changes to Policy */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of material changes by:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start text-slate-700">
                <span className="text-blue-600 mr-2 mt-1">•</span>
                <span>Posting the updated policy on our website</span>
              </li>
              <li className="flex items-start text-slate-700">
                <span className="text-blue-600 mr-2 mt-1">•</span>
                <span>Sending you an email notification</span>
              </li>
              <li className="flex items-start text-slate-700">
                <span className="text-blue-600 mr-2 mt-1">•</span>
                <span>Displaying a prominent notice within the service</span>
              </li>
            </ul>
            <p className="text-slate-700 leading-relaxed">
              Your continued use of GetSync.chat after changes are posted constitutes your acceptance of the updated policy.
            </p>
          </section>

          {/* Contact */}
          <section className="mb-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Us</h2>
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg p-6">
              <p className="mb-4">If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>
              
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="font-semibold mr-2">Email:</span>
                  <a href="mailto:support@getsync.chat" className="underline hover:text-blue-200">support@getsync.chat</a>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold mr-2">Support Portal:</span>
                  <a href="mailto:support@getsync.chat" className="underline hover:text-blue-200">support@getsync.chat</a>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold mr-2">Address:</span>
                  {/* Addresses */}
                  <div className="space-y-3 text-xs">
                    <div className="flex gap-2">
                      <MapPin className="w-3 h-3 text-white-500 mt-0.5 flex-shrink-0" />
                      <div className="text-white-400 leading-relaxed">
                        <div className="font-semibold text-white-300 mb-0.5">India</div>
                        G1-G3, SSR Corporate Park, 13/6, NH-19, Faridabad, Haryana 121003
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <MapPin className="w-3 h-3 text-white-500 mt-0.5 flex-shrink-0" />
                      <div className="text-white-400 leading-relaxed">
                        <div className="font-semibold text-white-300 mb-0.5">Canada</div>
                        1122 Lorimar Dr, Mississauga, ON L5S 1R8
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-blue-400 text-sm">
                <div>For GDPR-related inquiries: <a href="mailto:support@getsync.chat" className="underline hover:text-blue-200">support@getsync.chat</a></div>
                <div>For CCPA-related inquiries: <a href="mailto:support@getsync.chat" className="underline hover:text-blue-200">support@getsync.chat</a></div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}