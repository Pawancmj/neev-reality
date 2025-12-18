"use client";
import { useState } from "react";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import Navbar from "../../reusable_components/navbar/navbar";
import Footer from "../../reusable_components/footer/footer";
import PropertyCard from "@/components/apartment-property/PropertyCard";
import Pagination from "@/components/apartment-property/Pagination";
import apartments from "@/data/apartmentsData";

export default function ApartmentsPage() {
  const [page, setPage] = useState(1);
  
  return (
     
    <>
      <Navbar />

      {/* ================= PAGE INTRO / BREADCRUMB SECTION ================= */}
      <section className="bg-[#F6FBFF] ">
        <div className="max-w-[1240px] mx-auto px-4 py-6">
          <div className="text-sm text-gray-500 mb-3">
            Residential &nbsp;›&nbsp; Builder Floor
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="max-w-4xl">
              <h1 className="text-xl sm:text-2xl md:text-[26px] font-semibold text-gray-900 leading-snug">
                Residential Apartments Property for Sale in Gurgaon
              </h1>

              <p className="mt-2 text-sm sm:text-[15px] text-gray-600 leading-relaxed">
                Booming Micro Residential Apartments Market in Gurgaon – Luxury
                apartments in Gurgaon are offering massive opportunity for long
                term capital gains. Well planned infrastructure, high performance
                commercial buildings and ever increasing IT base have made life
                in the city worth living.
                <span className="text-blue-600 cursor-pointer ml-1">
                  Read More
                </span>
              </p>
            </div>

            <div className="text-sm text-gray-500 whitespace-nowrap">
              456 results
            </div>
          </div>
        </div>
      </section>

      {/* ================= TRENDING PROJECTS SECTION ================= */}
      <section className="bg-white py-16">
        <div className="max-w-[1240px] mx-auto px-4">

          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Trending <span className=" text-[#F5A300]">Projects</span>
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* LEFT CONTENT */}
            <div className="text-center lg:text-left">

              {/* Tag */}
              <span className="inline-block bg-gray-800 text-white text-xs px-3 py-1 rounded mb-6 ml-40">
                Residential
              </span>

              {/* Heading */}
              <div className="leading-none">
                <p className="text-md tracking-widest text-gray-500 mb-2 ml-45">
                  2025
                </p>

                <h3 className="text-5xl sm:text-6xl font-extrabold text-gray-800">
                  TRENDING
                </h3>

                <h3 className="text-5xl sm:text-6xl font-extrabold text-[#6B4EFF] ml-16">
                  PROJECTS
                </h3>
              </div>

              {/* Prepared By */}
              <div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
                <Image
                  src="/images/logo.png"
                  alt="Neev Realty"
                  width={110}
                  height={40}
                />

                <p className="text-sm text-gray-500 leading-tight">
                  Prepared By <br />
                  <span className="font-semibold text-[#6B4EFF]">
                    Neev Realty
                  </span>
                </p>
              </div>

            </div>

            {/* RIGHT IMAGE (NORMAL IMAGE) */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[620px] h-[260px] sm:h-[320px] lg:h-[360px]   shadow-md">
                <Image
                  src="/images/trending.png"
                  alt="Trending Project"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-[#F6FBFF] overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-4 pt-16 pb-28">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <p className="text-sm text-gray-500">
                From as low as $10 per day with limited-time offer discounts.
              </p>

              <h1 className="mt-3 text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-gray-900 leading-tight">
                Your <span className="text-[#F5A300]">Property</span>, <br />
                Our Priority.
              </h1>

              <p className="mt-4 text-gray-600 max-w-xl">
                Search and explore premium apartments — use the filters to find
                the right match for your needs.
              </p>
            </div>

            <div className="flex justify-center lg:justify-end relative">
              <div className="relative w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] lg:w-[440px] lg:h-[440px] rounded-[40px] lg:rounded-[60px] overflow-hidden shadow-lg">
                <Image
                  src="/images/hero-tiles.png"
                  alt="Property collage"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* SEARCH BAR */}
          <div className="relative mt-14 lg:mt-0">
            <div className="lg:absolute lg:-bottom-1 lg:left-0 w-full flex justify-center lg:justify-start">
              <div className="w-full max-w-[980px] px-2">
                <div className="bg-white rounded-2xl sm:rounded-full shadow-[0_20px_60px_rgba(0,0,0,0.12)] p-4 flex flex-col lg:flex-row items-stretch lg:items-center gap-3">

                  <div className="relative flex items-center w-full flex-1">
                    <input
                      className="w-full outline-none text-sm px-4 py-2 pr-10 rounded-full bg-gray-50"
                      placeholder="Enter Keyword"
                    />
                    <FiSearch className="absolute right-4 text-gray-500 text-lg" />
                  </div>

                  <select className="w-full lg:w-auto text-sm px-4 py-2 rounded-full bg-gray-50 lg:bg-transparent lg:border-l lg:rounded-none">
                    <option>All Status</option>
                  </select>

                  <select className="w-full lg:w-auto text-sm px-4 py-2 rounded-full bg-gray-50 lg:bg-transparent lg:border-l lg:rounded-none">
                    <option>All Type</option>
                  </select>

                  <button className="w-full lg:w-auto px-4 py-2 rounded-full border">
                    Filter
                  </button>

                  <button className="w-full lg:w-auto px-6 py-2 rounded-full bg-[#F5A300] text-white">
                    Search
                  </button>

                </div>
              </div>
            </div>
          </div>

          <div className="mt-24 flex justify-center lg:justify-start">
            <Image
              src="/images/agent.png"
              alt="agent"
              width={228}
              height={228}
            />
          </div>
        </div>

        <div className="h-24"></div>
      </section>

      {/* ================= LISTINGS GRID ================= */}
      <main className="py-10">
        <div className="max-w-[1240px] mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {apartments.map((item) => (
              <PropertyCard key={item.id} property={item} />
            ))}
          </div>
        </div>
         <Pagination
        currentPage={page}
        totalPages={23}
        onPageChange={(p) => setPage(p)}
      />
      </main>



      <Footer />
    </>
  );
}
