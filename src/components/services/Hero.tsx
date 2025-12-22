import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full bg-[#F7F9FC] py-12 md:py-20">
      <div className="max-w-[1240px] w-full mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">

        {/* LEFT TEXT */}
        <div className="md:col-span-6 order-1 text-center md:text-left flex flex-col items-center md:items-start">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl">☰</span>
            <span className="text-blue-600 font-medium text-[18px]">
              › Services
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-bold text-gray-900 leading-tight text-[32px] sm:text-[44px] md:text-[55px]">
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
          <p className="mt-4 text-gray-600 text-[15px] sm:text-[17px] leading-[26px] max-w-[520px]">
            We make spaces and structures for our customers and local area
            itedes malis civibus kase iuvaret blandit ipsum Past more
            emotionless this.
          </p>

          {/* Bullet List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 mt-8 text-[16px] sm:text-[18px] font-medium text-center sm:text-left">
            <div className="text-[#6D50FF]">↪ Consulting</div>
            <div className="text-[#6D50FF]">↪ Concept Design</div>
            <div className="text-[#6D50FF]">↪ Construction</div>
            <div className="text-[#6D50FF]">↪ Design Development</div>
          </div>
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
