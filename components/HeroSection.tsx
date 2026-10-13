"use client";

import React, { useState } from "react";
import Image from "next/image";

interface HeroSectionProps {
  onOpenBooking?: (service?: string) => void;
}

export default function HeroSection({ onOpenBooking }: HeroSectionProps) {
  const [zip, setZip] = useState("");

  const handleQuickBook = (e: React.FormEvent) => {
    e.preventDefault();
    if (onOpenBooking) {
      onOpenBooking(`AC Repair (ZIP: ${zip})`);
    }
  };

  return (
    <section className="relative w-full bg-white pt-6 pb-12 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24 font-sans border-b border-slate-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Refined Typography, Trust & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left animate-fade-in-up">
            
            {/* Minimalist Eyebrow Capsule with Pulse */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold tracking-wide mb-4 sm:mb-6 border border-slate-200/80 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>24/7 Priority Emergency Service in DFW</span>
            </div>

            {/* Main Headline (H1) - Fluid responsive scale */}
            <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[3.25rem] font-bold tracking-tight text-slate-950 leading-[1.15] mb-4 sm:mb-5">
              Top-Rated AC &amp; Heating Repair in Dallas-Fort Worth
            </h1>

            {/* Sub-headline */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed font-normal mb-6 sm:mb-8 max-w-xl">
              We understand the urgency of Texas heat. Our certified technicians prioritize same-day service with fully stocked mobile warehouse trucks and transparent upfront pricing.
            </p>

            {/* Primary & Secondary Action CTAs (Mobile Stacked / Touch-Friendly) */}
            <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3 w-full sm:w-auto mb-6 sm:mb-8">
              
              {/* Primary Pill CTA with hover micro-animation */}
              <button
                type="button"
                onClick={() => onOpenBooking && onOpenBooking("Emergency AC Repair")}
                className="group relative inline-flex items-center justify-center gap-2.5 bg-slate-950 hover:bg-slate-800 active:scale-[0.98] text-white text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer overflow-hidden"
                id="hero-schedule-btn"
              >
                <div className="absolute inset-0 w-1/2 h-full bg-white/10 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out" />
                <span>Schedule Online Now</span>
                <svg className="w-3.5 h-3.5 text-slate-300 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </button>

              {/* Secondary Ghost CTA */}
              <a
                href="tel:2142672405"
                className="inline-flex items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100 active:scale-[0.98] text-slate-800 border border-slate-200 text-xs sm:text-sm font-semibold px-5 py-3.5 rounded-full transition-all duration-200"
                id="hero-call-btn"
              >
                <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Call (214) 267-2405</span>
              </a>

            </div>

            {/* Responsive ZIP Availability Input */}
            <form onSubmit={handleQuickBook} className="w-full max-w-md flex flex-col xs:flex-row items-stretch xs:items-center bg-slate-50 border border-slate-200 rounded-2xl xs:rounded-full p-1.5 focus-within:border-slate-400 focus-within:shadow-sm transition-all gap-1.5 xs:gap-0">
              <input
                type="text"
                maxLength={5}
                pattern="[0-9]{5}"
                required
                placeholder="Enter DFW ZIP (e.g. 75201)"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                className="bg-transparent text-slate-900 placeholder-slate-400 text-xs px-3.5 py-2 flex-1 focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-1.5 bg-slate-950 hover:bg-slate-800 active:scale-95 text-white text-xs font-semibold px-4 py-2.5 rounded-xl xs:rounded-full transition-all cursor-pointer shrink-0"
              >
                <span>Check Dispatch</span>
                <svg className="w-3 h-3 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>

            {/* Mobile-Friendly Trust Badges Strip */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-slate-600 font-medium mt-6 pt-5 border-t border-slate-100 w-full">
              <div className="inline-flex items-center gap-1 bg-amber-50 text-amber-900 border border-amber-200/60 px-2.5 py-1 rounded-full">
                <svg className="w-3.5 h-3.5 fill-amber-500 text-amber-500" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="font-bold">4.9</span>
                <span className="text-[11px] text-amber-800">(40,208+ Reviews)</span>
              </div>

              <div className="inline-flex items-center gap-1 bg-slate-100 text-slate-800 border border-slate-200 px-2.5 py-1 rounded-full text-[11px] font-semibold">
                <span>🛡️ 100% Satisfaction Guarantee</span>
              </div>

              <div className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-800 border border-emerald-200/60 px-2.5 py-1 rounded-full text-[11px] font-bold">
                <span>⚡ $79 Instant Voucher</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-End Photography Frame with Micro-Animations */}
          <div className="lg:col-span-5 animate-fade-in delay-150">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl bg-slate-100 h-[320px] xs:h-[380px] sm:h-[460px] group transition-all duration-300">
              <Image
                src="/images/hero-technician.jpg"
                alt="Certified HVAC technician standing by for emergency repairs in Dallas-Fort Worth"
                fill
                priority
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              
              {/* Floating Status Tag */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white/95 backdrop-blur-md border border-slate-200/80 px-3 py-1.5 rounded-full flex items-center gap-2 shadow-xs animate-float">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[11px] sm:text-xs font-semibold text-slate-800">12 Trucks Active in DFW</span>
              </div>

              {/* Mobile-Friendly Bottom Glass Inset */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-slate-950/90 backdrop-blur-md border border-white/10 p-3 sm:p-4 rounded-xl sm:rounded-2xl text-white flex items-center justify-between shadow-lg">
                <div>
                  <div className="text-xs font-semibold">The 100% Pro Guarantee</div>
                  <div className="text-[10px] sm:text-[11px] text-slate-300">Fixed Right Or It&apos;s Free • 1-Trip Fix</div>
                </div>
                <span className="text-[11px] sm:text-xs font-bold text-amber-400 bg-amber-400/10 px-2 py-1 rounded-md border border-amber-400/20">
                  Guaranteed
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
