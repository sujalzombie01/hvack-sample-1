import React from "react";

export default function TrustBar() {
  return (
    <section className="w-full bg-slate-50 border-y border-slate-200/80 py-8 sm:py-12 my-2 sm:my-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-slate-200">
          
          {/* Stat 1 */}
          <div className="pt-2 md:pt-0 md:pr-6 group transition-transform duration-200 hover:-translate-y-0.5">
            <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 mb-1">
              40,208+
            </div>
            <div className="flex items-center justify-center md:justify-start gap-1 text-xs font-bold text-slate-900 mb-1">
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="ml-1">4.9 Star Rating</span>
            </div>
            <p className="text-xs text-slate-500">
              Verified customer reviews across Dallas &amp; Fort Worth
            </p>
          </div>

          {/* Stat 2 */}
          <div className="pt-6 md:pt-0 md:px-6 group transition-transform duration-200 hover:-translate-y-0.5">
            <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 mb-1">
              100%
            </div>
            <div className="text-xs font-bold text-slate-900 mb-1">
              Satisfaction Guarantee
            </div>
            <p className="text-xs text-slate-500">
              Fixed right the first time or your service is 100% free
            </p>
          </div>

          {/* Stat 3 */}
          <div className="pt-6 md:pt-0 md:pl-6 group transition-transform duration-200 hover:-translate-y-0.5">
            <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 mb-1">
              90-Min
            </div>
            <div className="text-xs font-bold text-slate-900 mb-1">
              Same-Day Dispatch Available
            </div>
            <p className="text-xs text-slate-500">
              Mobile warehouse trucks on standby across DFW
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
