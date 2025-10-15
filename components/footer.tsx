'use client';
import React, { useState } from 'react';
import { Mail, MapPin, X, LinkedinIcon, GithubIcon, YoutubeIcon } from 'lucide-react';
import Image from "next/image"
import MauticSubscribe from './SubscribeForm';

export default function Footer() {
  const [email, setEmail] = useState('');
  // Fix: Change the type to string | null
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const handleSubscribe = () => {
    if (email) {
      alert('Newsletter subscription submitted!');
      setEmail('');
    }
  };

  return (
    <footer className="bg-gradient-to-b from-slate-950 to-slate-900 text-gray-100">
      {/* Main Footer Content */}
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 py-10">
          
          {/* Brand Section */}
          <div className="col-span-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/logo.png"
                  alt="Sync Chat Logo"
                  width={140}
                  height={32}
                  className="h-15 w-auto brightness-0 invert"
                />
              </div>
            </div>
           
            
            {/* Addresses */}
            <div className="space-y-3 text-xs">
              <div className="flex gap-2">
                <MapPin className="w-3 h-3 text-blue-500 mt-0.5 flex-shrink-0" />
                <div className="text-gray-400 leading-relaxed">
                  <div className="font-semibold text-gray-300 mb-0.5">India</div>
                  G1-G3, SSR Corporate Park, 13/6, NH-19, Faridabad, Haryana 121003
                </div>
              </div>
              
              <div className="flex gap-2">
                <MapPin className="w-3 h-3 text-blue-500 mt-0.5 flex-shrink-0" />
                <div className="text-gray-400 leading-relaxed">
                  <div className="font-semibold text-gray-300 mb-0.5">Canada</div>
                  1122 Lorimar Dr, Mississauga, ON L5S 1R8
                </div>
              </div>
            </div>

             <p className="text-gray-400 text-xs mb-4 mt-3 leading-relaxed">
              Real-time collaboration made simple. Connect your team instantly.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-4">
              {[X, LinkedinIcon, GithubIcon, YoutubeIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* Product */}
            <div>
              <p>
                  <strong className="text-white font-semibold mb-5">Product</strong>
              </p>
              <ul className="space-y-2">
                {[
                  { title: 'Features', link: '/#features' },
                  { title: 'Integrations', link: '/#integrations' },
                  { title: 'Deployment', link: '/#deployment' }
                ].map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.link}
                      className="text-gray-400 hover:text-white text-xs transition-colors duration-200 inline-block relative"
                      onMouseEnter={() => setHoveredLink(`product-${i}`)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      {item.title}
                      <span
                        className={`absolute bottom-0 left-0 h-px bg-blue-500 transition-all duration-300 ${
                          hoveredLink === `product-${i}` ? 'w-full' : 'w-0'
                        }`}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <p>
                  <strong className="text-white font-semibold mb-5">Company</strong>
              </p>
              <ul className="space-y-2">
                {[
                  { title: 'Contact Sales', link: '#demo' },
                  { title: 'Support', link: '#demo' }
                ].map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.link}
                      className="text-gray-400 hover:text-white text-xs transition-colors duration-200 inline-block relative"
                      onMouseEnter={() => setHoveredLink(`company-${i}`)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      {item.title}
                      <span
                        className={`absolute bottom-0 left-0 h-px bg-blue-500 transition-all duration-300 ${
                          hoveredLink === `company-${i}` ? 'w-full' : 'w-0'
                        }`}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <p><strong className="text-white font-semibold mb-5">Legal</strong></p>
              <ul className="space-y-2">
                {[
                  { title: 'Privacy Policy', link: '/privacy-policy' },
                  { title: 'Terms of Service', link: '/terms-conditions' }
                ].map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.link}
                      className="text-gray-400 hover:text-white text-xs transition-colors duration-200 inline-block relative"
                      onMouseEnter={() => setHoveredLink(`legal-${i}`)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      {item.title}
                      <span
                        className={`absolute bottom-0 left-0 h-px bg-blue-500 transition-all duration-300 ${
                          hoveredLink === `legal-${i}` ? 'w-full' : 'w-0'
                        }`}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="col-span-3">
            <p><strong className="text-white font-semibold mb-5">Stay Updated</strong></p>
            <p className="text-gray-400 text-xs mb-3 mt-2">
              Get latest updates.
            </p>
            <div className="mb-3">
              <MauticSubscribe />
            </div>

            {/* Trust Badge */}
            <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700/50">
              <div className="text-xs text-gray-400">Trusted by</div>
              <div className="text-xl font-bold text-white">10,000+</div>
              <div className="text-xs text-gray-400">teams</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="px-8 py-4">
          <div className="lg:flex justify-between items-center text-xs sm:flex-col sm:justify-content-center">
            <div className="text-gray-400">
              © 2025 Sync Chat by AbacusDesk. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}