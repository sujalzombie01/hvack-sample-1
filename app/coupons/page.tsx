"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import TrustBar from "@/components/TrustBar";
import ChatSmsWidget from "@/components/ChatSmsWidget";
import BookingModal from "@/components/BookingModal";
import Footer from "@/components/Footer";
import { PHONE, PHONE_RAW, LOGO_TEXT } from "@/config/site";

export default function CouponsPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState("Full House Wash $50 Off");

  const handleClaim = (offer: string) => {
    setSelectedOffer(offer);
    setBookingModalOpen(true);
  };

  const coupons = [
    {
      badge: "Most Popular",
      amount: "$50 OFF",
      title: "Complete House Soft Wash",
      desc: "Valid on whole-home exterior siding washes (vinyl, brick, stucco, or stone). Safe low-pressure removal of green algae and mildew.",
      code: "WASH50",
    },
    {
      badge: "Curb Appeal Special",
      amount: "$35 OFF",
      title: "Driveway & Concrete Cleaning",
      desc: "Professional commercial surface cleaning for driveways, entry sidewalks, and curbs. Removes oil stains, tire marks, and grime.",
      code: "DRIVE35",
    },
    {
      badge: "Roof Protection",
      amount: "$75 OFF",
      title: "Roof Soft Wash Algae Treatment",
      desc: "Gentle chemical wash eliminating black Gloeocapsa Magma roof streaks without voiding asphalt shingle manufacturer warranties.",
      code: "ROOF75",
    },
    {
      badge: "Wood & Deck",
      amount: "$60 OFF",
      title: "Deck & Fence Restoration Wash",
      desc: "Deep clean and wood brightening wash for cedar, pressure-treated pine, composite decks, and perimeter privacy fences.",
      code: "WOOD60",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <Navbar onOpenQuote={() => handleClaim("General Special Offer")} />

      <main className="flex-1">
        <section className="pt-28 pb-14 sm:pt-36 sm:pb-20 bg-slate-50 border-b border-slate-200 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-100 text-cyan-900 text-xs font-semibold uppercase tracking-wider mb-4 border border-cyan-200">
              <svg className="w-3.5 h-3.5 text-cyan-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              <span>Instant Exterior Cleaning Savings</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight mb-4">
              Exclusive Specials &amp; Seasonal Offers
            </h1>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
              Save big on your next pressure washing or soft washing service. Claim any voucher below when requesting your free quote.
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
                  className="bg-white rounded-3xl border-2 border-dashed border-cyan-400 p-8 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between relative overflow-hidden"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-black uppercase px-3 py-1 bg-cyan-100 text-cyan-900 rounded-full">
                      {c.badge}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      Promo Code: <strong className="text-slate-900">{c.code}</strong>
                    </span>
                  </div>

                  <div>
                    <div className="text-4xl sm:text-5xl font-black text-cyan-600 mb-2">
                      {c.amount}
                    </div>
                    <h3 className="text-xl font-black text-slate-900 mb-2">{c.title}</h3>
                    <p className="text-sm text-slate-600 mb-6 leading-relaxed">{c.desc}</p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-400">Limited time promotion</span>
                    <button
                      onClick={() => handleClaim(`${c.title} (${c.code})`)}
                      className="bg-slate-950 hover:bg-cyan-600 text-white text-xs font-bold px-4 py-2.5 rounded-full transition-all cursor-pointer shadow-xs"
                    >
                      Claim Offer &rarr;
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom info */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center text-xs text-slate-500 max-w-3xl mx-auto">
              * Coupons must be mentioned or selected at the time of quotation. Limit one promotional voucher per residential or commercial property per service visit. Cannot be combined with other volume discounts.
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
