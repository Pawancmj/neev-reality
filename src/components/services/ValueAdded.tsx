import React from "react";
import Card from "./Card";
import valueAdded from "@/data/valueAdded";

export default function ValueAdded() {
  return (
    <section className="py-16 w-full bg-gray-50">
      <div className="max-w-[1240px] w-full mx-auto px-4">

        {/* Title */}
        <h3 className="text-center text-[28px] sm:text-[32px] font-bold text-gray-800">
          Value Added Services
        </h3>

        {/* Subtitle */}
        <p className="
          text-center text-gray-600 mx-auto 
          max-w-[900px] mt-4 text-[15px] sm:text-[17px] leading-[24px] sm:leading-[26px]
        ">
          Striving to create value, we go beyond property transactions with solutions 
          that create a seamless experience.
        </p>

        {/* Responsive Grid */}
        <div
          className="
            grid gap-25 mt-12 
            grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
            max-w-[1240px] mx-auto
          "
        >
          {valueAdded.map((v) => (
            <Card 
              key={v.id} 
              title={v.title} 
              text={v.text} 
              icon={v.icon} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
