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
      <section className="relative">
        <Image
          src="/images/aboutimg/img1.jpg"
          alt=""
          width={1600}
          height={700}
          className="w-full h-[70vh] object-cover"
        />

        <div className="absolute inset-0 flex flex-col justify-center px-6 lg:px-24">
          <h1 className="text-white text-3xl sm:text-4xl lg:text-6xl font-semibold max-w-3xl">
            Turning <span className="text-[#E7C873]">Dreams</span> into Real Homes
          </h1>

          <button className="mt-6 w-fit border-2 border-white text-white px-6 py-3 rounded-lg">
            LET US GUIDE YOUR HOME
          </button>

          <Image
            src="/images/aboutimg/img2.png"
            alt=""
            width={172}
            height={54}
            className="mt-6"
          />
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium">
          Welcome to Neev Realty –{" "}
          <span className="text-[#1D4ED8]">Turning Dreams</span> Into Real Homes
        </h1>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-semibold mb-6">
            <span className="text-[#1D4ED8] text-5xl">WHO</span> WE ARE
          </h2>
          <p className="text-gray-700 leading-relaxed">
            As a leading luxury real estate boutique firm, we offer a
            comprehensive range of solutions tailored to your specific needs.
            We specialize in brand-new projects across Delhi NCR.
            <br /><br />
            From investment portfolios to first-time home purchases, property
            sales, and loan assistance, our team of experienced advisors is
            dedicated to providing personalized solutions.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-4">
          <Image src="/images/aboutimg/img3.jpg" alt="" width={250} height={250} className="rounded-lg object-cover" />
          <Image src="/images/aboutimg/img4.jpg" alt="" width={250} height={250} className="rounded-lg object-cover" />
          <Image src="/images/aboutimg/img5.jpg" alt="" width={250} height={250} className="rounded-lg object-cover" />
          <Image src="/images/aboutimg/img6.jpg" alt="" width={250} height={250} className="rounded-full object-cover" />
        </div>
      </section>

      {/* ================= WHY DIFFERENT ================= */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-center text-4xl font-medium mb-12">
          <span className="text-[#1D4ED8] text-5xl">Why</span> Are We Different?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-700">
          <p>
            At Neev Realty, we redefine real estate with a client-first
            philosophy. Our solutions are crafted to match your aspirations,
            whether luxury living or smart investments.
          </p>

          <p>
            With over 20 years of experience and 100+ premium projects, we
            deliver unmatched expertise, immersive tours, and seamless
            transactions.
          </p>
        </div>
      </section>

      {/* ================= 5 STEPS ================= */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light">
            <span className="text-blue-500 font-semibold">5 Steps</span> to Your
            Dream Home
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step) => (
            <div
              key={step.title}
              className="flex flex-col items-center text-center border rounded-md shadow-sm py-8 px-4"
            >
              <Image
                src={step.logo}
                alt={step.title}
                width={40}
                height={40}
              />
              <h3 className="mt-4 font-semibold">{step.title}</h3>
              <p className="text-sm text-gray-600 mt-2">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
