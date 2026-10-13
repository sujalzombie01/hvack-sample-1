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
    <section className="relative w-full bg-white pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24 font-sans border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Refined Typography, Trust & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left animate-fade-in-up">
            
            {/* Minimalist Eyebrow Capsule */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium tracking-wide mb-6 border border-slate-200/60">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>24/7 Emergency Service in DFW</span>
            </div>

            {/* Main Headline (H1) - Editorial, balanced, no tacky gradients */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.4rem] font-semibold tracking-tight text-slate-950 leading-[1.12] mb-5">
              Top-Rated AC &amp; Heating Repair in Dallas-Fort Worth
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8 max-w-xl">
              We understand the urgency of AC problems. Our team prioritizes same-day repairs to restore your comfort fast with stocked mobile inventory and transparent pricing.
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-8">
              
              {/* Primary Meridian Pill CTA */}
              <button
                type="button"
                onClick={() => onOpenBooking && onOpenBooking("Emergency AC Repair")}
                className="group inline-flex items-center justify-center gap-2.5 bg-slate-950 hover:bg-slate-800 text-white text-sm font-medium px-7 py-3.5 rounded-full shadow-xs transition-all cursor-pointer hover:-translate-y-0.5"
                id="hero-schedule-btn"
              >
                <span>Schedule Online Now</span>
                <svg className="w-3.5 h-3.5 text-slate-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </button>

              {/* Secondary Ghost CTA */}
              <a
                href="tel:2142672405"
                className="inline-flex items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200 text-sm font-medium px-6 py-3.5 rounded-full transition-all hover:-translate-y-0.5"
                id="hero-call-btn"
              >
                <span>Call (214) 267-2405</span>
              </a>

            </div>

            {/* Minimalist ZIP Availability Input */}
            <form onSubmit={handleQuickBook} className="w-full max-w-md flex items-center bg-slate-50 border border-slate-200 rounded-full p-1.5 focus-within:border-slate-400 focus-within:shadow-xs transition-all">
              <input
                type="text"
                maxLength={5}
                pattern="[0-9]{5}"
                required
                placeholder="Enter DFW ZIP (e.g. 75201)"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                className="bg-transparent text-slate-900 placeholder-slate-400 text-xs px-4 py-2 flex-1 focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 bg-slate-950 hover:bg-slate-800 text-white text-xs font-medium px-4 py-2 rounded-full transition-all hover:scale-105 cursor-pointer"
              >
                <span>Check Dispatch</span>
                <svg className="w-3 h-3 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>

            {/* Clean Trust Strip */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-500 font-medium mt-6 pt-6 border-t border-slate-100 w-full">
              <span className="flex items-center gap-1.5">
                <span className="flex items-center text-amber-500 font-semibold gap-1">
                  <svg className="w-3.5 h-3.5 fill-amber-500 text-amber-500" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  4.9
                </span>
                <span>(40,208+ Reviews)</span>
              </span>
              <span>•</span>
              <span className="text-slate-700 font-semibold">100% Satisfaction Guarantee</span>
              <span>•</span>
              <span className="text-emerald-700 font-semibold">$79 Instant Voucher</span>
            </div>

          </div>

          {/* Right Column: High-End Editorial Photography Frame */}
          <div className="lg:col-span-5 animate-fade-in delay-200">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl bg-slate-100 h-[420px] sm:h-[480px] group">
              <Image
                src="/images/hero-technician.jpg"
                alt="Certified HVAC technician standing by for emergency repairs in Dallas-Fort Worth"
                fill
                priority
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
              
              {/* Minimal Floating Status Tag */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md border border-slate-200/80 px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-xs animate-float">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-medium text-slate-800">12 Trucks Active in DFW</span>
              </div>

              {/* Minimal Bottom Glass Inset */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/85 backdrop-blur-md border border-white/10 p-4 rounded-2xl text-white flex items-center justify-between">
                <div>
                  <div className="text-xs font-medium">The 100% Pro Guarantee</div>
                  <div className="text-[11px] text-slate-300">Fixed Right Or It&apos;s Free • 1-Trip Fix Guaranteed</div>
                </div>
                <span className="text-xs font-semibold text-amber-400">100% Guaranteed</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
