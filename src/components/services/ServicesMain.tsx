import React from "react";
import Card from "./Card";
import services from "@/data/servicesMain";

export default function ServicesMain() {
  return (
    <section className="py-20 w-full">
      {/* Title */}
      <h2 className="text-center text-[32px] sm:text-[36px] font-bold text-gray-800">
        Our Services
      </h2>

      {/* Subtext */}
      <p className="
        text-center text-gray-600 mx-auto mt-4 
        max-w-[900px] px-4 text-[15px] sm:text-[17px] leading-[24px] sm:leading-[26px]
      ">
        Whether you're looking for office space, retail locations, land or
        pre-leased space, we help you find, sell or lease the right space.
        Our services include leasing, acquisition, disposition, consolidation,
        asset management, capital markets, and more.
      </p>

      
      <div
        className="
          grid gap-25 mt-12 
          grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
          max-w-[1240px] mx-auto px-4
        "
      >
        {services.map((s) => (
          <Card key={s.id} title={s.title} text={s.text} icon={s.icon} />
        ))}
      </div>
    </section>
  );
}
