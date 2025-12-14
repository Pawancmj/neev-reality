import React from "react";
import Navbar from "../reusable_components/navbar/navbar";
import Hero from "@/components/services/Hero";
import ServicesMain from "@/components/services/ServicesMain";
import ValueAdded from "@/components/services/ValueAdded";
import BigServices from "@/components/services/BigServices";
import Footer from "../reusable_components/footer/footer";

export const metadata = {
  title: "Services — Neev Realty",
};

export default function Page() {
  return (
    <main className="bg-white text-gray-900" >

      {/* FULL WIDTH NAVBAR */}
      <Navbar />

      {/* FULL WIDTH OUTER CONTAINER JUST LIKE ABOUT PAGE */}
      <div className="mx-auto" style={{ width: 1520 }}>
        
        {/* INNER CONTENT WIDTH (same as testimonial section = 1240px) */}
        <div className="mx-auto" style={{ width: 1520 }}>
          <Hero />
          <ServicesMain />
          <ValueAdded />
          <BigServices />
        </div>

      </div>

      {/* FULL WIDTH FOOTER */}
      <Footer />

    </main>
  );
}






