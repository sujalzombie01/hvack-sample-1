"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import TrustBar from "@/components/TrustBar";
import ChatSmsWidget from "@/components/ChatSmsWidget";
import BookingModal from "@/components/BookingModal";
import Footer from "@/components/Footer";

export default function ACRepairPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("AC Repair & Diagnosis");
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) setSelectedService(serviceName);
    setBookingModalOpen(true);
  };

  const faqs = [
    {
      q: "How quickly can a technician reach my Dallas-Fort Worth home?",
      a: "Our dispatch center monitors mobile trucks positioned throughout DFW. In emergency situations, our average arrival window is under 90 minutes from the time your booking is confirmed.",
    },
    {
      q: "What is your 'No Breakdown Guarantee'?",
      a: "If we repair any component on your AC system and that same part fails anytime during the active cooling season, we will return and replace it with zero diagnostic fee and zero labor charge.",
    },
    {
      q: "How does the $79 service call discount work?",
      a: "When you book online or mention this promotion to our phone dispatcher, $79 is deducted directly from your diagnostic or repair invoice when repair work is performed.",
    },
    {
      q: "What are the 'Good, Better, Best' repair options?",
      a: "Rather than pushing a single expensive option, our certified technician provides three transparent quotes: 'Good' (essential safe fix), 'Better' (fix + preventative tune-up), and 'Best' (maximum efficiency & extended warranty), letting you choose what matches your budget.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      
      {/* Sticky Header */}
      <Navbar onOpenBooking={() => handleOpenBooking("AC Repair & Diagnosis")} />

      <main className="flex-1">
        
        {/* Page Hero Header */}
        <section className="bg-slate-900 text-white py-12 lg:py-16 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-4">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <span className="text-amber-400">Cooling</span>
              <span>/</span>
              <span className="text-white">AC Repair Dallas-Fort Worth</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2">
                  Dallas-Fort Worth Certified Cooling Experts
                </span>
                <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
                  Expert Air Conditioning Repair &amp; Diagnostics
                </h1>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6 max-w-2xl">
                  Fast, accurate AC repairs backed by our &quot;Fixed Right Or It&apos;s Free&quot; guarantee. Stocked trucks ready for single-visit fixes anywhere in the DFW metroplex.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="button"
                    onClick={() => handleOpenBooking("AC Repair & Diagnosis")}
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-sm font-black text-slate-950 bg-amber-400 hover:bg-amber-500 shadow-sm cursor-pointer"
                  >
                    <span>Schedule AC Repair Now</span>
                    <svg className="w-4 h-4 text-slate-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                  <a
                    href="tel:2142672405"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700"
                  >
                    <span>(214) 267-2405</span>
                  </a>
                </div>
              </div>

              {/* Service Hero Image */}
              <div className="lg:col-span-5">
                <div className="relative rounded-xl overflow-hidden border border-slate-700 shadow-xl h-[320px] sm:h-[360px]">
                  <Image
                    src="/images/ac-service.jpg"
                    alt="Certified technician performing precision AC repair"
                    fill
                    priority
                    className="object-cover"
                  />
                  <div className="absolute bottom-3 left-3 right-3 bg-slate-900/95 p-3 rounded-lg border border-slate-700 flex justify-between items-center text-xs">
                    <span className="text-slate-300 font-semibold">TACLA #44891C Master Certified</span>
                    <span className="flex items-center gap-1 text-amber-400 font-bold">
                      <svg className="w-3.5 h-3.5 fill-amber-400 text-amber-400" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      4.9 (40,208+ Reviews)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <TrustBar />

        {/* Detailed 3 Common AC Problems Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight mb-2">
                Our Experts Can Repair Your Air Conditioning System Today!
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Whether your AC is blowing warm air, making strange noises, or failing to cycle on, our technicians quickly identify and resolve the root cause.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              
              {/* Problem 1 */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-950 mb-2">
                    Diagnosing Refrigerant Leaks
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed mb-4">
                    We track where the leak started and offer solutions. Low freon can freeze evaporator coils and destroy the compressor if not repaired and recharged to exact factory pressures.
                  </p>
                </div>
                <div className="text-[11px] font-bold text-blue-700 pt-3 border-t border-slate-200">
                  Electronic Sniffing &amp; Pressure Testing
                </div>
              </div>

              {/* Problem 2 */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-950 mb-2">
                    Fixing Electrical Issues
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed mb-4">
                    Finding wiring problems and restoring accurate temperature control. We test high-voltage contactors, capacitors, relays, and smart thermostats.
                  </p>
                </div>
                <div className="text-[11px] font-bold text-amber-700 pt-3 border-t border-slate-200">
                  Capacitors, Relays &amp; Breakers
                </div>
              </div>

              {/* Problem 3 */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-950 mb-2">
                    Replacing Faulty Parts
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed mb-4">
                    We use quality parts and tools to replace worn-out AC components. Fan motors, expansion valves, and coils are stocked directly on our mobile inventory trucks.
                  </p>
                </div>
                <div className="text-[11px] font-bold text-emerald-700 pt-3 border-t border-slate-200">
                  OEM Authentic Factory Parts
                </div>
              </div>

            </div>

            {/* Upfront Transparent Pricing Tiers (Good, Better, Best) */}
            <div className="mb-16">
              <div className="max-w-2xl mb-8">
                <span className="text-xs font-bold text-blue-700 uppercase tracking-widest block mb-1">
                  Transparent Estimates
                </span>
                <h3 className="text-2xl font-black text-slate-950 tracking-tight">
                  Clear Options (Good, Better, Best Pricing)
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                
                {/* Tier 1: Good */}
                <div className="bg-white rounded-xl p-6 border border-slate-300 flex flex-col justify-between shadow-xs">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Essential</span>
                    <h4 className="text-lg font-bold text-slate-950 mb-2">Good: Direct Repair</h4>
                    <p className="text-xs text-slate-600 mb-5">
                      Fixes the immediate primary issue to restore cold airflow right now.
                    </p>
                    <ul className="space-y-2 text-xs text-slate-700 mb-6 font-medium">
                      <li className="flex items-center gap-2">
                        <svg className="w-3.5 h-3.5 text-emerald-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                        <span>Direct part replacement</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-3.5 h-3.5 text-emerald-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                        <span>Safety voltage &amp; amp testing</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-3.5 h-3.5 text-emerald-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                        <span>1-Year Part &amp; Labor Warranty</span>
                      </li>
                    </ul>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleOpenBooking("AC Repair (Good Option)")}
                    className="w-full py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs transition-colors cursor-pointer"
                  >
                    Select Option
                  </button>
                </div>

                {/* Tier 2: Better */}
                <div className="bg-slate-900 text-white rounded-xl p-6 border-2 border-amber-400 shadow-md flex flex-col justify-between relative">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block mb-1">Most Selected</span>
                    <h4 className="text-lg font-bold text-white mb-2">Better: Fix &amp; Tune-Up</h4>
                    <p className="text-xs text-slate-300 mb-5">
                      Fixes primary fault plus precision 21-point system tune-up to prevent secondary failures.
                    </p>
                    <ul className="space-y-2 text-xs text-slate-200 mb-6 font-medium">
                      <li className="flex items-center gap-2">
                        <svg className="w-3.5 h-3.5 text-amber-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                        <span>OEM Heavy-Duty Part Replacement</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-3.5 h-3.5 text-amber-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                        <span>21-Point System Optimization</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-3.5 h-3.5 text-amber-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                        <span>Condensate Line Chemical Flush</span>
                      </li>
                      <li className="flex items-center gap-2 text-amber-300 font-bold">
                        <svg className="w-3.5 h-3.5 text-amber-300 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                        <span>3-Year No-Breakdown Guarantee</span>
                      </li>
                    </ul>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleOpenBooking("AC Repair (Better Option)")}
                    className="w-full py-2.5 rounded-lg bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs transition-colors cursor-pointer inline-flex items-center justify-center gap-1.5"
                  >
                    <span>Select Better Option</span>
                    <svg className="w-3.5 h-3.5 text-slate-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>

                {/* Tier 3: Best */}
                <div className="bg-white rounded-xl p-6 border border-slate-300 flex flex-col justify-between shadow-xs">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Maximum Protection</span>
                    <h4 className="text-lg font-bold text-slate-950 mb-2">Best: Total System Protection</h4>
                    <p className="text-xs text-slate-600 mb-5">
                      Complete component overhaul, surge protection, and annual VIP maintenance plan.
                    </p>
                    <ul className="space-y-2 text-xs text-slate-700 mb-6 font-medium">
                      <li className="flex items-center gap-2">
                        <svg className="w-3.5 h-3.5 text-emerald-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                        <span>Premium Grade OEM Replacement</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-3.5 h-3.5 text-emerald-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                        <span>Whole-Home HVAC Surge Protection</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-3.5 h-3.5 text-emerald-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                        <span>1-Year VIP Advantage Club Membership</span>
                      </li>
                      <li className="flex items-center gap-2 text-emerald-700 font-bold">
                        <svg className="w-3.5 h-3.5 text-emerald-700 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                        <span>Lifetime Workmanship Warranty</span>
                      </li>
                    </ul>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleOpenBooking("AC Repair (Best Option)")}
                    className="w-full py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs transition-colors cursor-pointer"
                  >
                    Select Option
                  </button>
                </div>

              </div>
            </div>

            {/* FAQs */}
            <div className="max-w-3xl mb-16">
              <h3 className="text-xl font-bold text-slate-950 mb-6">
                Frequently Asked Questions
              </h3>
              <div className="space-y-3">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="border border-slate-200 rounded-lg overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                      className="w-full px-5 py-3.5 text-left flex justify-between items-center font-bold text-slate-900 hover:text-blue-700 text-sm"
                    >
                      <span>{faq.q}</span>
                      <span className="text-slate-400 font-normal ml-2">
                        {activeFaq === idx ? "−" : "+"}
                      </span>
                    </button>
                    {activeFaq === idx && (
                      <div className="px-5 pb-4 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom CTA Banner */}
            <div className="bg-amber-400 text-slate-950 rounded-xl p-8 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-black text-slate-950 mb-1">
                  Ready for same-day AC repair? Save $79 on your service call today.
                </h3>
                <p className="text-xs text-slate-800 font-medium">
                  Dispatchers standing by 24/7 across Dallas, Fort Worth, Plano, and Frisco.
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleOpenBooking("AC Repair - $79 Offer")}
                className="bg-slate-950 hover:bg-slate-900 text-white font-black text-xs px-7 py-3.5 rounded-lg shadow-sm cursor-pointer whitespace-nowrap inline-flex items-center justify-center gap-2"
              >
                <span>Book Now &amp; Save $79</span>
                <svg className="w-3.5 h-3.5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>

          </div>
        </section>

      </main>

      <ChatSmsWidget />
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        defaultService={selectedService}
      />
      <Footer />

    </div>
  );
}
