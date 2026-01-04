"use client";

import { useState } from "react";
import Navbar from "@/app/reusable_components/navbar/navbar";
import ScrollTabs from "./ScrollTabs";

type ApartmentClientProps = {
  children: React.ReactNode;
};

export default function ApartmentClient({ children }: ApartmentClientProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* SCROLL TABS */}
      <ScrollTabs menuOpen={menuOpen} />

      {/* PAGE CONTENT */}
      {children}
    </>
  );
}
