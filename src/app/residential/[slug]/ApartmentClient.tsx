"use client";

import Navbar from "@/app/reusable_components/navbar/navbar";

type ApartmentClientProps = {
  children: React.ReactNode;
};

export default function ApartmentClient({ children }: ApartmentClientProps) {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* PAGE CONTENT */}
      <div className="pt-[1px]">
        {children}
      </div>
    </>
  );
}

