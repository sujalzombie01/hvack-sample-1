"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import TrustBar from "@/components/TrustBar";
import ChatSmsWidget from "@/components/ChatSmsWidget";
import BookingModal from "@/components/BookingModal";
import Footer from "@/components/Footer";

export default function FAQPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "What areas of Dallas-Fort Worth do you serve?",
      a: "We service the entire Dallas-Fort Worth metroplex, including Dallas, Fort Worth, Plano, Frisco, Arlington, McKinney, Garland, Irving, Colleyville, Southlake, and surrounding communities.",
    },
    {
      q: "Do you offer 24/7 emergency service?",
      a: "Yes! Our live dispatch center operates 24 hours a day, 7 days a week, 365 days a year. Call (214) 267-2405 anytime for urgent HVAC, plumbing, or electrical breakdowns.",
    },
    {
      q: "How does the 'Good, Better, Best' pricing model work?",
      a: "Our technicians perform a thorough diagnosis and provide you with three clear, upfront price options in writing before any repair work begins. You choose the option that fits your budget.",
    },
    {
      q: "What is your 100% Satisfaction Guarantee?",
      a: "If you are not 100% satisfied with our workmanship or service, we will return and fix the problem for free until you are happy, or provide a full refund.",
    },
    {
      q: "How do I claim the $79 service call discount?",
      a: "Simply book online through our scheduling system or mention code MS-79 to our telephone dispatcher when scheduling your repair.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <Navbar onOpenBooking={() => setBookingModalOpen(true)} />
      
      <main className="flex-1">
        <section className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-200/70 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-4 border border-slate-300/50">
              <svg className="w-3.5 h-3.5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Help Center &amp; Knowledge Base</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
              Find fast answers about our AC repair, pricing tiers, emergency dispatch, and warranties.
            </p>
          </div>
        </section>

        <TrustBar />

        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-4 mb-16">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50/50 transition-all hover:border-slate-300">
                  <button
                    type="button"
                    onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center font-bold text-slate-900 hover:text-blue-700 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className="text-xl text-slate-400 font-normal ml-4">
                      {openIdx === idx ? "−" : "+"}
                    </span>
                  </button>
                  {openIdx === idx && (
                    <div className="px-6 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-10 text-center shadow-lg border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-2">Have a question not listed here?</h3>
              <p className="text-sm text-slate-400 mb-6 max-w-md mx-auto">Our live Texas dispatch team is standing by 24/7/365 to assist you.</p>
              <a
                href="tel:2142672405"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-950 font-bold px-7 py-3.5 rounded-full transition-transform hover:scale-[1.02] shadow-sm text-xs"
              >
                <span>Call (214) 267-2405</span>
                <svg className="w-3.5 h-3.5 text-slate-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
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
