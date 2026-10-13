"use client";

import React, { useState } from "react";
import Link from "next/link";

interface NavbarProps {
  onOpenBooking?: (service?: string) => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 sm:top-4 z-50 w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto font-sans">
      
      {/* Minimalist Floating Pill Navigation Bar */}
      <header className="w-full bg-white/80 backdrop-blur-xl border border-slate-200/70 rounded-full shadow-xs px-5 sm:px-6 py-2.5 transition-all">
        <div className="flex items-center justify-between">
          
          {/* Minimalist Universal Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-7 h-7 rounded-full bg-slate-950 text-white flex items-center justify-center font-bold text-xs shadow-xs transition-transform group-hover:scale-105">
              A
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-slate-950 leading-tight">
                Apex <span className="font-normal text-slate-500">HVAC</span>
              </span>
            </div>
          </Link>

          {/* Minimalist Nav Links */}
          <nav className="hidden md:flex items-center space-x-1 text-xs font-medium text-slate-600">
            <Link
              href="/services/ac-repair"
              className="px-3.5 py-1.5 rounded-full hover:text-slate-950 hover:bg-slate-100/70 transition-colors"
            >
              Services
            </Link>
            <Link
              href="/milestone-advantage"
              className="px-3.5 py-1.5 rounded-full hover:text-slate-950 hover:bg-slate-100/70 transition-colors"
            >
              Membership
            </Link>
            <Link
              href="/reviews"
              className="px-3.5 py-1.5 rounded-full hover:text-slate-950 hover:bg-slate-100/70 transition-colors"
            >
              Reviews
            </Link>
            <Link
              href="/coupons"
              className="px-3.5 py-1.5 rounded-full hover:text-slate-950 hover:bg-slate-100/70 transition-colors"
            >
              Coupons
            </Link>
            <Link
              href="/locations"
              className="px-3.5 py-1.5 rounded-full hover:text-slate-950 hover:bg-slate-100/70 transition-colors"
            >
              Locations
            </Link>
            <Link
              href="/faq"
              className="px-3.5 py-1.5 rounded-full hover:text-slate-950 hover:bg-slate-100/70 transition-colors"
            >
              FAQ
            </Link>
          </nav>

          {/* Minimalist Right CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:2142672405"
              className="text-xs font-medium text-slate-600 hover:text-slate-950 transition-colors"
            >
              (214) 267-2405
            </a>
            <button
              type="button"
              onClick={() => onOpenBooking && onOpenBooking("AC Repair")}
              className="bg-slate-950 hover:bg-slate-800 text-white text-xs font-medium px-4 py-2 rounded-full transition-all cursor-pointer flex items-center gap-1.5 shadow-xs"
              id="nav-schedule-btn"
            >
              <span>Book Service</span>
              <svg className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => onOpenBooking && onOpenBooking("AC Repair")}
              className="bg-slate-950 text-white text-xs font-medium px-3 py-1.5 rounded-full"
            >
              Book
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-slate-700 hover:bg-slate-100 rounded-full"
              aria-label="Toggle Menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>

        {/* Mobile Minimal Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-slate-100 space-y-1 pb-1">
            <Link
              href="/services/ac-repair"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-1.5 text-xs font-medium text-slate-700 hover:text-slate-950"
            >
              Services
            </Link>
            <Link
              href="/milestone-advantage"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-1.5 text-xs font-medium text-slate-700 hover:text-slate-950"
            >
              Membership
            </Link>
            <Link
              href="/reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-1.5 text-xs font-medium text-slate-700 hover:text-slate-950"
            >
              Reviews
            </Link>
            <Link
              href="/coupons"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-1.5 text-xs font-medium text-slate-700 hover:text-slate-950"
            >
              Coupons
            </Link>
            <Link
              href="/locations"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-1.5 text-xs font-medium text-slate-700 hover:text-slate-950"
            >
              Locations
            </Link>
            <Link
              href="/faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-1.5 text-xs font-medium text-slate-700 hover:text-slate-950"
            >
              FAQ
            </Link>
            <div className="pt-2">
              <a
                href="tel:2142672405"
                className="block text-center py-2 bg-slate-100 rounded-full text-xs font-medium text-slate-900"
              >
                Call (214) 267-2405
              </a>
            </div>
          </div>
        )}

      </header>

    </div>
  );
}
