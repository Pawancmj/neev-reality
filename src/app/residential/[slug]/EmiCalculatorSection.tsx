"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  propertyTitle: string;
};

export default function EmiCalculatorSection({ propertyTitle }: Props) {
  const [showLoanPopup, setShowLoanPopup] = useState(false);

  return (
    <>
      {/* ================= EMI CALCULATOR ================= */}
      <section id="emi" className="max-w-[1240px] mx-auto px-4 mt-14">
        <h2 className="text-xl font-semibold mb-6">EMI Calculator</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-[#F6FAFF] p-6 rounded-xl">

          {/* ================= RIGHT : PIE CHART ================= */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4 text-center">
              Break-up of Total Payment
            </h3>

            <Image
              src="/images/emi-chart.png"
              alt="EMI Breakup Chart"
              width={360}
              height={260}
              className="object-contain"
            />

            <div className="flex gap-8 mt-6 text-sm">
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#9C6A1E]" />
                <span className="text-gray-700">Total interest</span>
              </span>

              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#F1D2A2]" />
                <span className="text-gray-700">
                  Principal loan amount
                </span>
              </span>
            </div>
          </div>

          {/* ================= LEFT : FORM ================= */}
          <div className="bg-white rounded-xl p-6 shadow-sm space-y-4">
            <div>
              <label className="text-sm text-gray-600">
                Loan Amount
              </label>
              <input
                type="number"
                defaultValue={2500000}
                className="w-full mt-1 px-4 py-2 border rounded-md outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">
                Interest Rate (%)
              </label>
              <input
                type="number"
                defaultValue={10.5}
                className="w-full mt-1 px-4 py-2 border rounded-md outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">
                Loan Tenure (Yr)
              </label>
              <input
                type="number"
                defaultValue={30}
                className="w-full mt-1 px-4 py-2 border rounded-md outline-none"
              />
            </div>

            {/* ================= EMI RESULT ================= */}
            <div className="bg-gray-50 rounded-md p-4">
              <p className="text-sm text-gray-600">EMI</p>
              <p className="text-2xl font-bold text-[#F5A300]">
                ₹ 22,868.48
              </p>
            </div>

            <div className="flex justify-between text-sm">
              <span>Interest to be paid</span>
              <span className="font-medium">₹ 57,32,652</span>
            </div>

            <div className="flex justify-between text-sm border-t pt-2">
              <span>Total of Payments</span>
              <span className="font-semibold">₹ 82,32,652</span>
            </div>

            {/* ================= CTA ================= */}
            <button
              onClick={() => setShowLoanPopup(true)}
              className="w-full mt-4 bg-[#F5A300] text-white py-2.5 rounded-lg font-semibold
                         hover:bg-[#e29500] transition-all"
            >
              Get Loan
            </button>
          </div>
        </div>
      </section>

      {/* ================= LOAN POPUP ================= */}
      {showLoanPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white w-full max-w-md rounded-xl p-6 relative">

            {/* CLOSE */}
            <button
              onClick={() => setShowLoanPopup(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
            >
              ✕
            </button>

            <h3 className="text-xl font-semibold mb-2">
              Apply for Loan
            </h3>

            {/* ===== INTERESTED IN ===== */}
            <p className="text-sm font-semibold text-gray-800 mb-3">
              I Am Interested In
              <span className="block mt-1 text-sm text-[#c8950a] font-medium">
                {propertyTitle || "This Property"}
              </span>
            </p>

            <p className="text-sm text-gray-600 mb-4">
              Our loan expert will contact you shortly.
            </p>

            <div className="space-y-3">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 border rounded-md outline-none"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-2 border rounded-md outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-md outline-none"
              />
            </div>

            <button
              className="w-full mt-5 bg-[#F5A300] text-white py-2.5 rounded-lg font-semibold
                         hover:bg-[#e29500]"
            >
              Submit Request
            </button>
          </div>
        </div>
      )}
    </>
  );
}
