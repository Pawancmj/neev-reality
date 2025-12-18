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

const Badge = ({ text }: { text: string }) => (
  <span className="flex items-center gap-1 rounded-full bg-[#f3f3f3] px-3 py-1 text-xs font-medium text-gray-700 shadow-sm">
    {text}
    <Image
      src="/images/newlaunchproject/rera.png"
      alt="RERA"
      width={12}
      height={12}
    />
  </span>
);

const ContactButton = () => (
  <button className="rounded-full bg-[#F4F2F1] px-5 py-2 text-xs font-medium text-[#D23292] shadow-sm hover:bg-[#ece9e8]">
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
    <div className="flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-md transition">
      {/* Image */}
      <div className="relative h-40 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between px-4 pb-4 pt-3">
        <div>
          <div className="mb-2 flex items-center justify-between gap-2">
            <p className="text-sm font-semibold text-gray-900 line-clamp-1">
              {title}
            </p>
            <Badge text="RERA" />
          </div>

          <p className="text-xs text-gray-500">
            By <span className="font-medium text-gray-700">{builder}</span>
          </p>
          <p className="mt-1 text-xs text-gray-500">{location}</p>

          <div className="mt-3 flex items-center justify-between text-[11px] text-gray-500">
            <span>{bhk}</span>
            <span>{area}</span>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-xs font-semibold text-gray-900">
            {priceRange}
          </p>
          <ContactButton />
        </div>
      </div>
    </div>
  );
};

const TrendingProjects: React.FC = () => {
  return (
    <section className="w-full bg-white py-20">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
            Trending Projects
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-700">
            Explore our curated selection of the finest homes available right now.
          </p>
          <p className="text-sm sm:text-base text-gray-700">
            The Noteworthy Real Estate in India
          </p>
        </div>

        <button className="mx-auto md:mx-0 rounded-sm bg-[#2563EB] px-6 py-2 text-xs font-medium text-white shadow-sm hover:bg-[#1D4ED8]">
          Explore More
        </button>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto mt-10 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.title + project.image}
            {...project}
          />
        ))}
      </div>
    </section>
  );
};

export default TrendingProjects;
