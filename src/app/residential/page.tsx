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
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-26">
          <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 lg:mb-12">
            Trending <span className="text-[#F5A300]">Projects</span>
          </h2>
          
          <div className="md:w-[1514px] md:relative md:right-35 md:h-38 md:text-center md:text-2xl md:bg-blue-100 md:rounded-lg w-full h-24 bg-blue-100 rounded-lg flex items-center justify-center text-lg">Banner</div>
        </div>
      </section>

      {/* ================= HERO SECTION ================= */}
      <section className="bg-[#F6FBFF] pt-20 p-6 overflow-x-hidden">
        <div className="max-w-[1240px] mx-auto px-4">
          <div className="relative flex flex-col lg:flex-row items-start gap-20 max-lg:hidden">
            {/* LEFT */}
            <div className="flex-1">
              <p className="text-sm text-gray-500 mb-4">
                From as low as $10 per day with limited-time offer discounts.
              </p>

              <h1 className="text-[42px] sm:text-[52px] font-extrabold text-gray-900">
                Your <span className="text-[#F5A300]">Property</span>, <br />
                Our Priority.
              </h1>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex-1 flex justify-center lg:-ml-20 max-lg:ml-0">
              <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[400px] md:h-[400px] lg:w-[480px] lg:h-[480px] rounded-[40px] lg:rounded-[60px] overflow-hidden shadow-xl bg-white">
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

          {/* MOBILE SEARCH ONLY */}
          <div className="lg:hidden mt-8 mb-12">
            <div className="
                bg-white shadow-2xl
                px-4 py-4 w-full sm:px-5 sm:py-4
                flex flex-col gap-3 md:flex-row md:items-center md:gap-3
                overflow-hidden rounded-2xl
              ">
              <input
                placeholder="Enter Keyword"
                className="w-full px-4 py-3 rounded-full bg-gray-50 outline-none text-sm sm:text-base"
              />

              <select className="w-full px-4 py-3 rounded-full bg-gray-50 text-sm sm:text-base">
                <option>All Status</option>
              </select>

              <select className="w-full px-4 py-3 rounded-full bg-gray-50 text-sm sm:text-base">
                <option>All Type</option>
              </select>

              <button className="w-full px-5 py-3 rounded-full border text-sm sm:text-base">
                Filter
              </button>

              <button className="w-full px-6 py-3 rounded-full bg-[#F5A300] text-white font-medium text-sm sm:text-base">
                Search
              </button>
            </div>
          </div>

          {/* DESKTOP SEARCH BAR */}
          <div className="hidden lg:block w-full max-w-full z-20 absolute left-0 top-170 translate-y-[244px] lg:w-[80%] xl:w-[85%] 2xl:w-[90%]">
            <div className="
                bg-white shadow-2xl
                px-4 py-4 w-full sm:px-5 sm:py-4
                flex flex-col gap-3 md:flex-row md:items-center md:gap-3
                overflow-hidden rounded-2xl
                lg:flex-row lg:items-center lg:rounded-full border border-yellow-400
              ">
              <input
                placeholder="Enter Keyword"
                className="w-full lg:flex-1 px-4 py-3 rounded-full bg-gray-50 outline-none text-sm sm:text-base"
              />

              <select className="w-full lg:w-auto px-4 py-3 rounded-full bg-gray-50 text-sm sm:text-base">
                <option>All Status</option>
              </select>

              <select className="w-full lg:w-auto px-4 py-3 rounded-full bg-gray-50 text-sm sm:text-base">
                <option>All Type</option>
              </select>

              <button className="w-full lg:w-auto px-5 py-3 rounded-full border text-sm sm:text-base">
                Filter
              </button>

              <button className="w-full lg:w-auto px-6 py-3 rounded-full bg-[#F5A300] text-white font-medium text-sm sm:text-base">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LISTINGS ================= */}
      <main className="py-10">
        <div className="max-w-[1240px] mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
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
