"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {
  onOpenBooking?: (service?: string) => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when pathname changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    {
      name: "Services",
      href: "/services/ac-repair",
      desc: "Emergency repair & diagnostics",
      badge: null,
    },
    {
      name: "Membership",
      href: "/milestone-advantage",
      desc: "Priority tune-ups & discounts",
      badge: "VIP Club",
    },
    {
      name: "Reviews",
      href: "/reviews",
      desc: "40,208+ verified 4.9★ ratings",
      badge: "4.9 ★",
    },
    {
      name: "Coupons",
      href: "/coupons",
      desc: "Active seasonal vouchers",
      badge: "$79 Off",
    },
    {
      name: "Locations",
      href: "/locations",
      desc: "Serving all Dallas-Fort Worth",
      badge: null,
    },
    {
      name: "FAQ",
      href: "/faq",
      desc: "Pricing, guarantees & response",
      badge: null,
    },
  ];

  return (
    <>
      <div className="sticky top-0 sm:top-4 z-50 w-full px-3 sm:px-6 lg:px-8 max-w-6xl mx-auto font-sans">
        {/* Floating Pill Navigation Bar */}
        <header
          className={`w-full transition-all duration-300 rounded-2xl sm:rounded-full border ${
            scrolled
              ? "bg-white/95 backdrop-blur-xl border-slate-200/90 shadow-lg shadow-slate-900/5 py-2.5 px-4 sm:px-6"
              : "bg-white/85 backdrop-blur-md border-slate-200/70 shadow-xs py-3 px-4 sm:px-6"
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Minimalist Universal Logo */}
            <Link href="/" className="flex items-center gap-2.5 group shrink-0">
              <div className="w-8 h-8 rounded-full bg-slate-950 text-white flex items-center justify-center font-bold text-xs shadow-xs transition-transform duration-300 group-hover:scale-105 group-hover:bg-slate-800">
                A
              </div>
              <div className="flex flex-col">
                <span className="text-sm sm:text-base font-bold tracking-tight text-slate-950 leading-tight">
                  Apex <span className="font-normal text-slate-500">HVAC</span>
                </span>
                <span className="hidden xs:flex items-center gap-1 text-[10px] text-emerald-600 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  24/7 DFW Dispatch
                </span>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center space-x-1 text-xs font-medium text-slate-600">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-3 py-1.5 rounded-full transition-all duration-200 ${
                      isActive
                        ? "text-slate-950 font-semibold bg-slate-100"
                        : "hover:text-slate-950 hover:bg-slate-100/80"
                    }`}
                  >
                    <span>{link.name}</span>
                    {link.badge && (
                      <span className="ml-1.5 px-1.5 py-0.5 text-[9px] font-bold rounded-full bg-amber-100 text-amber-800 border border-amber-200/60">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Right CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:2142672405"
                className="text-xs font-semibold text-slate-700 hover:text-slate-950 transition-colors flex items-center gap-1.5 py-1 px-2.5 rounded-full hover:bg-slate-100"
              >
                <svg className="w-3.5 h-3.5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>(214) 267-2405</span>
              </a>
              <button
                type="button"
                onClick={() => onOpenBooking && onOpenBooking("AC Repair")}
                className="group bg-slate-950 hover:bg-slate-800 active:scale-95 text-white text-xs font-medium px-4 py-2 rounded-full transition-all duration-200 cursor-pointer flex items-center gap-1.5 shadow-sm hover:shadow"
                id="nav-schedule-btn"
              >
                <span>Book Service</span>
                <svg className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </button>
            </div>

            {/* Mobile Action Buttons & Animated Hamburger */}
            <div className="flex lg:hidden items-center gap-2">
              {/* Mobile Direct Call Button */}
              <a
                href="tel:2142672405"
                className="p-2 text-slate-700 hover:text-slate-950 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
                aria-label="Call Dispatch"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>

              {/* Mobile Quick Book Button */}
              <button
                type="button"
                onClick={() => onOpenBooking && onOpenBooking("AC Repair")}
                className="bg-slate-950 active:scale-95 text-white text-xs font-semibold px-3.5 py-1.5 rounded-full transition-all cursor-pointer shadow-xs"
              >
                Book
              </button>

              {/* Animated Hamburger / Close Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-9 h-9 flex flex-col items-center justify-center gap-1.5 text-slate-700 hover:text-slate-950 p-2 rounded-full hover:bg-slate-100 transition-colors focus:outline-none"
                aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
                aria-expanded={mobileMenuOpen}
              >
                <span
                  className={`w-5 h-0.5 bg-slate-800 rounded-full transition-all duration-300 transform ${
                    mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`w-5 h-0.5 bg-slate-800 rounded-full transition-all duration-300 ${
                    mobileMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`w-5 h-0.5 bg-slate-800 rounded-full transition-all duration-300 transform ${
                    mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </header>
      </div>

      {/* Mobile Drawer / Slide-Down Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-sm lg:hidden transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="absolute top-16 sm:top-20 inset-x-3 sm:inset-x-6 max-w-xl mx-auto bg-white/95 backdrop-blur-2xl border border-slate-200/90 rounded-3xl shadow-2xl p-5 overflow-hidden animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Status Inside Drawer */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-semibold text-slate-800">
                  DFW Emergency Dispatch Available
                </span>
              </div>
              <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/50">
                12 Trucks Active
              </span>
            </div>

            {/* Menu Links with Descriptions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-4 max-h-[55vh] overflow-y-auto pr-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between p-3 rounded-2xl transition-all duration-200 active:scale-[0.98] ${
                      isActive
                        ? "bg-slate-100 text-slate-950 font-semibold"
                        : "hover:bg-slate-50 text-slate-800"
                    }`}
                  >
                    <div>
                      <div className="text-sm font-semibold tracking-tight flex items-center gap-2">
                        <span>{link.name}</span>
                        {link.badge && (
                          <span className="px-1.5 py-0.5 text-[10px] font-bold rounded-full bg-amber-100 text-amber-800 border border-amber-200">
                            {link.badge}
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-slate-500 font-normal">
                        {link.desc}
                      </div>
                    </div>
                    <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                );
              })}
            </div>

            {/* Mobile Footer CTAs */}
            <div className="pt-3 border-t border-slate-100 space-y-2.5">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking && onOpenBooking("Emergency AC Repair");
                }}
                className="w-full bg-slate-950 hover:bg-slate-800 active:scale-[0.98] text-white font-medium py-3 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <span>Schedule Online ($79 Off)</span>
                <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              <a
                href="tel:2142672405"
                className="w-full bg-slate-100 hover:bg-slate-200 active:scale-[0.98] text-slate-900 font-medium py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <svg className="w-4 h-4 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Direct Call: (214) 267-2405</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
