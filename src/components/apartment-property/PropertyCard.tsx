import Image from "next/image";
import { MapPin, BedDouble, Bath } from "lucide-react";
import Link from "next/link";

export default function PropertyCard({ property }: any) {
  return (
    <Link href={`/residential/apartments/${property.slug}`}>
      <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition border cursor-pointer">

        {/* IMAGE */}
        <div className="relative w-full h-[180px]">
          <Image
            src={property.img}
            alt={property.title}
            fill
            sizes="(max-width: 640px) 100vw,
         (max-width: 1024px) 50vw,
         25vw"
            className="object-cover"
          />

          <span className="absolute top-3 right-3 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
        </div>

        {/* CONTENT */}
        <div className="p-4">
          <h3 className="text-sm font-semibold text-gray-900 line-clamp-2">
            {property.title}
          </h3>

          <p className="flex items-center gap-1 text-xs text-gray-500 mt-1">
            <MapPin size={13} />
            {property.location}
          </p>

          <div className="flex items-center gap-4 text-xs text-gray-600 mt-3">
            <span className="flex items-center gap-1">
              <BedDouble size={14} /> {property.beds} Beds
            </span>
            <span className="flex items-center gap-1">
              <Bath size={14} /> {property.baths} Baths
            </span>
            <span>{property.size}</span>
          </div>

          <div className="flex items-center justify-between mt-4">
            <p className="text-sm font-semibold text-gray-900">
              {property.price}
            </p>

            <span className="text-xs px-3 py-1.5 rounded-full bg-pink-100 text-pink-600">
              View Details
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
