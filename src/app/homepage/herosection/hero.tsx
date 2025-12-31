"use client";

import { useState, useEffect } from "react";
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
      {/* ================= HERO ================= */}
      <div className="relative w-full h-[420px] max-w-none max-lg:h-[500px] mb-23 overflow-visible">
        <Image
          src="/images/heroimg.png"
          alt="Hero"
          fill
          priority
          className="object-cover w-full h-full"
          sizes="(max-width: 768px) 100vw, 1920px"
          style={{ objectPosition: 'center' }}
        />

        {/* ================= VIDEO OVERLAY ================= */}
        {showVideo && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 px-4 z-20">
            {/* ✅ DESKTOP VIDEO */}
            <div className="hidden md:flex absolute right-12 top-1/2 -translate-y-1/2 w-[340px] aspect-video">
              <button
                onClick={() => setShowVideo(false)}
                className="absolute -top-4 -right-4 z-30 h-10 w-10 rounded-full bg-black text-white flex items-center justify-center shadow-2xl"
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

            {/* ✅ MOBILE VIDEO */}
            <div className="md:hidden relative w-full max-w-[360px] max-h-[250px] aspect-video mx-auto">
              <button
                onClick={() => setShowVideo(false)}
                className="absolute -top-3 -right-3 z-30 h-10 w-10 rounded-full bg-black text-white flex items-center justify-center shadow-xl text-lg"
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
          </div>
        )}
      </div>

      {/* ================= FLOATING SEARCH CARD (EXACT SAME) ================= */}
      <div
        className="
          absolute left-1/2 top-[280px] -translate-x-1/2
          w-[1180px] rounded-2xl bg-white
          shadow-[0_25px_70px_rgba(0,0,0,0.15)]
          px-8 py-6
          max-lg:static
          max-lg:translate-x-0
          max-lg:mx-auto
          max-lg:mt-6
          max-lg:w-[95%]
        "
      >
        <div className="mb-5 flex items-center justify-between max-lg:flex-col max-lg:gap-4">
          <h2 className="text-[28px] font-semibold text-gray-800">
            Find your Perfect Home with{" "}
            <span className="text-[#DBA40D]">Neev Reality</span>
          </h2>

          <div className="flex rounded-full bg-gray-100 p-1">
            {(["Residential", "Commercial"] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition ${activeTab === tab
                    ? "bg-white shadow text-gray-900"
                    : "text-gray-500 hover:text-gray-800"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div
          className="mb-4 flex items-center gap-4 rounded-full
                    bg-white px-5 py-3
                    shadow-[0_10px_35px_rgba(0,0,0,0.12)]
                    max-lg:flex-col max-lg:rounded-2xl
                  "
        >
          <div className="flex flex-1 items-center gap-3 max-lg:w-full">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-500">
              <FiMapPin size={16} />
            </span>
            <div className="relative w-full">
              {!query && (
                <div className="absolute top-1/2 -translate-y-1/2 left-3 w-[90%] overflow-hidden pointer-events-none">
                  <div className="whitespace-nowrap animate-scroll text-sm text-gray-400">
                    Search by City, Locality, or Project • Search by City, Locality, or Project •
                  </div>
                </div>
              )}

              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-white rounded-md py-2 px-3 text-sm outline-none"
              />
            </div>

            <button className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-gray-100">
              <CiGlobe size={18} />
            </button>
            <button className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-gray-100">
              <FiMic size={16} />
            </button>

            <button
              className="flex items-center gap-2 rounded-full
                        bg-[#DBA40D] px-3 py-3
                        text-sm font-medium text-white
                        max-sm:w-full max-lg:justify-center
                      "
            >
              <FiSearch size={15} />
              Search
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow max-md:hidden">
            <FiChevronLeft />
          </button>

          <div className="flex flex-1 gap-3 overflow-x-auto scrollbar-hide">
            {TAGS.map((tag) => (
              <button
                key={tag}
                className="whitespace-nowrap rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs shadow hover:border-gray-300 hover:shadow-md transition-all"
              >
                {tag}
              </button>
            ))}
          </div>

          <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow max-md:hidden">
            <FiChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
