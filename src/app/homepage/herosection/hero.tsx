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

  return (
    <section className="relative w-full">

      {/* ================= HERO IMAGE ================= */}
      <Image
        src="/images/heroimg.png"
        alt="Hero"
        width={1520}
        height={720}
        className="mx-auto"
        style={{ width: 1520, height: 720 }}
        priority
      />

      {/* ================= FLOATING SEARCH CARD ================= */}
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
        {/* -------- Heading + Tabs -------- */}
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

        {/* -------- Search Bar -------- */}
        <div
          className="
            mb-4 flex items-center gap-4 rounded-full
            bg-white px-5 py-3
            shadow-[0_10px_35px_rgba(0,0,0,0.12)]

            max-lg:flex-col max-lg:rounded-2xl
          "
        >
          {/* Input */}
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

          {/* Icons */}
          <div className="flex items-center gap-3 text-gray-500">
            <button className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-gray-100">
              <CiGlobe size={18} />
            </button>
            <button className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-gray-100">
              <FiMic size={16} />
            </button>
          </div>

          {/* Search Button */}
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

        {/* -------- Tags -------- */}
        <div className="flex items-center gap-3">
          <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow max-md:hidden">
            <FiChevronLeft />
          </button>

          <div className="flex flex-1 gap-3 overflow-x-auto">
            {TAGS.map((tag) => (
              <button
                key={tag}
                className="whitespace-nowrap rounded-full border
                border-gray-200 bg-white px-4 py-1.5 text-xs
                shadow hover:border-gray-300"
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

