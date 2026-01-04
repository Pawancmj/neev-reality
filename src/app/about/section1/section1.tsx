"use client";

import React, { useRef } from "react";
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
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -280, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 280, behavior: "smooth" });
    }
  };

  return (
    <main className="w-full overflow-x-hidden">

      {/* ================= HERO ================= */}
      {/* smaller height on mobile, a bit taller on tablet, original tall on desktop */}
      <section className="relative w-full h-[55vh] sm:h-[65vh] lg:h-[70vh]">
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
            Turning <span className="text-[#E7C873]">Dreams</span> into Reality
          </h1>

          <button className="mt-6 w-fit border border-white px-6 py-3 rounded-lg text-white hover:bg-white hover:text-black transition">
            LET US GUIDE YOUR HOME
          </button>
        </div>
      </section>

      {/* ================= WELCOME ================= */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          Welcome to{" "}
          <span className="text-[#DBA40D]">Neev Realty</span>
        </h2>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="max-w-6xl relative bottom-12 mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 text-center lg:text-left">

        {/* TEXT */}
        <div>
          <h3 className=" text-[36px] font-semibold leading-none relative bottom-8">
            <span className="text-[#DBA40D] text-[44px] font-bold">WHO</span>{" "}
            <span className="text-gray-900">WE ARE</span>
          </h3>

          <p className="text-[15px] text-gray-600 leading-[28px] max-w-[302px] mx-auto lg:mx-0">
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
          <div className="grid grid-cols-2 gap-3  shadow-sm hover:scale-102 border-gray-200 border sm:gap-4 lg:gap-0">

            {/* DIAMOND (Top-Left) */}
            <div className="relative w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] md:w-[180px] md:h-[180px] lg:w-[220px] lg:h-[220px] xl:w-[260px] xl:h-[260px]">
              <div
                className="absolute inset-0 overflow-hidden 
                [clip-path:polygon(50%_0%,100%_50%,50%_100%,0%_50%)]"
              >
                <Image src="/images/aboutimg/img7.png" alt="" fill className="object-cover" />
              </div>
            </div>

            {/* RECTANGLE (Top-Right) */}
            <div className="relative w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] md:w-[180px] md:h-[180px] lg:w-[220px] lg:h-[220px] xl:w-[260px] xl:h-[260px] overflow-hidden">
              <Image src="/images/aboutimg/img8.png" alt="" fill className="object-cover" />
            </div>

            {/* PIZZA (Bottom-Left) */}
            <div
              className="relative w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] md:w-[180px] md:h-[180px] lg:w-[220px] lg:h-[220px] xl:w-[260px] xl:h-[260px]
              overflow-hidden [clip-path:circle(100%_at_0%_100%)] rotate-180"
            >
              <Image src="/images/aboutimg/img5.jpg" alt="" fill className="object-cover" />
            </div>

            {/* CIRCLE (Bottom-Right) */}
            <div
              className="relative w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] md:w-[180px] md:h-[180px] lg:w-[220px] lg:h-[220px] xl:w-[260px] xl:h-[260px]
               rounded-full overflow-hidden"
            >
              <Image src="/images/aboutimg/img10.png" alt="" fill className="object-cover" />
            </div>

          </div>
        </div>

      </section>

      {/* ================= WHY DIFFERENT ================= */}
      <section className="bg-white relative bottom-26 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center text-3xl sm:text-4xl font-semibold mb-12">
            <span className="text-[#DBA40D]">Why</span>{" "}
            <span className="text-gray-900">Are We Different?</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 text-[15px] leading-[26px] text-gray-600 text-center md:text-left">
            <p>
              At Neev Realty, we redefine real estate with a client-first philosophy.
              Our unique solutions are crafted to match your unique aspirations,
              whether you are seeking a luxurious home, building a profitable
              investment portfolio or navigating the complexities of property
              sales. We believe in empowering our clients with expert insights,
              curated property selections and expert financial advice to make
              informed decisions. Our approach is rooted in trust, transparency
              and a deep understanding of the ever-evolving real estate
              landscape.
            </p>
            <p>
              What truly makes us stand out is our ability to merge personalization
              with expertise. With over 20 years of experience and a portfolio of 100
              premium projects, we deliver a world of opportunities tailored just
              for you. From immersive virtual tours and in-person visits to
              seamless transaction support and ongoing assistance, we ensure
              your journey with us is as smooth as it is successful. At Neev Realty,
              we combine local expertise and global insight, ensuring that every
              client enjoys unparalleled service and a rewarding real estate
              experience. Experience the difference with Neev Realty - a trusted
              partner who brings your real estate dreams to life.
            </p>
          </div>
        </div>
      </section>

      {/* ================= VISION / MISSION ================= */}
      <section className="bg-[#F8FBFF] py-6 relative bottom-26">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold mb-8">
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
              className="relative bottom-10 md:top-1
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

      {/* ================= 5 STEPS - MOBILE SCROLL ONLY ================= */}
      <section className="max-w-7xl mx-auto relative bottom-28 px-6 py-16 ">
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl mb-12 ">
          <span className="text-[#DBA40D] font-semibold">5 Steps</span> to Your Dream Home
        </h2>

        {/* MOBILE SCROLL VIEW */}
        <div className="lg:hidden relative">
          {/* Mobile Scroll Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute right-62 top-1/2 -translate-y-1/2 z-20 h-8 w-8 rounded-full bg-white/95 backdrop-blur-sm shadow-lg border flex items-center justify-center hover:bg-white hover:shadow-xl transition-all text-gray-700 hover:text-[#DBA40D] text-lg"
            aria-label="Scroll left"
          >
            ‹
          </button>

          <button
            onClick={scrollRight}
            className="absolute left-62 top-1/2 -translate-y-1/2 z-20 h-8 w-8 rounded-full bg-white/95 backdrop-blur-sm shadow-lg border flex items-center justify-center hover:bg-white hover:shadow-xl transition-all text-gray-700 hover:text-[#DBA40D] text-lg"
            aria-label="Scroll right"
          >
            ›
          </button>

          {/* Mobile Scroll Container */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory px-2"
          >
            {steps.map((step) => (
              <div
                key={step.title}
                className="
                  flex-shrink-0 w-[260px] snap-center
                  rounded-lg p-5 text-center shadow-sm bg-white border hover:shadow-md hover:scale-[1.02] transition-all
                "
              >
                <Image src={step.logo} alt={step.title} width={36} height={36} className="mx-auto mb-3" />
                <h3 className="font-semibold text-sm leading-tight mb-2">{step.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* DESKTOP GRID - UNCHANGED */}
        <div className="hidden lg:grid grid-cols-5 gap-6 place-items-center">
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
