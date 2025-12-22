import Image from "next/image";

export default function PropertyHero() {
  return (
    <section className="w-full bg-[#F5F9FF] pb-20 pt-10">
      <div className="max-w-[1240px] mx-auto px-4 relative">

        {/* ========= LEFT TEXT ========= */}
        <div className="max-w-xl mb-10">
          <p className="text-gray-500 text-sm">
            From as low as $10 per day with limited time offer discounts.
          </p>

          <h1 className="text-[42px] sm:text-[52px] font-bold leading-tight mt-3">
            Your <span className="text-blue-600">Property,</span> Our Priority.
          </h1>
        </div>

        {/* ========= SEARCH BAR (Centered + Floating) ========= */}
        <div className="
          w-full bg-white shadow-xl rounded-full 
          flex flex-col sm:flex-row items-center 
          px-6 py-4 gap-4 absolute left-1/2 
          transform -translate-x-1/2 top-[140px] 
          z-20 max-w-[900px]
        ">
          {/* Input */}
          <div className="flex items-center w-full gap-3 border-r pr-4">
            <input
              type="text"
              placeholder="Enter Keyword"
              className="w-full outline-none text-sm"
            />
            <span className="text-gray-600 text-lg">🔍</span>
          </div>

          {/* Status */}
          <select className="text-sm text-gray-600 border-r pr-6 outline-none">
            <option>All Status</option>
          </select>

          {/* Type */}
          <select className="text-sm text-gray-600 border-r pr-6 outline-none">
            <option>All Type</option>
          </select>

          {/* Filter */}
          <button className="text-gray-600 text-sm font-medium">
            Filter
          </button>

          {/* Search Button */}
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium">
            Search
          </button>
        </div>

        {/* ========= RIGHT SIDE COLLAGE IMAGES ========= */}
        <div
          className="absolute right-0 top-0 hidden lg:flex flex-col items-end gap-4"
          style={{ height: "390px", width: "340px" }}
        >
          <div className="flex gap-4">
            <Image
              src="/images/p1.jpg"
              width={160}
              height={140}
              className="rounded-xl object-cover"
              alt="property"
            />
            <Image
              src="/images/p2.jpg"
              width={160}
              height={140}
              className="rounded-xl object-cover"
              alt="property"
            />
          </div>

          <div className="flex gap-4">
            <Image
              src="/images/p3.jpg"
              width={160}
              height={180}
              className="rounded-xl object-cover"
              alt="property"
            />
            <Image
              src="/images/p4.jpg"
              width={160}
              height={180}
              className="rounded-xl object-cover"
              alt="property"
            />
          </div>
        </div>

        {/* ========= AGENTS CARD (BOTTOM LEFT) ========= */}
        <div className="mt-[180px] inline-flex bg-white rounded-2xl shadow-lg px-6 py-3 gap-4 items-center">
          <div className="flex -space-x-3">
            <Image src="/images/a1.png" alt="agent" width={45} height={45} className="rounded-full" />
            <Image src="/images/a2.png" alt="agent" width={45} height={45} className="rounded-full" />
            <Image src="/images/a3.png" alt="agent" width={45} height={45} className="rounded-full" />
          </div>
          <div>
            <p className="text-gray-800 font-semibold">1000K+</p>
            <p className="text-gray-500 text-sm -mt-1">Exclusive Agents</p>
          </div>
        </div>

      </div>
    </section>
  );
}
