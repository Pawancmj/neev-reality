

import {
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaFacebookF,
  FaTwitter,
  FaLink,
  FaWhatsapp,
  FaPhoneAlt,

} from "react-icons/fa";



import apartments from "../../../../data/apartmentsData";
import Navbar from "@/app/reusable_components/navbar/navbar";
import Footer from "@/app/reusable_components/footer/footer";
import Image from "next/image";
import Link from "next/link";




/* ================= TYPES ================= */
type FloorPlan = {
  type: string;
  size: string;
  price: string;
  img: string;
};

type Apartment = {
  id: string;
  title: string;
  location: string;
  price: string;
  size: string;
  beds: number;
  baths: number;
  img: string;
  slug: string;
  description?: string;
  floorPlans?: FloorPlan[];
  amenities?: string[];
};

type Props = {
  params: Promise<{ slug: string }>;
};

/* ================= PAGE ================= */
export default async function ApartmentDetails({ params }: Props) {
  const { slug } = await params;

  const property: Apartment | undefined = apartments.find(
    (p) => p.slug === slug
  );

  if (!property) {
    return (
      <div className="p-20 text-center text-xl font-semibold">
        Property Not Found
      </div>
    );
  }

  const floorPlans: FloorPlan[] =
    property.floorPlans && property.floorPlans.length > 0
      ? property.floorPlans
      : [
        {
          type: "3 BHK Apartment",
          size: "1495 SQ. FT.",
          price: "₹ 1.54 Cr",
          img: "/images/fp1.png",
        },
        {
          type: "3 BHK Apartment",
          size: "1495 SQ. FT.",
          price: "₹ 1.54 Cr",
          img: "/images/fp2.png",
        },
        {
          type: "3 BHK Apartment",
          size: "1495 SQ. FT.",
          price: "₹ 1.54 Cr",
          img: "/images/fp3.png",
        },
        {
          type: "3 BHK Apartment",
          size: "1495 SQ. FT.",
          price: "₹ 1.54 Cr",
          img: "/images/fp4.png",
        },
        {
          type: "4 BHK Apartment",
          size: "1850 SQ. FT.",
          price: "₹ 2.45 Cr",
          img: "/images/fp1.png",
        },
        {
          type: "4 BHK Premium",
          size: "2100 SQ. FT.",
          price: "₹ 2.98 Cr",
          img: "/images/fp2.png",
        },
        {
          type: "4 BHK Premium",
          size: "2100 SQ. FT.",
          price: "₹ 2.98 Cr",
          img: "/images/fp3.png",
        },
        {
          type: "4 BHK Premium",
          size: "2100 SQ. FT.",
          price: "₹ 2.98 Cr",
          img: "/images/fp4.png",
        },
      ];

  const amenities =
    property.amenities && property.amenities.length > 0
      ? property.amenities
      : [
        "/images/am1.png",
        "/images/am1.png",
        "/images/am1.png",
        "/images/am1.png",
        "/images/am1.png",
        "/images/am1.png",
        "/images/am1.png",
        "/images/am1.png",
      ];





  return (
    <>
      <Navbar />

      {/* ================= BREADCRUMB ================= */}
      <div className="max-w-[1240px] mx-auto px-4 py-4 text-sm text-gray-500">
        Home / Residential / Apartments /{" "}
        <span className="text-gray-900 font-medium">{property.title}</span>
      </div>

      {/* ================= HERO + SIDEBAR ================= */}
      <section className="max-w-[1240px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* ================= LEFT MAIN ================= */}
        <div className="lg:col-span-2 space-y-6">

          {/* HERO IMAGE */}
          <div className="relative w-full h-[420px] rounded-xl overflow-hidden">
            <Image
              src={property.img}
              alt={property.title}
              fill
              priority
              sizes="(max-width:768px) 100vw, 66vw"
              className="object-cover"
            />
          </div>

          {/* TITLE BLOCK */}
          <div className="bg-white border rounded-xl p-6 shadow-sm">
            <h1 className="text-2xl font-semibold">{property.title}</h1>

            <p className="text-sm text-pink-600 mt-1">
              📍 {property.location}
            </p>

            <div className="flex flex-wrap gap-6 text-sm text-gray-600 mt-3">
              <span>{property.beds} BHK</span>
              <span>{property.size}</span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span> RERA
              </span>
              <span className="text-gray-400">
                Last Updated Date 02 April, 2025
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4 gap-4">
              <p className="text-xl font-semibold text-gray-900">
                {property.price}
              </p>

              <button className="px-5 py-2 bg-[#F5A300] text-white rounded-md text-sm">
                ⬇ Download Brochure
              </button>
            </div>
          </div>

          {/* ================= TABS + OVERVIEW ================= */}
          <div className="bg-white border rounded-xl shadow-sm p-6 text-center">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 font-medium border-b pb-4">
              {[
                "Overview",
                "Floor Plan",
                "Amenities",
                "Payment",
                "Specification",
                "Location",
                "EMI",
                "Rating",
                "About Developer",
              ].map((t) => (
                <span
                  key={t}
                  className={`cursor-pointer ${t === "Overview"
                    ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                    : "hover:text-blue-600"
                    }`}
                >
                  {t}
                </span>
              ))}
            </div>

            <h2 className="text-lg font-semibold mt-6">
              {property.title}: World Class Luxury Apartments
            </h2>

            <p className="text-sm text-gray-600 mt-3 max-w-[900px] mx-auto">
              {property.description ||
                "Premium residential project offering luxury living with modern amenities and excellent connectivity."}
              <span className="text-pink-600 cursor-pointer ml-1">
                Read More
              </span>
            </p>

            <button className="mt-6 px-6 py-2 bg-[#F5A300] text-white rounded-md text-sm">
              Inquire Now !
            </button>
          </div>

          {/* ================= FLOOR & PRICING ================= */}
          <section className="max-w-[1240px] mx-auto px-4 mt-14">
            <h2 className="text-xl font-semibold mb-4">Floor And Pricing</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
              {floorPlans.map((fp, i) => (
                <div
                  key={i}
                  className="bg-white border rounded-xl p-4 shadow-sm hover:shadow-md transition"
                >
                  <div className="text-xs text-gray-500 mb-2">● {fp.size}</div>

                  <div className="relative w-full h-[140px] mb-3">
                    <Image
                      src={fp.img}
                      alt={fp.type}
                      fill
                      sizes="25vw"
                      className="object-contain"
                    />
                  </div>

                  <p className="text-sm font-medium">{fp.type}</p>
                  <p className="text-sm font-semibold">INR {fp.price}</p>

                  <div className="flex justify-between mt-3 text-xs">
                    <span className="text-[#F5A300] cursor-pointer">
                      Request<br /> Callback
                    </span>
                    <span className="text-[#F5A300] text-lg"><FaPhoneAlt className="text-yellow-400 text-lg" /></span>
                  </div>
                </div>
              ))}
            </div>
          </section>


          {/* ================= PAYMENT PLAN ================= */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Payment Plan</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 bg-[#FAF7F4] rounded-xl border overflow-hidden text-center">
              {[
                ["10%", "Down Payment"],
                ["80%", "During Construction"],
                ["10%", "On Possession"],
              ].map(([v, l]) => (
                <div key={l} className="p-6 border-b md:border-b-0 md:border-r">
                  <p className="text-xl font-bold">{v}</p>
                  <p className="text-sm text-gray-600">{l}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ================= AMENITIES ================= */}
          <section className="max-w-[1240px] mx-auto px-4 mt-12">
            <h2 className="text-xl font-semibold mb-6">Amenities</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {amenities.map((a, i) => (
                <div
                  key={i}
                  className="bg-white border rounded-xl shadow-sm hover:shadow-md transition overflow-hidden"
                >
                  <Image
                    src={a}
                    alt="Amenity"
                    width={300}
                    height={200}
                    className="w-full h-[160px] object-cover"
                  />

                  <div className="p-3 text-center">
                    <p className="text-sm font-medium text-gray-700">
                      Multicuisine Restaurant
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>



          {/* ================= LOCALITIES ================= */}
          <section>
            <h2 className="text-xl font-semibold mb-6">Localities</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Image
                src="/images/locality-map.png"
                alt="Map"
                width={400}
                height={520}
                className="rounded-xl border"
              />

              <div className="bg-white border rounded-xl p-6">
                <ul className="space-y-4">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <li
                      key={i}
                      className="h-4 bg-gray-100 rounded-full"
                    ></li>
                  ))}
                </ul>
              </div>
            </div>
          </section>



          {/* ================= EMI CALCULATOR ================= */}
          <section className="max-w-[1240px] mx-auto px-4 mt-14">
            <h2 className="text-xl font-semibold mb-6">EMI Calculator</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-[#F6FAFF] p-6 rounded-xl">

              {/* RIGHT : PIE CHART (STATIC UI VERSION) */}
              <div className="flex flex-col items-center">
                <h3 className="text-lg font-semibold mb-4">
                  Break-up of Total Payment
                </h3>

                <Image
                  src="/images/emi-chart.png"
                  alt="EMI Chart"
                  width={260}
                  height={260}
                />

                <div className="flex gap-6 mt-4 text-sm">
                  <span className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
                    Total Interest
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-blue-300 rounded-full"></span>
                    Principal Amount
                  </span>
                </div>
              </div>

              {/* LEFT : FORM */}
              <div className="bg-white rounded-xl p-6 shadow-sm space-y-4">

                <div>
                  <label className="text-sm text-gray-600">Loan Amount</label>
                  <input
                    type="number"
                    defaultValue={2500000}
                    className="w-full mt-1 px-4 py-2 border rounded-md outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600">Interest Rate (%)</label>
                  <input
                    type="number"
                    defaultValue={10.5}
                    className="w-full mt-1 px-4 py-2 border rounded-md outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600">Loan Tenure (Yr)</label>
                  <input
                    type="number"
                    defaultValue={30}
                    className="w-full mt-1 px-4 py-2 border rounded-md outline-none"
                  />
                </div>

                {/* EMI RESULT */}
                <div className="bg-gray-50 rounded-md p-4">
                  <p className="text-sm text-gray-600">EMI</p>
                  <p className="text-2xl font-bold text-blue-600">₹ 22,868.48</p>
                </div>

                <div className="flex justify-between text-sm">
                  <span>Interest to be paid</span>
                  <span className="font-medium">₹ 57,32,652</span>
                </div>

                <div className="flex justify-between text-sm border-t pt-2">
                  <span>Total of Payments</span>
                  <span className="font-semibold">₹ 82,32,652</span>
                </div>
              </div>



            </div>
          </section>

          {/* ================= FAQ ================= */}
          <section className="bg-[#F6FAFF]">

            <h2 className="text-xl font-semibold mb-4">
              FAQ
            </h2>
            <h3 className="text-xl font-semibold mb-4">
              Frequently Asked Questions
            </h3>

            {[
              "Where is the project located?",
              "What is the price range?",
              "Is home loan available?",
            ].map((q) => (
              <details key={q} className="border rounded-lg mb-2 p-4">
                <summary className="font-medium cursor-pointer">
                  {q}
                </summary>
                <p className="mt-2 text-sm text-gray-600">
                  Please contact our sales team.
                </p>
              </details>
            ))}

          </section>


          {/* ================= ABOUT DEVELOPER ================= */}
          <section className="max-w-[1240px] mx-auto px-4 mt-14">
            <h2 className="text-xl font-semibold mb-6 border-b pb-2">
              About Developer
            </h2>

            <div className="bg-white border rounded-xl p-6 shadow-sm">

              {/* TOP ROW */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                {/* LEFT : LOGO + NAME */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 border rounded-lg flex items-center justify-center">
                    <Image
                      src="/images/pg-logo.png"
                      alt="Developer Logo"
                      width={48}
                      height={48}
                    />
                  </div>

                  <h3 className="text-lg font-semibold">Prestige Group</h3>
                </div>

                {/* RIGHT : PARTNER BADGE */}
                <button className="px-4 py-2 border border-[#F5A300] text-[#F5A300] rounded-full text-sm font-medium">
                  Neev Realty Channel Partner
                </button>
              </div>

              {/* STATS */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8 text-center">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 bg-[#F5A300] text-white rounded-full flex items-center justify-center">
                    🏛️
                  </div>
                  <p className="text-sm text-gray-500">Established</p>
                  <p className="font-semibold">1986</p>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 bg-[#F5A300] text-white rounded-full flex items-center justify-center">
                    🏗️
                  </div>
                  <p className="text-sm text-gray-500">Total Projects</p>
                  <p className="font-semibold">102</p>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 bg-[#F5A300] text-white rounded-full flex items-center justify-center">
                    🏢
                  </div>
                  <p className="text-sm text-gray-500">Ongoing Projects</p>
                  <p className="font-semibold">1</p>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 bg-[#F5A300] text-white rounded-full flex items-center justify-center">
                    📍
                  </div>
                  <p className="text-sm text-gray-500">City Present</p>
                  <p className="font-semibold">7</p>
                </div>
              </div>

              {/* DESCRIPTION */}
              <p className="text-sm text-gray-600 mt-6 leading-relaxed">
                The Prestige Group is a leading real estate developer of South India,
                established in 1986 and headquartered in Bangalore. With a strong presence
                across residential, commercial, retail and hospitality segments, the
                group is known for innovation, quality construction and timely delivery.
                <span className="text-blue-600 cursor-pointer"> Read More</span>
              </p>

            </div>
          </section>

          {/* ================= SIMILAR PROJECTS ================= */}
          <section className="max-w-[1240px] mx-auto px-4 mt-16 mb-10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Similar Projects</h2>
            </div>

            {/* Horizontal scroll (mouse + touch) */}
            <div className="flex gap-6 overflow-x-auto scroll-smooth pb-4">
              {apartments
                .filter((p) => p.slug !== property.slug)
                .map((p) => (
                  <Link
                    key={p.slug}
                    href={`/residential/apartments/${p.slug}`}
                    className="min-w-[260px] max-w-[260px] border rounded-lg p-2 hover:shadow-md transition bg-white"
                  >
                    <Image
                      src={p.img}
                      alt={p.title}
                      width={400}
                      height={300}
                      className="rounded-md h-[160px] w-full object-cover"
                    />

                    <h3 className="font-medium mt-2 text-sm">{p.title}</h3>
                    <p className="text-xs text-gray-500">{p.location}</p>

                    <div className="flex items-center justify-between mt-2">
                      <p className="text-blue-600 font-semibold text-sm">
                        {p.price}
                      </p>
                      <span className="text-xs text-pink-600 font-medium">
                        Contact
                      </span>
                    </div>
                  </Link>
                ))}
            </div>

            <p className="text-xs text-gray-400 mt-2">
              ← Scroll to view more projects →
            </p>
          </section>



        </div>

        {/* ================= RIGHT SIDEBAR ================= */}
        <aside className="sticky top-24 space-y-4">

          {/* IMAGE + VIDEO PREVIEW */}
          <div className="bg-white border rounded-xl overflow-hidden shadow-sm">
            {/* TOP THUMBNAILS */}
            <div className="grid grid-cols-2 gap-1 p-1">
              <div className="relative">
                <Image
                  src="/images/s1.png"
                  alt="Gallery"
                  width={200}
                  height={120}
                  className="object-cover rounded"
                />
              </div>

              <div className="relative">
                <Image
                  src="/images/s2.png"
                  alt="Gallery"
                  width={200}
                  height={120}
                  className="object-cover rounded"
                />
                <span className="absolute bottom-2 left-2 bg-white/90 text-xs px-2 py-1 rounded">
                  5+ Photos
                </span>
              </div>
            </div>

            {/* VIDEO PREVIEW */}
            <div className="relative">
              <Image
                src="/images/s3.png"
                alt="Video Preview"
                width={400}
                height={220}
                className="w-full h-[200px] object-cover"
              />

              {/* PLAY ICON */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow cursor-pointer text-xl">
                  ▶
                </div>
              </div>
            </div>
          </div>

          {/* QUICK FACTS */}
          <div className="bg-white border rounded-xl p-5 shadow-sm">
            <h3 className="font-semibold mb-3 border-b pb-2">Quick Facts</h3>
            <div className="text-sm space-y-2 text-gray-600">
              <p>Developer :</p>
              <p>Type :</p>
              <p>Elevation / Tower :</p>
              <p>Rera No :</p>
              <p>Project Handover :</p>
            </div>
          </div>

          {/* BRAND + CTA */}
          <div className="bg-white border rounded-xl p-5 text-center shadow-sm">
            <Image
              src="/images/logo.png"
              alt="Neev Realty"
              width={70}
              height={70}
              className="mx-auto"
            />

            <p className="mt-2 font-medium text-lg">Neev Realty</p>

            <div className="flex gap-3 mt-4">
              <button className="flex-1 py-2 border rounded-lg text-sm">
                Call Us
              </button>
              <button className="flex-1 py-2 border border-blue-600 text-blue-600 rounded-lg text-sm">
                Inquiry
              </button>
            </div>

            {/* CONNECT VIA */}
            <p className="mt-4 text-sm text-gray-500">Connect us via</p>

            <div className="flex justify-center mt-2">
              <a
                href="https://wa.me/918824966669"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition"
              >
                <FaWhatsapp className="text-xl" />
              </a>

            </div>
          </div>

          {/* SHARE */}
          <div className="bg-white border rounded-xl p-5 shadow-sm text-center">

            {/* TITLE + LINK ICON */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <p className="font-medium">Share</p>
              <FaLink className="text-gray-400 text-sm cursor-pointer" />
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex justify-center gap-3">

              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded bg-pink-500 text-white hover:scale-105 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded bg-blue-700 text-white hover:scale-105 transition"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded bg-red-600 text-white hover:scale-105 transition"
              >
                <FaPinterestP />
              </a>

              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded bg-blue-600 text-white hover:scale-105 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded bg-sky-500 text-white hover:scale-105 transition"
              >
                <FaTwitter />
              </a>

            </div>
          </div>


        </aside>

      </section>



      <Footer />
    </>
  );
}
