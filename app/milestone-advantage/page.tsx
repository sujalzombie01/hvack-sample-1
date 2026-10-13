"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import TrustBar from "@/components/TrustBar";
import ChatSmsWidget from "@/components/ChatSmsWidget";
import BookingModal from "@/components/BookingModal";
import Footer from "@/components/Footer";

export default function MilestoneAdvantagePage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <Navbar onOpenBooking={() => setBookingModalOpen(true)} />
      
      <main className="flex-1">
        {/* Header */}
        <section className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-200/80 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-4 border border-slate-300/60">
              <svg className="w-3.5 h-3.5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <span>VIP Home Comfort Plan</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight mb-4">
              The VIP Comfort Advantage™ Membership
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Total peace of mind for your home&apos;s cooling, heating, plumbing, and electrical systems. Enjoy front-of-the-line VIP dispatch, 15% off all repairs, and 2 free precision tune-ups annually.
            </p>
          </div>
        </section>

        <TrustBar />

        {/* Membership Perks */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              
              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 hover:shadow-lg transition-all">
                <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">Priority VIP Dispatch</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Skip the queue! When Texas heat strikes, Advantage members are automatically bumped to the front of our dispatch board.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 hover:shadow-lg transition-all">
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">15% Discount On All Repairs</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Save 15% on any HVAC, plumbing, or electrical repair service across the entire metroplex.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 hover:shadow-lg transition-all">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">2 Free Precision Tune-Ups</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Includes full 21-point AC inspection before summer and comprehensive heating system safety tune-up before winter.
                </p>
              </div>

            </div>

            {/* CTA */}
            <div className="rounded-3xl bg-blue-950 text-white p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-xl">
              <h2 className="text-2xl sm:text-4xl font-black text-white mb-3">
                Join Over 18,000+ VIP Advantage Members
              </h2>
              <p className="text-slate-300 text-base mb-6 max-w-xl mx-auto">
                Only $14.95/month. Protect your equipment, lower energy bills, and avoid expensive emergency breakdowns.
              </p>
              <button
                type="button"
                onClick={() => setBookingModalOpen(true)}
                className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-black px-8 py-4 rounded-xl shadow-lg transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <span>Enroll Online Now</span>
                <svg className="w-4 h-4 text-slate-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </section>
      </main>

      <ChatSmsWidget />
      <BookingModal isOpen={bookingModalOpen} onClose={() => setBookingModalOpen(false)} defaultService="VIP Comfort Advantage Membership" />
      <Footer />
    </div>
  );
}
