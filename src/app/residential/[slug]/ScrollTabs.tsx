"use client";

import { useState } from "react";

const tabs = [
  { label: "Overview", id: "overview" },
  { label: "Floor Plan", id: "floor-plan" },
  { label: "Payment Plan", id: "payment-plan" },
  { label: "Amenities", id: "amenities" },
  { label: "Location", id: "location" },
  { label: "EMI", id: "emi" },
  { label: "FAQ", id: "faq" },
  { label: "Developer", id: "developer" },
];

export default function ScrollTabs() {
  const [activeTab, setActiveTab] = useState("overview");

  const scrollToSection = (id: string) => {
    setActiveTab(id);

    const section = document.getElementById(id);
    if (!section) return;

    const HEADER_OFFSET = 140;

    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - HEADER_OFFSET;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <div className="sticky top-[132px] z-50 bg-white border rounded-xl shadow-sm">

      {/* SCROLL CONTAINER */}
      <div
        className="
          flex gap-6
          overflow-x-auto
          no-scrollbar
          px-4 py-4

          lg:justify-center
          lg:flex-wrap
        "
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => scrollToSection(tab.id)}
            className={`
              whitespace-nowrap
              text-sm font-medium
              pb-2 transition-all
              flex-shrink-0

              ${
                activeTab === tab.id
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}


