"use client";

import React from "react";
import Image from "next/image";

type Developer = {
  name: string;
  projects: string;
  logo: string;
};

const developers: Developer[] = [
  {
    name: "DGS Group",
    projects: "41+ Projects",
    logo: "/images/developers/d1.png",
  },
  {
    name: "Pranav Constructions Private Limited",
    projects: "35+ Projects",
    logo: "/images/developers/d2.png",
  },
  {
    name: "Ruparel Realty",
    projects: "26+ Projects",
    logo: "/images/developers/d3.png",
  },
  {
    name: "Sugee Group",
    projects: "33+ Projects",
    logo: "/images/developers/d4.png",
  },
  {
    name: "Rustomjee",
    projects: "24+ Projects",
    logo: "/images/developers/d5.png",
  },
  {
    name: "Lodha Group",
    projects: "44+ Projects",
    logo: "/images/developers/d6.png",
  },
  {
    name: "Arkade Developers",
    projects: "28+ Projects",
    logo: "/images/developers/d7.png",
  },
  {
    name: "Ajmera Group",
    projects: "26+ Projects",
    logo: "/images/developers/d8.png",
  },
  {
    name: "H. Rishabraj Builder",
    projects: "28+ Projects",
    logo: "/images/developers/d9.png",
  },
  {
    name: "Adityaraj Group",
    projects: "34+ Projects",
    logo: "/images/developers/d10.png",
  },
];

const DevelopersSection: React.FC = () => {
  return (
    <section className="mx-auto bg-[#F5F7FB] py-16  relative top-80" style={{width:1520,height:487}}>
      <div className="mx-auto max-w-5xl px-4 text-center">
        <h2 className="text-3xl relative bottom-12 font-semibold text-gray-900">
          Top Real Estate Developers in India
        </h2>
      </div>

      <div className="mx-auto mt-12 grid  grid-cols-1 gap-19 px-4 sm:grid-cols-2 lg:grid-cols-5"style={{width:1240}}>
        {developers.map((dev) => (
          <div
            key={dev.name}
            className="flex flex-col items-center rounded-2xl bg-white px-6 py-6 shadow-sm"
            style={{width:215,height:131}}  >
            <div className="flex relative bottom-18 border-2 h-24 w-24 items-center justify-center rounded-full bg-white">
              <Image
                src={dev.logo}
                alt={dev.name}
                width={100}
                height={100}
                className="object-cover rounded-full"
              />
            </div>
            <p className="relative bottom-16 text-sm font-medium text-gray-900 text-center" style={{fontSize:14}}>
              {dev.name}
            </p>
            <p className="relative bottom-14 text-xs text-gray-500">{dev.projects}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DevelopersSection;
