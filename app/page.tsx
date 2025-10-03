import Image from "next/image"
import PartnerSlider from "@/components/partner-slider"
import CookieConsent from "@/components/cookie-consent"
import SyncChatForm from '@/components/SyncChatForm';
import IntegrationGrid from "@/components/tools";

export default function HomePage() {
  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-[#ecf1ee]">
        <div className="container flex items-center justify-between h-[72px] px-4 md:px-6">
          <a className="flex items-center gap-3 font-extrabold text-foreground" href="#top">
            <Image src="/logo.png" alt="Sync Chat Logo" width={300} height={100} className="h-15 w-auto" />
          </a>
          <nav className="hidden md:flex">
            <a href="#features" className="mx-2.5 text-gray-800 font-semibold hover:text-[#2aa160] transition-colors">
              Features
            </a>
            <a href="#security" className="mx-2.5 text-gray-800 font-semibold hover:text-[#2aa160] transition-colors">
              Security
            </a>
            <a href="#deploy" className="mx-2.5 text-gray-800 font-semibold hover:text-[#2aa160] transition-colors">
              Deployment
            </a>
            <a
              href="#integrations"
              className="mx-2.5 text-gray-800 font-semibold hover:text-[#2aa160] transition-colors"
            >
              Integrations
            </a>
            <a href="#faq" className="mx-2.5 text-gray-800 font-semibold hover:text-[#2aa160] transition-colors">
              FAQ
            </a>
          </nav>
          <a
            href="#demo"
            className="bg-[#2aa160] text-white border-none px-3 md:px-[18px] py-2 md:py-3 rounded-[10px] font-bold cursor-pointer shadow-[0_8px_20px_rgba(42,161,96,.18)] hover:bg-[#238a54] transition-colors text-sm md:text-base"
          >
            <span className="hidden md:inline">Request a Demo</span>
            <span className="md:hidden">Demo</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-[#f6fbf8] from-0% to-transparent to-50% pt-10 pb-10" id="top">
        <div className="container grid grid-cols-1 lg:grid-cols-[1.25fr_0.95fr] gap-6 lg:gap-10 py-12 md:py-20 lg:py-24 px-4 md:px-6">
          <div className="heroContainer">
            <span className="font-extrabold text-[#2aa160] text-sm md:text-base">
              Secure. Self‑Hosted. Enterprise‑Ready.
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl leading-[1.05] my-3 font-extrabold text-[#19211f] z-10 relative">
              Private Team Communication <br className="hidden md:block" />
              that Scales With You
            </h1>
            <p className="text-base md:text-lg text-[#45514d] max-w-[680px]">
              Sync Chat unifies DMs, channels, threads, voice/video, and file sharing with granular admin controls and
              enterprise‑grade security. Deploy on‑premise or private cloud and keep <strong>100% ownership</strong> of
              your data.
            </p>
            <div className="flex flex-wrap gap-2.5 my-6">
              <span className="text-xs px-3 py-2 rounded-full bg-[#e9f7ef] text-[#0f5132] border border-[#d1efe0]">
                E2E encryption
              </span>
              <span className="text-xs px-3 py-2 rounded-full bg-[#e9f7ef] text-[#0f5132] border border-[#d1efe0]">
                SSO / MFA
              </span>
              <span className="text-xs px-3 py-2 rounded-full bg-[#e9f7ef] text-[#0f5132] border border-[#d1efe0]">
                APIs & Webhooks
              </span>
              <span className="text-xs px-3 py-2 rounded-full bg-[#e9f7ef] text-[#0f5132] border border-[#d1efe0]">
                Audit Logs
              </span>
              <span className="text-xs px-3 py-2 rounded-full bg-[#e9f7ef] text-[#0f5132] border border-[#d1efe0]">
                On‑prem / Private Cloud
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <a
                className="bg-[#2aa160] text-white border-none px-[18px] py-3 rounded-[10px] font-bold cursor-pointer shadow-[0_8px_20px_rgba(42,161,96,.18)] hover:bg-[#238a54] transition-colors text-center"
                href="#demo"
              >
                Get a Personalized Demo
              </a>
              <a
                className="bg-[#e9f7ef] text-[#2aa160] border-none px-[18px] py-3 rounded-[10px] font-bold cursor-pointer hover:bg-[#d1efe0] transition-colors text-center"
                href="#features"
              >
                Explore Features
              </a>
            </div>
          </div>
          <div className="heroImg">
  <video 
    className="img-fluid w-full h-auto"
    autoPlay 
    loop 
    muted 
    playsInline
  >
    <source src="Hero Image.mp4" type="video/mp4" />
  </video>
</div>
        </div>
      </section>

      {/* Social proof / client logos */}
      <section className="py-7 border-t border-b border-[#ecf1ee] bg-white" aria-label="Client Logos">
        <div className="container-fluid px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl m-0 font-bold text-center mb-5">Trusted by security‑first teams</h2>
          <PartnerSlider />
        </div>
      </section>


      {/* RTB / Value props */}
      <section id="rtb" className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl m-0 mb-3 font-bold">Reasons to Choose Sync Chat</h2>
          <p className="text-[#56635f] max-w-[760px]">
            Clarity for decision‑makers: the concrete advantages your IT, compliance, and business teams care about.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-7">
            <div className="bg-white border border-[#ecf1ee] rounded-2xl p-6 shadow-[0_10px_24px_rgba(0,0,0,.05)]">
              <h3 className="m-0 mb-1.5 text-lg font-semibold">Complete Data Ownership</h3>
              <p>
                Self‑host on your servers or private cloud. Choose data residency, set retention policies, and export on
                demand.
              </p>
              <span className="inline-block bg-[#e9f7ef] text-[#0f5132] border border-[#d1efe0] rounded-full px-2.5 py-1.5 text-xs mr-2 mt-1.5">
                On‑prem
              </span>
              <span className="inline-block bg-[#e9f7ef] text-[#0f5132] border border-[#d1efe0] rounded-full px-2.5 py-1.5 text-xs mr-2 mt-1.5">
                Private Cloud
              </span>
            </div>
            <div className="bg-white border border-[#ecf1ee] rounded-2xl p-6 shadow-[0_10px_24px_rgba(0,0,0,.05)]">
              <h3 className="m-0 mb-1.5 text-lg font-semibold">Enterprise‑Grade Security</h3>
              <p>
                E2E encryption for private messages, TLS in transit, SSO/MFA, RBAC, IP whitelisting, device controls,
                and audit logs.
              </p>
              <span className="inline-block bg-[#e9f7ef] text-[#0f5132] border border-[#d1efe0] rounded-full px-2.5 py-1.5 text-xs mr-2 mt-1.5">
                MFA
              </span>
              <span className="inline-block bg-[#e9f7ef] text-[#0f5132] border border-[#d1efe0] rounded-full px-2.5 py-1.5 text-xs mr-2 mt-1.5">
                SSO
              </span>
              <span className="inline-block bg-[#e9f7ef] text-[#0f5132] border border-[#d1efe0] rounded-full px-2.5 py-1.5 text-xs mr-2 mt-1.5">
                RBAC
              </span>
            </div>
            <div className="bg-white border border-[#ecf1ee] rounded-2xl p-6 shadow-[0_10px_24px_rgba(0,0,0,.05)]">
              <h3 className="m-0 mb-1.5 text-lg font-semibold">Built to Scale</h3>
              <p>
                WebSockets, load balancing, horizontal scaling with Kubernetes and NATS. Optimized MongoDB for real‑time
                chat.
              </p>
              <span className="inline-block bg-[#e9f7ef] text-[#0f5132] border border-[#d1efe0] rounded-full px-2.5 py-1.5 text-xs mr-2 mt-1.5">
                HA/DR
              </span>
              <span className="inline-block bg-[#e9f7ef] text-[#0f5132] border border-[#d1efe0] rounded-full px-2.5 py-1.5 text-xs mr-2 mt-1.5">
                Autoscale
              </span>
            </div>
            <div className="bg-white border border-[#ecf1ee] rounded-2xl p-6 shadow-[0_10px_24px_rgba(0,0,0,.05)]">
              <h3 className="m-0 mb-1.5 text-lg font-semibold">Deep Integrations</h3>
              <p>
                APIs & webhooks to connect CRMs, ITSM, project tools, and custom workflows. External guest access with
                controls.
              </p>
              <span className="inline-block bg-[#e9f7ef] text-[#0f5132] border border-[#d1efe0] rounded-full px-2.5 py-1.5 text-xs mr-2 mt-1.5">
                APIs
              </span>
              <span className="inline-block bg-[#e9f7ef] text-[#0f5132] border border-[#d1efe0] rounded-full px-2.5 py-1.5 text-xs mr-2 mt-1.5">
                Webhooks
              </span>
            </div>
            <div className="bg-white border border-[#ecf1ee] rounded-2xl p-6 shadow-[0_10px_24px_rgba(0,0,0,.05)]">
              <h3 className="m-0 mb-1.5 text-lg font-semibold">Admin Control</h3>
              <p>Comprehensive dashboard for users, roles, channels, policies, backups, and compliance exports.</p>
              <span className="inline-block bg-[#e9f7ef] text-[#0f5132] border border-[#d1efe0] rounded-full px-2.5 py-1.5 text-xs mr-2 mt-1.5">
                Audit Ready
              </span>
            </div>
            <div className="bg-white border border-[#ecf1ee] rounded-2xl p-6 shadow-[0_10px_24px_rgba(0,0,0,.05)]">
              <h3 className="m-0 mb-1.5 text-lg font-semibold">User‑Loved Experience</h3>
              <p>
                DMs, public/private channels, threads, mentions, rich editor, reactions, voice/video, and powerful
                search.
              </p>
              <div className="space-y-2">
                <div className="inline-block bg-[#e9f7ef] text-[#0f5132] border border-[#d1efe0] rounded-full px-2.5 py-1.5 text-xs mr-2">
                  Markdown Editor
                </div>
                <div className="inline-block bg-[#e9f7ef] text-[#0f5132] border border-[#d1efe0] rounded-full px-2.5 py-1.5 text-xs mr-2">
                  Reactions & Emojis
                </div>
                <div className="inline-block bg-[#e9f7ef] text-[#0f5132] border border-[#d1efe0] rounded-full px-2.5 py-1.5 text-xs mr-2">
                  Pinned Messages
                </div>
                <div className="inline-block bg-[#e9f7ef] text-[#0f5132] border border-[#d1efe0] rounded-full px-2.5 py-1.5 text-xs mr-2">
                  Presence & Status
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features deep dive */}
      <section id="features" className="py-12 md:py-20 bg-[#f6fbf8]">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl m-0 mb-3 font-bold">Messaging that Fits Every Workflow</h2>
              <p className="text-[#56635f] max-w-[760px]">
                Organize work with channels and threads, keep private conversations secure with DMs, and collaborate
                faster using file previews and reactions.
              </p>
              <ul className="list-disc list-inside space-y-2.5 text-[#2aa160] marker:text-[#2aa160]">
                <li className="text-foreground">
                  Direct messages, public channels, private groups, and guest accounts
                </li>
                <li className="text-foreground">Threads, mentions, notifications, and global search</li>
                <li className="text-foreground">Drag‑drop file sharing with previews and version clarity</li>
                <li className="text-foreground">One‑click voice & video calls for quick decisions</li>
              </ul>
            </div>
            <div className="overflow-hidden rounded-2xl rounded-2xl">

            <video 
    className="img-fluid w-full h-auto"
    autoPlay 
    loop 
    muted 
    playsInline
  >
    <source src="Messages Threads Emojis.mp4" type="video/mp4" />
  </video>

              {/* <h3 className="m-0 mb-1.5 text-lg font-semibold">What users get</h3>
              <p>Simple, fast, and reliable collaboration that reduces context switching and keeps teams focused.</p>
              <div className="space-y-2">
                <div className="inline-block bg-[#e9f7ef] text-[#0f5132] border border-[#d1efe0] rounded-full px-2.5 py-1.5 text-xs mr-2">
                  Markdown Editor
                </div>
                <div className="inline-block bg-[#e9f7ef] text-[#0f5132] border border-[#d1efe0] rounded-full px-2.5 py-1.5 text-xs mr-2">
                  Reactions & Emojis
                </div>
                <div className="inline-block bg-[#e9f7ef] text-[#0f5132] border border-[#d1efe0] rounded-full px-2.5 py-1.5 text-xs mr-2">
                  Pinned Messages
                </div>
                <div className="inline-block bg-[#e9f7ef] text-[#0f5132] border border-[#d1efe0] rounded-full px-2.5 py-1.5 text-xs mr-2">
                  Presence & Status
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Deployment options */}
      <section id="deploy" className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl m-0 mb-3 font-bold">Deploy Your Way</h2>
          <p className="text-[#56635f] max-w-[760px]">
            On‑premise, private cloud, or hybrid. Docker/Kubernetes supported for quick rollouts and elastic scaling.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-7">
            <div className="bg-white border border-[#ecf1ee] rounded-2xl p-6 shadow-[0_10px_24px_rgba(0,0,0,.05)]">
              <h3 className="m-0 mb-1.5 text-lg font-semibold">On‑Premise</h3>
              <p>Full control within your network, ideal for regulated industries and data‑sovereignty needs.</p>
            </div>
            <div className="bg-white border border-[#ecf1ee] rounded-2xl p-6 shadow-[0_10px_24px_rgba(0,0,0,.05)]">
              <h3 className="m-0 mb-1.5 text-lg font-semibold">Private Cloud</h3>
              <p>Dedicated instances on AWS, Azure, or GCP with strict tenancy and cost efficiency.</p>
            </div>
            <div className="bg-white border border-[#ecf1ee] rounded-2xl p-6 shadow-[0_10px_24px_rgba(0,0,0,.05)]">
              <h3 className="m-0 mb-1.5 text-lg font-semibold">Hybrid</h3>
              <p>Keep sensitive data on‑prem while collaborating with partners through secure cloud edges.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section id="security" className="py-12 md:py-20 bg-[#f6fbf8]">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl m-0 mb-3 font-bold">Security, Compliance, and Governance</h2>
              <p className="text-[#56635f] max-w-[760px]">
                Protect conversations end‑to‑end while meeting compliance requirements across teams and geographies.
              </p>
              <ul className="list-disc list-inside space-y-2.5 text-[#2aa160] marker:text-[#2aa160]">
                <li className="text-foreground">End‑to‑end encryption for private messages + TLS in transit</li>
                <li className="text-foreground">SSO/OAuth, LDAP/AD, MFA/2FA, RBAC, and granular permissions</li>
                <li className="text-foreground">Audit logs, retention policies, legal hold & export options</li>
                <li className="text-foreground">IP whitelisting, device management, account lockout policies</li>
              </ul>
            </div>
            <div className="overflow-hidden rounded-2xl ">


              <video 
    className="img-fluid w-full h-auto"
    autoPlay 
    loop 
    muted 
    playsInline
  >
    <source src="Secure Messaging.mp4" type="video/mp4" />
  </video>


            {/* <img className="img-fluid" src="1000x800.png" alt="hero img" /> */}


              {/* <h3 className="m-0 mb-1.5 text-lg font-semibold">Ready for your audits</h3>
              <p>
                Built with OWASP mitigations, SAST, and regular pen‑tests. Optional HA/DR, encrypted backups, and
                monitoring.
              </p>
              <div className="space-y-2">
                <div className="inline-block bg-[#e9f7ef] text-[#0f5132] border border-[#d1efe0] rounded-full px-2.5 py-1.5 text-xs mr-2">
                  OWASP
                </div>
                <div className="inline-block bg-[#e9f7ef] text-[#0f5132] border border-[#d1efe0] rounded-full px-2.5 py-1.5 text-xs mr-2">
                  SAST
                </div>
                <div className="inline-block bg-[#e9f7ef] text-[#0f5132] border border-[#d1efe0] rounded-full px-2.5 py-1.5 text-xs mr-2">
                  Pen‑Testing
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>


      

      {/* Integrations */}
      <section id="integrations" className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl m-0 mb-3 font-bold">Connect Your Tools</h2>
          <p className="text-[#56635f] max-w-[760px]">
            APIs & webhooks make Sync Chat the hub for your workflows — CRM, project management, ticketing, and more.
          </p>

          <IntegrationGrid />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-7">

            

            {/* <div className="bg-white border border-[#ecf1ee] rounded-2xl p-6 shadow-[0_10px_24px_rgba(0,0,0,.05)]">
              <h3 className="m-0 mb-1.5 text-lg font-semibold">CRMs</h3>
              <p>Push leads/updates, get alerts in channels, and track conversations.</p>
            </div>
            <div className="bg-white border border-[#ecf1ee] rounded-2xl p-6 shadow-[0_10px_24px_rgba(0,0,0,.05)]">
              <h3 className="m-0 mb-1.5 text-lg font-semibold">Project Tools</h3>
              <p>Sync tasks, commits, and releases. Announce deploys in real‑time.</p>
            </div>
            <div className="bg-white border border-[#ecf1ee] rounded-2xl p-6 shadow-[0_10px_24px_rgba(0,0,0,.05)]">
              <h3 className="m-0 mb-1.5 text-lg font-semibold">IT & Support</h3>
              <p>Create/resolve tickets, route incidents to on‑call channels automatically.</p>
            </div> */}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section id="compare" className="py-12 md:py-20 bg-[#f6fbf8]">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl m-0 mb-3 font-bold">Why not WhatsApp/Generic SaaS?</h2>
          <p className="text-[#56635f] max-w-[760px]">
            Consumer apps and shared‑tenant SaaS can't meet enterprise control or compliance needs. Sync Chat does.
          </p>
          <div className="overflow-x-auto mt-6">
            <table className="w-full border-separate border-spacing-y-2.5 min-w-[600px]">
              <thead>
                <tr>
                  <th className="p-3.5 text-left bg-[#f2faf5] border border-[#ecf1ee] rounded-l-lg">Capability</th>
                  <th className="p-3.5 text-left bg-[#f2faf5] border border-[#ecf1ee]">WhatsApp/Generic</th>
                  <th className="p-3.5 text-left bg-[#f2faf5] border border-[#ecf1ee] rounded-r-lg">Sync Chat</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3.5 bg-white border border-[#ecf1ee] rounded-l-lg">Data Ownership</td>
                  <td className="p-3.5 bg-white border border-[#ecf1ee]">Limited / shared</td>
                  <td className="p-3.5 bg-white border border-[#ecf1ee] rounded-r-lg">
                    <strong>100% owned, exportable</strong>
                  </td>
                </tr>
                <tr>
                  <td className="p-3.5 bg-white border border-[#ecf1ee] rounded-l-lg">Deployment</td>
                  <td className="p-3.5 bg-white border border-[#ecf1ee]">Vendor‑hosted only</td>
                  <td className="p-3.5 bg-white border border-[#ecf1ee] rounded-r-lg">
                    <strong>On‑prem / Private cloud / Hybrid</strong>
                  </td>
                </tr>
                <tr>
                  <td className="p-3.5 bg-white border border-[#ecf1ee] rounded-l-lg">Compliance & Audit</td>
                  <td className="p-3.5 bg-white border border-[#ecf1ee]">Basic</td>
                  <td className="p-3.5 bg-white border border-[#ecf1ee] rounded-r-lg">
                    <strong>Audit logs, retention, legal hold</strong>
                  </td>
                </tr>
                <tr>
                  <td className="p-3.5 bg-white border border-[#ecf1ee] rounded-l-lg">Access Control</td>
                  <td className="p-3.5 bg-white border border-[#ecf1ee]">Coarse</td>
                  <td className="p-3.5 bg-white border border-[#ecf1ee] rounded-r-lg">
                    <strong>RBAC + granular permissions</strong>
                  </td>
                </tr>
                <tr>
                  <td className="p-3.5 bg-white border border-[#ecf1ee] rounded-l-lg">Guest/Partner Access</td>
                  <td className="p-3.5 bg-white border border-[#ecf1ee]">Workarounds</td>
                  <td className="p-3.5 bg-white border border-[#ecf1ee] rounded-r-lg">
                    <strong>Secure external channels</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl m-0 mb-3 font-bold">What Teams Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-7">
            <div className="bg-white border border-[#ecf1ee] rounded-2xl p-6 shadow-[0_10px_24px_rgba(0,0,0,.05)]">
              <p>Sync Chat gave us on‑prem control without sacrificing UX. Rollout in under two weeks.</p>
              <p className="text-xs text-[#667a73] mt-4">Head of IT, Manufacturing</p>
            </div>
            <div className="bg-white border border-[#ecf1ee] rounded-2xl p-6 shadow-[0_10px_24px_rgba(0,0,0,.05)]">
              <p>Audit logs + retention policies made our compliance team happy from day one.</p>
              <p className="text-xs text-[#667a73] mt-4">CISO, Financial Services</p>
            </div>
            <div className="bg-white border border-[#ecf1ee] rounded-2xl p-6 shadow-[0_10px_24px_rgba(0,0,0,.05)]">
              <p>APIs let us tie support tickets and deploy alerts directly into project channels.</p>
              <p className="text-xs text-[#667a73] mt-4">Engineering Manager, SaaS</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA block */}
      <section id="demo" className="py-12 md:py-20 bg-gradient-to-b from-[#f6fbf8] to-white">
        <div className="container px-4 md:px-6 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl m-0 mb-3 font-bold">Ready to see Sync Chat?</h2>
            <p className="text-[#56635f] max-w-[760px]">
              Book a walkthrough tailored to your security and workflow needs. We'll map your use cases and share a
              deployment plan.
            </p>
            <ul className="list-disc list-inside space-y-2.5 text-[#2aa160] marker:text-[#2aa160]">
              <li className="text-foreground">Personalized demo for your stakeholders</li>
              <li className="text-foreground">Architecture & deployment options</li>
              <li className="text-foreground">Security & compliance deep‑dive</li>
            </ul>
          </div>
          <div className="bg-white border border-[#ecf1ee] rounded-2xl p-4 md:p-6 shadow-[0_10px_24px_rgba(0,0,0,.05)]">
            <SyncChatForm />
            <div className="text-xs text-[#7d8c86] mt-2">
              By submitting, you agree to be contacted about Sync Chat. Your information is kept confidential.
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-12 md:py-20 bg-[#f6fbf8]">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl m-0 mb-3 font-bold">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="bg-white border border-[#ecf1ee] rounded-xl p-4">
              <summary className="cursor-pointer font-bold">Can we self‑host Sync Chat?</summary>
              <p className="mt-2">
                Yes — on‑premise, private cloud, or hybrid. Docker/Kubernetes supported for rapid deployment and
                scaling.
              </p>
            </details>
            <details className="bg-white border border-[#ecf1ee] rounded-xl p-4">
              <summary className="cursor-pointer font-bold">Do you support SSO and MFA?</summary>
              <p className="mt-2">Yes. SSO/OAuth, LDAP/AD, and MFA/2FA are supported along with granular RBAC.</p>
            </details>
            <details className="bg-white border border-[#ecf1ee] rounded-xl p-4">
              <summary className="cursor-pointer font-bold">How do you handle compliance?</summary>
              <p className="mt-2">
                Audit logs, data residency options, retention policies, exports, and encrypted backups help meet
                compliance needs.
              </p>
            </details>
            <details className="bg-white border border-[#ecf1ee] rounded-xl p-4">
              <summary className="cursor-pointer font-bold">Can we invite external partners?</summary>
              <p className="mt-2">
                Yes. Use guest accounts with channel‑level controls, expirations, and auditability.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0d1513] text-[#b8c6c0] py-10">
        <div className="container px-4 md:px-6 grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-5">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="Sync Chat Logo"
                width={140}
                height={32}
                className="h-15 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-xs text-[#7d8c86]">© 2025 Sync Chat by AbacusDesk. All rights reserved.</p>
          </div>
          <div>
            <strong className="text-white">Product</strong>
            <div className="text-xs mt-2 space-y-1">
              <div>
                <a href="#features" className="hover:text-[#2aa160] transition-colors">
                  Features
                </a>
              </div>
              <div>
                <a href="#integrations" className="hover:text-[#2aa160] transition-colors">
                  Integrations
                </a>
              </div>
              <div>
                <a href="#deploy" className="hover:text-[#2aa160] transition-colors">
                  Deployment
                </a>
              </div>
            </div>
          </div>
          <div>
            <strong className="text-white">Company</strong>
            <div className="text-xs mt-2 space-y-1">
              <div>
                <a href="#demo" className="hover:text-[#2aa160] transition-colors">
                  Contact Sales
                </a>
              </div>
              <div>
                <a href="#" className="hover:text-[#2aa160] transition-colors">
                  Support
                </a>
              </div>
            </div>
          </div>
          <div>
            <strong className="text-white">Legal</strong>
            <div className="text-xs mt-2 space-y-1">
              <div>
                <a href="/privacy-policy" className="hover:text-[#2aa160] transition-colors">
                  Privacy Policy
                </a>
              </div>
              <div>
                <a href="/terms-conditions" className="hover:text-[#2aa160] transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <CookieConsent />
    </>
  )
}
