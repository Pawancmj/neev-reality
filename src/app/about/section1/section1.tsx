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
      <section className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center py-16">

        {/* Text */}
        <div>
          <h3 className="text-3xl sm:text-4xl font-semibold mb-6">
            <span className="text-[#DBA40D] text-5xl">WHO</span> WE ARE
          </h3>
          <p className="text-gray-700 leading-relaxed">
            As a leading luxury real estate boutique firm, we offer a comprehensive
            range of solutions tailored to your specific needs. We specialize in
            brand-new projects across Delhi NCR.
            <br /><br />
            From investment portfolios to first-time home purchases, property sales,
            and loan assistance, our advisors deliver personalized solutions.
          </p>
        </div>

        {/* Images */}
        <div className="grid grid-cols-2 gap-4">
          <Image src="/images/aboutimg/img3.jpg" alt="" width={300} height={300} className="rounded-lg object-cover" />
          <Image src="/images/aboutimg/img4.jpg" alt="" width={300} height={300} className="rounded-lg object-cover" />
          <Image src="/images/aboutimg/img5.jpg" alt="" width={300} height={300} className="rounded-lg object-cover" />
          <Image src="/images/aboutimg/img6.jpg" alt="" width={300} height={300} className="rounded-lg object-cover" />
        </div>

      </section>

      {/* ================= WHY DIFFERENT ================= */}
      <section className="bg-[#F8FBFF] py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
            <span className="text-[#DBA40D] text-6xl">Why</span> Are We Different?
          </h2>

          <div className="grid md:grid-cols-2 gap-10 mt-10 text-left">
            <p className="text-gray-700">
              At Neev Realty, we redefine real estate with a client-first philosophy.
              Our solutions match your aspirations, whether luxury living or
              profitable investments.
            </p>
            <p className="text-gray-700">
              With 20+ years of experience and 100+ premium projects, we ensure
              transparency, trust, and seamless execution at every step.
            </p>
          </div>
        </div>
      </section>

      {/* ================= VISION & MISSION ================= */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-12">
          <span className="text-[#DBA40D] text-6xl">Our</span> Vision & Mission
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="border rounded-full p-10">
            <h3 className="text-3xl font-semibold text-[#DBA40D] mb-4">Vision</h3>
            <p className="text-gray-600">
              To be a trusted, ethical, and forward-thinking real estate partner
              contributing to sustainable urban development.
            </p>
          </div>

          <div className="border rounded-full p-10">
            <h3 className="text-3xl font-semibold text-[#DBA40D] mb-4">Mission</h3>
            <p className="text-gray-600">
              Deliver transparent, value-driven real estate solutions with integrity
              and professionalism.
            </p>
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
              className="border rounded-lg p-6 text-center hover:scale-105 transition shadow-sm bg-white"
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

