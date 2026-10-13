"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import TrustBar from "@/components/TrustBar";
import ChatSmsWidget from "@/components/ChatSmsWidget";
import BookingModal from "@/components/BookingModal";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ReviewsPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("All");

  const customerReviews = [
    {
      name: "Marcus Vance",
      city: "Plano, TX",
      date: "Yesterday",
      rating: 5,
      badge: "Emergency AC Repair",
      text: "Our AC stopped cooling during a 104° Texas heatwave. The technician showed up within 75 minutes with all the necessary parts on the truck. Fixed the capacitor and charged freon in less than an hour! Highly recommend.",
    },
    {
      name: "Sarah Jenkins",
      city: "Dallas, TX (Highland Park)",
      date: "3 days ago",
      rating: 5,
      badge: "Refrigerant Leak Fix",
      text: "Clear Good-Better-Best options with transparent pricing. No high-pressure sales pitch. Saved $79 with the online coupon and my unit is running quieter than ever. Best HVAC service in Dallas.",
    },
    {
      name: "David Hernandez",
      city: "Fort Worth, TX",
      date: "5 days ago",
      rating: 5,
      badge: "Electrical Diagnostic",
      text: "The text message dispatch updates were unbelievable. I knew exactly when the tech was arriving and his name was Mike. Found a blown contactor in 10 minutes and had the air blowing ice cold.",
    },
    {
      name: "Emily Watson",
      city: "Frisco, TX",
      date: "1 week ago",
      rating: 5,
      badge: "Complete AC Tune-Up",
      text: "Courteous, wore shoe covers in the house, explained everything clearly. They have serviced our HVAC system for 4 years and we never have breakdowns.",
    },
    {
      name: "Robert Chang",
      city: "Arlington, TX",
      date: "1 week ago",
      rating: 5,
      badge: "Blower Motor Replacement",
      text: "Another company told me I needed a completely new $12,000 system. The technician tested the system, showed me only the motor was burnt out, and fixed it same-day for a fraction of the cost. Honest people!",
    },
    {
      name: "Jessica Miller",
      city: "McKinney, TX",
      date: "2 weeks ago",
      rating: 5,
      badge: "Emergency Service",
      text: "Called at 8 PM on a Sunday when our AC went out. Had a technician at our door by 9:15 PM. Truly 24/7 service as promised.",
    },
  ];

  const filteredReviews =
    selectedCity === "All"
      ? customerReviews
      : customerReviews.filter((r) => r.city.includes(selectedCity));

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-amber-400 selection:text-slate-950">
      
      {/* Sticky Header */}
      <Navbar onOpenBooking={() => setBookingModalOpen(true)} />

      <main className="flex-1">
        
        {/* Hero */}
        <section className="bg-slate-950 text-white py-16 text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <svg className="w-3.5 h-3.5 fill-amber-300 text-amber-300" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>4.9 Average Rating Across Dallas-Fort Worth</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
              33,336+ Real Customer Reviews
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
              Real homeowners, genuine experiences. See why local Texas families trust our certified technicians for emergency AC repair and dependable comfort.
            </p>
          </div>
        </section>

        {/* Trust Bar */}
        <TrustBar />

        {/* Reviews Grid & Filter */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
              {["All", "Plano", "Dallas", "Fort Worth", "Frisco", "Arlington", "McKinney"].map((city) => (
                <button
                  key={city}
                  type="button"
                  onClick={() => setSelectedCity(city)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    selectedCity === city
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {city === "All" ? "All DFW Reviews" : city}
                </button>
              ))}
            </div>

            {/* Reviews Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {filteredReviews.map((rev, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-lg transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-[11px] text-slate-400 font-medium">{rev.date}</span>
                    </div>
                    <p className="text-slate-700 text-sm leading-relaxed mb-6 italic">
                      &quot;{rev.text}&quot;
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-slate-900 text-sm">{rev.name}</div>
                      <div className="text-xs text-slate-500">{rev.city}</div>
                    </div>
                    <span className="text-xs bg-blue-100 text-blue-800 font-bold px-2 py-0.5 rounded">
                      {rev.badge}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Banner */}
            <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 text-center flex flex-col items-center">
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
                Experience 5-Star Service in Your Home Today
              </h3>
              <p className="text-slate-300 text-sm max-w-xl mb-6">
                Book online now and take advantage of our limited-time $79 repair discount with 100% satisfaction guarantee.
              </p>
              <button
                type="button"
                onClick={() => setBookingModalOpen(true)}
                className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-black px-8 py-4 rounded-xl shadow-xl transition-all"
              >
                Schedule Online Now &amp; Save $79
              </button>
            </div>

          </div>
        </section>

      </main>

      {/* Floating Chat / SMS Widget */}
      <ChatSmsWidget />

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        defaultService="AC Repair & Diagnosis"
      />

      {/* Footer */}
      <Footer />

    </div>
  );
}
