"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import TrustBar from "@/components/TrustBar";
import ChatSmsWidget from "@/components/ChatSmsWidget";
import BookingModal from "@/components/BookingModal";
import Footer from "@/components/Footer";
import { PHONE, PHONE_RAW, LOGO_TEXT } from "@/config/site";

export default function HouseWashingServicePage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState("Full House Soft Wash");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleOpenBooking = (tier: string) => {
    setSelectedTier(tier);
    setBookingModalOpen(true);
  };

  const tiers = [
    {
      name: "Essential Wash",
      badge: "Standard",
      price: "$249 - $349",
      ideal: "Great for single-story homes with light surface dirt",
      features: [
        "Exterior siding low-pressure soft wash",
        "Targeted algae & mildew eradication",
        "Landscaping pre-rinse & post-rinse",
        "Gutter exterior rinse",
        "Eco-friendly pet-safe surfactants",
      ],
      popular: false,
    },
    {
      name: "Full Exterior Restoration",
      badge: "Most Popular",
      price: "$399 - $549",
      ideal: "Ideal for 2-story homes, stucco, or heavy mildew buildup",
      features: [
        "Complete 360° exterior home soft wash",
        "Porches, overhangs, soffits & fascia",
        "Detailed gutter face brightening",
        "Front entryway & steps deep clean",
        "Plant root-zone neutralizing treatment",
        "6-Month algae-free warranty guarantee",
      ],
      popular: true,
    },
    {
      name: "Estate Curb Appeal Package",
      badge: "Best Value",
      price: "$599 - $799",
      ideal: "Whole-property transformation for total curb appeal",
      features: [
        "Full House Soft Wash (all levels & siding types)",
        "Driveway & front walkway rotary surface wash",
        "Back patio or deck wash included",
        "Window exterior spot-free rinse",
        "Comprehensive 12-Month algae barrier treatment",
        "Priority VIP scheduling guarantee",
      ],
      popular: false,
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Property & Garden Protection",
      desc: "We cover sensitive outdoor outlets, tape security cameras, and saturate flower beds and grass root zones with water to buffer against runoff.",
    },
    {
      num: "02",
      title: "Eco-Friendly Solution Dwell",
      desc: "We spray specialized biodegradable cleansers at low pressure (<300 PSI) that dissolve green algae, lichen, and mildew down to the cellular roots.",
    },
    {
      num: "03",
      title: "Gentle Low-Pressure Rinse",
      desc: "Using high-volume, low-pressure fresh water, we rinse away all dead organic growth and road grime without damaging mortar or paint.",
    },
    {
      num: "04",
      title: "Final Walkthrough & Neutralizer",
      desc: "A final plant rinse is performed, followed by a quality inspection. You review the stunning results before we consider the job done.",
    },
  ];

  const serviceFaqs = [
    {
      q: "Will soft washing take the paint off my home?",
      a: "No! High pressure (power washing) can peel paint and etch wood, which is why we never use high pressure on siding. Our soft wash system operates below 300 PSI (similar to a heavy garden hose spray) and lets our biodegradable chemistry do the heavy lifting.",
    },
    {
      q: "Can you wash stucco, vinyl, brick, and hardy plank?",
      a: "Yes. Our technicians adjust the surfactant ratio and spray tip specifically for each substrate, ensuring safe and thorough cleaning whether your home is vinyl siding, painted wood, brick, or delicate synthetic stucco (EIFS).",
    },
    {
      q: "How long will the house stay clean?",
      a: "Because soft washing kills the microscopic algae spores rather than just blasting off the top layer, results typically last 2 to 3 times longer than standard pressure washing — often 18 to 24 months depending on tree cover.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <Navbar onOpenQuote={() => handleOpenBooking("House Washing")} />

      <main className="flex-1">
        {/* Breadcrumb & Hero */}
        <section className="bg-slate-950 text-white py-14 sm:py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/gallery/after-1.jpg"
              alt="House Soft Washing"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/40"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <span>/</span>
              <span className="text-cyan-400">House Soft Washing</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-4">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                  Low Pressure • 100% Surface Safe
                </div>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4">
                  Gentle Soft Wash For Your Home&apos;s Exterior
                </h1>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
                  Safely remove unsightly green algae, black mold, oxidation, and years of road grime from vinyl siding, brick, stucco, and wood trim — guaranteed without surface damage.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => handleOpenBooking("House Washing")}
                    className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-7 py-3.5 rounded-full text-sm transition-all shadow-lg hover:shadow-cyan-500/25 cursor-pointer"
                  >
                    Get An Instant Quote
                  </button>
                  <a
                    href={`tel:${PHONE_RAW}`}
                    className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-sm backdrop-blur-xs border border-white/10 transition-all"
                  >
                    <span>Call {PHONE}</span>
                  </a>
                </div>
              </div>

              {/* Quick Spec Card */}
              <div className="lg:col-span-5">
                <div className="bg-slate-900/90 backdrop-blur-md rounded-3xl border border-slate-800 p-6 sm:p-8">
                  <h3 className="text-lg font-bold text-white mb-4">Service Highlights</h3>
                  <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                    <li className="flex items-start gap-2.5">
                      <span className="text-cyan-400 font-bold">✓</span>
                      <span>Zero high-pressure risk to vinyl, mortar, or stucco</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-cyan-400 font-bold">✓</span>
                      <span>Landscaping &amp; shrub pre-wetting &amp; plant neutralizers</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-cyan-400 font-bold">✓</span>
                      <span>Commercial biodegradable, pet-friendly cleaning agents</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-cyan-400 font-bold">✓</span>
                      <span>Comprehensive 100% Clean Touch-Up Guarantee</span>
                    </li>
                  </ul>
                  <div className="mt-6 pt-5 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                    <span>Average Duration: 2-3 hours</span>
                    <span className="text-cyan-400 font-semibold">Same-Week Scheduling</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TrustBar />

        {/* Pricing & Service Packages */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-cyan-600 font-bold text-xs uppercase tracking-wider mb-2 block">
                Upfront &amp; Transparent
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight mb-4">
                Transparent Service Packages
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                No hidden charges or surprises. Choose the package that matches your home&apos;s size and exterior needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                    tier.popular
                      ? "bg-slate-950 text-white shadow-2xl ring-2 ring-cyan-500 scale-102"
                      : "bg-slate-50 text-slate-900 border border-slate-200 hover:shadow-lg"
                  }`}
                >
                  {tier.popular && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-cyan-500 text-slate-950 text-[11px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm">
                      {tier.badge}
                    </span>
                  )}

                  <div>
                    <h3 className="text-xl font-bold mb-1">{tier.name}</h3>
                    <p className={`text-xs mb-6 ${tier.popular ? "text-slate-300" : "text-slate-500"}`}>
                      {tier.ideal}
                    </p>

                    <div className="text-3xl font-extrabold mb-6 tracking-tight">
                      {tier.price}
                      <span className={`text-xs font-normal ml-1.5 ${tier.popular ? "text-slate-400" : "text-slate-500"}`}>
                        est. range
                      </span>
                    </div>

                    <ul className="space-y-3 text-xs mb-8">
                      {tier.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className={tier.popular ? "text-cyan-400" : "text-cyan-600"}>✓</span>
                          <span className={tier.popular ? "text-slate-200" : "text-slate-700"}>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => handleOpenBooking(tier.name)}
                    className={`w-full py-3 rounded-full text-xs font-bold transition-all cursor-pointer shadow-xs ${
                      tier.popular
                        ? "bg-cyan-500 hover:bg-cyan-400 text-slate-950"
                        : "bg-slate-950 hover:bg-cyan-600 text-white"
                    }`}
                  >
                    Select {tier.name}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4-Step Process */}
        <section className="py-16 bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-cyan-600 font-bold text-xs uppercase tracking-wider mb-2 block">
                How It Works
              </span>
              <h2 className="text-3xl font-black text-slate-950 tracking-tight">
                Our Safe 4-Step Soft Wash Process
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((st) => (
                <div key={st.num} className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs">
                  <div className="text-2xl font-black text-cyan-600 mb-2">{st.num}</div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{st.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{st.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 text-center mb-10">
              House Washing Questions
            </h2>
            <div className="space-y-4 mb-12">
              {serviceFaqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="border border-slate-200 rounded-2xl p-6 bg-slate-50/60"
                >
                  <h4 className="text-sm font-bold text-slate-900 mb-2">{faq.q}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={() => handleOpenBooking("House Washing")}
                className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-8 py-3.5 rounded-full text-xs transition-all shadow-md cursor-pointer"
              >
                Book Your House Soft Wash Today
              </button>
            </div>
          </div>
        </section>
      </main>

      <ChatSmsWidget />
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialService={selectedTier}
      />
      <Footer />
    </div>
  );
}
