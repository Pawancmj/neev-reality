import Image from "next/image";
import { MapPin, BedDouble, Bath } from "lucide-react";
import Link from "next/link";

export default function PropertyCard({ property }: any) {
  return (
    <Link href={`/residential/apartments/${property.slug}`}>
      <div className="flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-md transition border cursor-pointer">

        {/* IMAGE */}
        <div className="relative h-40 w-full">
          <Image
            src={property.img}
            alt={property.title}
            fill
            sizes="(max-width:640px) 100vw,
                   (max-width:1024px) 50vw,
                   25vw"
            className="object-cover"
          />

          {/* RERA DOT */}
          <span className="absolute top-3 right-3 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
        </div>

        {/* CONTENT */}
        <div className="flex flex-1 flex-col justify-between px-4 pb-4 pt-3">
          
          {/* TOP */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 line-clamp-1">
              {property.title}
            </h3>

            <p className="mt-1 flex items-center gap-1 text-xs text-gray-500">
              <MapPin size={13} />
              {property.location}
            </p>

            <div className="mt-3 flex items-center justify-between text-[11px] text-gray-500">
              <span className="flex items-center gap-1">
                <BedDouble size={13} /> {property.beds} Beds
              </span>

              <span className="flex items-center gap-1">
                <Bath size={13} /> {property.baths} Baths
              </span>

              <span>{property.size}</span>
            </div>
          </div>

          {/* BOTTOM */}
          <div className="mt-4 flex items-center justify-between">
            <p className="text-xs font-semibold text-gray-900">
              {property.price}
            </p>

            <span className="rounded-full bg-[#F4F2F1] px-5 py-2 text-xs font-medium text-[#D23292] shadow-sm">
              View Details
            </span>
          </div>

        </div>
      </div>
    </Link>
  );
}
