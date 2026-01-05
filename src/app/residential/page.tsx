"use client";
import { useState } from "react";
import Image from "next/image";
import Navbar from "../reusable_components/navbar/navbar";
import Footer from "../reusable_components/footer/footer";
import PropertyCard from "@/components/apartment-property/PropertyCard";
import Pagination from "@/components/apartment-property/Pagination";
import apartments from "@/data/apartmentsData";

export default function ApartmentsPage() {
  const [page, setPage] = useState(1);

  return (
    <> 
      <Navbar />

      {/* ================= PAGE INTRO ================= */}
      <section className="bg-[#F6FBFF]">
        <div className="max-w-[1240px] mx-auto px-4 py-6">
         <div className="text-sm text-gray-500 mb-3">Residential</div>

         <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="max-w-4xl">
              <h1 className="text-xl sm:text-2xl md:text-[26px] font-semibold text-gray-900">
                Residential Apartments Property for Sale in Gurgaon
              </h1>

              <p className="mt-2 text-sm sm:text-[15px] text-gray-600">
                Booming Micro Residential Apartments Market in Gurgaon –
                luxury apartments offering massive long-term capital gains.
                <span className="text-blue-600 cursor-pointer ml-1">
                  Read More
                </span>
              </p>
            </div>

            <div className="text-sm text-gray-500">456 results</div>
          </div>
        </div>
      </section>

      {/* ================= TRENDING BANNER ================= */}
      <section className="bg-white py-6 sm:py-10 md:py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 lg:mb-12">
            Trending <span className="text-[#F5A300]">Projects</span>
          </h2>
          
          <div className="w-full h-24 md:h-38 md:w-[90%] md:mx-auto md:text-center md:text-2xl md:bg-blue-100 md:rounded-lg bg-blue-100 rounded-lg flex items-center justify-center text-lg">
            Banner
          </div>
        </div>
      </section>

      {/* ================= HERO SECTION ================= */}
      <section className="lg:bg-[#F6FBFF] pt-12  relative">
        <div className="max-w-[1240px] mx-auto px-4">
          <div className="relative flex flex-col lg:flex-row items-start gap-20 max-lg:hidden">
            {/* LEFT */}
            <div className="flex-1">
              <p className="text-sm text-gray-500 mb-4">
                From as low as $10 per day with limited-time offer discounts.
              </p>

              <h1 className="text-[42px] sm:text-[52px] font-extrabold text-gray-900 leading-tight">
                Your <span className="text-[#F5A300]">Property</span>, <br />
                Our Priority.
              </h1>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex-1 flex justify-center lg:-ml-20 max-lg:ml-0">
              <div className="relative w-[240px] h-[240px] sm:w-[310px] sm:h-[310px] md:w-[370px] md:h-[370px] lg:w-[450px] lg:h-[450px] rounded-[40px] lg:rounded-[60px] overflow-hidden shadow-xl bg-white">
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

          {/* MOBILE/TABLET SEARCH */}
          <div className="lg:hidden mt-8 mb-12">
            <div className="bg-white shadow-2xl p-3 w-full flex flex-col gap-2 md:flex-row md:items-center md:gap-2 md:p-4 rounded-2xl max-w-full">
              <input
                placeholder="Enter Keyword"
                className="w-full px-3 py-2.5 rounded-full bg-gray-50 outline-none text-sm flex-1 min-w-0"
              />

              <select className="w-full px-3 py-2.5 rounded-full bg-gray-50 text-sm md:w-28 flex-shrink-0">
                <option>All Status</option>
              </select>

              <select className="w-full px-3 py-2.5 rounded-full bg-gray-50 text-sm md:w-28 flex-shrink-0">
                <option>All Type</option>
              </select>

              <button className="w-full px-3 py-2.5 rounded-full border text-sm md:w-20 flex-shrink-0">
                Filter
              </button>

              <button className="w-full px-4 py-2.5 rounded-full bg-[#F5A300] text-white font-medium text-sm md:w-24 flex-shrink-0">
                Search
              </button>
            </div>
          </div>

          {/* DESKTOP SEARCH BAR */}
          <div className="hidden lg:block relative bottom-60 left-114 -translate-x-1/2  w-full max-w-[900px]">
            <div className="bg-white shadow-2xl px-5 py-3  flex items-center gap-3 rounded-full border border-yellow-400">
              <input
                placeholder="Enter Keyword"
                className="flex-1 px-4 py-3 rounded-full bg-gray-50 outline-none text-sm flex-shrink-0 min-w-0"
              />

              <select className="w-28 px-3 py-3 rounded-full bg-gray-50 text-sm flex-shrink-0">
                <option>All Status</option>
              </select>

              <select className="w-28 px-3 py-3 rounded-full bg-gray-50 text-sm flex-shrink-0">
                <option>All Type</option>
              </select>

              <button className="w-20 px-3 py-3 rounded-full border text-sm flex-shrink-0">
                Filter
              </button>

              <button className="w-24 px-4 py-3 rounded-full bg-[#F5A300] text-white font-medium text-sm flex-shrink-0">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LISTINGS ================= */}
      <main className="py-10  lg:pt-20">
        <div className="max-w-[1240px] mx-auto px-4 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 md:gap-5 lg:gap-6">
            {apartments.map((item) => (
              <PropertyCard key={item.id} property={item} />
            ))}
          </div>
        </div>

        <Pagination
          currentPage={page}
          totalPages={23}
          onPageChange={setPage}
        />
      </main>

      <Footer />
    </>
  );
}
