
import Footer from "@/components/footer"
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




<Footer />



    </>
  )
}