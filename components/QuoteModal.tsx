"use client";

import React, { useState } from "react";
import { SERVICES, FORM_ENDPOINT } from "@/config/site";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function QuoteModal({ isOpen, onClose, defaultService = "House Washing" }: QuoteModalProps) {
  const [service, setService] = useState(defaultService);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [photo, setPhoto] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("service", service);
      formData.append("name", name);
      formData.append("phone", phone);
      formData.append("address", address);
      formData.append("message", message);
      if (photo) formData.append("photo", photo);

      if (FORM_ENDPOINT && !FORM_ENDPOINT.includes("REPLACE_ME")) {
        await fetch(FORM_ENDPOINT, { method: "POST", body: formData });
      }
    } catch {
      // Form endpoint not configured — still show thank-you
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    setName(""); setPhone(""); setAddress(""); setMessage(""); setPhoto(null);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/60 backdrop-blur-sm font-sans animate-fade-in"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-slate-950 text-white p-5 sm:p-6 relative shrink-0">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 sm:top-5 sm:right-5 text-slate-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <span className="text-[10px] sm:text-xs font-bold text-cyan-400 uppercase tracking-widest block mb-1">
            Free, No-Obligation Estimate
          </span>
          <h3 className="text-lg sm:text-2xl font-bold text-white">Get Your Free Quote</h3>
          <p className="text-xs text-slate-300 mt-1">
            Tell us what you need — we&apos;ll send a price, no strings attached.
          </p>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-6 sm:py-8 animate-fade-in">
              <div className="w-14 h-14 bg-cyan-100 text-cyan-700 rounded-full flex items-center justify-center mx-auto mb-3 shadow-inner">
                <svg className="w-7 h-7 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-1">Quote Request Received!</h4>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 max-w-sm mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-slate-900">{name}</span>. We&apos;ll review your request and reach out to <span className="font-semibold text-slate-900">{phone}</span> with a price shortly.
              </p>
              <button
                type="button"
                onClick={handleClose}
                className="w-full bg-slate-950 hover:bg-slate-800 active:scale-[0.98] text-white font-bold py-3.5 rounded-xl text-xs sm:text-sm cursor-pointer transition-all shadow-sm"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4" encType="multipart/form-data">

              {/* Service Type */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Service Needed
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>{s.title}</option>
                  ))}
                  <option value="Not Sure">Not Sure — Let&apos;s Talk</option>
                </select>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="First & Last Name"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(555) 000-0000"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white"
                  />
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Property Address *
                </label>
                <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Street address and city"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Additional Notes
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe the areas you want cleaned, any special concerns..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white resize-none"
                />
              </div>

              {/* Photo Upload */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Photo (optional — helps us quote accurately)
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setPhoto(e.target.files?.[0] ?? null)}
                  className="w-full text-xs text-slate-600 file:mr-3 file:py-2 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-slate-100 file:text-slate-700 hover:file:bg-slate-200 file:cursor-pointer cursor-pointer"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-slate-950 hover:bg-cyan-700 active:scale-[0.98] text-white font-bold py-3.5 rounded-xl text-xs sm:text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                id="modal-submit-btn"
              >
                <span>{isSubmitting ? "Sending..." : "Request My Free Quote"}</span>
                {!isSubmitting && (
                  <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
