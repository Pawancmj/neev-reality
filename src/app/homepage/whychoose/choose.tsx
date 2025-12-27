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
    mx-auto mt-12 grid max-w-[1240px] grid-cols-3 gap-8 px-4
    max-lg:grid-cols-2
    max-md:grid-cols-1
  "
>
  {features.map((feature) => (
    <div
      key={feature.title}
      className="
        relative rounded-2xl bg-white
        px-7 py-8
        shadow-[0_10px_30px_rgba(0,0,0,0.06)]
        border border-gray-100
        hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]
        transition
      "
    >
      {/* ICON */}
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[#DBA40D]">
        <Image
          src={feature.image}
          alt={feature.title}
          width={22}
          height={22}
        />
      </div>

      {/* TITLE */}
      <h3 className="text-[15px] font-semibold text-gray-900">
        {feature.title}
      </h3>

      {/* DESCRIPTION */}
      <p className="mt-3 text-[13px] leading-[22px] text-gray-600">
        {feature.description}
      </p>
    </div>
  ))}
</div>

    </section>
  );
};

export default WhyChooseNeev;
