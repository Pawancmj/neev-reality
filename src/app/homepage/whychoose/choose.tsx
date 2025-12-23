"use client";

import React from "react";
import Image from "next/image";

type Feature = {
  title: string;
  description: string;
  image: string;
};

const features: Feature[] = [
  {
    title: "One-Stop Real Estate Solutions",
    description:
      "From property search, site visits, legal checks to final possession, we handle everything end-to-end.",
    image: "/images/chooseimg/logo01.png",
  },
  {
    title: "Fully Transparent Process",
    description:
      "No hidden costs, clear documentation, verified properties, and honest guidance at every step.",
    image: "/images/chooseimg/logo02.png",
  },
  {
    title: "Expert Real Estate Advisors",
    description:
      "Our experienced consultants help you choose the right property based on location, budget and ROI.",
    image: "/images/chooseimg/logo03.png",
  },
  {
    title: "Site Visit Assistance",
    description:
      "We arrange and assist site visits so you can explore properties comfortably and confidently.",
    image: "/images/chooseimg/logo04.png",
  },
  {
    title: "Home Loan Consultation",
    description:
      "Get help with loan selection, documentation and faster approvals through trusted banking partners.",
    image: "/images/chooseimg/logo05.png",
  },
  {
    title: "After-Sales Assistance",
    description:
      "From booking to possession and beyond, we support you with all post-sale formalities.",
    image: "/images/chooseimg/logo06.png",
  },
];

const WhyChooseNeev: React.FC = () => {
  return (
    <section className="w-full bg-white py-16">
      {/* ===== Heading ===== */}
      <div className="mx-auto max-w-5xl px-4 text-center">
        <h2 className="text-3xl font-semibold text-gray-900">
          Why Choose <span className="text-[#DBA40D]">Neev Realty</span>
        </h2>
        <p className="mt-3 text-sm text-gray-600">
          Your trusted partner for the right property choices in Gurgaon
        </p>
      </div>

      {/* ===== Feature Cards ===== */}
      <div
        className="
          mx-auto mt-10 grid max-w-[1240px] grid-cols-3 gap-6 px-4
          max-lg:grid-cols-2
          max-md:grid-cols-1
        "
      >
        {features.map((feature) => (
          <div
            key={feature.title}
            className="
              flex gap-4 rounded-xl border border-gray-200
              bg-white px-5 py-6 shadow-sm
            "
          >
            {/* Icon box */}
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#DBA40D] shrink-0">
              <Image
                src={feature.image}
                alt={feature.title}
                width={24}
                height={24}
              />
            </div>

            {/* Text */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-gray-600">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseNeev;
