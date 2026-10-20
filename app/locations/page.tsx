"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import TrustBar from "@/components/TrustBar";
import ChatSmsWidget from "@/components/ChatSmsWidget";
import BookingModal from "@/components/BookingModal";
import Footer from "@/components/Footer";
import { PHONE, PHONE_RAW, SERVICE_AREAS, LOGO_TEXT } from "@/config/site";

export default function LocationsPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedArea, setSelectedArea] = useState<string | null>(null);

  const handleBookArea = (area: string) => {
    setSelectedArea(area);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <Navbar onOpenQuote={() => setBookingModalOpen(true)} />

      <main className="flex-1">
        <section className="pt-28 pb-14 sm:pt-36 sm:pb-20 bg-slate-50 border-b border-slate-200 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-100 text-cyan-900 text-xs font-semibold uppercase tracking-wider mb-4 border border-cyan-200">
              <svg className="w-3.5 h-3.5 text-cyan-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Local Service Coverage</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight mb-4">
              Communities &amp; Neighborhoods We Serve
            </h1>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
              Our mobile wash rigs are dispatched daily across the region. Check our primary service zones below or call for same-week booking.
            </p>
          </div>
        </section>

        <TrustBar />

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Quick stats grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center">
                <div className="text-3xl font-extrabold text-cyan-600 mb-1">0%</div>
                <div className="text-sm font-bold text-slate-900">Zero Travel Surcharge</div>
                <p className="text-xs text-slate-500 mt-1">Standard rates apply across all listed zones</p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center">
                <div className="text-3xl font-extrabold text-slate-900 mb-1">48 Hrs</div>
                <div className="text-sm font-bold text-slate-900">Fast Scheduling</div>
                <p className="text-xs text-slate-500 mt-1">Typical arrival within 2-3 business days</p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center">
                <div className="text-3xl font-extrabold text-cyan-600 mb-1">100%</div>
                <div className="text-sm font-bold text-slate-900">On-Site Self-Contained</div>
                <p className="text-xs text-slate-500 mt-1">Truck-mounted water tanks &amp; pressure equipment</p>
              </div>
            </div>

            {/* Service Areas Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {SERVICE_AREAS.map((area, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-cyan-400 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center font-bold text-sm mb-4">
                      ✓
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">{area}</h3>
                    <p className="text-xs text-slate-500 mb-4">
                      Residential house washing, concrete surface restoration, roof soft wash, and commercial store cleaning.
                    </p>
                  </div>
                  <button
                    onClick={() => handleBookArea(area)}
                    className="w-full text-center py-2 px-3 bg-white hover:bg-cyan-600 hover:text-white text-slate-800 text-xs font-semibold rounded-lg border border-slate-200 transition-colors cursor-pointer"
                  >
                    Schedule in {area} &rarr;
                  </button>
                </div>
              ))}
            </div>

            {/* Coverage note */}
            <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-10 text-center">
              <h2 className="text-xl sm:text-2xl font-black mb-3">Don&apos;t see your neighborhood listed?</h2>
              <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto mb-6">
                We frequently travel to surrounding communities and rural estates. Reach out with your address and we will confirm service availability immediately.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => setBookingModalOpen(true)}
                  className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-6 py-2.5 rounded-full text-xs transition-all shadow-md cursor-pointer"
                >
                  Check My Address
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
