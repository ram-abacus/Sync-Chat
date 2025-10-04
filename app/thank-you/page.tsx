import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"

export default function ThankYouPage() {
  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-[#ecf1ee]">
        <div className="container flex items-center justify-between h-[72px] px-4 md:px-6">
          <Link className="flex items-center gap-3 font-extrabold text-foreground" href="/">
            <Image src="/logo.png" alt="Sync Chat Logo" width={300} height={100} className="h-15 w-auto" />
          </Link>
          <nav className="hidden md:flex">
            <Link
              href="/#features"
              className="mx-2.5 text-gray-800 font-semibold hover:text-[#2aa160] transition-colors"
            >
              Features
            </Link>
            <Link
              href="/#security"
              className="mx-2.5 text-gray-800 font-semibold hover:text-[#2aa160] transition-colors"
            >
              Security
            </Link>
            <Link href="/#deploy" className="mx-2.5 text-gray-800 font-semibold hover:text-[#2aa160] transition-colors">
              Deployment
            </Link>
            <Link
              href="/#integrations"
              className="mx-2.5 text-gray-800 font-semibold hover:text-[#2aa160] transition-colors"
            >
              Integrations
            </Link>
            <Link href="/#faq" className="mx-2.5 text-gray-800 font-semibold hover:text-[#2aa160] transition-colors">
              FAQ
            </Link>
          </nav>
          <Link
            href="/#demo"
            className="bg-[#2aa160] text-white border-none px-3 md:px-[18px] py-2 md:py-3 rounded-[10px] font-bold cursor-pointer shadow-[0_8px_20px_rgba(42,161,96,.18)] hover:bg-[#238a54] transition-colors text-sm md:text-base"
          >
            <span className="hidden md:inline">Request a Demo</span>
            <span className="md:hidden">Demo</span>
          </Link>
        </div>
      </header>

      {/* Thank You Hero */}
      <section className="bg-gradient-to-b from-white to-[#f6fbf8] min-h-[80vh] flex items-center">
        <div className="container px-4 md:px-6 py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            {/* Success Icon */}
            <div className="w-20 h-20 mx-auto mb-6 bg-[#e9f7ef] rounded-full flex items-center justify-center">
              <svg
                className="w-10 h-10 text-[#2aa160]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl leading-[1.05] mb-4 font-extrabold text-[#19211f]">
              Thank You for Your Interest!
            </h1>

            <p className="text-lg md:text-xl text-[#45514d] mb-6 max-w-2xl mx-auto">
              We've received your demo request and our product expert will reach out within 24 hours to schedule your
              personalized Sync Chat walkthrough.
            </p>

            {/* What's Next */}
            <div className="bg-white border border-[#ecf1ee] rounded-2xl p-6 md:p-8 shadow-[0_10px_24px_rgba(0,0,0,.05)] mb-8 text-left">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">What happens next?</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#e9f7ef] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#2aa160] font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Demo Scheduling</h3>
                    <p className="text-[#56635f] text-sm">
                      Our team will contact you within 24 hours to schedule a convenient time for your personalized
                      demo.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#e9f7ef] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#2aa160] font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Tailored Walkthrough</h3>
                    <p className="text-[#56635f] text-sm">
                      We'll showcase features relevant to your use case and discuss deployment options for your
                      organization.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#e9f7ef] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#2aa160] font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Implementation Plan</h3>
                    <p className="text-[#56635f] text-sm">
                      Get a customized deployment roadmap with security, compliance, and integration recommendations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/"
                className="bg-[#2aa160] text-white border-none px-6 py-3 rounded-[10px] font-bold cursor-pointer shadow-[0_8px_20px_rgba(42,161,96,.18)] hover:bg-[#238a54] transition-colors text-center"
              >
                Back to Homepage
              </Link>
              <Link
                href="/#features"
                className="bg-[#e9f7ef] text-[#2aa160] border-none px-6 py-3 rounded-[10px] font-bold cursor-pointer hover:bg-[#d1efe0] transition-colors text-center"
              >
                Explore Features
              </Link>
            </div>

            {/* Contact Info */}
            <div className="text-sm text-[#667a73]">
              <p>
                Questions in the meantime? Email us at{" "}
                <a href="mailto:sales@syncchat.com" className="text-[#2aa160] hover:underline">
                  sales@syncchat.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Sync Chat - Quick Recap */}
      <section className="py-12 md:py-16 bg-[#f6fbf8]">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">While you wait, here's why teams choose Sync Chat</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-[#ecf1ee] rounded-2xl p-6 shadow-[0_10px_24px_rgba(0,0,0,.05)]">
                <div className="w-12 h-12 bg-[#e9f7ef] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-[#2aa160]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">100% Data Ownership</h3>
                <p className="text-sm text-[#56635f]">
                  Self-host on your infrastructure with complete control over your data and compliance requirements.
                </p>
              </div>
              <div className="bg-white border border-[#ecf1ee] rounded-2xl p-6 shadow-[0_10px_24px_rgba(0,0,0,.05)]">
                <div className="w-12 h-12 bg-[#e9f7ef] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-[#2aa160]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Enterprise Security</h3>
                <p className="text-sm text-[#56635f]">
                  E2E encryption, SSO/MFA, RBAC, audit logs, and compliance-ready features built in.
                </p>
              </div>
              <div className="bg-white border border-[#ecf1ee] rounded-2xl p-6 shadow-[0_10px_24px_rgba(0,0,0,.05)]">
                <div className="w-12 h-12 bg-[#e9f7ef] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-[#2aa160]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Deep Integrations</h3>
                <p className="text-sm text-[#56635f]">
                  APIs & webhooks to connect your existing tools and workflows seamlessly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
