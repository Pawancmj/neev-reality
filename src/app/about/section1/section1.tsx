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
<section className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start py-16">

  {/* Text */}
  <div>
    {/* Heading */}
    <h3 className="mb-6 text-[36px] font-semibold leading-none">
      <span className="text-[#DBA40D] text-[44px] font-bold">WHO</span>{" "}
      <span className="text-gray-900">WE ARE</span>
    </h3>

    {/* Paragraphs */}
    <p className="text-[15px] text-gray-600 leading-[24px] max-w-[420px]">
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
      <span className="font-semibold text-gray-900">
        Neev Realty.
      </span>
    </p>
  </div>

        {/* Images */}
<div className="grid grid-cols-2 gap-[1px]">

  {/* TOP LEFT – DIAMOND */}
 <div className="relative w-[215px] h-[215px] translate-x-[45px] mt-1">
  <div
    className="
      relative w-full h-full overflow-hidden
      [clip-path:polygon(50%_0%,100%_50%,50%_100%,0%_50%)]
    "
  >
    <Image
      src="/images/aboutimg/img3.jpg"
      alt=""
      fill
      className="object-cover"
    />
  </div>
</div>





  {/* TOP RIGHT – RECTANGLE */}
  <div className="relative w-[220px] h-[220px] overflow-hidden">
    <Image
      src="/images/aboutimg/img4.jpg"
      alt=""
      fill
      className="object-cover"
    />
  </div>

  {/* BOTTOM LEFT – PIZZA SLICE (QUARTER CIRCLE) */}
  <div className="relative w-[220px] h-[220px] overflow-hidden [clip-path:circle(100%_at_0%_100%)] rotate-180 translate-x-[45px]">
    <Image
      src="/images/aboutimg/img5.jpg"
      alt=""
      fill
      className="object-cover"
    />
  </div>

  {/* BOTTOM RIGHT – CIRCLE */}
  <div className="relative w-[220px] h-[220px] overflow-hidden rounded-full">
    <Image
      src="/images/aboutimg/img6.jpg"
      alt=""
      fill
      className="object-cover"
    />
  </div>

</div>






      </section>



      {/* ================= WHY DIFFERENT ================= */}

      <section className="bg-white py-20">
  <div className="max-w-6xl mx-auto px-6">

    {/* HEADING */}
    <h2 className="text-center text-3xl sm:text-4xl font-semibold mb-12">
      <span className="text-[#DBA40D]">Why</span>{" "}
      <span className="text-gray-900">Are We Different?</span>
    </h2>

    {/* CONTENT */}
    <div className="grid md:grid-cols-2 gap-12 text-[15px] leading-[26px] text-gray-600">

      {/* LEFT COLUMN */}
      <p>
        At Neev Realty, we redefine real estate with a client-first philosophy.
        Our unique solutions are crafted to match your unique aspirations,
        whether you are seeking a luxurious home, building a profitable
        investment portfolio, or navigating the complexities of property sales.
        We believe in empowering our clients with expert insights, curated
        property selections and expert financial advice to make informed
        decisions. Our approach is rooted in trust, transparency and a deep
        understanding of the ever-evolving real estate landscape.
      </p>

      {/* RIGHT COLUMN */}
      <p>
        What truly makes us stand out is our ability to merge personalization
        with expertise. With over 20 years of experience and a portfolio of 100
        premium projects, we deliver a world of opportunities tailored just for
        you. From immersive virtual tours and in-person visits to seamless
        transaction support and ongoing assistance, we ensure your journey with
        us is as smooth as it is successful. At Neev Realty, we combine local
        expertise and global insight, ensuring that every client enjoys an
        unparalleled service and a rewarding real estate experience. Experience
        the difference with Neev Realty – a trusted partner who brings your real
        estate dreams to life.
      </p>

    </div>
  </div>
</section>

          {/* ================= MISSION and VISSION ================= */}

      <section className="bg-[#F8FBFF] py-20">
  <div className="max-w-6xl mx-auto px-6 text-center">

    {/* HEADING */}
    <h2 className="text-4xl font-semibold mb-16">
      <span className="text-[#DBA40D]">Our</span> Vision & Mission
    </h2>

    {/* CIRCLES */}
    <div className="flex flex-col md:flex-row justify-center gap-20">

      {/* VISION */}
      <div className="w-[360px] h-[360px] rounded-full border border-gray-400 flex flex-col justify-center items-center px-10 text-center">
        <h3 className="text-xl font-semibold text-[#DBA40D] mb-6">
          Vision
        </h3>

        <p className="text-sm text-gray-600 leading-relaxed">
          To be recognized as a trusted and forward-thinking real estate
          partner, known for excellence, ethics, and a customer-first
          approach, while actively contributing to sustainable urban
          development and modern, high-quality lifestyles.
        </p>
      </div>

      {/* MISSION */}
      <div className="w-[360px] h-[360px] rounded-full border border-gray-400 flex flex-col justify-center items-center px-10 text-center">
        <h3 className="text-xl font-semibold text-[#DBA40D] mb-6">
          Mission
        </h3>

        <p className="text-sm text-gray-600 leading-relaxed">
          Our mission is to provide transparent and reliable real estate
          solutions, create value-driven opportunities, and uphold
          integrity, professionalism, and modern sustainable practices
          in everything we do.
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-lg p-6 text-center hover:scale-105 transition shadow-sm bg-white"
            >
              <Image
                src={step.logo}
                alt={step.title}
                width={40}
                height={40}
                className="mx-auto mb-4"
              />
              <h3 className="font-semibold">{step.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}

