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

const Badge = () => (
  <span className="flex items-center gap-1 rounded-full bg-[#f3f3f3] px-3 py-1 text-[11px] font-medium text-gray-700">
    RERA
    <Image
      src="/images/newlaunchproject/rera.png"
      alt=""
      width={12}
      height={12}
    />
  </span>
);

const ContactButton = () => (
  <button className="rounded-full bg-[#F4F2F1] px-5 py-1.5 text-[11px] font-medium text-[#DBA40D] hover:text-white hover:bg-[#DBA40D]">
    Contact
  </button>
);

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  builder,
  location,
  bhk,
  area,
  priceRange,
  image,
}) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm min-w-[320px] max-md:min-w-[280px]">
      {/* Image */}
      <div className="relative h-[170px] w-full">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between px-4 py-3">
        <div>
          <div className="mb-1 flex items-center justify-between">
            <p className="text-sm font-semibold text-gray-900 line-clamp-1">
              {title}
            </p>
            <Badge />
          </div>

          <p className="text-xs text-gray-500">
            By <span className="font-medium text-gray-700">{builder}</span>
          </p>
          <p className="mt-0.5 text-xs text-gray-500">{location}</p>

          <div className="mt-3 flex items-center justify-between text-[11px] text-gray-500">
            <span>{bhk}</span>
            <span>{area}</span>
          </div>

          <div className="mt-3 border-t" />
        </div>

        <div className="mt-3 flex items-center justify-between">
          <p className="text-xs font-semibold text-gray-900">{priceRange}</p>
          <ContactButton />
        </div>
      </div>
    </div>
  );
};

const TrendingProjects: React.FC = () => {
  return (
    <section className="w-full bg-white py-14">
      {/* ===== Heading Row ===== */}
      <div className="mx-auto max-w-[1480px] px-6 flex items-start justify-between relative">
        <div className="mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-900">
            Trending <span className="text-[#DBA40D]">Projects</span>
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Explore our top current projects across the growing cityscape
          </p>
        </div>

        <button className="absolute right-20 rounded-md bg-[#DBA40D] px-5 py-1.5 text-xs font-medium text-white max-md:hidden">
          Explore More
        </button>
      </div>

      {/* ===== Cards Grid / Horizontal Scroll ===== */}
      <div className="mx-auto mt-8 max-w-[1480px] px-6">
        <div
          className="
            grid 
            grid-cols-4 gap-6
            max-lg:grid-cols-2
            max-md:flex max-md:gap-4 max-md:overflow-x-auto max-md:pb-4 max-md:-mb-4
            max-md:snap-x max-md:snap-mandatory scrollbar-hide
          "
        >
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.title + project.image + index} 
              {...project} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProjects;
