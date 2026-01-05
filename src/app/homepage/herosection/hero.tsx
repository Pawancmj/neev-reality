"use client";

import { useState } from "react";
import Image from "next/image";
import { FiMapPin, FiSearch, FiMic } from "react-icons/fi";
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
  const [playMobileVideo, setPlayMobileVideo] = useState(false);

  return (
    <section className="relative w-full">
      {/* ================= HERO ================= */}
      <div className="relative w-full h-[360px] sm:h-[400px] md:h-[450px] overflow-hidden">
        <Image
          src="/images/heroimg.png"
          alt="Hero"
          fill
          priority
          className="object-cover"
        />

        {/* ================= DESKTOP VIDEO ================= */}
        {showVideo && (
          <div className="absolute inset-0 z-20 hidden md:flex items-center justify-center">
            <div className="absolute right-10 top-49 -translate-y-1/2 w-[280px] h-[320px]">
              <button
                onClick={() => setShowVideo(false)}
                className="absolute -top-3 -right-3 z-30 h-9 w-9 rounded-full bg-black text-white"
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

        {/* ================= MOBILE YOUTUBE ICON ================= */}
        {!playMobileVideo && (
          <div className="md:hidden absolute right-3 bottom-50 z-30">
            <button
              onClick={() => setPlayMobileVideo(true)}
              className="h-11 w-11 rounded-full bg-white shadow-lg flex items-center justify-center"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6 text-red-600"
                fill="currentColor"
              >
                <path d="M23.5 6.2s-.2-1.7-.9-2.4c-.8-.9-1.7-.9-2.1-1C17.7 2.5 12 2.5 12 2.5s-5.7 0-8.5.3c-.4.1-1.3.1-2.1 1C.7 4.5.5 6.2.5 6.2S0 8.1 0 10v1.9c0 1.9.5 3.8.5 3.8s.2 1.7.9 2.4c.8.9 1.9.9 2.4 1 1.7.2 7.2.3 7.2.3s5.7 0 8.5-.3c-.4-.1 1.3-.1 2.1-1 .7-.7.9-2.4.9-2.4s.5-1.9.5-3.8V10c0-1.9-.5-3.8-.5-3.8zM9.5 13.5V7.5l6 3-6 3z" />
              </svg>
            </button>
          </div>
        )}

        {/* ================= MOBILE HERO VIDEO ================= */}
        {playMobileVideo && (
          <div className="md:hidden absolute inset-0 z-40 bg-black/60 flex items-center justify-center px-4">
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setPlayMobileVideo(false)}
              className="absolute top-15 right-3 z-50 h-9 w-9 rounded-full bg-black text-white flex items-center justify-center"
            >
              ✕
            </button>

            {/* VIDEO */}
            <div className="w-full max-w-sm aspect-video rounded-xl overflow-hidden bg-black shadow-2xl">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/4jnzf1yj48M?autoplay=1&mute=1"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </div>

      {/* ================= SEARCH WRAPPER ================= */}
      <div
        className="
          absolute left-1/2 -translate-x-1/2
          top-[380px]
          max-lg:top-[370px]
          max-sm:top-[320px]
          max-lg:px-4
          max-sm:px-3
          w-full max-w-[1020px]
          z-20
        "
      >
        {/* ================= SEARCH CARD ================= */}
        <div
          className="
            bg-white rounded-2xl
            shadow-[0_20px_60px_rgba(0,0,0,0.15)]
            px-4 sm:px-6 pt-4 pb-5
            w-full
          "
        >
          {/* HEADER */}
          <div
            className="
              mb-4
              flex flex-col
              items-center text-center
              gap-3
              md:flex-row
              md:items-center
              md:justify-between
              md:text-left
            "
          >
            <h2 className="lg:text-lg sm:text-sm font-semibold text-gray-800">
              Find your perfect home with{" "}
              <span className="text-[#DBA40D]">Neev Reality</span>
            </h2>

            <div className="flex rounded-full bg-gray-100">
              {(["Residential", "Commercial"] as Tab[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-full px-4 lg:text-lg sm:text-xs font-medium transition ${
                    activeTab === tab
                      ? "bg-white shadow text-gray-900"
                      : "text-gray-500"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* SEARCH BAR */}
          <div
            className="
              flex items-center
              gap-2 max-sm:gap-1.5 sm:gap-3 lg:gap-4
              rounded-2xl
              bg-white 
              px-3 max-sm:px-2 py-2.5
              w-full max-w-[940px] mx-auto
            "
          >
            {/* LOCATION ICON + INPUT - MOBILE COMPACT */}
            <div className="flex items-center flex-1 min-w-0 gap-1.5 sm:gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-600">
                <FiMapPin className="size-4 sm:size-[18px]" />
              </span>
              
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 bg-transparent py-2 px-2 sm:px-4 text-xs sm:text-sm outline-none placeholder:text-gray-500 min-w-[120px] max-sm:min-w-[100px]"
                placeholder="Search by City, Locality, or Project"
              />
            </div>

            {/* MOBILE: Icons hidden, DESKTOP: Icons visible */}
            <div className="hidden sm:flex gap-1.5 sm:gap-2 lg:gap-3 -ml-1.5 sm:-ml-2 items-center">
              <button className="h-10 w-10 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-all shrink-0">
                <CiGlobe className="size-4 sm:size-[18px]" />
              </button>
              <button className="h-10 w-10 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-all shrink-0">
                <FiMic className="size-4 sm:size-[18px]" />
              </button>
            </div>

            {/* SEARCH BUTTON */}
            <button
              className="
                bg-[#DBA40D] hover:bg-[#c8950b] 
                px-5 sm:px-7 lg:px-8 py-2.5
                rounded-xl shadow-md hover:shadow-lg transition-all
                text-white font-semibold text-xs sm:text-sm
                flex items-center justify-center gap-1.5 shrink-0
                h-10 whitespace-nowrap
              "
            >
              <FiSearch className="size-4 sm:size-[18px]" />
              <span className="max-sm:hidden sm:inline">Search</span>
            </button>
          </div>
        </div>

        {/* ================= TAGS (NO SHADOW / NO BG) ================= */}
        <div className="mt-4 flex gap-2 overflow-x-auto pb-2 px-2">
          {TAGS.map((tag) => (
            <button
              key={tag}
              className="whitespace-nowrap rounded-full border px-3 py-1.5 text-xs bg-white hover:bg-gray-50 transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
