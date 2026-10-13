"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import TrustBar from "@/components/TrustBar";
import ChatSmsWidget from "@/components/ChatSmsWidget";
import BookingModal from "@/components/BookingModal";
import Footer from "@/components/Footer";

export default function AwardsPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <Navbar onOpenBooking={() => setBookingModalOpen(true)} />
      
      <main className="flex-1">
        <section className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-4">
              <svg className="w-3.5 h-3.5 fill-amber-700 text-amber-700" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Recognition &amp; Guarantees</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight mb-4">
              Awards, Accreditations &amp; Guarantees
            </h1>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
              Setting the benchmark in home service excellence, prompt dispatch, and ironclad homeowner guarantees.
            </p>
          </div>
        </section>

        <TrustBar />

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 text-center">
                <div className="w-16 h-16 bg-blue-900 text-white rounded-2xl flex items-center justify-center font-black text-xl mx-auto mb-4">
                  BBB
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">BBB A+ Accredited Business</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Maintaining an A+ rating with the Better Business Bureau for ethics, transparency, and superior customer resolution.
                </p>
              </div>

              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 text-center">
                <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">The 100% Pro Promise</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  100% Satisfaction Guarantee. If you are not completely satisfied with our repair, we return and make it right at no cost.
                </p>
              </div>

              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 text-center">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 fill-emerald-600 text-emerald-600" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">Dallas Morning News Top Pick</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Voted #1 Home Service Provider in DFW with over 40,208+ verified 5-star homeowner reviews.
                </p>
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
