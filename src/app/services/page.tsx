import React from "react";
import Navbar from "../reusable_components/navbar/navbar";
import Hero from "@/components/services/Hero";
import ServicesMain from "@/components/services/ServicesMain";
import BigServices from "@/components/services/BigServices";
import Footer from "../reusable_components/footer/footer";

export const metadata = {
  title: "Services — Neev Realty",
};

export default function Page() {
  return (
    <main className="bg-white text-gray-900 overflow-x-hidden">

      {/* ===== FULL WIDTH NAVBAR ===== */}
      <Navbar />

      {/* ===== PAGE CONTENT ===== */}
      <section className="w-full">
        
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">

          <Hero />

          <ServicesMain />

          <BigServices />

        </div>
      </section>

      {/* ===== FULL WIDTH FOOTER ===== */}
      <Footer />

    </main>
  );
}







