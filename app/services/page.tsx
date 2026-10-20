"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import TrustBar from "@/components/TrustBar";
import ChatSmsWidget from "@/components/ChatSmsWidget";
import BookingModal from "@/components/BookingModal";
import Footer from "@/components/Footer";
import { SERVICES, PHONE, PHONE_RAW, LOGO_TEXT } from "@/config/site";

export default function ServicesIndexPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("House Washing");

  const handleBook = (title: string) => {
    setSelectedService(title);
    setBookingModalOpen(true);
  };

  const serviceImages: Record<string, string> = {
    "house-washing": "/gallery/after-1.jpg",
    "driveway-concrete": "/gallery/after-2.jpg",
    "roof-soft-washing": "/gallery/after-3.jpg",
    "deck-fence": "/gallery/after-4.jpg",
    "patio-cleaning": "/gallery/after-6.jpg",
    "gutter-brightening": "/gallery/after-5.jpg",
    "commercial-storefronts": "/images/services-overview.jpg",
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <Navbar onOpenQuote={() => setBookingModalOpen(true)} />

      <main className="flex-1">
        {/* Header */}
        <section className="pt-28 pb-14 sm:pt-36 sm:pb-20 bg-slate-50 border-b border-slate-200 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-100 text-cyan-900 text-xs font-semibold uppercase tracking-wider mb-4 border border-cyan-200">
              <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
              <span>Full-Service Exterior Cleaning</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight mb-4">
              Professional Exterior Cleaning Services
            </h1>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
              From residential low-pressure house washing to commercial flatwork cleaning, we deliver spotless results that elevate your curb appeal.
            </p>
          </div>
        </section>

        <TrustBar />

        {/* Services List */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {SERVICES.map((service) => {
                const img = serviceImages[service.id] || "/gallery/house-wash.jpg";
                return (
                  <div
                    key={service.id}
                    className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-cyan-300 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      {/* Image container */}
                      <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                        <Image
                          src={img}
                          alt={service.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
                        <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs text-slate-900 text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                          {service.icon} {service.tag}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="p-6 sm:p-7">
                        <h3 className="text-xl font-bold text-slate-950 mb-3 group-hover:text-cyan-600 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <div className="p-6 pt-0 sm:p-7 sm:pt-0 border-t border-slate-100 mt-auto">
                      <div className="pt-4 flex items-center justify-between">
                        <Link
                          href="/services/house-washing"
                          className="text-xs font-semibold text-slate-600 hover:text-cyan-600 transition-colors flex items-center gap-1"
                        >
                          Learn details &rarr;
                        </Link>
                        <button
                          onClick={() => handleBook(service.title)}
                          className="bg-slate-950 hover:bg-cyan-600 text-white text-xs font-bold px-4 py-2 rounded-full transition-all shadow-xs cursor-pointer"
                        >
                          Get Free Quote
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Custom Package CTA */}
            <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto">
              <span className="text-cyan-400 font-bold text-xs uppercase tracking-wider mb-2 block">
                Multi-Service Bundle Discount
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
                Combine House Wash + Concrete &amp; Save 15%
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto mb-6">
                Most homeowners bundle house soft washing with driveway cleaning or roof treatment for the most dramatic transformation at the best rate.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => handleBook("Bundle Package")}
                  className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-8 py-3 rounded-full text-xs transition-all shadow-md cursor-pointer"
                >
                  Build Custom Package
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
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialService={selectedService}
      />
      <Footer />
    </div>
  );
}
