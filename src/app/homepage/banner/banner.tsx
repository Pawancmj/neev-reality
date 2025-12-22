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
    <section className="w-[1440] h-[201] mx-auto relative  bg-[#F8FBFF] py-12 " style={{width:1520}}>
      <div className="mx-auto flex w-[1083] h-[70] flex-col items-center justify-between gap-10 px-6 text-center md:flex-row md:text-left">
        {stats.map((item) => (
          <div key={item.label} className="flex flex-col items-center md:items-start">
            <span className="text-3xl  text-black md:text-4xl relative left-5">
              {item.value}
            </span>
            <span className="mt-2 text-sm text-gray-600 md:text-base">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsBar;