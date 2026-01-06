"use client";

import { useEffect, useState } from "react";

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

  // 👉 click scroll
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;

    setActiveTab(id);

    const HEADER_OFFSET = 140;
    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - HEADER_OFFSET;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  // 👉 auto highlight on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-160px 0px -60% 0px", // header offset + bottom tolerance
        threshold: 0,
      }
    );

    tabs.forEach((tab) => {
      const section = document.getElementById(tab.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  if (menuOpen) return null;

  return (
    <div className="bg-white shadow-md sticky top-[96px] z-40">
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
