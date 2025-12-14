import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  text: string;
  icon: string;
};

export default function Card({ title, text, icon }: Props) {
  return (
    <article
      className="
        bg-white border shadow-md rounded-xl
        w-full sm:w-[300px]
        p-6 flex flex-col
      "
      style={{ minHeight: "320px" }} 
    >
      {/* ICON + TEXT WRAPPER → takes all vertical space */}
      <div className="flex flex-col items-center text-center flex-grow">
        
        {/* Icon */}
        <div className="w-[72px] h-[72px] rounded-xl bg-pink-100 flex items-center justify-center mb-4">
          <Image src={icon} alt={title} width={48} height={48} />
        </div>

        {/* Title */}
        <h4 className="text-[18px] sm:text-[20px] font-semibold text-gray-900">
          {title}
        </h4>

        {/* Text */}
        <p className="text-gray-600 text-[14px] sm:text-[15px] mt-2 leading-relaxed max-w-[240px]">
          {text}
        </p>

      </div>

      {/* READ MORE ALWAYS AT BOTTOM → PERFECT ALIGNMENT */}
      <div className="flex justify-center mt-4">
        <span className="text-pink-500 font-medium text-[14px] sm:text-[15px] cursor-pointer">
          Read More →
        </span>
      </div>
    </article>
  );
}
