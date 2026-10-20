"use client";

import React, { useState } from "react";
import { PHONE, PHONE_RAW } from "@/config/site";

export default function ChatSmsWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      console.log("Text lead captured:", { name, phone, message, timestamp: new Date().toISOString() });
    }, 700);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName("");
    setPhone("");
    setMessage("");
  };

  return (
    <aside aria-label="Text Us Widget" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end font-sans">

      {/* Pop-up Chat Window */}
      {isOpen && (
        <div
          className="mb-3 w-[calc(100vw-2rem)] max-w-[360px] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-scale-in"
          style={{ boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.2), 0 0 1px rgba(0, 0, 0, 0.2)" }}
        >
          {/* Header */}
          <div className="bg-slate-950 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-sm">
                💬
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">
                  Text Us a Question
                </h4>
                <p className="text-[10px] text-slate-300 flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                  We typically reply within minutes
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-slate-50">
            {isSubmitted ? (
              <div className="bg-white rounded-xl p-5 text-center border border-slate-200 animate-fade-in">
                <div className="w-11 h-11 bg-cyan-100 text-cyan-700 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-2">
                  <svg className="w-5 h-5 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h5 className="text-sm font-bold text-slate-900 mb-1">Message Sent!</h5>
                <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                  Thanks, <span className="font-semibold text-slate-900">{name}</span>. We&apos;ll reply to <span className="font-semibold text-slate-900">{phone}</span> shortly.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs text-cyan-700 font-bold hover:underline cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form id="sms-lead-form" onSubmit={handleSubmit} className="space-y-3 bg-white p-3.5 rounded-xl border border-slate-200">
                <div>
                  <label htmlFor="sms-name" className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    id="sms-name"
                    name="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name"
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="sms-phone" className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Mobile Phone *
                  </label>
                  <input
                    id="sms-phone"
                    name="phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={PHONE}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="sms-message" className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    How can we help? *
                  </label>
                  <textarea
                    id="sms-message"
                    name="message"
                    required
                    rows={2}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="House washing, driveway, roof, deck..."
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white resize-none"
                  />
                </div>

                <p className="text-[10px] text-slate-400 leading-tight">
                  Standard SMS rates may apply. Reply STOP to unsubscribe.
                </p>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 bg-slate-950 hover:bg-cyan-700 active:scale-[0.98] text-white font-bold text-xs rounded-lg shadow-sm transition-all cursor-pointer flex items-center justify-center gap-1.5"
                  id="sms-submit-btn"
                >
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                  {!isSubmitting && (
                    <svg className="w-3.5 h-3.5 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  )}
                </button>

                <div className="text-center pt-1">
                  <a
                    href={`tel:${PHONE_RAW}`}
                    className="text-[10px] text-slate-500 hover:text-slate-800 transition-colors"
                  >
                    Prefer to call? {PHONE}
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Floating Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-slate-950 hover:bg-cyan-700 active:scale-95 text-white px-4 py-3 rounded-full shadow-xl transition-all cursor-pointer border border-slate-700 hover:shadow-2xl"
        aria-label="Open text message widget"
        id="sms-floating-button"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
        </span>
        <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        <span className="text-xs font-bold uppercase tracking-wider">
          {isOpen ? "Close" : "Text Us"}
        </span>
      </button>
    </aside>
  );
}
