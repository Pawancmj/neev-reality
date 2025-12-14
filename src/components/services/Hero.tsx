import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full bg-[#F7F9FC] py-12 md:py-20">
      <div className="max-w-[1240px] w-full mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">

        {/* LEFT SECTION */}
        <div className="md:col-span-6 order-1">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl">☰</span>
            <span className="text-blue-600 font-medium text-[18px]">
              › Services
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-bold text-gray-900 leading-tight text-[36px] sm:text-[48px] md:text-[55px]">
            Your choice is our <br />
            first and foremost <br />
            <span className="text-blue-600 underline decoration-[4px]">
              Priority
            </span>
          </h1>

          {/* Subtitle */}
          <h3 className="mt-5 text-gray-700 font-semibold text-[18px] sm:text-[20px]">
            The Real Creative Potential
          </h3>

          {/* Paragraph */}
          <p className="mt-4 text-gray-600 text-[15px] sm:text-[17px] leading-[26px] max-w-[500px]">
            We make spaces and structures for our customers and local area
            itedes malis civibus kase iuvaret blandit ipsum Past more
            emotionless this.
          </p>

          {/* Bullet List */}
          <div className="grid grid-cols-2 gap-y-4 mt-8 text-[16px] sm:text-[18px] font-medium">
            <div className="text-[#6D50FF]">↪ Consulting</div>
            <div className="text-[#6D50FF]">↪ Concept Design</div>
            <div className="text-[#6D50FF]">↪ Construction</div>
            <div className="text-[#6D50FF]">↪ Design Development</div>
          </div>
        </div>

        {/* RIGHT IMAGE (Normal Image – No Rounded Corners) */}
        <div className="md:col-span-6 flex justify-center md:justify-end order-2">
          <div className="relative w-full max-w-[540px] h-[240px] sm:h-[360px] md:h-[480px] lg:h-[520px]">
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
