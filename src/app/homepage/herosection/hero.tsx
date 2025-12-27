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

  useEffect(() => {
    setShowVideo(true);
  }, []);

  const handleCloseVideo = () => {
    setShowVideo(false);
  };

  return (
    <section className="relative w-full">
      {/* ============== HERO WRAPPER (IMAGE + VIDEO) ============== */}
      <div className="relative mx-auto w-[1520px] h-[720px] max-w-full max-lg:max-h-[400px]">
        <Image
          src="/images/heroimg.png"
          alt="Hero"
          fill
          className="object-cover rounded-xl"
          priority
        />

        {/* --- YouTube Video Overlay --- */}
        {showVideo && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 p-4">
            {/* DESKTOP: Exact same as your original */}
            <div className="relative w-[800px] aspect-video hidden max-md:block md:flex">
              <button
                onClick={handleCloseVideo}
                className="
                  absolute -top-2 -right-83 z-20
                  h-10 w-10 rounded-full bg-black/90 text-white hover:bg-black
                  flex items-center justify-center text-lg font-bold shadow-lg
                  transition-all duration-200 hover:scale-110
                "
              >
                ✕
              </button>

              <iframe
                className="w-90 h-60 absolute left-190 rounded-2xl shadow-2xl"
                src="https://www.youtube.com/embed/4jnzf1yj48M?autoplay=1&mute=0&controls=1"
                title="Neev Reality Promotional Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>

            {/* MOBILE: WIDER WIDTH + SMALLER CLOSE BUTTON */}
            <div className="relative w-[98vw] max-w-[550px] max-h-[225px] aspect-video block max-md:flex md:hidden">
              <button
                onClick={handleCloseVideo}
                className="
                  absolute -top-2 -right-2 z-20
                  h-8 w-8 rounded-full bg-black/95 text-white hover:bg-black
                  flex items-center justify-center text-base font-bold shadow-xl
                  transition-all duration-200 hover:scale-110
                "
              >
                ✕
              </button>

              <iframe
                className="absolute inset-0 w-full h-full rounded-3xl shadow-2xl"
                src="https://www.youtube.com/embed/4jnzf1yj48M?autoplay=1&mute=0&controls=1"
                title="Neev Reality Promotional Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        )}
      </div>

      {/* ================= FLOATING SEARCH CARD (unchanged) ================= */}
      <div
        className="
          absolute left-1/2 top-[520px] -translate-x-1/2
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
                className={`rounded-full px-5 py-2 text-sm font-medium transition ${
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

        <div
          className="
            mb-4 flex items-center gap-4 rounded-full
            bg-white px-5 py-3
            shadow-[0_10px_35px_rgba(0,0,0,0.12)]
            max-lg:flex-col max-lg:rounded-2xl
          "
        >
          <div className="flex flex-1 items-center gap-3 max-lg:w-full">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-500">
              <FiMapPin size={16} />
            </span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by City, Locality, or Project"
              className="w-full border-none bg-transparent text-sm outline-none"
            />
          </div>

          <div className="flex items-center gap-3 text-gray-500">
            <button className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-gray-100">
              <CiGlobe size={18} />
            </button>
            <button className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-gray-100">
              <FiMic size={16} />
            </button>
          </div>

          <button
            className="
              flex items-center gap-2 rounded-full
              bg-[#DBA40D] px-7 py-3
              text-sm font-medium text-white
              max-lg:w-full max-lg:justify-center
            "
          >
            <FiSearch size={18} />
            Search
          </button>
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
