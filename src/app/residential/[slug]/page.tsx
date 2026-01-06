
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
import FloorPlanSection from "./FloorPlanSection";
import AutoPopup from "./AutoPopup";
import MobileGallery from "./MobileGallery";
import ApartmentClient from "./ApartmentClient";
import apartments from "../../../data/apartmentsData"
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
  builder: string;
  location: string;
  bhk: string;
  price: string;
  size: string;
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
  const galleryImages = [
    property.img,
    "/images/s1.png",
    "/images/s2.png",
    "/images/s3.png",
    "/images/s4.png",
  ];




  return (
    <>
      <ApartmentClient>
        {/* ================= BREADCRUMB ================= */}
        <div className="max-w-[1240px] mx-auto px-4 py-2 md:py-4 text-sm text-gray-500">

          Home / Residential /{" "}
          <span className="text-gray-900 font-medium">{property.title}</span>
        </div>

        {/* ================= HERO + SIDEBAR ================= */}
        <section className="max-w-[1240px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
          <AutoPopup />

          {/* ================= LEFT MAIN ================= */}
          <div className="lg:col-span-2 space-y-6 apartment-left">


            {/* HERO IMAGE */}
            {/* HERO + MOBILE GALLERY */}
            <MobileGallery
              images={galleryImages}
              title={property.title}
            />




            {/* ================= TITLE BLOCK ================= */}
            <div className="bg-white rounded-xl p-6 shadow-sm">

              <div className="flex flex-col md:flex-row md:justify-between gap-6">

                {/* ================= LEFT SIDE ================= */}
                <div className="flex flex-col gap-3">

                  {/* TITLE */}
                  <h1 className="text-[22px] font-semibold text-gray-900 leading-snug">
                    {property.title}
                  </h1>

                  {/* LOCATION */}
                  <p className="text-sm text-pink-600">
                    {property.location}
                  </p>

                  {/* INFO LIST */}
                  <div className="flex flex-col gap-2 mt-1 text-sm text-gray-600">

                    {/* BY BUILDER */}
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 text-xs">
                        🏢
                      </span>
                      <span>
                        By <span className="text-pink-600">Adani Shantigram</span>
                      </span>
                    </div>

                    {/* SIZE */}
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 text-xs">
                        📐
                      </span>
                      <span>1139 - 1458 SQ. FT.</span>
                    </div>

                    {/* RERA */}
                    <div className="flex items-center gap-2">

                      <span className="flex items-center gap-1 rounded-full bg-[#f3f3f3] px-2 py-1 text-[10px] font-medium text-gray-600">
                        RERA
                        <Image
                          src="/images/newlaunchproject/rera.png"
                          alt="RERA"
                          width={12}
                          height={12}
                        />
                      </span>


                    </div>

                    {/* LAST UPDATED */}
                    <div className="flex items-center gap-2 text-gray-400">
                      <span className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 text-xs">
                        ⏱
                      </span>
                      <span>Last Updated Date 02 April, 2025</span>
                    </div>
                  </div>
                </div>


                {/* ================= RIGHT SIDE ================= */}
                <div className="flex flex-col items-start lg:items-end justify-between gap-3">

                  {/* BHK */}
                  <p className="text-sm text-gray-500">
                    2,2.5,3 BHK
                  </p>

                  {/* PRICE */}
                  <p className="text-[18px] font-semibold text-gray-900">
                    ₹ 81.08 Lakh - 1.05 Cr*
                  </p>

                  {/* BUTTON */}
                  <button id="tabstart"
                    className="
          inline-flex items-center gap-2
          px-4 py-2
          bg-[#F5A300]
          hover:bg-[#e49a00]
          text-white
          rounded-md
          text-sm
          font-medium
          transition
        "
                  >
                    ⬇ Download Brochure
                  </button>
                </div>

              </div>
            </div>

            {/* QUICK FACTS — MOBILE & TABLET */}
            <div className="block lg:hidden bg-white rounded-xl p-5 shadow-sm">
              <h3 className="font-semibold mb-3 border-b pb-2">Quick Facts</h3>
              <div className="text-sm space-y-2 text-gray-600">
                <p>Developer :</p>
                <p>Type :</p>
                <p>Elevation / Tower :</p>
                <p>Rera No :</p>
                <p>Project Handover :</p>
              </div>
            </div>
            <div id="strt" className="py-2">

            </div>
            {/* ================= OVERVIEW ================= */}
            <section id="overview" className="max-w-[1240px] mx-auto px-4 mt-12">
              <div className="bg-white  rounded-xl shadow-sm p-8 text-center">
                {/* TITLE */}
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                  Adani Shantigram The Meadows: World Class Luxury Apartments
                  <span className="block text-base font-normal mt-1">
                    in the Heart of Gujarat!
                  </span>
                </h2>

                {/* DESCRIPTION */}
                <p className="text-sm md:text-base text-gray-600 max-w-[900px] mx-auto leading-relaxed">
                  Adani Group has launched a magnificent new offering in Ahmedabad,
                  called Adani Shantigram The Meadows. The complex boasts of luxury
                  filled apartments, which are desired by all……
                  <span className="text-pink-600 cursor-pointer ml-1">
                    Read More
                  </span>
                </p>

                {/* CTA BUTTON */}
                <div className="mt-6">
                  <button className="px-6 py-2 bg-[#F5A300] text-white rounded-md text-sm font-medium hover:bg-[#e39a00] transition">
                    Inquire Now !
                  </button>
                </div>
              </div>
            </section>

            <FloorPlanSection floorPlans={floorPlans} />

            {/* ================= PAYMENT PLAN ================= */}
            <section id="payment-plan" className="max-w-[1240px] mx-auto px-4 mt-16">
              <h2 className="text-xl font-semibold mb-6">Payment Plan</h2>

              <div className="bg-[#FBF6F1] rounded-2xl px-6 py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-8 md:gap-0">
                  {/* INSTALLMENT 1 */}
                  <div className="md:border-r last:border-r-0">
                    <p className="text-lg font-medium mb-4">Installment 1</p>
                    <p className="text-2xl font-semibold mb-2">10%</p>
                    <p className="text-sm text-gray-600">Down Payment</p>
                  </div>

                  {/* INSTALLMENT 2 */}
                  <div className="md:border-r last:border-r-0">
                    <p className="text-lg font-medium mb-4">Installment 2</p>
                    <p className="text-2xl font-semibold mb-2">80%</p>
                    <p className="text-sm text-gray-600">During Construction</p>
                  </div>

                  {/* INSTALLMENT 3 */}
                  <div>
                    <p className="text-lg font-medium mb-4">Installment 3</p>
                    <p className="text-2xl font-semibold mb-2">10%</p>
                    <p className="text-sm text-gray-600">Handover</p>
                  </div>
                </div>
              </div>
            </section>

            {/* ================= AMENITIES ================= */}
            <section id="amenities" className="max-w-[1240px] mx-auto px-4 mt-12">
              <h2 className="text-xl font-semibold mb-6">Amenities</h2>

              {/* ================= MOBILE + TABLET (2 ROWS + HORIZONTAL SWIPE) ================= */}
              <div className="lg:hidden overflow-x-auto scrollbar-hide">
                <div
                  className="
        grid
        grid-rows-2
        grid-flow-col
        auto-cols-max
        gap-4
      "
                >
                  {amenities.map((a, i) => (
                    <div
                      key={i}
                      className="
            w-[160px] h-[140px]
            bg-white
            border border-gray-300
            rounded-[4px]
            overflow-hidden
            flex flex-col
            flex-shrink-0
          "
                    >
                      {/* IMAGE AREA */}
                      <div className="h-[90px] w-full bg-gray-50 flex items-center justify-center">
                        <Image
                          src={a}
                          alt="Amenity"
                          width={160}
                          height={90}
                          className="object-contain w-[90%] h-[90%]"
                        />
                      </div>

                      {/* TEXT AREA */}
                      <div className="flex-1 flex items-center justify-center px-2 text-center">
                        <p className="text-xs font-medium text-gray-700 leading-tight">
                          Multicuisine Restaurant
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ================= DESKTOP (NORMAL GRID) ================= */}
              <div className="hidden lg:grid grid-cols-4 gap-6">
                {amenities.map((a, i) => (
                  <div
                    key={i}
                    className="
          w-[172px] h-[149px]
          bg-white
          border border-gray-300
          rounded-[4px]
          overflow-hidden
          flex flex-col
          hover:-translate-y-1
          hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)]
          hover:border-gray-400
        "
                  >
                    {/* IMAGE AREA */}
                    <div className="h-[100px] w-full bg-gray-50 flex items-center justify-center">
                      <Image
                        src={a}
                        alt="Amenity"
                        width={172}
                        height={100}
                        className="object-contain w-[95%] h-[95%]"
                      />
                    </div>

                    {/* TEXT AREA */}
                    <div className="flex-1 flex items-center justify-center px-2 text-center">
                      <p className="text-xs font-medium text-gray-700 leading-tight">
                        Multicuisine Restaurant
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>


            {/* ================= LOCATION ================= */}
            <section id="location" className="max-w-[1240px] mx-auto px-4 mt-16">
              <h2 className="text-xl font-semibold mb-8">Location</h2>

              {/* WRAPPER */}
              <div className="flex flex-col md:flex-row items-start gap-6 lg:gap-10">

                {/* LEFT : MAP CARD */}
                <div
                  className="
                  w-full md:w-[35%]
    max-w-none
    h-[288px]
    bg-white
    border border-gray-300/70
    rounded-2xl
    overflow-hidden
    flex-shrink-0
                "
                >
                  <iframe
                    src="https://www.google.com/maps?q=Adani%20Shantigram%20Ahmedabad&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full border-0"
                  />
                </div>

                {/* RIGHT : DISTANCE LIST CARD */}
                <div
                  className="
                  w-full max-w-[490px] h-[288px]
                  bg-white
                  border border-gray-300/70
                  rounded-2xl
                  p-5
                  overflow-y-auto
                  space-y-3
                "
                >
                  {[
                    "SG Highway – 2 km",
                    "Metro Station – 1.5 km",
                    "School – 1 km",
                    "Hospital – 2.2 km",
                    "Mall – 3 km",
                    "Airport – 18 km",
                    "Railway Station – 9 km",
                    "Bus Stand – 1.2 km",
                    "IT Park – 4 km",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="
                      bg-gray-100
                      rounded-full
                      px-4 py-2
                      text-sm
                      text-gray-700
                      text-center
                      whitespace-nowrap
                    "
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ================= EMI CALCULATOR ================= */}
            <section id="emi" className="max-w-[1240px] mx-auto px-4 mt-14">
              <h2 className="text-xl font-semibold mb-6">EMI Calculator</h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-[#F6FAFF] p-6 rounded-xl">
                {/* RIGHT : PIE CHART (STATIC UI VERSION) */}
                <div className="flex flex-col items-center">
                  <h3 className="text-lg font-semibold mb-4 text-center">
                    Break-up of Total Payment
                  </h3>

                  {/* PIE IMAGE */}
                  <Image
                    src="/images/emi-chart.png"
                    alt="EMI Breakup Chart"
                    width={360}
                    height={260}
                    className="object-contain"
                  />

                  {/* LEGEND */}
                  <div className="flex gap-8 mt-6 text-sm">
                    {/* TOTAL INTEREST */}
                    <span className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-[#9C6A1E]"></span>
                      <span className="text-gray-700">Total interest</span>
                    </span>

                    {/* PRINCIPAL */}
                    <span className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-[#F1D2A2]"></span>
                      <span className="text-gray-700">Principal loan amount</span>
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
                    <p className="text-2xl font-bold text-[#F5A300]">₹ 22,868.48</p>
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
            <section id="faq" className="max-w-[1240px] mx-auto px-4 mt-16">
              {/* HEADER */}
              <div className="bg-[#F4F6F6] rounded-xl p-8">
                <h2 className="text-lg font-semibold mb-6">
                  Frequently Asked question
                  <span className="block w-10 h-[2px] bg-pink-600 mt-2"></span>
                </h2>

                {/* FAQ LIST */}
                <div className="space-y-4">
                  {[
                    {
                      q: "Where is Prestige City Hyderabad located?",
                      a: "Prestige City Hyderabad is located in a prime residential area with excellent connectivity.",
                    },
                    {
                      q: "What is the floor plan of Prestige City Hyderabad?",
                      a: "The project offers well-designed 2, 3 and 4 BHK floor plans.",
                    },
                    {
                      q: "What is the price range of the apartments in Prestige City Hyderabad?",
                      a: "Prices vary depending on configuration. Please contact our sales team for details.",
                    },
                  ].map((item, i) => (
                    <details key={i} className="group bg-white border rounded-lg px-5 py-4">
                      {/* QUESTION */}
                      <summary className="flex justify-between items-center cursor-pointer list-none">
                        <span className="text-sm font-medium text-gray-800">
                          {item.q}
                        </span>

                        {/* ARROW */}
                        <span className="transition-transform duration-300 group-open:rotate-180">
                          ▼
                        </span>
                      </summary>

                      {/* ANSWER */}
                      <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                        {item.a}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            </section>

            {/* ================= ABOUT DEVELOPER ================= */}
            <section id="developer" className="max-w-[1240px] mx-auto px-4 mt-14">
              <h2 className="text-xl font-semibold mb-6 pb-2">About Developer</h2>

              <div className="bg-white rounded-xl p-6 shadow-sm">
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
                <p  className="text-sm text-gray-600 mt-6 leading-relaxed">
                  The Prestige Group is a leading real estate developer of South India,
                  established in 1986 and headquartered in Bangalore. With a strong presence
                  across residential, commercial, retail and hospitality segments, the
                  group is known for innovation, quality construction and timely delivery.
                  <span className="text-blue-600 cursor-pointer"> Read More</span>
                </p>
              </div>
            </section>

            {/* ================= SIMILAR PROJECTS ================= */}
            <section id="project" className="max-w-[1240px] mx-auto px-4 mt-16 mb-10">
              {/* HEADER */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Similar Projects</h2>
              </div>

              {/* HORIZONTAL SCROLL */}
              <div className="flex gap-4 md:gap-10 lg:gap-10 overflow-x-auto scroll-smooth pb-6">

                {apartments
                  .filter((p) => p.slug !== property.slug)
                  .map((p) => (
                    <div
                      key={p.slug}
                      className="
                     min-w-[220px] max-w-[220px]
                     sm:min-w-[240px] sm:max-w-[240px]
                     md:min-w-[260px] md:max-w-[260px]
                     flex-shrink-0
                   "
                    >

                      <Link href={`/residential/${p.slug}`}>
                        <div
                          className="
                          group flex h-full w-full
                          flex-col overflow-hidden rounded-xl
                          bg-white shadow-sm
                          hover:shadow-md transition-all duration-300
                          hover:scale-[1.02] hover:-translate-y-1 hover:shadow-lg
                          cursor-pointer
                        "
                        >

                          {/* IMAGE */}
                          <div className="relative h-40 w-full">
                            <Image
                              src={p.img}
                              alt={p.title}
                              fill
                              className="object-cover"
                            />
                          </div>

                          {/* CONTENT */}
                          <div className="flex flex-1 flex-col px-4 py-3">
                            {/* TITLE + RERA */}
                            <div className="flex items-center justify-between gap-2">
                              <h3 className="text-sm font-semibold text-gray-900 line-clamp-1">
                                {p.title}
                              </h3>

                              <span className="flex items-center gap-1 rounded-full bg-[#f3f3f3] px-2 py-1 text-[10px] font-medium text-gray-600">
                                RERA
                                <Image
                                  src="/images/newlaunchproject/rera.png"
                                  alt="RERA"
                                  width={12}
                                  height={12}
                                />
                              </span>
                            </div>

                            {/* TEXT BLOCK (IMAGE JAISE) */}
                            <p className="mt-1 text-xs text-gray-500">
                              By{" "}
                              <span className="font-medium text-gray-700">
                                {p.builder}
                              </span>
                            </p>

                            <p className="text-xs text-gray-500">{p.location}</p>

                            <p className="text-xs text-gray-500">{p.bhk}</p>

                            {/* DIVIDER */}
                            <div className="my-3 h-px w-full bg-gray-200" />

                            {/* PRICE + CONTACT */}
                            <div className="flex items-center justify-between">
                              <p className="text-sm font-semibold text-gray-900">
                                {p.price}
                              </p>

                              <span
                                className="
              rounded-full bg-[#F5F5F5] px-4 py-1.5 text-xs font-medium text-[#F5A300]
              transition-all duration-300
              group-hover:bg-amber-500 group-hover:text-white
            "
                              >
                                Contact
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
              </div>
            </section>
            {/* ================= DISCLAIMER ================= */}
            <section className="w-full bg-[#FFF7E6] border-t border-[#F5A300]/30 mt-10">
              <div className="max-w-[1240px] mx-auto px-4 py-8">

                {/* TITLE */}
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Disclaimer
                  <span className="block w-10 h-[2px] bg-[#F5A300] mt-2"></span>
                </h3>

                {/* CONTENT */}
                <p className="text-sm text-gray-600 leading-relaxed max-w-[1000px]">
                  This website is only for the purpose of providing information regarding
                  real estate projects in different regions. By accessing this website,
                  the viewer confirms that the information including brochures and
                  marketing collaterals on this website is solely for informational
                  purposes and the viewer has not relied on this information for making
                  any booking/purchase in any project.
                  <Link
                    href="/faqs"
                    className="ml-1 text-[#F5A300] font-medium hover:underline"
                  >
                    Read More
                  </Link>
                </p>

              </div>
            </section>

          </div>

          {/* ================= RIGHT SIDEBAR (MOBILE VIEW) ================= */}
          <div className="block lg:hidden mt-12 space-y-4">


            {/* QUICK FACTS — DESKTOP ONLY */}
            <div className="hidden lg:block bg-white rounded-xl p-5 shadow-sm">
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
            <div className="bg-white rounded-xl p-5 text-center shadow-sm">
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

              <p className="mt-4 text-sm text-gray-500">Connect us via</p>

              <div className="flex justify-center mt-2">
                <a
                  href="https://wa.me/918824966669"
                  target="_blank"
                  className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center"
                >
                  <FaWhatsapp className="text-xl" />
                </a>
              </div>
            </div>

            {/* SHARE */}
            <div className="bg-white rounded-xl p-5 shadow-sm text-center">
              <p className="font-medium mb-4">Share</p>

              <div className="flex justify-center gap-3">
                <FaInstagram className="w-9 h-9 p-2 bg-pink-500 text-white rounded" />
                <FaLinkedinIn className="w-9 h-9 p-2 bg-blue-700 text-white rounded" />
                <FaPinterestP className="w-9 h-9 p-2 bg-red-600 text-white rounded" />
                <FaFacebookF className="w-9 h-9 p-2 bg-blue-600 text-white rounded" />
                <FaTwitter className="w-9 h-9 p-2 bg-sky-500 text-white rounded" />
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDEBAR ================= */}
          <div className="w-[340px] hidden lg:block space-y-4">
            {/*  NOT STICKY — IMAGE + VIDEO PREVIEW */}
            <div className="bg-white rounded-xl overflow-hidden">
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
                  height={200}
                  className="w-full h-[185px] object-cover"
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow cursor-pointer text-xl">
                    ▶
                  </div>
                </div>
              </div>
            </div>


            {/* QUICK FACTS */}
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <h3 className="font-semibold mb-3 border-b pb-2">Quick Facts</h3>
              <div className="text-sm space-y-2 text-gray-600">
                <p>Developer :</p>
                <p>Type :</p>
                <p>Elevation / Tower :</p>
                <p>Rera No :</p>
                <p>Project Handover :</p>
              </div>
            </div>

            {/* ✅ STICKY PART STARTS HERE */}
            <aside className="sticky top-[135px] space-y-4">
              {/* BRAND + CTA */}
              <div className="bg-white rounded-xl p-5 text-center shadow-sm">
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

                <p className="mt-4 text-sm text-gray-500">Connect us via</p>

                <div className="flex justify-center mt-2">
                  <a
                    href="https://wa.me/918824966669"
                    target="_blank"
                    className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition"
                  >
                    <FaWhatsapp className="text-xl" />
                  </a>
                </div>
              </div>

              {/* SHARE */}
              <div className="bg-white rounded-xl p-5 py-5 shadow-sm text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <p className="font-medium">Share</p>
                  <FaLink className="text-gray-400 text-sm cursor-pointer" />
                </div>

                <div className="flex justify-center gap-3">
                  <FaInstagram className="w-9 h-9 p-2 bg-pink-500 text-white rounded cursor-pointer" />
                  <FaLinkedinIn className="w-9 h-9 p-2 bg-blue-700 text-white rounded cursor-pointer" />
                  <FaPinterestP className="w-9 h-9 p-2 bg-red-600 text-white rounded cursor-pointer" />
                  <FaFacebookF className="w-9 h-9 p-2 bg-blue-600 text-white rounded cursor-pointer" />
                  <FaTwitter className="w-9 h-9 p-2 bg-sky-500 text-white rounded cursor-pointer" />
                </div>
              </div>
            </aside>
          </div>
        </section>


        <div className="mt-10">

          <Footer />
        </div>
      </ApartmentClient>
    </>
  );
}
