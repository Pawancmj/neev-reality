"use client";

import React, { useRef } from "react";
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
    <Image src="/images/newlaunchproject/rera.png" alt="RERA" width={12} height={12} />
  </span>
);

const ContactButton = () => (
  <button className="rounded-full bg-[#F4F2F1] px-5 py-1.5 text-[11px] font-medium text-[#DBA40D] hover:bg-[#DBA40D] hover:text-white transition">
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
}) => (
  <div className="min-w-[260px] flex-shrink-0 rounded-lg bg-white shadow-sm overflow-hidden">
    <div className="relative h-[170px] w-full">
      <Image src={image} alt={title} fill className="object-cover" />
    </div>

    <div className="flex flex-col justify-between px-4 py-3 h-full">
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

const NewLaunchProjects: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartX.current || !scrollRef.current) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      scrollRef.current.scrollBy({
        left: diff > 0 ? 300 : -300,
        behavior: "smooth",
      });
    }
    touchStartX.current = null;
  };

  return (
    <section className="mt-12 w-full bg-white py-14">
      {/* ================= HEADING ROW ================= */}
      <div className="mx-auto max-w-[1480px] px-6 flex items-start justify-between relative">
        <div className="mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-900">
            New Launch <span className="text-[#DBA40D]">Projects</span>
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Explore new residential and commercial projects in Gurgaon
          </p>
        </div>

        {/* Desktop button (OLD STYLE) */}
        <button className="hidden lg:block rounded-md bg-[#DBA40D] px-5 py-1.5 text-xs font-medium text-white">
          Explore More
        </button>
      </div>

      {/* ================= MOBILE / TAB SLIDER ================= */}
      <div className="relative mt-8 lg:hidden">
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full w-8 h-8 flex items-center justify-center"
        >
          ⬅
        </button>

        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full w-8 h-8 flex items-center justify-center"
        >
          ➡
        </button>

        <div
          ref={scrollRef}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          className="flex gap-4 overflow-x-hidden px-10"
        >
          {projects.map((project) => (
            <ProjectCard key={project.title + project.image} {...project} />
          ))}
        </div>
      </div>

      {/* Mobile / Tab Explore Button (BELOW CARDS) */}
      <div className="mt-6 flex justify-center lg:hidden">
        <button className="rounded-md bg-[#DBA40D] px-6 py-2 text-xs font-medium text-white">
          Explore More
        </button>
      </div>

      {/* ================= DESKTOP GRID ================= */}
      <div className="hidden lg:grid mx-auto mt-8 max-w-[1480px] gap-6 px-6 grid-cols-4">
        {projects.map((project) => (
          <ProjectCard key={project.title + project.image} {...project} />
        ))}
      </div>
    </section>
  );
};

export default NewLaunchProjects;
