import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full md:w-[1510px] md:relative md:right-11.5 bg-[#F7F9FC] py-12 md:py-2">
      <div className="max-w-[1240px] w-full mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">

        {/* LEFT TEXT */}
        <div className="md:col-span-6 order-1 flex flex-col items-center md:items-start text-center md:text-left">

          {/* Main Heading */}
          <h1 className="font-extrabold leading-tight text-[32px] sm:text-[42px] md:text-[52px] text-gray-900">
            Your Property Goals Are Our <br />
            <span className="text-[#F5A200]">
              Top Priority
            </span>
          </h1>

          {/* Sub Heading */}
          <p className="mt-5 text-[17px] sm:text-[18px] text-gray-700 font-extrabold">
            Smart Real Estate Solutions That{" "}
            <span className="text-[#F5A200]">Create Value</span>
          </p>

          {/* Description */}
          <p className="mt-6 max-w-[540px] text-gray-500 text-[15px] sm:text-[16px] leading-[26px]">
            At Neev Realty, we offer expert guidance for buying, selling, and
            investing in residential and commercial properties. Our focus is on
            transparency, market insight, and long-term value.
          </p>

        </div>

        {/* RIGHT IMAGE */}
        <div className="md:col-span-6 order-2 flex justify-center md:justify-end">
         <div className="relative w-full max-w-[540px] h-[220px] sm:h-[340px] md:h-[480px] lg:h-[520px]">
            <Image
              src="/images/hero1.png"
              alt="Hero"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}
