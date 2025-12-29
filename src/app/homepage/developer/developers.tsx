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
  { name: "Pranav Constructions Pvt. Ltd.", projects: "35+ Projects", logo: "/images/developers/d2.png" },
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
    <section className="w-full bg-[#F5F7FB] py-16">
      {/* ===== Heading ===== */}
      <div className="mx-auto max-w-5xl text-center px-6">
        <h2 className="text-3xl font-semibold text-gray-900">
          Top Real Estate Developers in{" "}
          <span className="text-[#DBA40D]">Gurgaon</span>
        </h2>
      </div>

      {/* ===== Developers Grid / Horizontal Scroll ===== */}
      <div className="mx-auto mt-12 max-w-[1240px] px-6">
        <div
          className="
            grid 
            grid-cols-5 gap-8
            max-lg:grid-cols-3
            max-md:flex max-md:gap-4 max-md:overflow-x-auto max-md:pb-4 max-md:-mb-4
            max-md:snap-x max-md:snap-mandatory scrollbar-hide
          "
        >
          {developers.map((dev, index) => (
            <div
              key={dev.name + index}
              className="
                flex flex-col items-center
                rounded-xl bg-white
                px-6 py-6
                border border-gray-100
                shadow-[0_8px_20px_rgba(0,0,0,0.06)]
                hover:shadow-[0_14px_32px_rgba(0,0,0,0.08)]
                transition-all duration-300
                min-w-[200px] max-md:min-w-[160px]
              "
            >
              {/* LOGO CIRCLE */}
              <div
                className="
                  -mt-12 
                  flex h-20 w-20 items-center justify-center
                  rounded-full bg-white
                  border border-gray-200
                  shadow-sm
                "
              >
                <Image
                  src={dev.logo}
                  alt={dev.name}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>

              {/* NAME */}
              <p className="mt-4 text-sm font-semibold text-gray-900 text-center line-clamp-2">
                {dev.name}
              </p>

              {/* PROJECT COUNT */}
              <p className="mt-1 text-xs text-gray-400 text-center">
                {dev.projects}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopersSection;
