// components/StickyIcons.tsx
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FiMail } from "react-icons/fi";
import Link from "next/link";


export default function StickyIcons() {
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full">

      {/* ========= MOBILE VERSION ========= */}
      <div className="sm:hidden w-full bg-white py-2 shadow-lg">
        <div className="flex justify-center gap-3">

          {/* Whatsapp */}
          <button className="flex items-center gap-2 border border-green-500 text-green-600 px-4 py-2 rounded-xl font-medium">
            <IoLogoWhatsapp size={18} />
            Whatsapp
          </button>

          {/* Enquire */}
          <Link
            href="/contact"
            className="flex items-center gap-2 bg-[#DBA40D] text-white px-4 py-2 rounded-xl font-medium cursor-pointer"
          >
            <FiMail size={18} />
            Enquire Now
          </Link>

        </div>
      </div>


      {/* ========= DESKTOP / TABLET VERSION ========= */}
      <div className="hidden sm:flex mx-auto max-w-5xl items-center justify-between px-4 py-2 h-20 md:h-24">

        {/* Phone */}
        <div className="group absolute left-4 md:left-16">
          <div className="border-2 border-[#DBA40D]/50 bg-white/80 rounded-2xl p-3 shadow-lg hover:scale-110 hover:border-[#DBA40D]">
            <FaPhoneAlt />
          </div>
        </div>

        {/* Enquire Button */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-6">
          <Link
            href="/Contact"
            className="bg-[#DBA40D] text-white px-6 py-3 rounded-2xl font-semibold shadow-lg inline-flex items-center gap-2 cursor-pointer"
          >
            <FiMail />
            Enquire Now!
          </Link>
        </div>

        {/* WhatsApp */}
        <div className="group absolute right-4 md:right-6">
          <div className="bg-green-600 text-white rounded-2xl p-3 shadow-xl">
            <IoLogoWhatsapp />
          </div>
        </div>

      </div>
    </div>
  );
}

