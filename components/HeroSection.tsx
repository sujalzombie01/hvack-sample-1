"use client";

import React from "react";
import Image from "next/image";
import { PHONE, PHONE_RAW } from "@/config/site";

interface HeroSectionProps {
  onOpenQuote?: () => void;
}

export default function HeroSection({ onOpenQuote }: HeroSectionProps) {
  return (
    <section className="relative w-full min-h-[100svh] min-h-screen flex items-center font-sans bg-slate-950 py-20 sm:py-28 lg:py-36 overflow-hidden">

      {/* ── Full-bleed cinematic background image ─────────────────── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Professional pressure washing and house soft wash exterior cleaning"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Contrast gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/40" />
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
      </div>

      {/* ── Content Container ────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 pt-6 sm:pt-10">
        <div className="max-w-2xl animate-fade-in-up">

          {/* Eyebrow badge — compact & crisp on mobile */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/10 text-white text-[10px] sm:text-xs font-semibold tracking-wider uppercase mb-3.5 sm:mb-5 border border-white/20 backdrop-blur-md shadow-xs">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white animate-pulse"></span>
            <span>Professional Exterior Cleaning</span>
          </div>

          {/* Main headline — scaled appropriately for mobile screens */}
          <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.12] sm:leading-[1.08] tracking-tight mb-3.5 sm:mb-5">
            Your Home, Pressure&nbsp;Washed to&nbsp;Perfection.
          </h1>

          {/* Sub-headline — mobile sized */}
          <p className="text-xs sm:text-base lg:text-lg text-white/90 leading-relaxed mb-6 sm:mb-8 max-w-xl font-normal">
            House washing, driveways, roofs, decks, and commercial properties. We safely restore surfaces to like-new condition — free estimates, no obligation.
          </p>

          {/* CTA buttons — touch-friendly stacked on mobile, inline on desktop */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6 sm:mb-8">

            {/* Primary CTA */}
            <a
              href={`tel:${PHONE_RAW}`}
              className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-slate-100 active:scale-[0.98] text-slate-950 text-xs sm:text-sm font-black px-6 py-3.5 sm:py-4 sm:px-8 rounded-full shadow-2xl transition-all duration-200 cursor-pointer"
              id="hero-call-btn"
            >
              <svg className="w-4 h-4 shrink-0 text-slate-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call Now: {PHONE}</span>
            </a>

            {/* Secondary CTA */}
            <button
              type="button"
              onClick={() => onOpenQuote?.()}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 active:scale-[0.98] text-white text-xs sm:text-sm font-bold px-6 py-3.5 sm:py-4 sm:px-8 rounded-full border border-white/30 backdrop-blur-md transition-all duration-200 cursor-pointer"
              id="hero-quote-btn"
            >
              <span>Get Free Estimate</span>
              <svg className="w-3.5 h-3.5 text-white shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

          {/* Trust badges — 2 columns on mobile, row on tablet/desktop */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-x-4 gap-y-2 text-[11px] sm:text-xs font-medium text-white/90 mb-8 sm:mb-10">
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-white/20 flex items-center justify-center text-white text-[9px] sm:text-[10px] font-bold">✓</span>
              <span>Licensed &amp; Insured</span>
            </div>
            <div className="hidden sm:block w-px h-3 bg-white/30"></div>
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-white/20 flex items-center justify-center text-white text-[9px] sm:text-[10px] font-bold">✓</span>
              <span>Free Estimates</span>
            </div>
            <div className="hidden sm:block w-px h-3 bg-white/30"></div>
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-white/20 flex items-center justify-center text-white text-[9px] sm:text-[10px] font-bold">✓</span>
              <span>100% Surface Safe</span>
            </div>
            <div className="hidden sm:block w-px h-3 bg-white/30"></div>
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-white/20 flex items-center justify-center text-white text-[9px] sm:text-[10px] font-bold">✓</span>
              <span>Eco-Friendly</span>
            </div>
          </div>

          {/* Stats Bar — in normal document flow so it NEVER overlaps on mobile */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3.5">
            {[
              { value: "7+",    label: "Services Offered" },
              { value: "Free",  label: "Estimates Always" },
              { value: "100%",  label: "Satisfaction Focus" },
              { value: "Eco",   label: "Friendly Formulas" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-2.5 sm:px-4 sm:py-3 flex items-center gap-2 sm:gap-3 shadow-lg"
              >
                <span className="text-lg sm:text-2xl font-black text-white leading-none shrink-0">{stat.value}</span>
                <span className="text-[10px] sm:text-[11px] text-white/80 font-medium leading-tight">{stat.label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}
