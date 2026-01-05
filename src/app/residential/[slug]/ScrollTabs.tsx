"use client";

import { useState } from "react";

type ScrollTabsProps = {
  menuOpen: boolean;
};

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

export default function ScrollTabs({ menuOpen }: ScrollTabsProps) {
  const [activeTab, setActiveTab] = useState("overview");

  const scrollToSection = (id: string) => {
    setActiveTab(id);

    const section = document.getElementById(id);
    if (!section) return;

    const HEADER_OFFSET = 140;
    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - HEADER_OFFSET;

    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  };

  if (menuOpen) return null;

  return (
    <div className="bg-white shadow-md">
      <div className="flex gap-6 overflow-x-auto no-scrollbar px-4 py-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => scrollToSection(tab.id)}
            className={`whitespace-nowrap text-sm font-medium pb-2 transition-all
              ${
                activeTab === tab.id
                  ? "text-[#DBA40D] border-b-2 border-[#DBA40D]"
                  : "text-gray-600 hover:text-[#DBA40D]"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
