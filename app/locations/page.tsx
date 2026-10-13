"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import TrustBar from "@/components/TrustBar";
import ChatSmsWidget from "@/components/ChatSmsWidget";
import BookingModal from "@/components/BookingModal";
import Footer from "@/components/Footer";

export default function LocationsPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Dallas");

  const cities = [
    { name: "Dallas", trucks: 14, zipExample: "75201, 75204, 75214" },
    { name: "Fort Worth", trucks: 12, zipExample: "76102, 76107, 76109" },
    { name: "Plano", trucks: 9, zipExample: "75023, 75024, 75093" },
    { name: "Frisco", trucks: 8, zipExample: "75034, 75035, 75036" },
    { name: "Arlington", trucks: 10, zipExample: "76001, 76010, 76017" },
    { name: "Garland", trucks: 7, zipExample: "75040, 75042, 75044" },
    { name: "Irving", trucks: 8, zipExample: "75038, 75039, 75062" },
    { name: "McKinney", trucks: 6, zipExample: "75069, 75070, 75071" },
    { name: "Colleyville", trucks: 5, zipExample: "76034" },
    { name: "Southlake", trucks: 5, zipExample: "76092" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <Navbar onOpenBooking={() => setBookingModalOpen(true)} />
      
      <main className="flex-1">
        <section className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-200/70 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-4 border border-slate-300/60">
              <svg className="w-3.5 h-3.5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Rapid DFW Local Dispatch</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight mb-4">
              Local HVAC &amp; Heating Service Locations
            </h1>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
              With mobile hubs positioned throughout the Dallas-Fort Worth metroplex, our licensed technicians are always just minutes away.
            </p>
          </div>
        </section>

        <TrustBar />

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {cities.map((city, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 rounded-3xl p-6 border border-slate-200 hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-xl font-black text-slate-900">{city.name}, TX</h3>
                      <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        {city.trucks} Trucks Active
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mb-4">
                      Serving ZIPs: {city.zipExample} &amp; surrounding neighborhoods.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCity(city.name);
                      setBookingModalOpen(true);
                    }}
                    className="w-full py-2.5 bg-white hover:bg-slate-50 text-slate-900 font-semibold text-xs rounded-xl border border-slate-200 transition-colors cursor-pointer inline-flex items-center justify-center gap-1.5"
                  >
                    <span>Book in {city.name}</span>
                    <svg className="w-3.5 h-3.5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
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
        defaultService={`HVAC Service in ${selectedCity}`}
      />
      <Footer />
    </div>
  );
}
