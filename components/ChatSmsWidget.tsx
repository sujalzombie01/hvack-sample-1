"use client";

import React, { useState } from "react";

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
      console.log("SMS Lead captured for Make.com / Twilio Webhook:", {
        leadType: "SMS_WIDGET",
        name,
        phone,
        message,
        timestamp: new Date().toISOString(),
      });
    }, 700);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName("");
    setPhone("");
    setMessage("");
  };

  return (
    <aside aria-label="SMS Chat Widget" className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      
      {/* Pop-up Chat Window */}
      {isOpen && (
        <div
          className="mb-3 w-[330px] sm:w-[360px] bg-white rounded-xl shadow-2xl border border-slate-300 overflow-hidden"
          style={{
            boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.2)",
          }}
        >
          {/* Header */}
          <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
            <div>
              <h4 className="text-sm font-bold text-white">
                Questions? Text our dispatch team!
              </h4>
              <p className="text-xs text-slate-300">
                On-Call Tech Dispatch • Auto-reply: Under 60 seconds
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
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
              <div className="bg-white rounded-lg p-5 text-center border border-slate-200">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-2">
                  <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h5 className="text-sm font-bold text-slate-900 mb-1">
                  Message Dispatched
                </h5>
                <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                  Thank you, <span className="font-semibold text-slate-900">{name}</span>. An on-call technician will text <span className="font-semibold text-slate-900">{phone}</span> shortly.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs text-blue-700 font-bold hover:underline cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form id="sms-lead-form" onSubmit={handleSubmit} className="space-y-3 bg-white p-3.5 rounded-lg border border-slate-200">
                <div>
                  <label htmlFor="sms-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
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
                    className="w-full px-3 py-2 rounded-md border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-600 bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="sms-phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Mobile Phone *
                  </label>
                  <input
                    id="sms-phone"
                    name="phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(214) 000-0000"
                    className="w-full px-3 py-2 rounded-md border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-600 bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="sms-message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    How can we help you today? *
                  </label>
                  <textarea
                    id="sms-message"
                    name="message"
                    required
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your heating or AC issue..."
                    className="w-full px-3 py-2 rounded-md border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-600 bg-white resize-none"
                  ></textarea>
                </div>

                <p className="text-[10px] text-slate-400">
                  Standard SMS rates may apply. Replying STOP unsubscribes.
                </p>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 bg-blue-900 hover:bg-blue-950 text-white font-bold text-xs rounded-md shadow-xs transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                  id="sms-submit-btn"
                >
                  <span>{isSubmitting ? "Dispatching..." : "Send Text"}</span>
                  {!isSubmitting && (
                    <svg className="w-3.5 h-3.5 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-blue-900 hover:bg-blue-950 text-white px-4 py-3 rounded-full shadow-lg transition-all cursor-pointer border border-blue-800"
        aria-label="Open SMS widget"
        id="sms-floating-button"
      >
        <svg className="w-4 h-4 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        <span className="text-xs font-extrabold uppercase tracking-wider">
          {isOpen ? "Close" : "Text Us"}
        </span>
      </button>
    </aside>
  );
}
