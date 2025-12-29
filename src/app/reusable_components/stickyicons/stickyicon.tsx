// components/StickyIcons.tsx
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";

export default function StickyIcons() {
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full  ">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-2 h-20">
        {/* Phone Icon - Bounce + Scale */}
        <div className="group absolute left-16">
          <div className="border-2 border-[#DBA40D]/50 bg-white/80 rounded-2xl p-3 shadow-lg transition-all duration-300 ease-out hover:scale-110 hover:shadow-2xl hover:border-[#DBA40D] hover:-translate-y-1 hover:animate-bounce group-hover:text-[#DBA40D] text-xl">
            <FaPhoneAlt />
          </div>
        </div>

        {/* Enquire Button - Lift + Glow */}
        <div className="group absolute left-300 transform -translate-x-1/2">
          <button className="bg-[#DBA40D] flex items-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-[#DBA40D]/50 hover:-translate-y-1 hover:bg-[#c8950a] active:scale-95 relative overflow-hidden">
            <span className="text-lg transition-transform group-hover:rotate-12">
              <FaPhoneAlt />
            </span>
            Enquire Now!
            <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform origin-center duration-300" />
          </button>
        </div>

        {/* WhatsApp Icon - Pulse + Rotate */}
        <div className="group absolute right-6">
          <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl p-3 shadow-xl transition-all duration-300 ease-out hover:scale-110 hover:shadow-2xl hover:shadow-green-500/50 hover:rotate-12 hover:animate-pulse text-2xl">
            <IoLogoWhatsapp />
          </div>
        </div>
      </div>
    </div>
  );
}
