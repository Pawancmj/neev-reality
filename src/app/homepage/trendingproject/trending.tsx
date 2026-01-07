"use client";

import React from "react";
import Link from "next/link";
import PropertyCard from "@/components/apartment-property/PropertyCard"; 

type ProjectCardProps = {
  title: string;
  builder: string;
  location: string;
  bhk: string;
  area: string;
  priceRange: string;
  image: string;
  slug: string;
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
    slug: "adani-shantigram-meadows",
  },
  {
    title: "Adani Shantigram The Meadows",
    builder: "Adani Shantigram",
    location: "S G Highway, Ahmedabad",
    bhk: "2,2.5,3 BHK",
    area: "1458 SQ. FT.",
    priceRange: "₹ 1.25 Cr - 2.89 Cr",
    image: "/images/newlaunchproject/newpro2.png",
    slug: "adani-shantigram-meadows",
  },
  {
    title: "Adani Shantigram The Meadows",
    builder: "Adani Shantigram",
    location: "S G Highway, Ahmedabad",
    bhk: "2,2.5,3 BHK",
    area: "1458 SQ. FT.",
    priceRange: "₹ 1.25 Cr - 2.89 Cr",
    image: "/images/newlaunchproject/newpro3.jpg",
    slug: "adani-shantigram-meadows",
  },
  {
    title: "Adani Shantigram The Meadows",
    builder: "Adani Shantigram",
    location: "S G Highway, Ahmedabad",
    bhk: "2,2.5,3 BHK",
    area: "1458 SQ. FT.",
    priceRange: "₹ 1.25 Cr - 2.89 Cr",
    image: "/images/newlaunchproject/newpro4.jpg",
    slug: "adani-shantigram-meadows",
  },
];

export default function NewLaunchProjects() {
  return (
    <section className="max-w-[1240px] mx-auto px-4 mt-0 mb-2">

      {/* HEADER */}
      <div className="max-w-[1480px] mx-auto px-1 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div className="flex-1 text-center">
          <h2 className="text-3xl font-semibold text-gray-900">
            Trending <span className="text-[#DBA40D]">Projects</span>
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Explore our top current projects across the growing cityscape
          </p>
        </div>

        <div className="max-sm:text-center">
          <Link
            href="/faqs"
            className="inline-flex items-center justify-center bg-[#DBA40D] border border-[#DBA40D] rounded-sm text-white font-medium px-4 py-2 text-sm"
          >
            Explore More
          </Link>
        </div>
      </div>

      {/* HORIZONTAL SCROLL */}
      <div className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth p-2 pb-8 mt-6">

        {projects.map((project) => (
          <div
            key={project.slug}
            className="min-w-[320px] max-w-[320px] flex-shrink-0"
          >
            <PropertyCard
              property={{
                title: project.title,
                builder: project.builder,
                location: project.location,
                bhk: project.bhk,
                size: project.area,
                price: project.priceRange,
                img: project.image,
                slug: project.slug,
              }}
            />
          </div>
        ))}

      </div>
    </section>
  );
}
