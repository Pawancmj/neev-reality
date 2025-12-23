import React from "react";

type StatItem = {
  value: string;
  label: string;
};

const stats: StatItem[] = [
  { value: "500+", label: "Properties Sold" },
  { value: "10+", label: "Years of Experience" },
  { value: "100+", label: "Trusted Agents & Partners" },
  { value: "95%", label: "Client Satisfaction Rate" },
];

const StatsBar: React.FC = () => {
  return (
    <section className="mx-auto relative bg-[#F8FBFF] py-12 w-full max-w-[1520px]">
      
      <div className="mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-10 px-4 sm:px-6 text-center md:text-left w-full max-w-[1083px]">
        {stats.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center md:items-start"
          >
            <span className="text-3xl md:text-4xl text-black relative md:left-5">
              {item.value}
            </span>
            <span className="mt-2 text-sm md:text-base text-gray-600">
              {item.label}
            </span>
          </div>
        ))}
      </div>

    </section>
  );
};

export default StatsBar;
