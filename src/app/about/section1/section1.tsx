"use client";

import Image from "next/image";

const steps = [
  {
    title: "Personalized Consultation",
    desc: "Our experts will evaluate your real estate goals and preferences.",
    logo: "/images/aboutimg/logo1.png",
  },
  {
    title: "Curated Property Selection",
    desc: "We'll present the best options tailored to your preferences.",
    logo: "/images/aboutimg/logo2.png",
  },
  {
    title: "Immersive Property Experiences",
    desc: "Explore properties through virtual tours or in-person visits.",
    logo: "/images/aboutimg/logo3.png",
  },
  {
    title: "Comprehensive Financial Guidance",
    desc: "Get expert advice on loans, investments, and tax implications.",
    logo: "/images/aboutimg/logo4.png",
  },
  {
    title: "Seamless Transactions And Support",
    desc: "Enjoy a smooth buying process and ongoing assistance.",
    logo: "/images/aboutimg/logo5.png",
  },
];

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section className="relative w-full h-[70vh] sm:h-[80vh]">
        <Image
          src="/images/aboutimg/img1.jpg"
          alt="Neev Realty Banner"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 lg:px-20">
          <h1 className="text-white text-3xl sm:text-4xl lg:text-6xl font-semibold max-w-2xl">
            Turning <span className="text-[#E7C873]">Dreams</span> into Real Homes
          </h1>

          <button className="mt-6 w-fit border border-white px-6 py-3 rounded-lg text-white hover:bg-white hover:text-black transition">
            LET US GUIDE YOUR HOME
          </button>
        </div>
      </section>

      {/* ================= WELCOME ================= */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium">
          Welcome to Neev Realty –{" "}
          <span className="text-[#DBA40D]">Turning Dreams</span> Into Real Homes
        </h2>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 text-center lg:text-left">

        {/* TEXT */}
        <div>
          <h3 className="mb-6 text-[36px] font-semibold leading-none">
            <span className="text-[#DBA40D] text-[44px] font-bold">WHO</span>{" "}
            <span className="text-gray-900">WE ARE</span>
          </h3>

          <p className="text-[15px] text-gray-600 leading-[24px] max-w-[420px] mx-auto lg:mx-0">
            As a leading luxury real estate boutique firm, we offer a
            comprehensive range of solutions tailored to your specific needs.
            We specialize in brand-new projects across Delhi NCR.
            <br /><br />
            From investment portfolios to first-time home purchases, property
            sales, and loan assistance, our team of experienced advisors is
            dedicated to providing personalized solutions that meet your unique
            needs.
            <br /><br />
            Discover your real estate journey with{" "}
            <span className="font-semibold text-gray-900">Neev Realty.</span>
          </p>
        </div>

        {/* IMAGES - MOBILE PERFECTLY FIT */}
        <div className="flex justify-center">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-0">

            {/* DIAMOND (Top-Left) */}
            <div className="relative w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] md:w-[180px] md:h-[180px] lg:w-[220px] lg:h-[220px] xl:w-[260px] xl:h-[260px]">
              <div className="absolute inset-0 overflow-hidden 
                [clip-path:polygon(50%_0%,100%_50%,50%_100%,0%_50%)]">
                <Image src="/images/aboutimg/img7.png" alt="" fill className="object-cover" />
              </div>
            </div>

            {/* RECTANGLE (Top-Right) */}
            <div className="relative w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] md:w-[180px] md:h-[180px] lg:w-[220px] lg:h-[220px] xl:w-[260px] xl:h-[260px] overflow-hidden">
              <Image src="/images/aboutimg/img8.png" alt="" fill className="object-cover" />
            </div>

            {/* PIZZA (Bottom-Left) */}
            <div className="relative w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] md:w-[180px] md:h-[180px] lg:w-[220px] lg:h-[220px] xl:w-[260px] xl:h-[260px]
              overflow-hidden [clip-path:circle(100%_at_0%_100%)] rotate-180">
              <Image src="/images/aboutimg/img5.jpg" alt="" fill className="object-cover" />
            </div>

            {/* CIRCLE (Bottom-Right) */}
            <div className="relative w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] md:w-[180px] md:h-[180px] lg:w-[220px] lg:h-[220px] xl:w-[260px] xl:h-[260px]
               rounded-full overflow-hidden">
              <Image src="/images/aboutimg/img10.png" alt="" fill className="object-cover" />
            </div>

          </div>
        </div>

      </section>

      {/* ================= WHY DIFFERENT ================= */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center text-3xl sm:text-4xl font-semibold mb-12">
            <span className="text-[#DBA40D]">Why</span>{" "}
            <span className="text-gray-900">Are We Different?</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 text-[15px] leading-[26px] text-gray-600 text-center md:text-left">
            <p>
              At Neev Realty, we redefine real estate with a client-first philosophy.
              Our unique solutions are crafted to match your unique aspirations.
            </p>
            <p>
              With over 20 years of experience and a portfolio of 100 premium projects,
              we ensure every client enjoys an unparalleled service.
            </p>
          </div>
        </div>
      </section>

      {/* ================= VISION / MISSION ================= */}
      <section className="bg-[#F8FBFF] py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold mb-16">
            <span className="text-[#DBA40D]">Our</span> Vision & Mission
          </h2>

          {/* CENTERED CIRCLES */}
          <div className="flex flex-col items-center justify-center md:flex-row md:items-center md:justify-center gap-20">

            {/* VISION */}
            <div
              className="
                w-[280px] h-[280px]
                sm:w-[320px] sm:h-[320px]
                lg:w-[360px] lg:h-[360px]
                rounded-full
                border border-gray-400
                flex flex-col
                justify-center items-center
                px-10
                text-center
              "
            >
              <h3 className="text-xl font-semibold text-[#DBA40D] mb-6">
                Vision
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                To be recognized as a trusted and forward-thinking real estate
                partner, known for excellence, ethics, and a customer-first
                approach, while contributing to sustainable urban development.
              </p>
            </div>

            {/* MISSION */}
            <div
              className="
                w-[280px] h-[280px]
                sm:w-[320px] sm:h-[320px]
                lg:w-[360px] lg:h-[360px]
                rounded-full
                border border-gray-400
                flex flex-col
                justify-center items-center
                px-10
                text-center
              "
            >
              <h3 className="text-xl font-semibold text-[#DBA40D] mb-6">
                Mission
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                Our mission is to provide transparent and reliable real estate
                solutions, create value-driven opportunities, and uphold
                integrity, professionalism, and modern sustainable practices.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 5 STEPS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl mb-12">
          <span className="text-[#DBA40D] font-semibold">5 Steps</span> to Your Dream Home
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 place-items-center">
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-lg p-6 text-center hover:scale-105 transition shadow-sm bg-white"
            >
              <Image src={step.logo} alt={step.title} width={40} height={40} className="mx-auto mb-4" />
              <h3 className="font-semibold">{step.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
