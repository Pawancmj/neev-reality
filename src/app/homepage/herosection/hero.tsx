"use client";

import { useState } from "react";
import { FiMapPin, FiChevronLeft, FiChevronRight, FiSearch } from "react-icons/fi";
import { CiGlobe } from "react-icons/ci";
import { FiMic } from "react-icons/fi";
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
    <div>
        <div>
             <Image
                          src="/images/heroimg.png" 
                          alt="Neev Realty Logo"
                          width={1440}
                          height={617}
                          className="h-auto w-auto mx-auto"
                          style={{width:1520,height:617}}
                        />
        </div>
    <section className="flex w-full justify-center bg-transparent py-10 absolute top-148">
      <div className="w-full  rounded-lg bg-white px-8 py-6 shadow-[0_20px_60px_rgba(15,23,42,0.15)]" style={{width:1144,height:238}}>
        {/* Heading + Tabs */}
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2 className="text-xl font-normal tracking-wide text-gray-800 relative left-30">
            Find your Perfect Home with Neev Reality
          </h2>

          <div className="inline-flex items-center rounded-full bg-gray-100 p-1 relative right-20">
            {(["Residential", "Commercial"] as Tab[]).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition ${
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

        {/* Search bar */}
        <div className="mb-4 flex items-center rounded-full bg-white px-4 py-3 shadow-[0_12px_40px_rgba(15,23,42,0.12)]">
          {/* Icon + input */}
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

          {/* Right icons */}
          <div className="flex items-center gap-3 pr-3 text-gray-500">
            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-100"
            >
              <CiGlobe size={18} />
            </button>
            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-100"
            >
              <FiMic size={16} />
            </button>
          </div>

          {/* Search button */}
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full bg-[#0054F8] px-6 py-2 text-sm font-medium text-white ]"
          >
            <FiSearch size={18} />
            <span>Search</span>
          </button>
        </div>

        {/* Tags row */}
        <div className="flex items-center justify-between gap-4">
          {/* Left chevron */}
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-[0_6px_16px_rgba(15,23,42,0.15)] text-gray-500"
          >
            <FiChevronLeft size={18} />
          </button>

          {/* Scrollable tags */}
          <div className="flex flex-1 flex-wrap items-center gap-3 overflow-x-auto scrollbar-hide">
            {TAGS.map((tag) => (
              <button
                key={tag}
                type="button"
                className="whitespace-nowrap rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs text-gray-700 shadow-[0_6px_16px_rgba(15,23,42,0.08)] hover:border-gray-300"
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Right chevron */}
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-[0_6px_16px_rgba(15,23,42,0.15)] text-gray-500"
          >
            <FiChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
    </div>
  );
}
