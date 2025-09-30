"use client"

import { useState, useEffect } from "react"

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0d1513] text-white p-4 shadow-lg border-t border-[#2aa160]/20">
      <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm text-[#b8c6c0]">
            We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By
            clicking "Accept All", you consent to our use of cookies.{" "}
            <a href="#" className="text-[#2aa160] hover:text-[#238a54] underline transition-colors">
              Learn more about our Privacy Policy
            </a>
            .
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={handleDecline}
            className="px-4 py-2 text-sm font-medium text-[#b8c6c0] border border-[#3a4a42] rounded-lg hover:bg-[#1a2520] transition-colors"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 text-sm font-medium bg-[#2aa160] text-white rounded-lg hover:bg-[#238a54] transition-colors"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  )
}
