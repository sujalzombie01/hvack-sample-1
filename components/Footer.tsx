import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-950 text-slate-400 border-t border-slate-800 pt-12 sm:pt-20 pb-10 sm:pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-10 sm:pb-14 border-b border-slate-800">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white text-slate-950 flex items-center justify-center font-bold text-xs shadow-xs">
                A
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Apex <span className="font-light text-slate-400">HVAC</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Providing precision heating, cooling, and air quality solutions across the Dallas-Fort Worth metroplex. Built for reliability, efficiency, and comfort.
            </p>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-slate-300">
              <span className="flex items-center gap-1 text-amber-400 font-bold">
                <svg className="w-3.5 h-3.5 fill-amber-400 text-amber-400" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                4.9
              </span>
              <span>40,208+ Verified Reviews</span>
              <span>•</span>
              <span>TACLA #44891C</span>
            </div>
          </div>

          {/* Column 1 */}
          <div>
            <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-3 sm:mb-4">Services</h5>
            <ul className="space-y-2 text-xs">
              <li><Link href="/services/ac-repair" className="hover:text-white transition-colors">AC Repair &amp; Diagnostics</Link></li>
              <li><Link href="/services/ac-repair" className="hover:text-white transition-colors">Precision Tune-Up</Link></li>
              <li><Link href="/services/ac-repair" className="hover:text-white transition-colors">Heating &amp; Furnace</Link></li>
              <li><Link href="/services/ac-repair" className="hover:text-white transition-colors">Duct Cleaning</Link></li>
              <li><Link href="/milestone-advantage" className="hover:text-white transition-colors">VIP Membership</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-3 sm:mb-4">DFW Coverage</h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/locations" className="hover:text-white transition-colors">Dallas &amp; Highland Park</Link></li>
              <li><Link href="/locations" className="hover:text-white transition-colors">Fort Worth &amp; Arlington</Link></li>
              <li><Link href="/locations" className="hover:text-white transition-colors">Plano &amp; Frisco</Link></li>
              <li><Link href="/locations" className="hover:text-white transition-colors">Irving &amp; Southlake</Link></li>
              <li><Link href="/locations" className="hover:text-white transition-colors">McKinney &amp; Garland</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-3 sm:mb-4">Contact</h5>
            <div className="space-y-3 text-xs">
              <a href="tel:2142672405" className="block text-sm font-bold text-white hover:text-amber-400 transition-colors">
                (214) 267-2405
              </a>
              <p className="text-[11px] text-slate-400">
                24/7/365 On-Call Dispatch across Dallas-Fort Worth.
              </p>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-[10px] text-emerald-400 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Dispatch Active Now
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4 text-center sm:text-left">
          <p>© 2026 Apex Home Services. All rights reserved. Texas License TACLA #44891C.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link href="/awards" className="hover:text-slate-300 transition-colors">Awards</Link>
            <Link href="/faq" className="hover:text-slate-300 transition-colors">FAQ</Link>
            <Link href="/reviews" className="hover:text-slate-300 transition-colors">Reviews</Link>
            <Link href="/coupons" className="hover:text-slate-300 transition-colors">Coupons</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
