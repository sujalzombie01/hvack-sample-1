"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface ServiceDetailSectionProps {
  onOpenBooking?: (service?: string) => void;
}

export default function ServiceDetailSection({ onOpenBooking }: ServiceDetailSectionProps) {
  return (
    <section id="services" className="py-12 sm:py-20 lg:py-28 bg-white text-slate-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="eyebrow-pill bg-slate-100 text-slate-800 border border-slate-200 mb-4">
              <span className="eyebrow-dot bg-blue-600"></span>
              <span>Air Conditioning Services</span>
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950 leading-[1.15]">
              Our Experts Can Repair Your Air Conditioning System Today!
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-600 max-w-md leading-relaxed">
            Diagnosing issues accurately before replacing parts. We test electrical flow, locate refrigerant leaks, and replace worn components on the first visit.
          </p>
        </div>

        {/* 3-Column Grid in Meridian Card Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-24">
          
          {/* Service Card 1 */}
          <div
            onClick={() => onOpenBooking && onOpenBooking("Diagnosing Refrigerant Leaks")}
            className="group cursor-pointer rounded-2xl border border-slate-200/90 p-6 sm:p-7 bg-white hover:border-slate-900 hover:shadow-xl active:scale-[0.98] transition-all duration-300 flex flex-col justify-between interactive-card"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-950 font-bold text-lg group-hover:bg-slate-950 group-hover:text-white transition-colors duration-200">
                  01
                </div>
                <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-slate-950 group-hover:border-slate-950 transition-all duration-200">
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-950 tracking-tight mb-2 sm:mb-3">
                Diagnosing Refrigerant Leaks
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                We track where the leak started and offer solutions. Low freon can freeze evaporator coils and destroy the compressor if not properly sealed and recharged.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
              <span>Electronic Leak Detection</span>
              <span className="text-emerald-700 font-bold">EPA Certified</span>
            </div>
          </div>

          {/* Service Card 2 */}
          <div
            onClick={() => onOpenBooking && onOpenBooking("Fixing Electrical Issues")}
            className="group cursor-pointer rounded-2xl border border-slate-200/90 p-6 sm:p-7 bg-white hover:border-slate-900 hover:shadow-xl active:scale-[0.98] transition-all duration-300 flex flex-col justify-between interactive-card"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-950 font-bold text-lg group-hover:bg-slate-950 group-hover:text-white transition-colors duration-200">
                  02
                </div>
                <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-slate-950 group-hover:border-slate-950 transition-all duration-200">
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-950 tracking-tight mb-2 sm:mb-3">
                Fixing Electrical Issues
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Finding wiring problems and restoring accurate temperature control. We test high-voltage contactors, capacitors, relays, and smart thermostats.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
              <span>Capacitors &amp; Relays</span>
              <span className="text-emerald-700 font-bold">Safety Tested</span>
            </div>
          </div>

          {/* Service Card 3 */}
          <div
            onClick={() => onOpenBooking && onOpenBooking("Replacing Faulty Parts")}
            className="group cursor-pointer rounded-2xl border border-slate-200/90 p-6 sm:p-7 bg-white hover:border-slate-900 hover:shadow-xl active:scale-[0.98] transition-all duration-300 flex flex-col justify-between interactive-card"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-950 font-bold text-lg group-hover:bg-slate-950 group-hover:text-white transition-colors duration-200">
                  03
                </div>
                <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-slate-950 group-hover:border-slate-950 transition-all duration-200">
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-950 tracking-tight mb-2 sm:mb-3">
                Replacing Faulty Parts
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                We use quality parts and tools to replace worn-out AC components. Blower motors, TXV valves, and hard-start kits are stocked right on our vans.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
              <span>OEM Direct Parts</span>
              <span className="text-emerald-700 font-bold">Full Warranty</span>
            </div>
          </div>

        </div>

        {/* Split Section: The Pro Standard Difference */}
        <div className="rounded-3xl bg-slate-50 border border-slate-200/80 p-6 sm:p-10 lg:p-16 mb-16 sm:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md h-[280px] sm:h-[380px]">
                <Image
                  src="/images/ac-service.jpg"
                  alt="HVAC repair technician testing AC unit pressure in Texas"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="eyebrow-pill bg-white text-slate-900 border border-slate-200 mb-4">
                <span className="eyebrow-dot bg-amber-500"></span>
                <span>Why Choose Us</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-950 leading-tight mb-3">
                The Pro Standard Difference
              </h3>
              
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                We don&apos;t believe in guesswork or high-pressure up-sells. Every customer receives transparent options backed by our ironclad guarantees.
              </p>

              {/* 3 Pillars */}
              <div className="space-y-3 sm:space-y-4 w-full mb-6">
                <div className="bg-white p-4 rounded-xl border border-slate-200/80 hover:border-slate-300 transition-colors">
                  <div className="text-sm font-bold text-slate-950 mb-1">
                    Stocked trucks for one-trip fixes
                  </div>
                  <div className="text-xs text-slate-600 leading-relaxed">
                    Our mobile inventory vans carry over 1,000 factory-spec parts, resolving over 92% of AC emergencies in a single visit.
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200/80 hover:border-slate-300 transition-colors">
                  <div className="text-sm font-bold text-slate-950 mb-1">
                    Clear options (Good, Better, Best pricing)
                  </div>
                  <div className="text-xs text-slate-600 leading-relaxed">
                    No surprise charges. You receive three transparent, upfront options in writing before any tool touches your system.
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200/80 hover:border-slate-300 transition-colors">
                  <div className="text-sm font-bold text-slate-950 mb-1">
                    No Breakdown Guarantee
                  </div>
                  <div className="text-xs text-slate-600 leading-relaxed">
                    If any component repaired by our certified team fails during the season, we return and replace it with zero diagnostic or labor fees.
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onOpenBooking && onOpenBooking("AC Repair Service")}
                className="meridian-btn bg-slate-950 hover:bg-slate-800 active:scale-95 text-white pl-5 pr-1.5 py-1.5 shadow-sm cursor-pointer w-full sm:w-auto justify-between sm:justify-start"
              >
                <span className="pr-3 text-xs font-semibold tracking-wide">Schedule Diagnostic</span>
                <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center text-xs">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
              </button>
            </div>

          </div>
        </div>

        {/* Bottom CTA: Meridian Style Callout Row ($79 Save Voucher) */}
        <div className="rounded-3xl bg-slate-950 text-white p-6 sm:p-10 lg:p-14 border border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 eyebrow-pill bg-white/10 text-slate-200 border border-white/15 mb-3">
              <span className="eyebrow-dot bg-amber-400"></span>
              <span>Limited-Time Offer</span>
            </div>
            <h3 className="text-xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight mb-2">
              Ready for same-day AC repair? Save $79 on your service call today.
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-normal">
              Book online or call 24/7. $79 is credited instantly to your repair invoice.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => onOpenBooking && onOpenBooking("AC Repair ($79 Voucher Applied)")}
              className="meridian-btn bg-white hover:bg-slate-100 active:scale-[0.98] text-slate-950 pl-6 pr-2 py-2 shadow-lg cursor-pointer w-full sm:w-auto justify-center sm:justify-between"
              id="service-cta-book-btn"
            >
              <span className="pr-3 text-xs sm:text-sm font-bold tracking-tight">Book Now &amp; Save $79</span>
              <div className="w-8 h-8 rounded-full bg-slate-950 text-white flex items-center justify-center text-xs">
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
            </button>
            <Link
              href="/services/ac-repair"
              className="meridian-btn bg-transparent hover:bg-white/10 active:scale-[0.98] text-white border border-white/20 px-5 py-2 text-center text-xs sm:text-sm font-semibold inline-flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <span>View Service Specs</span>
              <svg className="w-3.5 h-3.5 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
