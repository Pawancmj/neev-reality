"use client";

import { useState } from "react";

const benefitsLeft = [
  "Health Benefits",
  "Employee Recognition Platform",
  "Professional Development",
  "Access to Industry Events",
];

const benefitsRight = [
  "100% Company Paid Life Insurance",
  "Work-Life Balance",
  "Diversity & Inclusion Initiatives",
];

const WhatWeOffer = () => {
  const [showResumePopup, setShowResumePopup] = useState(false);

  return (
    <>
      <section className="w-full bg-[#F6FAFF] py-16">
        {/* MAIN CONTAINER */}
        <div className="mx-auto max-w-6xl space-y-12 px-4">

          {/* HEADING */}
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              What we <span className="text-[#DBA40D]">Offer</span>
            </h2>
          </div>

          {/* BENEFITS GRID */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* LEFT */}
            <div className="space-y-4">
              {benefitsLeft.map((item) => (
                <div
                  key={item}
                  className="flex items-center rounded-md border border-[#E4EDF8] bg-white px-6 py-4 text-sm font-medium text-slate-600 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>

            {/* RIGHT */}
            <div className="space-y-4">
              {benefitsRight.map((item) => (
                <div
                  key={item}
                  className="flex items-center rounded-md border border-[#E4EDF8] bg-white px-6 py-4 text-sm font-medium text-slate-600 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* JOIN OUR TEAM */}
        <div className="mt-14 px-4">
          <div className="mx-auto max-w-6xl rounded-3xl bg-slate-50 px-6 py-10 md:px-10 lg:px-16">
            <div className="space-y-6 max-w-xl">
              <h3 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                Join Our <span className="text-[#DBA40D]">Team</span>
              </h3>

              <p className="text-sm leading-relaxed text-slate-600">
                We believe in teamwork, transparency and continuous growth. At Neev
                Realty, your ideas matter and your career grows with the organization.
              </p>

              <button
                type="button"
                onClick={() => setShowResumePopup(true)}
                className="inline-flex items-center justify-center rounded-lg bg-[#DBA40D] px-8 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(219,164,13,0.45)] transition hover:brightness-110"
              >
                Send your Resume
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= RESUME POPUP ================= */}
      {showResumePopup && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
          <div className="relative w-full max-w-2xl bg-white rounded-xl p-8">

            {/* CLOSE */}
            <button
              onClick={() => setShowResumePopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-black text-xl"
            >
              ✕
            </button>

            {/* HEADER */}
            <h3 className="text-2xl font-semibold text-gray-900 mb-1">
              Submit Your Resume
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              Please fill in your details below and upload your resume. Our HR team will get in touch with you shortly.
            </p>

            {/* FORM GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <input
                type="text"
                placeholder="Full Name*"
                className="border rounded-md px-4 py-3 text-sm outline-none focus:border-[#DBA40D]"
              />

              <input
                type="email"
                placeholder="Email Address*"
                className="border rounded-md px-4 py-3 text-sm outline-none focus:border-[#DBA40D]"
              />

              <input
                type="tel"
                placeholder="Mobile Number*"
                className="border rounded-md px-4 py-3 text-sm outline-none focus:border-[#DBA40D]"
              />

              <select
                className="border rounded-md px-4 py-3 text-sm outline-none focus:border-[#DBA40D] text-gray-600"
              >
                <option>Applying For Position*</option>
                <option>Sales Executive</option>
                <option>Marketing Manager</option>
                <option>Channel Partner</option>
                <option>Operations</option>
              </select>

              <select
                className="border rounded-md px-4 py-3 text-sm outline-none focus:border-[#DBA40D] text-gray-600"
              >
                <option>Total Work Experience</option>
                <option>Fresher</option>
                <option>1–2 Years</option>
                <option>3–5 Years</option>
                <option>5+ Years</option>
              </select>

              {/* FILE UPLOAD */}
              <div className="border rounded-md px-4 py-3 text-sm flex items-center gap-3">
                <input type="file" className="text-sm" />
              </div>
            </div>

            {/* TEXTAREA */}
            <textarea
              placeholder="Briefly describe your experience (optional)"
              rows={3}
              className="w-full mt-4 border rounded-md px-4 py-3 text-sm outline-none focus:border-[#DBA40D]"
            />

            {/* SUBMIT BUTTON */}
            <button
              className="mt-6 w-full rounded-lg bg-[#DBA40D] py-3 text-sm font-semibold text-white hover:bg-[#c8950a]"
            >
              Submit Resume
            </button>
          </div>
        </div>
      )}

    </>
  );
};

export default WhatWeOffer;
