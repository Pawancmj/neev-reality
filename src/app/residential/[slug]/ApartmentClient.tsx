"use client";

import { useEffect, useState } from "react";
import Navbar from "@/app/reusable_components/navbar/navbar";
import ScrollTabs from "./ScrollTabs";

type ApartmentClientProps = {
  children: React.ReactNode;
};

export default function ApartmentClient({ children }: ApartmentClientProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTabs, setShowTabs] = useState(false);

  useEffect(() => {
    const overview = document.getElementById("strt"); //visible
    const footer = document.getElementById("project"); //Hide

    if (!overview || !footer) return;

    const startPoint = overview.offsetTop;
    const endPoint = footer.offsetTop;

    const onScroll = () => {
      const scrollY = window.scrollY + 120; // navbar height adjust

      if (scrollY > startPoint && scrollY < endPoint) {
        setShowTabs(true);
      } else {
        setShowTabs(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll(); // initial check

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <Navbar />

      {showTabs && !menuOpen && (
        <div className="fixed top-[102px] left-0 right-0 z-40">
          <div className="max-w-[1240px] mx-auto px-4">
            <div className="lg:w-[calc(100%-325px-2rem)] xl:w-[calc(100%-385px-2rem)] bg-white shadow-md">
              <ScrollTabs menuOpen={menuOpen} />
            </div>
          </div>
        </div>
      )}

      <div className="pt-[1px] md:pt-[70px]">{children}</div>
    </>
  );
}
