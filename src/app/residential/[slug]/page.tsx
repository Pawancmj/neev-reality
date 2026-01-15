
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
import TitleBlockWithBrochure from "./TitleBlockWithBrochure";
import OverviewSection from "./OverviewSection";
import ScrollTabs from "./ScrollTabs";
import FloorPlanSection from "./FloorPlanSection";
import AutoPopup from "./AutoPopup";
import MobileGallery from "./MobileGallery";
import EmiCalculatorSection from "./EmiCalculatorSection";
import ApartmentClient from "./ApartmentClient";
import BrandCTA from "./BrandCTA";
import PropertyCard from "@/components/apartment-property/PropertyCard";
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
        <div className="max-w-[1240px] mx-auto px-4 text-sm text-gray-500">

          Home / Residential /{" "}
          <span className="text-gray-900 font-medium">{property.title}</span>
        </div>

        {/* ================= HERO + SIDEBAR ================= */}
        <section className="max-w-[1240px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-2">
          <AutoPopup propertyTitle={property.title} />

          {/* ================= LEFT MAIN ================= */}
          <div className="lg:col-span-2 space-y-6 apartment-left">


            {/* HERO IMAGE */}
            {/* HERO + MOBILE GALLERY */}
            <MobileGallery
              images={galleryImages}
              title={property.title}
            />

            <TitleBlockWithBrochure property={property} />



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
            <section className="relative">
              <div className="sticky top-[96px] z-30 bg-white">
                <ScrollTabs />
              </div>

              <OverviewSection propertyTitle={property.title} />
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
                  w-full md:w-[45%]
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
              <EmiCalculatorSection />


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
                  </p>
                </div>
              </section>

            </section>

            {/* ================= SIMILAR PROJECTS ================= */}
            <section id="project" className="max-w-[1240px] mx-auto px-4 mt-16 mb-10">
              {/* HEADER */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Similar Projects</h2>
              </div>

              {/* HORIZONTAL SCROLL */}
              <div className="flex gap-4 md:gap-10 overflow-x-auto scrollbar-hide scroll-smooth pb-6">

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
                      <PropertyCard
                        property={{
                          title: p.title,
                          builder: p.builder,
                          location: p.location,
                          bhk: p.bhk,
                          size: p.size,        // same as before
                          price: p.price,
                          img: p.img,
                          slug: p.slug,
                        }}
                      />
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
                    href="/disclaimer"
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


            <BrandCTA propertyTitle={property.title} />

            {/* SHARE */}
            <div className="bg-white rounded-xl p-5 shadow-sm text-center">
              <p className="font-medium mb-4">Share</p>

              <div className="flex justify-center gap-3">
                <FaInstagram className="w-9 h-9 p-2 bg-[#DBA40D] text-white rounded" />
                <FaLinkedinIn className="w-9 h-9 p-2 bg-[#DBA40D] text-white rounded" />
                <FaPinterestP className="w-9 h-9 p-2 bg-[#DBA40D] text-white rounded" />
                <FaFacebookF className="w-9 h-9 p-2 bg-[#DBA40D] text-white rounded" />
                <FaTwitter className="w-9 h-9 p-2 bg-[#DBA40D] text-white rounded" />
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDEBAR ================= */}
          <div className="w-[340px] hidden lg:block space-y-4">
            {/*  NOT STICKY — IMAGE + VIDEO PREVIEW */}
            <div className="bg-white rounded-xl overflow-hidden">
              {/* TOP THUMBNAILS */}
              <div className="grid grid-cols-2 gap-1 mb-1">
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
            <aside className="sticky top-[135px] space-y-4 z-20">
              <BrandCTA propertyTitle={property.title} />

              {/* SHARE */}
              <div className="bg-white rounded-xl p-5 py-5 shadow-sm text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <p className="font-medium">Share</p>
                  <FaLink className="text-gray-400 text-sm cursor-pointer" />
                </div>

                <div className="flex justify-center gap-3">
                  <FaInstagram className="w-9 h-9 p-2 bg-[#DBA40D] text-white rounded cursor-pointer" />
                  <FaLinkedinIn className="w-9 h-9 p-2 bg-[#DBA40D] text-white rounded cursor-pointer" />
                  <FaPinterestP className="w-9 h-9 p-2 bg-[#DBA40D] text-white rounded cursor-pointer" />
                  <FaFacebookF className="w-9 h-9 p-2 bg-[#DBA40D] text-white rounded cursor-pointer" />
                  <FaTwitter className="w-9 h-9 p-2 bg-[#DBA40D] text-white rounded cursor-pointer" />
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