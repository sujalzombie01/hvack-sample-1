"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import TrustBar from "@/components/TrustBar";
import ChatSmsWidget from "@/components/ChatSmsWidget";
import BookingModal from "@/components/BookingModal";
import Footer from "@/components/Footer";
import { PHONE, PHONE_RAW, LOGO_TEXT } from "@/config/site";

export default function AwardsPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const guarantees = [
    {
      title: "100% Surface Safe SoftWash Guarantee",
      desc: "We use low-pressure soft washing equipment specifically tuned to protect vinyl siding, stucco, cedar shake, and asphalt roof shingles against high-pressure damage.",
      icon: (
        <svg className="w-8 h-8 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      badge: "Surface Protection",
    },
    {
      title: "Landscaping & Plant Safety Protocol",
      desc: "Before, during, and after every wash, our technicians thoroughly saturate root zones, rinse vulnerable foliage, and apply neutralizing agents to keep your garden lush.",
      icon: (
        <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      badge: "Eco-Friendly",
    },
    {
      title: "Comprehensive Liability Coverage",
      desc: "Every crew member is fully covered with comprehensive general liability and property damage protection, giving you complete reassurance while we work on your property.",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      badge: "Fully Insured",
    },
    {
      title: "PWNA Best Practice Standards",
      desc: "We adhere strictly to Pressure Washers of North America standards, utilizing industry-grade detergents, water reclamation best practices, and commercial rotary surface cleaners.",
      icon: (
        <svg className="w-8 h-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      badge: "Industry Certified",
    },
    {
      title: "100% Clean Touch-Up Guarantee",
      desc: "If you notice an overlooked section or spot within 48 hours of service completion, our crew will happily return and re-clean the area promptly at zero additional cost.",
      icon: (
        <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      ),
      badge: "Satisfaction Guaranteed",
    },
    {
      title: "Biodegradable, Pet-Safe Detergents",
      desc: "All soaps, surfactants, and algae-inhibitors break down naturally into harmless compounds within hours, ensuring complete safety for your dogs, cats, and backyard wildlife.",
      icon: (
        <svg className="w-8 h-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      badge: "Pet & Family Safe",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <Navbar onOpenQuote={() => setBookingModalOpen(true)} />

      <main className="flex-1">
        <section className="pt-28 pb-14 sm:pt-36 sm:pb-20 bg-slate-50 border-b border-slate-200 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 text-cyan-900 text-xs font-semibold uppercase tracking-wider mb-4 border border-cyan-200">
              <svg className="w-3.5 h-3.5 text-cyan-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Quality Standards &amp; Protection</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight mb-4">
              Certifications, Guarantees &amp; Safety
            </h1>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
              Setting the industry standard for safe exterior cleaning. We combine commercial equipment with soft-wash techniques that safeguard your home, siding, and landscaping.
            </p>
          </div>
        </section>

        <TrustBar />

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {guarantees.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 p-8 rounded-3xl border border-slate-200/80 hover:border-cyan-300 hover:shadow-lg transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-xs border border-slate-100 group-hover:scale-105 transition-transform">
                        {item.icon}
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-700 bg-cyan-50 px-2.5 py-1 rounded-full border border-cyan-100">
                        {item.badge}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Banner CTA */}
            <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
              <div className="relative z-10 max-w-2xl mx-auto">
                <span className="text-cyan-400 font-semibold text-xs tracking-wider uppercase mb-2 block">
                  Zero Risk • 100% Guaranteed
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4">
                  Experience The {LOGO_TEXT} Difference
                </h2>
                <p className="text-slate-300 text-sm mb-6">
                  Get in touch for a fast, hassle-free quote tailored to your exterior surfaces. No hidden fees, no pressure.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={() => setBookingModalOpen(true)}
                    className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-7 py-3 rounded-full text-sm transition-all shadow-md cursor-pointer"
                  >
                    Request Free Estimate
                  </button>
                  <a
                    href={`tel:${PHONE_RAW}`}
                    className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-white font-semibold px-6 py-3 rounded-full text-sm transition-all"
                  >
                    Call {PHONE}
                  </a>
                </div>
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
