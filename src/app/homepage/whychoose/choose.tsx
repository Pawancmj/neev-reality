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
    title: "Free Service (No Brokerage)",
    description:
      "Explore and book properties without any buyer fee with expert support and zero charges.",
    image: "/images/chooseimg/logo1.png",
  },
  {
    title: "Fully Transparent Process",
    description:
      "Clear pricing, verified documents, and honest advice with no hidden costs or surprises.",
    image: "/images/chooseimg/logo2.png",
  },
  {
    title: "Expert Real Estate Consulting",
    description:
      "Personalized property recommendations based on location, budget, appreciation, and lifestyle.",
    image: "/images/chooseimg/logo3.png",
  },
  {
    title: "One-Stop Real Estate Solutions",
    description:
      "Property search, site visits, legal checks, loans, and post-sale support handled end to end.",
    image: "/images/chooseimg/logo4.png",
  },
  {
    title: "Home Loan Consultation",
    description:
      "Help choosing the best loan offers, preparing documents, and speeding approvals with banking partners.",
    image: "/images/chooseimg/logo5.png",
  },
  {
    title: "After-Sales Assistance",
    description:
      "Support after booking, from builder coordination to possession and documentation help.",
    image: "/images/chooseimg/logo6.png",
  },
];

const WhyChooseNeev: React.FC = () => {
  return (
    <section className="w-full bg-white py-20">
      {/* Heading */}
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-black">
          Why Choose Neev Reality?
        </h2>
        <p className="mt-4 text-sm sm:text-base text-gray-600">
          Premium support, zero brokerage, and end-to-end assistance — everything
          you need to buy with confidence.
        </p>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto mt-12 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition"
          >
            {/* Icon */}
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#1D4ED8]">
              <Image
                src={feature.image}
                alt={feature.title}
                width={28}
                height={28}
                className="object-contain"
              />
            </div>

            {/* Content */}
            <div>
              <h3 className="text-sm sm:text-base font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-gray-600">
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
