"use client";

import { useState } from "react";
import {
  FiMapPin,
  FiChevronLeft,
  FiChevronRight,
  FiSearch,
  FiMic,
} from "react-icons/fi";
import { CiGlobe } from "react-icons/ci";
import Image from "next/image";

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

  return (
    <div className="relative w-full">

      {/* ================= HERO IMAGE ================= */}
      <div className="w-full">
        <Image
          src="/images/heroimg.png"
          alt="Neev Realty"
          width={1600}
          height={700}
          className="w-full h-[60vh] sm:h-[70vh] object-cover"
          priority
        />
      </div>

      {/* ================= SEARCH CARD ================= */}
      <section className="relative z-20 -mt-24 sm:-mt-32 px-4">
        <div className="mx-auto max-w-6xl rounded-2xl bg-white px-6 py-6 shadow-[0_20px_60px_rgba(15,23,42,0.15)]">

          {/* Heading + Tabs */}
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-lg sm:text-xl font-normal text-gray-800">
              Find your Perfect Home with Neev Reality
            </h2>

            <div className="inline-flex w-fit items-center rounded-full bg-gray-100 p-1">
              {(["Residential", "Commercial"] as Tab[]).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    activeTab === tab
                      ? "bg-white shadow-sm text-gray-900"
                      : "text-gray-500 hover:text-gray-800"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Search Bar */}
          <div className="mb-4 flex flex-col gap-3 rounded-2xl bg-white px-4 py-3 shadow-[0_12px_40px_rgba(15,23,42,0.12)] sm:flex-row sm:items-center">

            {/* Input */}
            <div className="flex flex-1 items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-500">
                <FiMapPin size={16} />
              </span>

              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by City, Locality, or Project"
                className="w-full border-0 bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
              />
            </div>

            {/* Icons */}
            <div className="flex items-center gap-2 text-gray-500">
              <button className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-100">
                <CiGlobe size={18} />
              </button>
              <button className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-100">
                <FiMic size={16} />
              </button>
            </div>

            {/* Search Button */}
            <button className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0054F8] px-6 py-2 text-sm font-medium text-white">
              <FiSearch size={18} />
              Search
            </button>
          </div>

          {/* Tags */}
          <div className="flex items-center gap-3">
            <button className="hidden sm:flex h-9 w-9 items-center justify-center rounded-full bg-white shadow text-gray-500">
              <FiChevronLeft size={18} />
            </button>

            <div className="flex flex-1 gap-3 overflow-x-auto scrollbar-hide">
              {TAGS.map((tag) => (
                <button
                  key={tag}
                  className="whitespace-nowrap rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs text-gray-700 shadow hover:border-gray-300"
                >
                  {tag}
                </button>
              ))}
            </div>

            <button className="hidden sm:flex h-9 w-9 items-center justify-center rounded-full bg-white shadow text-gray-500">
              <FiChevronRight size={18} />
            </button>
          </div>

        </div>
      </section>
    </div>
  );
}
