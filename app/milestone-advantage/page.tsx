"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import TrustBar from "@/components/TrustBar";
import ChatSmsWidget from "@/components/ChatSmsWidget";
import BookingModal from "@/components/BookingModal";
import Footer from "@/components/Footer";
import { PHONE, PHONE_RAW, LOGO_TEXT } from "@/config/site";

export default function MilestoneAdvantagePage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const perks = [
    {
      title: "Priority Seasonal Scheduling",
      desc: "Lock in prime spring and fall exterior wash dates before our public calendar fills up for peak pollen and holiday seasons.",
      icon: (
        <svg className="w-6 h-6 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "15% Member Discount on Add-Ons",
      desc: "Enjoy 15% savings across every secondary service: driveway cleaning, roof soft washing, deck brightening, and gutter clearing.",
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Free Downspout & Gutter Flush",
      desc: "Receive complimentary downspout inspection and clearing with every annual whole-home exterior soft wash package.",
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      ),
    },
    {
      title: "Algae Retreatment Warranty",
      desc: "If mildew, algae spores, or moss begin reappearing within 6 months, our technicians come back and retreat the area free of charge.",
      icon: (
        <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Automated Maintenance Reminders",
      desc: "Never worry about curb appeal slipping away. We send gentle reminders ahead of seasonal weather shifts so your home always sparkles.",
      icon: (
        <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
    },
    {
      title: "Transferable Property Value",
      desc: "Selling your home? Your annual maintenance certificate transfers to the buyer, showcasing verified exterior upkeep to appraisers.",
      icon: (
        <svg className="w-6 h-6 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <Navbar onOpenQuote={() => setBookingModalOpen(true)} />

      <main className="flex-1">
        {/* Header */}
        <section className="pt-28 pb-14 sm:pt-36 sm:pb-20 bg-slate-50 border-b border-slate-200 text-center">
          <div className="max-w-3xl mx-auto px-4">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-100 text-cyan-900 text-xs font-semibold uppercase tracking-wider mb-4 border border-cyan-200">
              <svg className="w-3.5 h-3.5 text-cyan-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <span>Exterior Care Program</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight mb-4">
              The Clean Home Club™ Membership
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Year-round exterior care for your property. Protect your home from algae damage, maintain peak curb appeal, and receive exclusive member-only discounts.
            </p>
          </div>
        </section>

        <TrustBar />

        {/* Membership Perks */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {perks.map((p, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 border border-slate-200 rounded-3xl p-8 hover:shadow-lg hover:border-cyan-400 transition-all"
                >
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-xs border border-slate-100">
                    {p.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{p.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA card */}
            <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">Join The Clean Home Club</h2>
              <p className="text-slate-300 text-xs sm:text-sm mb-6 max-w-xl mx-auto">
                Ask about our annual exterior maintenance package when getting your free quote, or speak to your technician during your next wash.
              </p>
              <button
                onClick={() => setBookingModalOpen(true)}
                className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-8 py-3 rounded-full text-xs transition-all shadow-md cursor-pointer"
              >
                Inquire About Membership
              </button>
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
