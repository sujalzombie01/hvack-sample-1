"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import TrustBar from "@/components/TrustBar";
import ChatSmsWidget from "@/components/ChatSmsWidget";
import BookingModal from "@/components/BookingModal";
import Footer from "@/components/Footer";
import { PHONE, PHONE_RAW, LOGO_TEXT } from "@/config/site";

export default function FAQPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is the difference between pressure washing and soft washing?",
      a: "Pressure washing uses high-pressure water (3,000+ PSI) to blast dirt, stains, and gum from hard surfaces like concrete, stone, and brick pavers. Soft washing uses low pressure (under 500 PSI) combined with specialized biodegradable cleaning solutions to kill algae, mold, and moss at the roots — making it safe for delicate siding, painted wood, and roof shingles without stripping paint or dislodging material.",
    },
    {
      q: "Will your washing equipment damage my siding, roof, or window seals?",
      a: "No! We strictly use low-pressure soft washing techniques for homes, vinyl siding, stucco, and roofs. High pressure is only applied to durable concrete driveways and flatwork using calibrated rotary surface cleaners. We also tape off keyhole outlets, delicate fixtures, and outdoor security cameras.",
    },
    {
      q: "Are the cleaning solutions safe for my landscaping, pets, and children?",
      a: "Yes. Our cleaning solutions are commercial-grade yet 100% biodegradable. We pre-wet and rinse all plant foliage and root zones before and after application, and apply neutralizing agents around delicate flowerbeds so your garden stays completely healthy.",
    },
    {
      q: "Do I need to be home while you wash the property?",
      a: "Not necessarily! As long as we have exterior water access via an outside spigot, your windows and doors are firmly closed, pets are safely kept inside, and gates are unlocked, we can complete the entire service while you are away. We send before/after photos and updates right to your phone.",
    },
    {
      q: "How do you calculate your free estimate?",
      a: "Our quotes are based on square footage, surface material (vinyl, brick, concrete, stucco), condition/algae density, and accessibility. We can often provide accurate estimates online via satellite mapping or by phone in just a few minutes.",
    },
    {
      q: "How often should I have my house and driveway cleaned?",
      a: "Most homeowners schedule a house wash and driveway cleaning once every 12 to 18 months to prevent permanent staining and organic growth. Heavily shaded properties or areas with high humidity may benefit from annual wash cycles.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <Navbar onOpenQuote={() => setBookingModalOpen(true)} />

      <main className="flex-1">
        <section className="pt-28 pb-14 sm:pt-36 sm:pb-20 bg-slate-50 border-b border-slate-200 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-100 text-cyan-900 text-xs font-semibold uppercase tracking-wider mb-4 border border-cyan-200">
              <svg className="w-3.5 h-3.5 text-cyan-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Knowledge Base &amp; Help</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
              Learn about our soft-wash process, safety procedures, pricing, and what to expect on service day.
            </p>
          </div>
        </section>

        <TrustBar />

        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="space-y-4 mb-16">
              {faqs.map((faq, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <div
                    key={idx}
                    className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 bg-slate-50/50 hover:border-cyan-300"
                  >
                    <button
                      onClick={() => setOpenIdx(isOpen ? null : idx)}
                      className="w-full py-5 px-6 text-left font-bold text-slate-900 flex justify-between items-center text-sm sm:text-base gap-4 cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span>{faq.q}</span>
                      <span className={`w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 text-slate-500 transition-transform duration-200 ${isOpen ? "rotate-180 bg-cyan-50 text-cyan-600" : ""}`}>
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Still have questions banner */}
            <div className="bg-slate-950 text-white rounded-3xl p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Have a specific question about your home?</h3>
              <p className="text-slate-400 text-xs sm:text-sm mb-6 max-w-md mx-auto">
                Call our friendly team or submit a quick quote request. We are always happy to advise on the right cleaning method for your surfaces.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => setBookingModalOpen(true)}
                  className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-6 py-2.5 rounded-full text-xs transition-all shadow-md cursor-pointer"
                >
                  Ask Online
                </button>
                <a
                  href={`tel:${PHONE_RAW}`}
                  className="text-xs font-semibold text-slate-300 hover:text-white"
                >
                  Call {PHONE}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ChatSmsWidget />
      <BookingModal isOpen={bookingModalOpen} onClose={() => setBookingModalOpen(false)} />
      <Footer />
    </div>
  );
}
