"use client";

import React from "react";
import Image from "next/image";

type Developer = {
  name: string;
  projects: string;
  logo: string;
};

const developers: Developer[] = [
  { name: "DGS Group", projects: "41+ Projects", logo: "/images/developers/d1.png" },
  { name: "Pranav Constructions Private Limited", projects: "35+ Projects", logo: "/images/developers/d2.png" },
  { name: "Ruparel Realty", projects: "26+ Projects", logo: "/images/developers/d3.png" },
  { name: "Sugee Group", projects: "33+ Projects", logo: "/images/developers/d4.png" },
  { name: "Rustomjee", projects: "24+ Projects", logo: "/images/developers/d5.png" },
  { name: "Lodha Group", projects: "44+ Projects", logo: "/images/developers/d6.png" },
  { name: "Arkade Developers", projects: "28+ Projects", logo: "/images/developers/d7.png" },
  { name: "Ajmera Group", projects: "26+ Projects", logo: "/images/developers/d8.png" },
  { name: "H. Rishabraj Builder", projects: "28+ Projects", logo: "/images/developers/d9.png" },
  { name: "Adityaraj Group", projects: "34+ Projects", logo: "/images/developers/d10.png" },
];

const DevelopersSection: React.FC = () => {
  return (
    <section className="w-full bg-[#F5F7FB] py-20">
      {/* Heading */}
      <div className="max-w-6xl mx-auto px-4 text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
          Top Real Estate Developers in India
        </h2>
      </div>

      {/* Developers Grid */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {developers.map((dev) => (
          <div
            key={dev.name}
            className="relative flex flex-col items-center rounded-2xl bg-white px-6 pt-16 pb-6 shadow-sm hover:shadow-md transition"
          >
            {/* Logo Circle */}
            <div className="absolute -top-10 flex h-20 w-20 items-center justify-center rounded-full border bg-white">
              <Image
                src={dev.logo}
                alt={dev.name}
                width={64}
                height={64}
                className="object-contain rounded-full"
              />
            </div>

            {/* Name */}
            <p className="mt-2 text-sm font-medium text-gray-900 text-center">
              {dev.name}
            </p>

            {/* Projects */}
            <p className="mt-1 text-xs text-gray-500">
              {dev.projects}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DevelopersSection;
