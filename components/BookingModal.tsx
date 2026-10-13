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
          <span className="text-[10px] sm:text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
            Online Priority Dispatch
          </span>
          <h3 className="text-lg sm:text-2xl font-bold text-white">
            Schedule Precision Service
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            24/7 Priority Scheduling • $79 Instant Service Voucher Applied
          </p>
        </div>

        {/* Content (Scrollable on small mobile screens) */}
        <div className="p-5 sm:p-6 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-6 sm:py-8 animate-fade-in">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-3 shadow-inner">
                <svg className="w-7 h-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-1">
                Booking Confirmed
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 max-w-sm mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-slate-900">{name}</span>. Our DFW dispatch center is assigning your technician for <span className="font-semibold text-slate-900">{preferredTime}</span>. Confirmation sent to <span className="font-semibold text-slate-900">{phone}</span>.
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
            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Service Required
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-950 bg-white"
                >
                  <option value="AC Repair & Diagnosis">AC Repair &amp; Diagnosis (No Cool / Leaks)</option>
                  <option value="Precision 21-Point Tune-Up">Precision 21-Point Tune-Up ($79 Special)</option>
                  <option value="Emergency No-Cool Service">Emergency No-Cool Service (Immediate Dispatch)</option>
                  <option value="Heating & Heat Pump Repair">Heating &amp; Heat Pump Repair</option>
                  <option value="Whole-Home System Replacement">Whole-Home System Replacement Quote</option>
                  <option value="Milestone Advantage Membership">Milestone Advantage VIP Checkup</option>
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
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-950 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Mobile Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(214) 000-0000"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-950 bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Service Address / DFW City *
                </label>
                <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Street address and city/ZIP in DFW"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-950 bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Requested Arrival Time
                </label>
                <select
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-950 bg-white"
                >
                  <option value="Today - ASAP (Emergency)">Today - ASAP (Emergency Under 90 Min)</option>
                  <option value="Today - Afternoon (12pm - 4pm)">Today - Afternoon (12pm - 4pm)</option>
                  <option value="Today - Evening (4pm - 8pm)">Today - Evening (4pm - 8pm)</option>
                  <option value="Tomorrow - Morning (8am - 12pm)">Tomorrow - Morning (8am - 12pm)</option>
                  <option value="Tomorrow - Afternoon (12pm - 4pm)">Tomorrow - Afternoon (12pm - 4pm)</option>
                </select>
              </div>

              <div className="bg-amber-50 border border-amber-200/80 rounded-xl p-3 flex items-center justify-between">
                <span className="text-xs font-bold text-amber-900">
                  ⚡ Online Booking Voucher:
                </span>
                <span className="text-xs font-black text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md">
                  -$79.00 CREDITED
                </span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-slate-950 hover:bg-slate-800 active:scale-[0.98] text-white font-bold py-3.5 rounded-xl text-xs sm:text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                id="modal-submit-btn"
              >
                <span>{isSubmitting ? "Locking In Time Slot..." : "Confirm Priority Dispatch"}</span>
                {!isSubmitting && (
                  <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
