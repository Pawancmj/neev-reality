"use client";
import { useState } from "react";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
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

      {/* ================= PAGE INTRO / BREADCRUMB SECTION ================= */}
      <section className="bg-[#F6FBFF] ">
        <div className="max-w-[1240px] mx-auto px-4 py-6">
          <div className="text-sm text-gray-500 mb-3">
            Commercial
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="max-w-4xl">
              <h1 className="text-xl sm:text-2xl md:text-[26px] font-semibold text-gray-900 leading-snug">
                Commercial Apartments Property for Sale in Gurgaon
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
          <div
            className="
      w-[1300px] h-[250px] max-w-full rounded-xl bg-gray-100
    "
          >
            <Image
              src="/images/Rbanner.png"
              alt="Property Banner"
              width={1500}
              height={294}
              priority
              className="w-full h-full object-contain"
            />
          </div>



        </div>
      </section>

      {/* ================= HERO SECTION ================= */}
      <section className="bg-[#F6FBFF] pt-20 pb-24">
        <div className="max-w-[1240px] mx-auto px-4">


          {/* HERO ROW */}
          <div className="realtive flex flex-col lg:flex-row items-start gap-20">

            {/* LEFT SIDE */}
            <div className="flex-1">

              <p className="text-sm text-gray-500 mb-4">
                From as low as $10 per day with limited-time offer discounts.
              </p>

              <h1 className="text-[42px] sm:text-[52px] font-extrabold text-gray-900 leading-tight">
                Your <span className="text-[#F5A300]">Property</span>, <br />
                Our Priority.
              </h1>



            </div>

            {/* 🔥 OVERLAY SEARCH BAR */}
            <div
              className="
    absolute 
    left-0 
    lg:left-[10%] 
    top-[1090px]
    w-full 
    lg:w-[900px]
    z-20
    px-4
  "
            >
              <div className="
    bg-white rounded-full shadow-2xl
    px-5 py-4
    flex flex-col lg:flex-row gap-3
  ">
                <input
                  placeholder="Enter Keyword"
                  className="flex-1 px-4 py-3 rounded-full bg-gray-50 outline-none"
                />

                <select className="px-4 py-3 rounded-full bg-gray-50">
                  <option>All Status</option>
                </select>

                <select className="px-4 py-3 rounded-full bg-gray-50">
                  <option>All Type</option>
                </select>

                <button className="px-5 py-3 rounded-full border">
                  Filter
                </button>

                <button className="px-6 py-3 rounded-full bg-[#F5A300] text-white font-medium">
                  Search
                </button>
              </div>
            </div>


            {/* RIGHT IMAGE */}
            <div className="flex-1 flex justify-center -ml-20">
              <div className="relative w-[360px] h-[360px] sm:w-[420px] sm:h-[420px] lg:w-[480px] lg:h-[480px]
      rounded-[60px] overflow-hidden shadow-xl bg-white">
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





          {/* AGENT CARD */}
          <div className="-mt-35">
            <Image
              src="/images/agent.png"
              alt="Exclusive Agents"
              width={220}
              height={220}
            />
          </div>

        </div>
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
