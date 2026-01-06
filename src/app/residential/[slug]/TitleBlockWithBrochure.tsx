"use client";

import { useState } from "react";
import Image from "next/image";

type Property = {
  title: string;
  location: string;
};

type Props = {
  property: Property;
};

export default function TitleBlockWithBrochure({ property }: Props) {
  const [showBrochurePopup, setShowBrochurePopup] = useState(false);

  return (
    <>
      {/* ================= TITLE BLOCK ================= */}
      <div className="bg-white rounded-xl p-6 shadow-sm">

        <div className="flex flex-col md:flex-row md:justify-between gap-6">

          {/* ================= LEFT SIDE ================= */}
          <div className="flex flex-col gap-3">

            <h1 className="text-[22px] font-semibold text-gray-900 leading-snug">
              {property.title}
            </h1>

            <p className="text-sm text-pink-600">
              {property.location}
            </p>

            <div className="flex flex-col gap-2 mt-1 text-sm text-gray-600">

              <div className="flex items-center gap-2">
                <span className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 text-xs">
                  🏢
                </span>
                <span>
                  By <span className="text-pink-600">Adani Shantigram</span>
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 text-xs">
                  📐
                </span>
                <span>1139 - 1458 SQ. FT.</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1 rounded-full bg-[#f3f3f3] px-2 py-1 text-[10px] font-medium text-gray-600">
                  RERA
                  <Image
                    src="/images/newlaunchproject/rera.png"
                    alt="RERA"
                    width={12}
                    height={12}
                  />
                </span>
              </div>

              <div className="flex items-center gap-2 text-gray-400">
                <span className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 text-xs">
                  ⏱
                </span>
                <span>Last Updated Date 02 April, 2025</span>
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="flex flex-col items-start lg:items-end justify-between gap-3">

            <p className="text-sm text-gray-500">
              2,2.5,3 BHK
            </p>

            <p className="text-[18px] font-semibold text-gray-900">
              ₹ 81.08 Lakh - 1.05 Cr*
            </p>

            <button
              onClick={() => setShowBrochurePopup(true)}
              className="
                inline-flex items-center gap-2
                px-4 py-2
                bg-[#F5A300]
                hover:bg-[#e49a00]
                text-white
                rounded-md
                text-sm
                font-medium
                transition
              "
            >
              ⬇ Download Brochure
            </button>
          </div>
        </div>
      </div>

      {/* ================= BROCHURE POPUP ================= */}
      {showBrochurePopup && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
          <div className="relative w-full max-w-md bg-white rounded-xl p-6">

            {/* CLOSE */}
            <button
              onClick={() => setShowBrochurePopup(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-black text-xl"
            >
              ✕
            </button>

            <h3 className="text-lg font-semibold text-gray-900 mb-2">
               Brochure
            </h3>

            <p className="text-sm text-gray-600 mb-4">
              Enter your details to get the project brochure.
            </p>

            <div className="space-y-3">
              <input
                type="text"
                placeholder="Full Name*"
                className="w-full border rounded-md px-4 py-2 text-sm outline-none focus:border-[#F5A300]"
              />

              <input
                type="email"
                placeholder="Email Address*"
                className="w-full border rounded-md px-4 py-2 text-sm outline-none focus:border-[#F5A300]"
              />

              <input
                type="tel"
                placeholder="Contact Number*"
                className="w-full border rounded-md px-4 py-2 text-sm outline-none focus:border-[#F5A300]"
              />
            </div>

            <button
              className="mt-5 w-full bg-[#F5A300] hover:bg-[#e49a00] text-white py-2.5 rounded-md text-sm font-semibold transition"
            >
              Download Brochure
            </button>
          </div>
        </div>
      )}
    </>
  );
}
