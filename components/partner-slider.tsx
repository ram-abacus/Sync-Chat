"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const partners = [
  { name: "Okaya", src: "/partners/okaya.webp", alt: "Okaya" },
  { name: "Plaza Cables", src: "/partners/plaza-cables.png", alt: "Plaza Cables" },
  { name: "Kaff", src: "/partners/kaff.webp", alt: "Kaff - Pride Built-In" },
  { name: "Prayag", src: "/partners/prayag.png", alt: "Prayag" },
  { name: "Max Cement", src: "/partners/max.webp", alt: "Max Cement - Maximum Ki Guarantee" },
  { name: "KEI", src: "/partners/kei.png", alt: "KEI Wires & Cables" },
  { name: "Idemitsu", src: "/partners/idemitsu.png", alt: "Idemitsu Lubricants" },
  { name: "BCH Electric", src: "/partners/bch.webp", alt: "BCH Electric Limited" },
  { name: "Gulf", src: "/partners/gulf.jpg", alt: "Gulf" },
]

export default function PartnerSlider() {
  const [offset, setOffset] = useState(0)
  const partnersPerSlide = 6

  // Duplicate partners for seamless looping
  const loopedPartners = [...partners, ...partners]

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => prev + 1)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  // Reset offset when reaching halfway (because list is doubled)
  useEffect(() => {
    if (offset >= partners.length) {
      setOffset(0)
    }
  }, [offset])

  return (
    <div className="relative overflow-hidden w-full mb-4 mt-5 partnerSlider">
      {/* Track */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${(100 / partnersPerSlide) * offset}%)`,
        }}
      >
        {loopedPartners.map((partner, index) => (
          <div
            key={`${partner.name}-${index}`}
            className="flex justify-center items-center flex-shrink-0 w-1/6"
          >
            <Image
              className="h-[40px] w-auto opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              src={partner.src || "/placeholder.svg"}
              alt={partner.alt}
              width={140}
              height={40}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
