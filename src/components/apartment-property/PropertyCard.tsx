import Image from "next/image";
import Link from "next/link";

export default function PropertyCard({ property }: any) {
  return (
    <Link href={`/residential/${property.slug}`}>
      <div className="group flex h-full w-full flex-col overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-lg cursor-pointer 
                     md:h-72 lg:h-80 xl:h-96">
        {/* IMAGE */}
        <div className="relative h-32 md:h-40 lg:h-44 xl:h-48 w-full">
          <Image
            src={property.img}
            alt={property.title}
            fill
            className="object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="flex flex-1 flex-col px-2 py-2 md:px-3 md:py-3 lg:px-4 lg:py-4">
          {/* TITLE + RERA */}
          <div className="flex items-center justify-between gap-1 md:gap-2">
            <h3 className="text-xs md:text-sm lg:text-base font-semibold text-gray-900 line-clamp-1">
              {property.title}
            </h3>

            <span className="flex items-center gap-0.5 md:gap-1 rounded-full bg-[#f3f3f3] px-1.5 py-0.5 md:px-2 md:py-1 text-[9px] md:text-[10px] lg:text-xs font-medium text-gray-600 whitespace-nowrap">
              RERA
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500" />
            </span>
          </div>

          {/* BUILDER */}
          <p className="mt-1 text-[11px] md:text-xs lg:text-sm text-gray-500 leading-tight">
            By{" "}
            <span className="font-medium text-gray-700">
              {property.builder}
            </span>
          </p>

          {/* LOCATION */}
          <p className="mt-1 text-[11px] md:text-xs lg:text-sm text-gray-500 leading-tight">
            {property.location}
          </p>

          {/* DETAILS */}
          <div className="mt-2 flex items-center justify-between text-[11px] md:text-xs lg:text-sm text-gray-500">
            <span className="truncate">{property.bhk}</span>
            <span className="truncate">{property.size}</span>
          </div>

          {/* DIVIDER */}
          <div className="my-2 md:my-3 lg:my-4 h-px w-full bg-gray-200" />

          {/* PRICE + BUTTON */}
          <div className="flex items-center justify-between gap-2">
            <p className="text-xs md:text-sm lg:text-base font-semibold text-gray-900 leading-tight">
              {property.price}
            </p>

            <button className="rounded-full bg-[#F5F5F5] px-3 py-1 md:px-4 md:py-1.5 lg:px-5 lg:py-2 text-[10px] md:text-xs lg:text-sm font-medium text-[#F5A300] 
                  transition-all duration-300
                  group-hover:bg-[#F5A300] 
                  group-hover:text-white whitespace-nowrap">
              Contact
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
