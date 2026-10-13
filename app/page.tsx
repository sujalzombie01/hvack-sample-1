"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import TrustBar from "@/components/TrustBar";
import HeroSection from "@/components/HeroSection";
import ServiceDetailSection from "@/components/ServiceDetailSection";
import ChatSmsWidget from "@/components/ChatSmsWidget";
import BookingModal from "@/components/BookingModal";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("AC Repair & Diagnosis");

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-slate-950 selection:text-white">
      
      {/* 1. Floating Glassmorphic Pill Header */}
      <Navbar onOpenBooking={handleOpenBooking} />

      <main className="flex-1">
        {/* 2. Editorial Hero & Instant Booking */}
        <HeroSection onOpenBooking={() => handleOpenBooking("Emergency AC Repair")} />

        {/* 3. Stat Row (Trust Bar) */}
        <TrustBar />

        {/* 4. Service Detail & Up-Sell Section with Card Grids */}
        <ServiceDetailSection onOpenBooking={() => handleOpenBooking("AC Repair & Diagnosis")} />

        {/* 5. Case Studies / Verified Reviews Section */}
        <section id="reviews" className="py-12 sm:py-20 lg:py-28 bg-slate-50 border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-6">
              <div className="max-w-2xl">
                <div className="eyebrow-pill bg-white text-slate-800 border border-slate-200 mb-4 shadow-xs">
                  <span className="eyebrow-dot bg-emerald-500"></span>
                  <span>Client Outcomes</span>
                </div>
                <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950 leading-[1.15]">
                  Operational clarity, measurable comfort
                </h2>
              </div>
              <Link
                href="/reviews"
                className="meridian-btn bg-white hover:bg-slate-100 text-slate-950 border border-slate-200 pl-5 pr-1.5 py-1.5 shadow-xs shrink-0 self-start md:self-auto active:scale-95 transition-all"
              >
                <span className="pr-3 text-xs font-semibold tracking-wide">All 40,208+ Reviews</span>
                <div className="w-8 h-8 rounded-full bg-slate-950 text-white flex items-center justify-center text-xs">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
              </Link>
            </div>

            {/* Reviews / Case Study Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              
              {/* Card 1 */}
              <div className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      Plano, TX • Emergency Fix
                    </span>
                    <div className="flex items-center gap-1">
                      <div className="flex items-center text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-3 h-3 fill-amber-500 text-amber-500" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-amber-500 text-xs font-bold ml-0.5">5.0</span>
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-950 mb-2 leading-snug">
                    Restoring cooling during a 104° heatwave in under 75 minutes
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    &quot;Our AC stopped cooling late in the afternoon. The technician arrived with replacement capacitors directly on the van and had cold air blowing within an hour.&quot;
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span className="font-semibold text-slate-800">Marcus Vance</span>
                  <span className="text-emerald-700 font-bold">Verified Homeowner</span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      Dallas, TX • Refrigerant Fix
                    </span>
                    <div className="flex items-center gap-1">
                      <div className="flex items-center text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-3 h-3 fill-amber-500 text-amber-500" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-amber-500 text-xs font-bold ml-0.5">5.0</span>
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-950 mb-2 leading-snug">
                    Pinpointing a microscopic copper line leak with zero guesswork
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    &quot;Transparent Good, Better, Best pricing. They found where freon was leaking, sealed the coil, and saved us $79 with the online voucher. 10/10 experience.&quot;
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span className="font-semibold text-slate-800">Sarah Jenkins</span>
                  <span className="text-emerald-700 font-bold">Verified Homeowner</span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      Fort Worth, TX • Tune-Up
                    </span>
                    <div className="flex items-center gap-1">
                      <div className="flex items-center text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-3 h-3 fill-amber-500 text-amber-500" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-amber-500 text-xs font-bold ml-0.5">5.0</span>
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-950 mb-2 leading-snug">
                    Preventing secondary failures with precision 21-point optimization
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    &quot;The automated text dispatch notifications were fantastic. Knew the tech&apos;s arrival time to the minute. Courteous, professional, and wore shoe covers.&quot;
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span className="font-semibold text-slate-800">David Hernandez</span>
                  <span className="text-emerald-700 font-bold">Verified Homeowner</span>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* 6. Live Missed-Call & Instant Lead Recovery Showcase */}
        <section className="py-12 sm:py-20 lg:py-28 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: The Problem & Pitch Feature */}
              <div className="lg:col-span-6 flex flex-col items-start">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4 sm:mb-6 border border-emerald-500/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>Instant Lead Recovery Engine</span>
                </div>

                <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-4 sm:mb-5">
                  Never lose a $10,000 job to a missed call again.
                </h2>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 sm:mb-8">
                  When you&apos;re on a roof or elbow-deep in a condenser and miss a call, our automated system instantly texts the customer back within 3 seconds. It stops homeowners from calling your competitors on Google.
                </p>

                {/* 3 Metric Pills - Mobile Responsive Grid */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4 w-full mb-6 sm:mb-8 pt-4 border-t border-slate-800/80">
                  <div className="bg-slate-900/90 p-2.5 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-800 text-center sm:text-left">
                    <div className="text-lg sm:text-2xl font-black text-white mb-0.5">&lt; 3 Sec</div>
                    <div className="text-[10px] sm:text-[11px] text-slate-400 font-medium">Text Speed</div>
                  </div>
                  <div className="bg-slate-900/90 p-2.5 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-800 text-center sm:text-left">
                    <div className="text-lg sm:text-2xl font-black text-emerald-400 mb-0.5">100%</div>
                    <div className="text-[10px] sm:text-[11px] text-slate-400 font-medium">Retention</div>
                  </div>
                  <div className="bg-slate-900/90 p-2.5 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-800 text-center sm:text-left">
                    <div className="text-lg sm:text-2xl font-black text-amber-400 mb-0.5">24/7</div>
                    <div className="text-[10px] sm:text-[11px] text-slate-400 font-medium">Automated</div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleOpenBooking("Automated Dispatch Demo")}
                  className="meridian-btn bg-white hover:bg-slate-100 active:scale-[0.98] text-slate-950 pl-5 sm:pl-6 pr-2 py-2 shadow-lg cursor-pointer w-full sm:w-auto justify-between"
                >
                  <span className="pr-3 text-xs sm:text-sm font-bold tracking-tight">Test Live Dispatch Demo</span>
                  <div className="w-8 h-8 rounded-full bg-slate-950 text-white flex items-center justify-center text-xs">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </button>
              </div>

              {/* Right Column: Animated Smartphone Simulation */}
              <div className="lg:col-span-6 flex justify-center w-full">
                <div className="w-full max-w-[320px] xs:max-w-[340px] sm:max-w-sm bg-slate-900 rounded-[2.5rem] border-4 border-slate-800 p-4 sm:p-5 shadow-2xl relative overflow-hidden animate-float">
                  
                  {/* Phone Speaker Notch */}
                  <div className="w-20 sm:w-24 h-3.5 sm:h-4 bg-slate-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="w-8 h-1 bg-slate-700 rounded-full"></div>
                  </div>

                  {/* Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3 sm:mb-4 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                        ⚡
                      </div>
                      <div>
                        <div className="font-bold text-white text-xs">Live SMS Dispatch Bot</div>
                        <div className="text-[10px] text-emerald-400 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Active Now
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] text-slate-500">1:42 PM</span>
                  </div>

                  {/* Message Stream */}
                  <div className="space-y-2.5 sm:space-y-3 text-xs mb-4">
                    
                    {/* Event 1: Missed Call Alert */}
                    <div className="bg-rose-500/10 border border-rose-500/20 p-2.5 rounded-xl text-[10px] sm:text-[11px] text-rose-300 flex items-center gap-2 animate-fade-in">
                      <svg className="w-4 h-4 text-rose-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                      </svg>
                      <span><strong>Missed Call</strong> from (214) 892-4100</span>
                    </div>

                    {/* Event 2: Instant Auto-Text */}
                    <div className="bg-slate-800 text-slate-200 p-2.5 sm:p-3 rounded-2xl rounded-tl-xs max-w-[90%] shadow-xs animate-fade-in delay-75">
                      <div className="text-[9px] sm:text-[10px] text-emerald-400 font-bold mb-0.5">⚡ Auto-Reply (3.1s)</div>
                      Hey! This is the dispatch team. We&apos;re currently on a service call—do you have an emergency AC repair or need a quick quote?
                    </div>

                    {/* Event 3: Homeowner Reply */}
                    <div className="bg-blue-600 text-white p-2.5 sm:p-3 rounded-2xl rounded-tr-xs max-w-[90%] ml-auto shadow-xs animate-fade-in delay-150">
                      Our AC stopped blowing cold air, it&apos;s 86° inside! Can someone come out today?
                    </div>

                    {/* Event 4: Instant Booking Link */}
                    <div className="bg-slate-800 text-slate-200 p-2.5 sm:p-3 rounded-2xl rounded-tl-xs max-w-[90%] shadow-xs animate-fade-in delay-200">
                      <div className="text-[9px] sm:text-[10px] text-emerald-400 font-bold mb-0.5">⚡ Auto-Reply</div>
                      We have technician Unit #4 in your area! Click below to claim your spot &amp; apply your $79 instant repair voucher:
                      <div className="mt-2 pt-2 border-t border-slate-700/80">
                        <button
                          type="button"
                          onClick={() => handleOpenBooking("SMS Auto-Recovery Slot")}
                          className="w-full bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-slate-950 font-bold text-[10px] sm:text-[11px] py-1.5 px-2 rounded-lg text-center cursor-pointer transition-all"
                        >
                          Confirm Same-Day AC Repair ➔
                        </button>
                      </div>
                    </div>

                  </div>

                  {/* Input Simulation Bar */}
                  <div className="bg-slate-800/80 rounded-full px-3 py-1.5 sm:py-2 flex items-center justify-between text-xs text-slate-500 border border-slate-700">
                    <span className="text-[11px]">Type reply...</span>
                    <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px]">↑</span>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </section>

      </main>

      {/* Floating Chat / SMS Widget */}
      <ChatSmsWidget />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        defaultService={selectedService}
      />

      {/* Footer */}
      <Footer />

    </div>
  );
}
