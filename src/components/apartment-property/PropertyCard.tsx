import Image from "next/image";
import Link from "next/link";

export default function PropertyCard({ property }: any) {
  return (
    <Link href={`/residential/${property.slug}`}>
      <div className="group flex h-full w-full sm:w-90 flex-col overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-lg cursor-pointer">

        {/* IMAGE */}
        <div className="relative h-40 sm:h-44 w-full">
          <Image
            src={property.img}
            alt={property.title}
            fill
            className="object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="flex flex-1 flex-col px-3 py-3 sm:px-4 sm:py-3">
          {/* TITLE + RERA */}
          <div className="flex items-center justify-between gap-1 sm:gap-2">
            <h3 className="text-xs sm:text-sm font-semibold text-gray-900 line-clamp-1">
              {property.title}
            </h3>

            <span className="flex items-center gap-1 rounded-full bg-[#f3f3f3] px-1.5 py-0.5 sm:px-2 sm:py-1 text-[9px] sm:text-[10px] font-medium text-gray-600 whitespace-nowrap">
              RERA
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500" />
            </span>
          </div>

          {/* BUILDER */}
          <p className="mt-1 text-[11px] sm:text-xs text-gray-500 leading-tight">
            By{" "}
            <span className="font-medium text-gray-700">
              {property.builder}
            </span>
          </p>

          {/* LOCATION */}
          <p className="mt-1 text-[11px] sm:text-xs text-gray-500 leading-tight">
            {property.location}
          </p>

          {/* DETAILS */}
          <div className="mt-2 flex items-center justify-between text-[11px] sm:text-xs text-gray-500">
            <span className="truncate">{property.bhk}</span>
            <span className="truncate">{property.size}</span>
          </div>

          {/* DIVIDER */}
          <div className="my-2 sm:my-3 h-px w-full bg-gray-200" />

          {/* PRICE + BUTTON */}
          <div className="flex items-center justify-between gap-2">
            <p className="text-xs sm:text-sm font-semibold text-gray-900 leading-tight">
              {property.price}
            </p>

            <button className="rounded-full bg-[#F5F5F5] px-3 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-xs font-medium text-[#F5A300] 
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
