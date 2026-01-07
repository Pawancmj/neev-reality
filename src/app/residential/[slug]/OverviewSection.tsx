"use client";

import { useState } from "react";
import Image from "next/image";

export default function OverviewSection() {
  const [showOverviewEnquiry, setShowOverviewEnquiry] = useState(false);

  return (
    <>
      {/* ================= OVERVIEW ================= */}
      <section id="overview" className="max-w-[1240px] mx-auto px-4 mt-12">
        <h3 className="text-xl font-semibold mb-4">Overview</h3>

        <div className="bg-white rounded-xl shadow-sm p-8 text-center">
          {/* TITLE */}
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
            Adani Shantigram The Meadows: World Class Luxury Apartments
            <span className="block text-base font-normal mt-1">
              in the Heart of Gujarat!
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="text-sm md:text-base text-gray-600 max-w-[900px] mx-auto leading-relaxed">
            Adani Group has launched a magnificent new offering in Ahmedabad,
            called Adani Shantigram The Meadows. The complex boasts of luxury
            filled apartments, which are desired by all…
            <span className="text-pink-600 cursor-pointer ml-1">
              Read More
            </span>
          </p>

          {/* CTA BUTTON */}
          <div className="mt-6">
            <button
              onClick={() => setShowOverviewEnquiry(true)}
              className="px-6 py-2 bg-[#F5A300] text-white rounded-md text-sm font-medium hover:bg-[#e39a00] transition"
            >
              Enquire Now
            </button>
          </div>
        </div>
      </section>

      {/* ================= ENQUIRY POPUP ================= */}
      {showOverviewEnquiry && (
        <div className="fixed inset-0 z-[999] bg-black/60 flex items-center justify-center px-4">
          <div className="bg-white w-full max-w-md rounded-2xl p-6 relative">

            {/* CLOSE */}
            <button
              onClick={() => setShowOverviewEnquiry(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
            >
              ✕
            </button>

            {/* HEADER */}
            <h3 className="text-xl font-semibold mb-2">
              Enquire Now
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Interested in{" "}
              <span className="font-medium text-[#F5A300]">
                Adani Shantigram The Meadows
              </span>
            </p>

            {/* FORM */}
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 border rounded-md outline-none focus:ring-1 focus:ring-[#F5A300]"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-2 border rounded-md outline-none focus:ring-1 focus:ring-[#F5A300]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 border rounded-md outline-none focus:ring-1 focus:ring-[#F5A300]"
              />

              <textarea
                rows={3}
                placeholder="Message (optional)"
                className="w-full px-4 py-2 border rounded-md outline-none focus:ring-1 focus:ring-[#F5A300]"
              />
            </div>

            {/* SUBMIT */}
            <button
              className="w-full mt-5 bg-[#F5A300] text-white py-2.5 rounded-lg font-semibold hover:bg-[#e39a00] transition"
            >
              Submit Enquiry
            </button>
          </div>
        </div>
      )}
    </>
  );
}
