"use client";

import React from "react";
import { SERVICES, TRUST_POINTS } from "@/config/site";

interface ServiceDetailSectionProps {
  onOpenQuote?: (service?: string) => void;
}

export default function ServiceDetailSection({ onOpenQuote }: ServiceDetailSectionProps) {
  return (
    <section id="services" className="py-12 sm:py-20 lg:py-28 bg-white text-slate-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="eyebrow-pill bg-slate-100 text-slate-800 border border-slate-200 mb-4">
              <span className="eyebrow-dot bg-cyan-600"></span>
              <span>Exterior Cleaning Services</span>
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950 leading-[1.15]">
              Professional Pressure &amp; Soft Washing Services
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-600 max-w-md leading-relaxed">
            Every surface is different. We use the right pressure and the right detergent so your home or business gets clean without any damage.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 mb-16 sm:mb-24">
          {SERVICES.map((service, i) => (
            <div
              key={service.id}
              onClick={() => onOpenQuote?.(service.title)}
              className="group cursor-pointer rounded-2xl border border-slate-200/90 p-6 bg-white hover:border-slate-900 hover:shadow-xl active:scale-[0.98] transition-all duration-300 flex flex-col justify-between interactive-card"
            >
              <div>
                <div className="flex justify-between items-start mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-950 font-bold text-lg group-hover:bg-slate-950 group-hover:text-white transition-colors duration-200">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-slate-950 group-hover:border-slate-950 transition-all duration-200">
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-950 tracking-tight mb-2">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                <span>Get a Free Quote</span>
                {service.tag && (
                  <span className="text-cyan-700 font-bold bg-cyan-50 px-2 py-0.5 rounded-full text-[10px] border border-cyan-200/50">
                    {service.tag}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div id="why-choose-us" className="rounded-3xl bg-slate-50 border border-slate-200/80 p-6 sm:p-10 lg:p-16 mb-16 sm:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

            <div className="lg:col-span-5">
              <div className="eyebrow-pill bg-white text-slate-900 border border-slate-200 mb-4">
                <span className="eyebrow-dot bg-amber-500"></span>
                <span>Why Choose Us</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-950 leading-tight mb-3">
                Clean results, honest service.
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We built this business on referrals and repeat customers. That only happens when you show up, do the work right, and treat people fairly.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="space-y-3 sm:space-y-4 w-full">
                {TRUST_POINTS.map((point) => (
                  <div key={point.title} className="bg-white p-4 rounded-xl border border-slate-200/80 hover:border-slate-300 transition-colors flex items-start gap-3">
                    <span className="text-xl shrink-0 mt-0.5">{point.icon}</span>
                    <div>
                      <div className="text-sm font-bold text-slate-950 mb-1">{point.title}</div>
                      <div className="text-xs text-slate-600 leading-relaxed">{point.body}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Dark CTA Strip */}
        <div className="rounded-3xl bg-slate-950 text-white p-6 sm:p-10 lg:p-14 border border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 eyebrow-pill bg-white/10 text-slate-200 border border-white/15 mb-3">
              <span className="eyebrow-dot bg-cyan-400"></span>
              <span>Get Started</span>
            </div>
            <h3 className="text-xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight mb-2">
              Ready for a cleaner-looking home?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-normal">
              Contact us for a free, no-pressure estimate. We&apos;ll give you a clear price before any work begins.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => onOpenQuote?.("General Quote")}
              className="meridian-btn bg-white hover:bg-slate-100 active:scale-[0.98] text-slate-950 pl-6 pr-2 py-2 shadow-lg cursor-pointer w-full sm:w-auto justify-center sm:justify-between"
              id="service-cta-quote-btn"
            >
              <span className="pr-3 text-xs sm:text-sm font-bold tracking-tight">Get a Free Quote</span>
              <div className="w-8 h-8 rounded-full bg-slate-950 text-white flex items-center justify-center text-xs">
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
