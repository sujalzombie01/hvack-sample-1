import React from "react";
import Link from "next/link";
import {
  BUSINESS_NAME,
  LOGO_TEXT,
  PHONE,
  PHONE_RAW,
  EMAIL,
  SERVICE_AREAS,
  SERVICES,
} from "@/config/site";

export default function Footer() {
  const firstLetter = LOGO_TEXT.charAt(0).toUpperCase();
  const currentYear = 2026; // Update manually each year, or use a server component for dynamic year

  return (
    <footer className="w-full bg-slate-950 text-slate-400 border-t border-slate-800 pt-12 sm:pt-20 pb-10 sm:pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-10 sm:pb-14 border-b border-slate-800">

          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white text-slate-950 flex items-center justify-center font-bold text-xs shadow-xs">
                {firstLetter}
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                {LOGO_TEXT} <span className="font-light text-slate-400">Washing</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
            Professional pressure washing and exterior cleaning for homes and businesses. House washing, driveways, roofs, decks, and commercial properties.
            </p>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-slate-300">
              <span className="flex items-center gap-1 text-cyan-400 font-bold">
                🛡️ Licensed &amp; Insured
              </span>
              <span>•</span>
              <span>🌿 Eco-Friendly</span>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-3 sm:mb-4">Services</h5>
            <ul className="space-y-2 text-xs">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-white transition-colors">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas Column */}
          <div>
            <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-3 sm:mb-4">Areas Served</h5>
            <ul className="space-y-2 text-xs text-slate-400">
              {SERVICE_AREAS.map((area) => (
                <li key={area}>
                  <a href="#service-areas" className="hover:text-white transition-colors">{area}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-3 sm:mb-4">Contact</h5>
            <div className="space-y-3 text-xs">
              <a href={`tel:${PHONE_RAW}`} className="block text-sm font-bold text-white hover:text-cyan-400 transition-colors">
                {PHONE}
              </a>
              <a href={`mailto:${EMAIL}`} className="block text-slate-400 hover:text-white transition-colors">
                {EMAIL}
              </a>
              <p className="text-[11px] text-slate-400">
                Serving your local community and surrounding areas.
              </p>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-[10px] text-cyan-400 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                Free Estimates — Call or Text
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4 text-center sm:text-left">
          <p>© {currentYear} {BUSINESS_NAME}. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link href="/services" className="hover:text-slate-300 transition-colors">Services</Link>
            <Link href="/reviews" className="hover:text-slate-300 transition-colors">Reviews</Link>
            <Link href="/coupons" className="hover:text-slate-300 transition-colors">Specials</Link>
            <Link href="/locations" className="hover:text-slate-300 transition-colors">Service Areas</Link>
            <Link href="/awards" className="hover:text-slate-300 transition-colors">Guarantees</Link>
            <Link href="/milestone-advantage" className="hover:text-slate-300 transition-colors">VIP Care Club</Link>
            <Link href="/faq" className="hover:text-slate-300 transition-colors">FAQ</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
