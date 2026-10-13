"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import TrustBar from "@/components/TrustBar";
import ChatSmsWidget from "@/components/ChatSmsWidget";
import BookingModal from "@/components/BookingModal";
import Footer from "@/components/Footer";

export default function CouponsPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState("AC Repair $79 Off");

  const handleClaim = (offer: string) => {
    setSelectedOffer(offer);
    setBookingModalOpen(true);
  };

  const coupons = [
    {
      badge: "Most Popular",
      amount: "$79 OFF",
      title: "Any AC or Heating Repair",
      desc: "Valid on any completed HVAC repair. Mention code MS-79 when booking online or by phone.",
      code: "MS-79",
    },
    {
      badge: "Seasonal Special",
      amount: "$49 TUNE-UP",
      title: "Complete 21-Point AC Precision Inspection",
      desc: "Ensure maximum cooling efficiency and prevent mid-summer breakdowns. Normally $129.",
      code: "MS-TUNE49",
    },
    {
      badge: "Replacement",
      amount: "$500 OFF",
      title: "Complete New HVAC System Installation",
      desc: "High-efficiency 16+ SEER systems from top brands with 10-year warranty included.",
      code: "MS-NEW500",
    },
    {
      badge: "Plumbing",
      amount: "$65 OFF",
      title: "Drain Cleaning or Water Heater Service",
      desc: "Clear clogs fast or repair water heater elements. Same-day service available.",
      code: "MS-PLUMB65",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <Navbar onOpenBooking={() => handleClaim("General Coupon")} />
      
      <main className="flex-1">
        <section className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-4 border border-amber-200">
              <svg className="w-3.5 h-3.5 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              <span>Verified DFW Homeowner Savings</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight mb-4">
              Exclusive HVAC Coupons &amp; Special Offers
            </h1>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
              Save big on your next service call. Claim any coupon below and apply it directly to your appointment.
            </p>
          </div>
        </section>

        <TrustBar />

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {coupons.map((c, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl border-2 border-dashed border-amber-400 p-8 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between relative overflow-hidden"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-black uppercase px-3 py-1 bg-amber-100 text-amber-900 rounded-full">
                      {c.badge}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      Promo Code: <strong className="text-slate-900">{c.code}</strong>
                    </span>
                  </div>

                  <div>
                    <div className="text-4xl sm:text-5xl font-black text-blue-900 mb-2">
                      {c.amount}
                    </div>
                    <h3 className="text-xl font-black text-slate-900 mb-2">{c.title}</h3>
                    <p className="text-sm text-slate-600 mb-6 leading-relaxed">{c.desc}</p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-400">Expires end of month</span>
                    <button
                      type="button"
                      onClick={() => handleClaim(c.title + " (" + c.code + ")")}
                      className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-5 py-2.5 rounded-xl cursor-pointer inline-flex items-center gap-1.5"
                    >
                      <span>Claim Voucher</span>
                      <svg className="w-3.5 h-3.5 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <ChatSmsWidget />
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        defaultService={selectedOffer}
      />
      <Footer />
    </div>
  );
}
