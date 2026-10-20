"use client";

import React, { useState } from "react";
import { SERVICES, PHONE_RAW, PHONE } from "@/config/site";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
  initialService?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  defaultService,
  initialService,
}: BookingModalProps) {
  const initialValue = initialService || defaultService || "House Soft Washing";
  const [service, setService] = useState(initialValue);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [preferredTime, setPreferredTime] = useState("This Week (Earliest Available)");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      console.log("Free Quote Booked:", { service, name, phone, address, preferredTime });
    }, 700);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 font-sans animate-fade-in"
    >
      <div
        className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 animate-scale-in"
        style={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 text-slate-400 hover:text-slate-800 p-2 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close booking modal"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {submitted ? (
          <div className="text-center py-6 animate-fade-in">
            <div className="w-14 h-14 bg-cyan-100 text-cyan-700 rounded-full flex items-center justify-center mx-auto mb-3 shadow-inner">
              <svg className="w-7 h-7 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h4 id="modal-title" className="text-xl font-bold text-slate-900 mb-1">
              Estimate Request Received!
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mb-6 max-w-sm mx-auto leading-relaxed">
              Thank you, <span className="font-semibold text-slate-900">{name}</span>. Our local dispatch team is preparing your custom quote for <span className="font-semibold text-slate-900">{service}</span> ({preferredTime}). Confirmation sent to <span className="font-semibold text-slate-900">{phone}</span>.
            </p>
            <button
              type="button"
              onClick={handleClose}
              className="w-full bg-slate-950 hover:bg-slate-800 active:scale-[0.98] text-white font-bold py-3.5 rounded-xl text-xs sm:text-sm cursor-pointer transition-all shadow-sm"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-100 text-cyan-800 text-[10px] font-bold uppercase tracking-wider mb-2">
                100% Free • No Obligation
              </div>
              <h3 id="modal-title" className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Get a Free Estimate
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Tell us about your property and we&apos;ll get back to you with upfront pricing.
              </p>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Service Needed
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-600 bg-white"
              >
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title}
                  </option>
                ))}
                <option value="Multi-Service Bundle (House + Concrete)">
                  Multi-Service Bundle (House + Concrete)
                </option>
                <option value="Full Estate Exterior Package">
                  Full Estate Exterior Package
                </option>
                <option value="Commercial Pressure Washing">
                  Commercial Pressure Washing
                </option>
              </select>
            </div>

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
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-600 bg-white"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(555) 000-0000"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-600 bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Property Address / ZIP *
              </label>
              <input
                type="text"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Street address and ZIP code"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-600 bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Target Timeline
              </label>
              <select
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-600 bg-white"
              >
                <option value="This Week (Earliest Available)">This Week (Earliest Available)</option>
                <option value="Next Week">Next Week</option>
                <option value="Within 2-3 Weeks">Within 2-3 Weeks</option>
                <option value="Just Gathering Estimates">Just Gathering Estimates</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-cyan-500 hover:bg-cyan-400 active:scale-[0.98] text-slate-950 font-extrabold py-3.5 rounded-xl text-xs sm:text-sm cursor-pointer transition-all duration-200 shadow-md hover:shadow-cyan-500/25 disabled:opacity-50 mt-2"
            >
              {isSubmitting ? "Submitting..." : "Send Free Quote Request →"}
            </button>

            <div className="pt-2 text-center text-[11px] text-slate-500">
              Prefer to talk right now?{" "}
              <a href={`tel:${PHONE_RAW}`} className="text-cyan-600 font-bold hover:underline">
                Call {PHONE}
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
