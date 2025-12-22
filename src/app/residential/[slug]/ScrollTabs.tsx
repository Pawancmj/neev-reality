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
    setActiveTab(id); // 👈 ACTIVE SET
    const section = document.getElementById(id);
    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="sticky top-[80px] z-50 bg-white border rounded-xl shadow-sm p-6">
      <div className="flex flex-wrap justify-center gap-6 text-sm font-medium border-b pb-2">
        {tabs.map((tab) => (
          <span
            key={tab.id}
            onClick={() => scrollToSection(tab.id)}
            className={`cursor-pointer pb-2 transition-all
              ${
                activeTab === tab.id
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }
            `}
          >
            {tab.label}
          </span>
        ))}
      </div>
    </div>
  );
}

