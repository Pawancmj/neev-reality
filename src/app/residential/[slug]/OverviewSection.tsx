"use client";

import { useState } from "react";
import Image from "next/image";
import GetInTouchModal from "@/app/residential/[slug]/GetInTouchModal";
import BrandEnquiryPopup from "./BrandEnquiryPopup";

type Props = {
  propertyTitle: string;
};

export default function OverviewSection({
  propertyTitle,
}: Props) {
  const [openEnquiry, setOpenEnquiry] = useState(false);

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
            filled apartments, which are desired by all.
            
          </p>

          {/* CTA BUTTON */}
          <div className="mt-6">
            <button
              onClick={() => setOpenEnquiry(true)}
              className="px-6 py-2 bg-[#F5A300] text-white rounded-md text-sm font-medium hover:bg-[#e39a00] transition"
            >
              Enquire Now
            </button>
          </div>
        </div>
      </section>

      <BrandEnquiryPopup
        open={openEnquiry}
        onClose={() => setOpenEnquiry(false)}
        propertyTitle={propertyTitle}
      />

    </>
  );
}
