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
    <section className="w-full bg-[#F8FBFF] py-14">
      <div className="max-w-7xl mx-auto px-6">

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {stats.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center"
            >
              <span className="text-3xl sm:text-4xl font-semibold text-black">
                {item.value}
              </span>
              <span className="mt-2 text-sm sm:text-base text-gray-600">
                {item.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StatsBar;
