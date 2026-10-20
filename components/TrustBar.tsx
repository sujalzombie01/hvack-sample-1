import React from "react";
import { YEARS_IN_BUSINESS } from "@/config/site";

export default function TrustBar() {
  return (
    <section className="w-full bg-slate-50 border-y border-slate-200/80 py-8 sm:py-12 my-2 sm:my-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-slate-200">

          {/* Stat 1 */}
          <div className="pt-2 md:pt-0 md:pr-6 group transition-transform duration-200 hover:-translate-y-0.5">
            <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 mb-1">
              {YEARS_IN_BUSINESS}+ Yrs
            </div>
            <div className="text-xs font-bold text-slate-900 mb-1">
              Trusted Local Specialists
            </div>
            <p className="text-xs text-slate-500">
              Locally owned and operated exterior cleaning company.
            </p>
          </div>

          {/* Stat 2 */}
          <div className="pt-6 md:pt-0 md:px-6 group transition-transform duration-200 hover:-translate-y-0.5">
            <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-cyan-600 mb-1">
              100%
            </div>
            <div className="text-xs font-bold text-slate-900 mb-1">
              Free Estimates
            </div>
            <p className="text-xs text-slate-500">
              No-obligation quotes — online, by phone, or on-site.
            </p>
          </div>

          {/* Stat 3 */}
          <div className="pt-6 md:pt-0 md:pl-6 group transition-transform duration-200 hover:-translate-y-0.5">
            <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 mb-1">
              Eco
            </div>
            <div className="text-xs font-bold text-slate-900 mb-1">
              Biodegradable Detergents
            </div>
            <p className="text-xs text-slate-500">
              Plant-safe, environmentally responsible cleaning solutions.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
