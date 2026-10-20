"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LOGO_TEXT, PHONE, PHONE_RAW } from "@/config/site";

interface NavbarProps {
  onOpenQuote?: () => void;
}

export default function Navbar({ onOpenQuote }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setMobileMenuOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Services",      href: "/services",     desc: "All exterior cleaning services" },
    { name: "Before/After",  href: "/#gallery",     desc: "See our transformation photos"  },
    { name: "Reviews",       href: "/reviews",      desc: "What our customers say"          },
    { name: "Specials",      href: "/coupons",      desc: "Discounts & seasonal coupons"   },
    { name: "Service Areas", href: "/locations",    desc: "Communities & areas we serve"   },
    { name: "FAQ",           href: "/faq",          desc: "Common questions answered"      },
  ];

  const firstLetter = LOGO_TEXT.charAt(0).toUpperCase();
  const isHome = pathname === "/";
  const isDarkNav = isHome && !scrolled;

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 w-full pt-3 sm:pt-4 px-3 sm:px-6 lg:px-8 font-sans pointer-events-none">
        <div className="max-w-6xl mx-auto pointer-events-auto">
          <header
            className={`w-full transition-all duration-300 rounded-2xl sm:rounded-full border ${
              isDarkNav
                ? "bg-slate-950/45 backdrop-blur-md border-white/20 shadow-2xl py-3 px-4 sm:px-6 text-white"
                : "bg-white/95 backdrop-blur-xl border-slate-200/90 shadow-md py-2.5 px-4 sm:px-6 text-slate-900"
            }`}
          >
            <div className="flex items-center justify-between">
              
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2.5 group shrink-0">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shadow-xs transition-transform duration-300 group-hover:scale-105 ${
                    isDarkNav
                      ? "bg-white text-slate-950"
                      : "bg-slate-950 text-white"
                  }`}
                >
                  {firstLetter}
                </div>
                <div className="flex flex-col">
                  <span
                    className={`text-sm sm:text-base font-bold tracking-tight leading-tight ${
                      isDarkNav ? "text-white" : "text-slate-950"
                    }`}
                  >
                    {LOGO_TEXT} <span className={isDarkNav ? "font-normal text-white/70" : "font-normal text-slate-500"}>Washing</span>
                  </span>
                  <span
                    className={`hidden xs:flex items-center gap-1 text-[10px] font-medium ${
                      isDarkNav ? "text-white/80" : "text-slate-600"
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                    Free Estimates Available
                  </span>
                </div>
              </Link>

              {/* Desktop Nav */}
              <nav
                className={`hidden lg:flex items-center space-x-1 text-xs font-medium ${
                  isDarkNav ? "text-white/80" : "text-slate-600"
                }`}
              >
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      className={`relative px-3 py-1.5 rounded-full transition-all duration-200 ${
                        isDarkNav
                          ? isActive
                            ? "text-white font-semibold bg-white/20"
                            : "hover:text-white hover:bg-white/10"
                          : isActive
                            ? "text-slate-950 font-semibold bg-slate-100"
                            : "hover:text-slate-950 hover:bg-slate-100/80"
                      }`}
                    >
                      {link.name}
                    </a>
                  );
                })}
              </nav>

              {/* Desktop CTAs */}
              <div className="hidden lg:flex items-center gap-3">
                <a
                  href={`tel:${PHONE_RAW}`}
                  className={`text-xs font-semibold transition-colors flex items-center gap-1.5 py-1 px-3 rounded-full ${
                    isDarkNav
                      ? "text-white hover:bg-white/10"
                      : "text-slate-700 hover:text-slate-950 hover:bg-slate-100"
                  }`}
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>{PHONE}</span>
                </a>
                <button
                  type="button"
                  onClick={() => onOpenQuote?.()}
                  className={`group active:scale-95 text-xs font-bold px-5 py-2.5 rounded-full transition-all duration-200 cursor-pointer flex items-center gap-1.5 shadow-sm hover:shadow ${
                    isDarkNav
                      ? "bg-white text-slate-950 hover:bg-slate-100"
                      : "bg-slate-950 text-white hover:bg-slate-800"
                  }`}
                  id="nav-quote-btn"
                >
                  <span>Free Quote</span>
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                      isDarkNav ? "text-slate-600" : "text-slate-400 group-hover:text-white"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </button>
              </div>

              {/* Mobile Controls */}
              <div className="flex lg:hidden items-center gap-2">
                <a
                  href={`tel:${PHONE_RAW}`}
                  className={`p-2 rounded-full transition-colors ${
                    isDarkNav
                      ? "text-white bg-white/15 hover:bg-white/25"
                      : "text-slate-700 hover:text-slate-950 bg-slate-100 hover:bg-slate-200"
                  }`}
                  aria-label="Call Now"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </a>
                <button
                  type="button"
                  onClick={() => onOpenQuote?.()}
                  className={`active:scale-95 text-xs font-bold px-3.5 py-1.5 rounded-full transition-all cursor-pointer shadow-xs ${
                    isDarkNav
                      ? "bg-white text-slate-950 hover:bg-slate-100"
                      : "bg-slate-950 text-white hover:bg-slate-800"
                  }`}
                >
                  Quote
                </button>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className={`w-9 h-9 flex flex-col items-center justify-center gap-1.5 p-2 rounded-full transition-colors focus:outline-none ${
                    isDarkNav
                      ? "text-white hover:bg-white/15"
                      : "text-slate-700 hover:text-slate-950 hover:bg-slate-100"
                  }`}
                  aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
                  aria-expanded={mobileMenuOpen}
                >
                  <span
                    className={`w-5 h-0.5 rounded-full transition-all duration-300 transform ${
                      isDarkNav ? "bg-white" : "bg-slate-800"
                    } ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
                  />
                  <span
                    className={`w-5 h-0.5 rounded-full transition-all duration-300 ${
                      isDarkNav ? "bg-white" : "bg-slate-800"
                    } ${mobileMenuOpen ? "opacity-0" : ""}`}
                  />
                  <span
                    className={`w-5 h-0.5 rounded-full transition-all duration-300 transform ${
                      isDarkNav ? "bg-white" : "bg-slate-800"
                    } ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                  />
                </button>
              </div>

            </div>
          </header>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm lg:hidden transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="absolute top-16 sm:top-20 inset-x-3 sm:inset-x-6 max-w-xl mx-auto bg-white/95 backdrop-blur-2xl border border-slate-200/90 rounded-3xl shadow-2xl p-5 overflow-hidden animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-slate-950"></span>
                </span>
                <span className="text-xs font-semibold text-slate-800">
                  Accepting new clients
                </span>
              </div>
              <span className="text-[11px] font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded-full border border-slate-200">
                Free Estimates
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-4 max-h-[55vh] overflow-y-auto pr-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3 rounded-2xl transition-all duration-200 active:scale-[0.98] hover:bg-slate-50 text-slate-800"
                >
                  <div>
                    <div className="text-sm font-semibold tracking-tight">{link.name}</div>
                    <div className="text-[11px] text-slate-500 font-normal">{link.desc}</div>
                  </div>
                  <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 space-y-2.5">
              <button
                type="button"
                onClick={() => { setMobileMenuOpen(false); onOpenQuote?.(); }}
                className="w-full bg-slate-950 hover:bg-slate-800 active:scale-[0.98] text-white font-medium py-3 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <span>Get a Free Quote</span>
                <svg className="w-4 h-4 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              <a
                href={`tel:${PHONE_RAW}`}
                className="w-full bg-slate-100 hover:bg-slate-200 active:scale-[0.98] text-slate-900 font-medium py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <svg className="w-4 h-4 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Call Now: {PHONE}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
