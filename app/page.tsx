"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import TrustBar from "@/components/TrustBar";
import HeroSection from "@/components/HeroSection";
import ServiceDetailSection from "@/components/ServiceDetailSection";
import ChatSmsWidget from "@/components/ChatSmsWidget";
import QuoteModal from "@/components/QuoteModal";
import Footer from "@/components/Footer";
import {
  REVIEWS,
  FAQ,
  HOW_IT_WORKS,
  SERVICE_AREAS,
  PHONE,
  PHONE_RAW,
  TEXTBACK_HEADLINE,
  TEXTBACK_SUBHEAD,
  TEXTBACK_DEMO_MESSAGE,
} from "@/config/site";

// ── Gallery slots — replace with real client photos in /public/gallery/
const GALLERY_SLOTS = [
  { img: "/gallery/after-1.jpg", label: "House Washing",      desc: "Siding fully restored" },
  { img: "/gallery/after-2.jpg", label: "Driveway Cleaning",  desc: "Oil & algae removed" },
  { img: "/gallery/after-3.jpg", label: "Roof Soft Wash",     desc: "Black streaks gone" },
  { img: "/gallery/after-4.jpg", label: "Deck Cleaning",      desc: "Wood grain revealed" },
  { img: "/gallery/after-5.jpg", label: "Fence Cleaning",     desc: "Like-new appearance" },
  { img: "/gallery/after-6.jpg", label: "Patio Cleaning",     desc: "Stone colors restored" },
];

// ── Gallery Slider ─────────────────────────────────────────
function GallerySlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slot = GALLERY_SLOTS[activeIndex];

  return (
    <div>
      {/* Main image viewer */}
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-slate-100 h-[260px] xs:h-[320px] sm:h-[480px] mb-3 sm:mb-4 group">
        <Image
          key={slot.img}
          src={slot.img}
          alt={`Before and after — ${slot.label}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 80vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />

        {/* Label at bottom */}
        <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex flex-col xs:flex-row xs:items-end justify-between gap-1.5">
          <div>
            <div className="text-white font-bold text-sm sm:text-xl mb-0.5">{slot.label}</div>
            <div className="text-cyan-300 text-[11px] sm:text-xs font-medium">{slot.desc}</div>
          </div>
          <div className="self-start xs:self-auto bg-cyan-500 text-slate-950 text-[10px] sm:text-[11px] font-black px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full uppercase tracking-wide shrink-0">
            Before &amp; After ✓
          </div>
        </div>

        {/* Prev / Next arrows */}
        <button
          type="button"
          onClick={() => setActiveIndex((activeIndex - 1 + GALLERY_SLOTS.length) % GALLERY_SLOTS.length)}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 border border-white/30 flex items-center justify-center text-white transition-all"
          aria-label="Previous"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => setActiveIndex((activeIndex + 1) % GALLERY_SLOTS.length)}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 border border-white/30 flex items-center justify-center text-white transition-all"
          aria-label="Next"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Thumbnail strip */}
      <div className="grid grid-cols-6 gap-1.5 sm:gap-3">
        {GALLERY_SLOTS.map((s, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActiveIndex(i)}
            className={`relative rounded-lg sm:rounded-xl overflow-hidden border-2 transition-all duration-200 aspect-square ${
              activeIndex === i
                ? "border-cyan-500 shadow-lg shadow-cyan-500/20 scale-[1.03]"
                : "border-transparent hover:border-slate-300"
            }`}
          >
            <Image
              src={s.img}
              alt={s.label}
              fill
              className="object-cover"
              sizes="80px"
            />
            {activeIndex === i && (
              <div className="absolute inset-0 bg-cyan-500/20" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

// ── FAQ Accordion ─────────────────────────────────────────
function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {FAQ.map((item, i) => (
        <div key={i} className="rounded-xl border border-slate-200/90 bg-white overflow-hidden">
          <button
            type="button"
            className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            <span className="text-sm font-semibold text-slate-900">{item.q}</span>
            <svg
              className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndex === i && (
            <div className="px-5 pb-4 animate-fade-in">
              <p className="text-sm text-slate-600 leading-relaxed">{item.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────
export default function Home() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("House Washing");

  const handleOpenQuote = (serviceName?: string) => {
    if (serviceName) setSelectedService(serviceName);
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-900 font-sans selection:bg-slate-950 selection:text-white">

      {/* 1. Navbar */}
      <Navbar onOpenQuote={handleOpenQuote} />

      <main className="flex-1">

        {/* 2. Hero */}
        <HeroSection onOpenQuote={handleOpenQuote} />

        {/* 3. Trust Bar */}
        <TrustBar />

        {/* 4. Services Grid + Why Choose Us */}
        <ServiceDetailSection onOpenQuote={handleOpenQuote} />

        {/* 5. Before/After Gallery */}
        <section id="gallery" className="py-12 sm:py-20 lg:py-28 bg-slate-50 border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
              <div className="max-w-2xl">
                <div className="eyebrow-pill bg-white text-slate-800 border border-slate-200 mb-4 shadow-xs">
                  <span className="eyebrow-dot bg-cyan-500"></span>
                  <span>Before &amp; After Gallery</span>
                </div>
                <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950 leading-[1.15]">
                  See the difference a clean makes
                </h2>
              </div>
              <p className="text-sm text-slate-500 max-w-xs leading-relaxed">
                Real before &amp; after results across every service we offer.
              </p>
            </div>
            <GallerySlider />
          </div>
        </section>

        {/* 6. How It Works */}
        <section id="how-it-works" className="py-12 sm:py-20 lg:py-28 bg-white border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-16 max-w-2xl mx-auto">
              <div className="eyebrow-pill bg-slate-100 text-slate-800 border border-slate-200 mb-4 mx-auto inline-flex">
                <span className="eyebrow-dot bg-amber-500"></span>
                <span>How It Works</span>
              </div>
              <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950 leading-[1.15]">
                Clean results in 4 simple steps
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {HOW_IT_WORKS.map((item, i) => (
                <div key={i} className="relative rounded-2xl border border-slate-200/90 bg-white p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  {/* Step connector line (desktop only) */}
                  {i < HOW_IT_WORKS.length - 1 && (
                    <div className="hidden lg:block absolute top-10 -right-3 w-6 h-px bg-slate-200 z-10" />
                  )}
                  <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-200/60 flex items-center justify-center text-cyan-700 font-black text-lg mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-sm font-bold text-slate-950 mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 sm:mt-10 text-center">
              <button
                type="button"
                onClick={() => handleOpenQuote()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-950 hover:bg-cyan-700 active:scale-[0.98] text-white text-xs sm:text-sm font-semibold px-6 py-3.5 sm:px-8 sm:py-4 rounded-full shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
                id="how-it-works-cta"
              >
                Start with Step 1 — Get a Free Quote
                <svg className="w-4 h-4 text-cyan-300 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* 7. Reviews */}
        <section id="reviews" className="py-12 sm:py-20 lg:py-28 bg-slate-50 border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-6">
              <div className="max-w-2xl">
                <div className="eyebrow-pill bg-white text-slate-800 border border-slate-200 mb-4 shadow-xs">
                  <span className="eyebrow-dot bg-emerald-500"></span>
                  <span>Customer Reviews</span>
                </div>
                <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950 leading-[1.15]">
                  What our customers say
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 max-w-xs leading-relaxed">
                Replace placeholder reviews with real ones from Google, Facebook, or Nextdoor before going live.
              </p>
            </div>



            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {REVIEWS.map((review, i) => (
                <div key={i} className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                        {review.location} • {review.service}
                      </span>
                      {/* No star count / rating total rendered here */}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 italic">
                      &ldquo;{review.text}&rdquo;
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                    <span className="font-semibold text-slate-800">{review.author}</span>
                    <span className="text-emerald-700 font-bold">Verified Customer</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Missed-Call Text-Back */}
        <section className="py-12 sm:py-20 lg:py-28 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

              {/* Left Column */}
              <div className="lg:col-span-6 flex flex-col items-start">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4 sm:mb-6 border border-cyan-500/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                  </span>
                  <span>Missed-Call Text-Back</span>
                </div>

                <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-4 sm:mb-5">
                  {TEXTBACK_HEADLINE}
                </h2>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 sm:mb-8">
                  {TEXTBACK_SUBHEAD}
                </p>

                <div className="grid grid-cols-3 gap-2 sm:gap-4 w-full mb-6 sm:mb-8 pt-4 border-t border-slate-800/80">
                  <div className="bg-slate-900/90 p-2.5 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-800 text-center sm:text-left">
                    <div className="text-lg sm:text-2xl font-black text-white mb-0.5">&lt; 3 Sec</div>
                    <div className="text-[10px] sm:text-[11px] text-slate-400 font-medium">Text Speed</div>
                  </div>
                  <div className="bg-slate-900/90 p-2.5 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-800 text-center sm:text-left">
                    <div className="text-lg sm:text-2xl font-black text-cyan-400 mb-0.5">24/7</div>
                    <div className="text-[10px] sm:text-[11px] text-slate-400 font-medium">Automated</div>
                  </div>
                  <div className="bg-slate-900/90 p-2.5 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-800 text-center sm:text-left">
                    <div className="text-lg sm:text-2xl font-black text-amber-400 mb-0.5">0 Lost</div>
                    <div className="text-[10px] sm:text-[11px] text-slate-400 font-medium">Leads Missed</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Sample Demo Phone */}
              <div className="lg:col-span-6 flex justify-center w-full">
                <div className="w-full max-w-[320px] xs:max-w-[340px] sm:max-w-sm bg-slate-900 rounded-[2.5rem] border-4 border-slate-800 p-4 sm:p-5 shadow-2xl relative overflow-hidden animate-float">

                  {/* Notch */}
                  <div className="w-20 sm:w-24 h-3.5 sm:h-4 bg-slate-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="w-8 h-1 bg-slate-700 rounded-full"></div>
                  </div>

                  {/* Chat header */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3 sm:mb-4 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-xs">🚿</div>
                      <div>
                        <div className="font-bold text-white text-xs">Auto Text-Back — Sample Demo</div>
                        <div className="text-[10px] text-cyan-400 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                          Illustration Only
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] text-slate-500">12:07 PM</span>
                  </div>

                  {/* Messages */}
                  <div className="space-y-2.5 sm:space-y-3 text-xs mb-4">

                    <div className="bg-rose-500/10 border border-rose-500/20 p-2.5 rounded-xl text-[10px] sm:text-[11px] text-rose-300 flex items-center gap-2 animate-fade-in">
                      <svg className="w-4 h-4 text-rose-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                      </svg>
                      <span><strong>Missed Call</strong> from (555) 123-4567</span>
                    </div>

                    <div className="bg-slate-800 text-slate-200 p-2.5 sm:p-3 rounded-2xl rounded-tl-xs max-w-[90%] shadow-xs animate-fade-in delay-75">
                      <div className="text-[9px] sm:text-[10px] text-cyan-400 font-bold mb-0.5">⚡ Auto-Reply (2.8s)</div>
                      {TEXTBACK_DEMO_MESSAGE}
                    </div>

                    <div className="bg-blue-600 text-white p-2.5 sm:p-3 rounded-2xl rounded-tr-xs max-w-[90%] ml-auto shadow-xs animate-fade-in delay-150">
                      Yes! How much for house washing on a 2-story home?
                    </div>

                    <div className="bg-slate-800 text-slate-200 p-2.5 sm:p-3 rounded-2xl rounded-tl-xs max-w-[90%] shadow-xs animate-fade-in delay-200">
                      <div className="text-[9px] sm:text-[10px] text-cyan-400 font-bold mb-0.5">⚡ Auto-Reply</div>
                      Great! We can give you a free quote — just share your address and we&apos;ll get back to you within the hour. 🏠
                    </div>

                  </div>

                  {/* Input bar */}
                  <div className="bg-slate-800/80 rounded-full px-3 py-1.5 sm:py-2 flex items-center justify-between text-xs text-slate-500 border border-slate-700">
                    <span className="text-[11px]">Type reply...</span>
                    <span className="w-5 h-5 rounded-full bg-cyan-600 text-white flex items-center justify-center text-[10px]">↑</span>
                  </div>

                  {/* Demo label */}
                  <div className="mt-3 text-center text-[10px] text-slate-500 font-medium">
                    ☝️ This is a sample demo — not a real conversation
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 9. Service Areas */}
        <section id="service-areas" className="py-12 sm:py-20 lg:py-28 bg-white border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-14 max-w-2xl mx-auto">
              <div className="eyebrow-pill bg-slate-100 text-slate-800 border border-slate-200 mb-4 mx-auto inline-flex">
                <span className="eyebrow-dot bg-cyan-500"></span>
                <span>Service Areas</span>
              </div>
              <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950 leading-[1.15]">
                Proudly serving your community &amp; surrounding areas
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto">
              {SERVICE_AREAS.map((area, i) => (
                <div key={area} className={`rounded-xl p-3 text-center text-sm font-medium transition-colors ${
                  i === 0
                    ? "border-2 border-cyan-400 bg-cyan-50 text-cyan-800 font-bold"
                    : "border border-slate-200 bg-white text-slate-700 hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-800"
                }`}>
                  {area}
                </div>
              ))}
            </div>

            <p className="text-center text-sm text-slate-500 mt-6">
              Don&apos;t see your area?{" "}
              <a href={`tel:${PHONE_RAW}`} className="text-cyan-600 font-semibold hover:underline">
                Call us at {PHONE}
              </a>{" "}
              — we may still serve you.
            </p>
          </div>
        </section>

        {/* 10. FAQ */}
        <section id="faq" className="py-12 sm:py-20 lg:py-28 bg-slate-50 border-t border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-14">
              <div className="eyebrow-pill bg-white text-slate-800 border border-slate-200 mb-4 mx-auto inline-flex shadow-xs">
                <span className="eyebrow-dot bg-amber-500"></span>
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 leading-[1.15]">
                Common questions answered
              </h2>
            </div>
            <FAQAccordion />
          </div>
        </section>

        {/* 11. Quote Form Section */}
        <section id="quote" className="py-12 sm:py-20 lg:py-28 bg-white border-t border-slate-200/80">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-14">
              <div className="eyebrow-pill bg-slate-100 text-slate-800 border border-slate-200 mb-4 mx-auto inline-flex">
                <span className="eyebrow-dot bg-cyan-500"></span>
                <span>Free Quote</span>
              </div>
              <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 leading-[1.15] mb-3">
                Get your free estimate
              </h2>
              <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
                Fill out the form below and we&apos;ll follow up with a price. No obligation, no pressure.
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm">
              <button
                type="button"
                onClick={() => handleOpenQuote()}
                className="w-full bg-slate-950 hover:bg-cyan-700 active:scale-[0.98] text-white font-bold py-4 rounded-xl text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                id="section-quote-btn"
              >
                Open Free Quote Form
                <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              <p className="text-center text-xs text-slate-400 mt-3">
                Or call us directly: <a href={`tel:${PHONE_RAW}`} className="text-cyan-600 font-semibold hover:underline">{PHONE}</a>
              </p>
            </div>
          </div>
        </section>

      </main>

      {/* Floating SMS Widget */}
      <ChatSmsWidget />

      {/* Sticky Mobile Bar */}
      <div className="fixed bottom-0 inset-x-0 z-40 sm:hidden flex border-t border-slate-200 bg-white shadow-2xl">
        <a
          href={`tel:${PHONE_RAW}`}
          className="flex-1 flex items-center justify-center gap-2 py-3 text-sm font-bold text-slate-900 hover:bg-slate-50 transition-colors border-r border-slate-200"
          id="mobile-sticky-call"
        >
          <svg className="w-4 h-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Call Now
        </a>
        <a
          href={`sms:${PHONE_RAW}`}
          className="flex-1 flex items-center justify-center gap-2 py-3 text-sm font-bold text-white bg-slate-950 hover:bg-cyan-700 transition-colors"
          id="mobile-sticky-text"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          Text Us
        </a>
      </div>

      {/* Quote Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        defaultService={selectedService}
      />

      {/* Footer */}
      <Footer />

    </div>
  );
}
