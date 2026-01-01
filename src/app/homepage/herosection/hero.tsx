"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FiMapPin,
  FiSearch,
  FiChevronLeft,
  FiChevronRight,
  FiMic,
} from "react-icons/fi";
import { CiGlobe } from "react-icons/ci";

const TAGS = [
  "Sohna Road",
  "Golf Course Road",
  "MG Road",
  "Northern Peripheral Road",
  "Dwarka Expressway",
  "New Gurgaon",
];

type Tab = "Residential" | "Commercial";

export default function SearchCard() {
  const [activeTab, setActiveTab] = useState<Tab>("Residential");
  const [query, setQuery] = useState("");
  const [showVideo, setShowVideo] = useState(true);

  return (
    <section className="relative w-full">
      {/* HERO */}
      <div className="relative w-full h-[420px] max-w-none max-lg:h-[450px] max-sm:h-[400px] mb-23 overflow-visible">
        <Image
          src="/images/heroimg.png"
          alt="Hero"
          fill
          priority
          className="object-cover w-full h-full"
          sizes="(max-width: 768px) 100vw, 1920px"
          style={{ objectPosition: "center" }}
        />

        {/* VIDEO OVERLAY */}
        {showVideo && (
          <div className="absolute inset-0 flex items-center justify-center px-2 sm:px-4 z-20">
            {/* DESKTOP VIDEO - UNCHANGED */}
            <div className="hidden md:flex absolute right-10 top-1/2 h-102 -translate-y-1/2 w-[320px] aspect-video">
              <button
                onClick={() => setShowVideo(false)}
                className="absolute -top-3 -right-3 z-30 h-9 w-9 rounded-full bg-black text-white flex items-center justify-center shadow-2xl text-sm"
              >
                ✕
              </button>

              <iframe
                className="w-full h-full rounded-2xl shadow-2xl"
                src="https://www.youtube.com/embed/4jnzf1yj48M?autoplay=1&mute=1"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>

            {/* MOBILE VIDEO - IMPROVED RESPONSIVE */}
            <div className="md:hidden relative w-full max-w-[300px] max-w-sm max-h-[200px] mx-auto aspect-[16/9] rounded-2xl shadow-2xl overflow-hidden">
              <button
                onClick={() => setShowVideo(false)}
                className="absolute -top-2 -right-2 z-30 h-8 w-8 rounded-full bg-black/90 text-white flex items-center justify-center shadow-xl text-sm backdrop-blur-sm"
              >
                ✕
              </button>

              <iframe
                className="absolute inset-0 w-full h-full rounded-2xl"
                src="https://www.youtube.com/embed/4jnzf1yj48M?autoplay=1&mute=1"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </div>

      {/* FLOATING SEARCH CARD */}
      <div
        className="
          absolute left-1/2 top-[298px] -translate-x-1/2
          w-[520px] max-w-[95vw] 
          rounded-2xl bg-white
          shadow-[0_20px_60px_rgba(0,0,0,0.15)]
          px-6 py-5
          max-lg:static
          max-lg:translate-x-0
          max-lg:mx-auto
          max-lg:mt-6
        "
      >
        {/* HEADER + TABS */}
        <div className="mb-6 flex items-start justify-between gap-3 max-lg:flex-col max-lg:gap-3">
          <h2 className="text-[22px] leading-snug font-semibold text-gray-800 max-w-[60%] max-lg:max-w-full">
            Find your perfect home with{" "}
            <span className="text-[#DBA40D]">Neev Reality</span>
          </h2>

          <div className="flex rounded-full bg-gray-100 p-1 shrink-0">
            {(["Residential", "Commercial"] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition ${
                  activeTab === tab
                    ? "bg-white shadow text-gray-900"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* SEARCH BAR - BETTER MOBILE STACKING */}
        <div
          className="mb-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 rounded-2xl
            bg-white px-4 py-3 sm:py-2.5
            shadow-[0_8px_28px_rgba(0,0,0,0.10)]
          "
        >
          <div className="flex flex-1 items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-500 shrink-0">
              <FiMapPin size={15} />
            </span>

            <div className="relative flex-1">
              {!query && (
                <div className="absolute top-1/2 -translate-y-1/2 left-3 w-[85%] overflow-hidden pointer-events-none">
                  <div className="whitespace-nowrap animate-scroll text-xs text-gray-400">
                    Search by City, Locality, or Project •
                  </div>
                </div>
              )}

              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent rounded-md py-2 px-3 text-sm outline-none placeholder-gray-400"
                // placeholder="Search by City, Locality, or Project"
              />
            </div>

            <div className="flex gap-1 sm:hidden">
              <button className="h-9 w-9 items-center justify-center rounded-full hover:bg-gray-100 flex">
                <CiGlobe size={16} />
              </button>
              <button className="h-9 w-9 items-center justify-center rounded-full hover:bg-gray-100 flex">
                <FiMic size={15} />
              </button>
            </div>
          </div>

          <button
            className="flex items-center gap-1.5 rounded-xl
              bg-[#DBA40D] px-5 py-3
              text-sm font-medium text-white
              shadow-lg hover:shadow-xl transition-all
              w-full sm:w-auto
            "
          >
            <FiSearch size={15} />
            Search
          </button>
        </div>

        {/* TAGS ROW - BETTER MOBILE SCROLL */}
        <div className="flex items-center gap-2">
          <button className="hidden md:flex h-8 w-8 items-center justify-center rounded-full bg-white shadow hover:bg-gray-50">
            <FiChevronLeft size={14} />
          </button>

          <div className="flex flex-1 gap-1.5 sm:gap-2 overflow-x-auto scrollbar-hide pb-1 sm:pb-0">
            {TAGS.map((tag) => (
              <button
                key={tag}
                className="whitespace-nowrap rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs sm:text-[11px] shadow-sm hover:border-[#DBA40D] hover:shadow-md transition-all flex-shrink-0 min-w-[80px]"
              >
                {tag}
              </button>
            ))}
          </div>

          <button className="hidden md:flex h-8 w-8 items-center justify-center rounded-full bg-white shadow hover:bg-gray-50">
            <FiChevronRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}
