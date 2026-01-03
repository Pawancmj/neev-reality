"use client";

import React from "react";
import Image from "next/image";

type ProjectCardProps = {
  title: string;
  builder: string;
  location: string;
  bhk: string;
  area: string;
  priceRange: string;
  image: string;
};

const projects: ProjectCardProps[] = [
  {
    title: "Adani Shantigram The Meadows",
    builder: "Adani Shantigram",
    location: "S G Highway, Ahmedabad",
    bhk: "2,2.5,3 BHK",
    area: "1458 SQ. FT.",
    priceRange: "₹ 1.25 Cr - 2.89 Cr",
    image: "/images/newlaunchproject/newpro1.jpg",
  },
  {
    title: "Adani Shantigram The Meadows",
    builder: "Adani Shantigram",
    location: "S G Highway, Ahmedabad",
    bhk: "2,2.5,3 BHK",
    area: "1458 SQ. FT.",
    priceRange: "₹ 1.25 Cr - 2.89 Cr",
    image: "/images/newlaunchproject/newpro2.png",
  },
  {
    title: "Adani Shantigram The Meadows",
    builder: "Adani Shantigram",
    location: "S G Highway, Ahmedabad",
    bhk: "2,2.5,3 BHK",
    area: "1458 SQ. FT.",
    priceRange: "₹ 1.25 Cr - 2.89 Cr",
    image: "/images/newlaunchproject/newpro3.jpg",
  },
  {
    title: "Adani Shantigram The Meadows",
    builder: "Adani Shantigram",
    location: "S G Highway, Ahmedabad",
    bhk: "2,2.5,3 BHK",
    area: "1458 SQ. FT.",
    priceRange: "₹ 1.25 Cr - 2.89 Cr",
    image: "/images/newlaunchproject/newpro4.jpg",
  },
];

export default function NewLaunchProjects() {
  return (
    <section className="max-w-[1240px] mx-auto px-4 mt-16 mb-10">

      {/* HEADER + BUTTON */}
      <div className="max-w-[1480px] mx-auto px-1 flex flex-col md:flex-row md:items-end md:justify-between gap-4">

        {/* Center Heading */}
        <div className="flex-1 text-center">
          <h2 className="text-3xl font-semibold text-gray-900">
            Trending <span className="text-[#DBA40D]">Projects</span>
          </h2>

          <p className="mt-2 text-sm text-gray-600">
            Explore our top current projects across the growing cityscape
          </p>
        </div>

        {/* Explore Button */}
        <button
          className="
    bg-[#DBA40D]
    border border-[#DBA40D]
    rounded-sm
    text-white font-medium

    px-4 py-2 text-sm        /* desktop default */

    max-sm:scale-70         
    max-sm:origin-center

    transition
    md:mr-0
  "
        >
          Explore More
        </button>
      </div>

      {/* HORIZONTAL SCROLL */}
      <div className="flex gap-6 overflow-x-auto scroll-smooth p-2 pb-8 mt-6">

        {projects.map((project) => (
          <div
            key={project.title + project.image}
            className="min-w-[320px] max-w-[320px]"
          >
            <div className="group flex h-full w-80 flex-col overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-lg cursor-pointer">

              <div className="relative h-46 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col px-4 py-3">

                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-sm font-semibold text-gray-900 line-clamp-1">
                    {project.title}
                  </h3>

                  <span className="flex items-center gap-1 rounded-full bg-[#f3f3f3] px-2 py-1 text-[10px] font-medium text-gray-600">
                    RERA
                    <Image
                      src="/images/newlaunchproject/rera.png"
                      alt="RERA"
                      width={12}
                      height={12}
                    />
                  </span>
                </div>

                <p className="mt-3 text-xs text-gray-500">
                  By <span className="font-medium text-gray-700">{project.builder}</span>
                </p>

                <p className="text-xs mt-2 text-gray-500">{project.location}</p>

                <p className="text-xs text-gray-500 mt-2">{project.bhk}</p>

                <div className="my-3 h-px w-full bg-gray-200" />

                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-gray-900">
                    {project.priceRange}
                  </p>

                  <button
                    className="rounded-full bg-[#F5F5F5] px-4 py-1.5 text-xs font-medium text-[#F5A300]
                    transition-all duration-300
                    group-hover:bg-amber-500
                    group-hover:text-white"
                  >
                    Contact
                  </button>
                </div>

              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
