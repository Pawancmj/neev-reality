"use client";

import React from "react";
import Image from "next/image";
import { Roboto } from "next/font/google";

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
    <section className="relative top-70 w-full bg-white py-16">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <h2 className=" font-medium text-black relative left-19" style={{width:812,height:60,fontSize:40,fontFamily:"Roboto"}}>
          Why Choose Neev Reality?
        </h2>
        <p className="mt-6 text-sm text-gray-600">
          Premium support, zero brokerage, and end-to-end assistance — everything you need to buy with confidence.
        </p>
      </div>

      <div className="mx-auto mt-10 grid  grid-cols-1 gap-5 px-4 md:grid-cols-2     lg:grid-cols-3" style={{width:1240,height:362}}>
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex h-full gap-4 rounded-2xl  border border-gray-200 bg-white px-5 py-6 shadow-sm"
              style={{width:390,height:171}}>
            <div className=" relative bottom-2  h-10  w-12 items-center justify-center rounded-lg p-2.5 bg-[#1D4ED8]">
              <Image
                src={feature.image}
                alt={feature.title}
                width={30}
                height={30}
                className=" object-cover relative right-1" 
                style={{width:30,height:30}}
              />
            </div>
            <div className="relative top-12 right-12">
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
