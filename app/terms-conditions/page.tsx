
import TermsAndConditions from "@/components/terms-conditions"
import Image from "next/image"


export default function PrivacyPolicyPage() {
  return (
    <>

{/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-[#ecf1ee]">
        <div className="container flex items-center justify-between h-[72px] px-4 md:px-6">
          <a className="flex items-center gap-3 font-extrabold text-foreground" href="/">
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


    <TermsAndConditions />





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

    </>
  )
}