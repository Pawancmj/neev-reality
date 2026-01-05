"use client";

import { useState, useEffect } from "react";
import Navbar from "@/app/reusable_components/navbar/navbar";
import ScrollTabs from "./ScrollTabs";

type ApartmentClientProps = {
  children: React.ReactNode;
};

export default function ApartmentClient({ children }: ApartmentClientProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTabs, setShowTabs] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowTabs(window.scrollY > 120);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/*  FIXED SCROLL TABS (sticky replacement) */}
      {!menuOpen && showTabs && (
        <div className="fixed top-[102px] left-0 right-0 z-40">
          <div className="max-w-[1240px] mx-auto px-4">
            <div className="lg:w-[calc(100%-380px-2rem)] bg-white shadow-md">
              <ScrollTabs menuOpen={menuOpen} />
            </div>
          </div>
        </div>
      )}

      {/* PAGE CONTENT */}
      <div className="pt-[70px]">{children}</div>
    </>
  );
}
