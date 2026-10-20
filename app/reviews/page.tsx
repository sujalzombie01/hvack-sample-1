"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import TrustBar from "@/components/TrustBar";
import ChatSmsWidget from "@/components/ChatSmsWidget";
import BookingModal from "@/components/BookingModal";
import Footer from "@/components/Footer";
import { PHONE, PHONE_RAW, LOGO_TEXT } from "@/config/site";

export default function ReviewsPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [filterService, setFilterService] = useState("All");

  const customerReviews = [
    {
      name: "Marcus Vance",
      role: "Homeowner",
      date: "Yesterday",
      rating: 5,
      service: "House Soft Washing",
      text: "Our two-story home had years of green algae buildup on the north siding. The crew used low pressure soft washing that took off all the mold without touching our landscaping or paint. Looks like a brand new build!",
    },
    {
      name: "Sarah Jenkins",
      role: "Residential Client",
      date: "3 days ago",
      rating: 5,
      service: "Driveway & Concrete Cleaning",
      text: "Night and day difference on our stamped concrete driveway and front walkway. All the oil drips and tire marks completely vanished with their rotary surface cleaner. Best exterior cleaning investment ever.",
    },
    {
      name: "David Hernandez",
      role: "Property Owner",
      date: "5 days ago",
      rating: 5,
      service: "Roof Soft Wash",
      text: "We had heavy black streaks across our roof shingles. Another contractor suggested roof replacement, but this team treated the streaks with low-pressure soft wash. Shingles look pristine and saved us thousands.",
    },
    {
      name: "Emily Watson",
      role: "Verified Customer",
      date: "1 week ago",
      rating: 5,
      service: "Deck & Fence Cleaning",
      text: "Our weathered cedar privacy fence and wood back patio had turned dark grey. Their wash and wood brightening restored the natural honey grain. Courteous crew, on-time arrival, and clean work area.",
    },
    {
      name: "Robert Chang",
      role: "Commercial Manager",
      date: "1 week ago",
      rating: 5,
      service: "Commercial Storefront",
      text: "Scheduled evening pressure washing for our retail center sidewalks and dumpster pad. They arrived on time, used hot water degreasing, and left the entire entrance spotless for morning shoppers.",
    },
    {
      name: "Jessica Miller",
      role: "Homeowner",
      date: "2 weeks ago",
      rating: 5,
      service: "Gutter Brightening & Wash",
      text: "Fast quote, transparent pricing, and zero hassle. The crew was respectful of our flower beds and covered our outdoor electronics. Our gutters and soffits are gleaming white again.",
    },
  ];

  const filtered = filterService === "All"
    ? customerReviews
    : customerReviews.filter(r => r.service.toLowerCase().includes(filterService.toLowerCase()));

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <Navbar onOpenQuote={() => setBookingModalOpen(true)} />

      <main className="flex-1">
        {/* Header Section */}
        <section className="pt-28 pb-14 sm:pt-36 sm:pb-20 bg-slate-50 border-b border-slate-200 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-100 text-cyan-900 text-xs font-semibold uppercase tracking-wider mb-4 border border-cyan-200">
              <svg className="w-3.5 h-3.5 text-cyan-700" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>Verified Homeowner Feedback</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight mb-4">
              Real Customer Transformations &amp; Reviews
            </h1>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
              Read authentic feedback from local homeowners and property managers who trust our exterior cleaning team.
            </p>
          </div>
        </section>

        <TrustBar />

        {/* Reviews Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Filter buttons */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
              {["All", "House", "Driveway", "Roof", "Deck", "Commercial"].map((item) => (
                <button
                  key={item}
                  onClick={() => setFilterService(item)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    filterService === item
                      ? "bg-slate-950 text-white shadow-xs"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {item === "All" ? "All Reviews" : item}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {filtered.map((rev, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:shadow-lg transition-all"
                >
                  <div>
                    {/* Stars and Service Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex text-amber-400 gap-1">
                        {[...Array(rev.rating)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-[11px] font-semibold text-cyan-800 bg-cyan-100/70 px-2.5 py-0.5 rounded-full">
                        {rev.service}
                      </span>
                    </div>

                    <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-6 italic">
                      &ldquo;{rev.text}&rdquo;
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-slate-900">{rev.name}</div>
                      <div className="text-[11px] text-slate-500">{rev.role}</div>
                    </div>
                    <span className="text-[11px] text-slate-400">{rev.date}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-black mb-3">Ready For Your Own Transformation?</h2>
              <p className="text-slate-300 text-xs sm:text-sm mb-6 max-w-xl mx-auto">
                Get an instant quote for your property with our fast online form or phone inquiry.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => setBookingModalOpen(true)}
                  className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-7 py-3 rounded-full text-xs transition-all shadow-md cursor-pointer"
                >
                  Get A Free Quote
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
