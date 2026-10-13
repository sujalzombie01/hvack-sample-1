"use client";

import React, { useState } from "react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  defaultService = "AC Repair & Diagnosis",
}: BookingModalProps) {
  const [service, setService] = useState(defaultService);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [preferredTime, setPreferredTime] = useState("Today - ASAP (Emergency)");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs font-sans">
      <div className="relative w-full max-w-lg bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 relative">
          <button
            onClick={handleClose}
            className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
            Online Dispatch System
          </span>
          <h3 className="text-xl font-black text-white">
            Schedule Precision Service
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            24/7 Priority Scheduling • $79 Instant Service Voucher Applied
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-4">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-1">
                Booking Confirmed
              </h4>
              <p className="text-xs text-slate-600 mb-5 max-w-sm mx-auto">
                Thank you, <span className="font-semibold text-slate-900">{name}</span>. Our DFW dispatch team is scheduling your technician for <span className="font-semibold text-slate-900">{preferredTime}</span>. Confirmation sent to <span className="font-semibold text-slate-900">{phone}</span>.
              </p>
              <button
                type="button"
                onClick={handleClose}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-lg text-xs cursor-pointer"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Service Required
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3 py-2 rounded-md border border-slate-300 text-xs font-medium text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-600 bg-white"
                >
                  <option value="AC Repair & Diagnosis">AC Repair &amp; Diagnosis (No Cool / Leaks)</option>
                  <option value="Complete AC System Replacement">Complete AC System Replacement / Estimate</option>
                  <option value="Heating & Furnace Repair">Heating &amp; Furnace Repair</option>
                  <option value="Annual AC Tune-Up & Precision Inspection">Annual AC Tune-Up &amp; Precision Inspection</option>
                  <option value="Emergency Same-Day Dispatch">Emergency Same-Day Dispatch</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name"
                    className="w-full px-3 py-2 rounded-md border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
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
                    placeholder="(214) 000-0000"
                    className="w-full px-3 py-2 rounded-md border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Address / ZIP *
                  </label>
                  <input
                    type="text"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="e.g. 1420 Main St, Dallas"
                    className="w-full px-3 py-2 rounded-md border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Preferred Time Slot
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-3 py-2 rounded-md border border-slate-300 text-xs font-medium text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-600 bg-white"
                  >
                    <option value="Today - ASAP (Emergency)">Today - ASAP (Emergency)</option>
                    <option value="Today Afternoon (12 PM - 4 PM)">Today Afternoon (12 PM - 4 PM)</option>
                    <option value="Today Evening (4 PM - 8 PM)">Today Evening (4 PM - 8 PM)</option>
                    <option value="Tomorrow Morning (8 AM - 12 PM)">Tomorrow Morning (8 AM - 12 PM)</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-md bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-sm shadow-xs transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>{isSubmitting ? "Confirming..." : "Confirm Appointment Online Now"}</span>
                  {!isSubmitting && (
                    <svg className="w-4 h-4 text-slate-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  )}
                </button>
              </div>

              <p className="text-center text-[11px] text-slate-500">
                100% Satisfaction Guarantee • Fixed right or it&apos;s free
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
