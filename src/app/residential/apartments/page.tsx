import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import Navbar from "../../reusable_components/navbar/navbar";
import Footer from "../../reusable_components/footer/footer";
import PropertyCard from "@/components/apartment-property/PropertyCard";
import apartments from "@/data/apartmentsData";

export default function ApartmentsPage() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative bg-[#F6FBFF]">
        <div className="max-w-[1240px] mx-auto px-4 py-14">

          {/* HERO GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* LEFT CONTENT */}
            <div className="max-w-lg">
              <p className="text-sm text-gray-500">
                From as low as $10 per day with limited-time offer discounts.
              </p>

              <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                Your <span className="text-blue-600">Property</span>, Our Priority.
              </h1>

              <p className="mt-4 text-gray-600 max-w-xl">
                Search and explore premium apartments — use the filters to find the
                right match for your needs.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="hidden lg:flex justify-end">
              <Image
                src="/images/hero-tiles.png"
                alt="Property collage"
                width={360}
                height={360}
                className="object-cover"
                priority
              />
            </div>

          </div>

          {/* SEARCH BAR */}
          <div className="relative ">
            <div className="absolute left-1/2 -translate-x-1/2 w-full max-w-[980px] px-4 z-30">
              <div className="bg-white rounded-full shadow-xl p-4 flex flex-col sm:flex-row items-center gap-3">

                <div className="relative flex items-center gap-3 flex-1 w-full">
                  <input
                    className="flex-1 outline-none text-sm px-4 py-2 pr-10 rounded-full bg-transparent"
                    placeholder="Enter Keyword"
                  />
                  <FiSearch className="absolute right-4 text-gray-500 text-lg" />
                </div>

                <select className="text-sm border-l pl-3 pr-6 py-2 bg-transparent">
                  <option>All Status</option>
                </select>

                <select className="text-sm border-l pl-3 pr-6 py-2 bg-transparent">
                  <option>All Type</option>
                </select>

                <button className="px-4 py-2 rounded-md border">Filter</button>

                <button className="px-5 py-2 rounded-full bg-blue-600 text-white">
                  Search
                </button>

              </div>
            </div>
          </div>

          {/* AGENTS CARD */}
          <div className="mt-24">
            <Image
              src="/images/agent.png"
              alt="agent"
              width={228}
              height={228}
              style={{ height: "auto", width: "auto" }}
            />

          </div>

        </div>

        {/* Spacer */}
        <div className="h-24 lg:h-32"></div>
      </section>


      {/* LISTINGS GRID */}
      <main className="py-10">
        <div className="max-w-[1240px] mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {apartments.map((item) => (
              <PropertyCard key={item.id} property={item} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
