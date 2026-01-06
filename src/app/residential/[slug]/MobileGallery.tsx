"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  images: string[];
  title: string;
};

export default function MobileGallery({ images, title }: Props) {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div>
      {/* HERO IMAGE */}
      
      <div className="relative w-full max-w-[380px] h-[260px] sm:h-[312px] mx-auto rounded-xl overflow-hidden">
        <Image
    src={activeImage}
          alt={title}
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* THUMBNAILS */}
      <div className="lg:hidden mt-2 overflow-x-auto scrollbar-hide">
        <div className="flex gap-2 items-center">
          {images.map((img, i) => (
            <div
              key={i}
              onClick={() => setActiveImage(img)}
              className={`
                w-[36px] h-[36px]
                sm:w-[40px] sm:h-[20px]
                border rounded-md
                overflow-hidden
                cursor-pointer
                flex-shrink-0
                ${activeImage === img
                  ? "border-[#F5A300]"
                  : "border-gray-300"}
              `}
            >
              <Image
                src={img}
                alt=""
                width={40}
                height={20}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
