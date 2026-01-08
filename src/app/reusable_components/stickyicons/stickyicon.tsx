"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FiMail } from "react-icons/fi";

export default function StickyIcons() {
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);
  const pathname = usePathname();

  const isPropertyPage = pathname.startsWith("/residential/");

  return (
    <>
      {/* ================= STICKY BAR ================= */}
      <div className="fixed bottom-0 left-0 z-50 w-full">

        {/* ========= MOBILE VERSION ========= */}
        <div className="sm:hidden w-full bg-white py-2 shadow-lg">
          <div className="flex justify-center gap-2">

            {/* WhatsApp — ALWAYS */}
            <button className="flex items-center border border-green-500 text-green-600 px-5 py-3 rounded-2xl font-medium gap-1">
              <IoLogoWhatsapp size={28} />
              Whatsapp
            </button>

            {/* Enquire — HIDE on property page */}
            {!isPropertyPage && (
              <button
                onClick={() => setShowEnquiryPopup(true)}
                className="flex items-center bg-[#DBA40D] text-white px-5 py-3 rounded-2xl font-medium gap-1 cursor-pointer"
              >
                <FiMail size={28} />
                Enquire Now
              </button>
            )}
          </div>
        </div>

        {/* ========= DESKTOP / TABLET VERSION ========= */}
        <div className="hidden sm:flex mx-auto max-w-5xl items-center justify-between px-4 py-2 h-20 md:h-24">

          {/* Phone — ALWAYS */}
          <div className="group absolute left-4 md:left-16">
            <div className="border-2 border-[#DBA40D]/50 bg-white/80 rounded-2xl p-3 shadow-lg hover:scale-110 hover:border-[#DBA40D]">
              <FaPhoneAlt />
            </div>
          </div>

          {/* Enquire Button — HIDE on property page */}
          {!isPropertyPage && (
            <div className="absolute right-1 -translate-x-1/2 bottom-6">
              <button
                onClick={() => setShowEnquiryPopup(true)}
                className="bg-[#DBA40D] text-white px-6 py-3 rounded-2xl font-semibold shadow-lg inline-flex items-center gap-2 cursor-pointer"
              >
                <FiMail />
                Enquire Now!
              </button>
            </div>
          )}

          {/* WhatsApp — ALWAYS */}
          <div className="group absolute right-4 md:right-6">
            <div className="bg-green-600 text-white rounded-2xl p-3 shadow-xl">
              <IoLogoWhatsapp size={22} />
            </div>
          </div>
        </div>
      </div>

      {/* ================= ENQUIRY POPUP ================= */}
      {!isPropertyPage && showEnquiryPopup && (
        <div className="fixed inset-0 z-[999] bg-black/60 flex items-center justify-center px-4">
          <div className="bg-white w-full max-w-md rounded-2xl p-6 relative">

            <button
              onClick={() => setShowEnquiryPopup(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
            >
              ✕
            </button>

            <h3 className="text-xl font-semibold mb-2">Enquire Now</h3>
            <p className="text-sm text-gray-600 mb-4">
              Fill the form and our expert will contact you shortly.
            </p>

            <div className="space-y-3">
              <input type="text" placeholder="Full Name" className="w-full px-4 py-2 border rounded-md" />
              <input type="tel" placeholder="Phone Number" className="w-full px-4 py-2 border rounded-md" />
              <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-md" />
            </div>

            <button className="w-full mt-5 bg-[#DBA40D] text-white py-2.5 rounded-lg font-semibold">
              Submit Enquiry
            </button>
          </div>
        </div>
      )}
    </>
  );
}
