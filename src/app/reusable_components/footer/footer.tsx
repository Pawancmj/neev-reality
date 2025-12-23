"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Footer: React.FC = () => {
  const [showLastDiv, setShowLastDiv] = useState(false);

  const toggleDivs = () => {
    setShowLastDiv(!showLastDiv);
  };

  return (
    <footer className="text-gray-200 bg-[#1B121E] mx-auto w-full max-w-[1520px]">
      
      {/* ================= TOP LINKS ================= */}
      <div className="relative px-4 sm:px-6 py-10 mx-auto bg-[#29192B] border-b border-[#2c1b32]">
        <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-5 gap-6">

          {/* Div 1 */}
          <div
            className={`
              ${showLastDiv ? "hidden md:hidden xl:hidden opacity-0" : "block opacity-100"}
              transition-all duration-500 ease-in-out transform
              ${showLastDiv ? "-translate-x-8 scale-90" : "translate-x-0 scale-100"}
            `}
          >
            <h4 className="font-semibold mb-4 text-[16px]">Projects by size</h4>
            <ul className="space-y-3 text-white text-[15px]">
              <li>1 BHK property in Gurgaon</li>
              <li>1.5 BHK property in Gurgaon</li>
              <li>2 BHK property in Gurgaon</li>
              <li>2.5 BHK property in Gurgaon</li>
              <li>3 BHK property in Gurgaon</li>
              <li>3.5 BHK property in Gurgaon</li>
              <li>4 BHK property in Gurgaon</li>
              <li>4.5 BHK property in Gurgaon</li>
              <li>5 BHK property in Gurgaon</li>
              <li>Above 5 BHK property in Gurgaon</li>
            </ul>
          </div>

          {/* Div 2 */}
          <div className="ml-0 md:ml-8">
            <h4 className="font-semibold mb-4 text-[16px]">Property by type</h4>
            <ul className="space-y-3 text-white text-[15px]">
              <li>Residential property in gurgaon</li>
              <li>Commercial property in gurgaon</li>
              <li>Luxury apartment in Gurgaon</li>
              <li>Builder floor in Gurgaon</li>
              <li>Retail shops in Gurgaon</li>
              <li>SCO plots in Gurgaon</li>
            </ul>
          </div>

          {/* Div 3 */}
          <div className="ml-0 md:ml-8 w-full max-w-[284px]">
            <h4 className="font-semibold mb-4 text-[16px]">
              Projects by construction status
            </h4>
            <ul className="space-y-3 text-white text-[15px]">
              <li>New launch project in Gurgaon</li>
              <li>Ready to move project in Gurgaon</li>
              <li>Under construction project in Gurgaon</li>
              <li>Pre launch project in Gurgaon</li>
            </ul>
          </div>

          {/* Div 4 */}
          <div className="ml-0 md:ml-8 w-full max-w-[297px]">
            <h4 className="font-semibold mb-4 text-[16px]">Projects by Location</h4>
            <ul className="space-y-3 text-white text-[15px]">
              <li>Projects in Dwarka Expressway</li>
              <li>Projects in Golf Course Road</li>
              <li>Projects in Golf Course Extension Road</li>
              <li>Projects in Sohna Road</li>
              <li>Projects in New Gurgaon</li>
              <li>Projects in old Gurgaon</li>
              <li>Projects in SPR</li>
              <li>Projects in NH8</li>
            </ul>
          </div>

          {/* Div 5 */}
          <div
            className={`
              ${showLastDiv ? "block md:block xl:block opacity-100" : "hidden opacity-0"}
              transition-all duration-500 ease-in-out transform
              ml-0 md:ml-14 w-full max-w-[297px]
              ${showLastDiv ? "translate-x-0 scale-100" : "translate-x-8 scale-90"}
            `}
          >
            <h4 className="font-semibold mb-4 text-[16px]">Projects by Budget</h4>
            <ul className="space-y-3 text-white text-[15px]">
              <li>Property between 1 to 2 cr in Gurgaon</li>
              <li>Property between 2 to 3 cr in Gurgaon</li>
              <li>Property between 3 to 4 cr in Gurgaon</li>
              <li>Property between 4 to 5 cr in Gurgaon</li>
              <li>Property between 5 to 6 cr in Gurgaon</li>
              <li>Property between 6 to 7 cr in Gurgaon</li>
              <li>Property between 7 to 8 cr in Gurgaon</li>
              <li>Property above 8 cr in Gurgaon</li>
            </ul>
          </div>
        </div>

        {/* Toggle Button */}
        <div className="absolute top-6 sm:top-12 right-4 z-20 pt-2">
          <button
            onClick={toggleDivs}
            className="w-20 h-20 rounded-full flex items-center justify-center
              text-[#979797] text-5xl shadow-2xl border-4 border-white
              bg-white hover:scale-110 active:scale-95 transition-all duration-300"
          >
            {showLastDiv ? "<" : ">"}
          </button>
        </div>
      </div>

      {/* ================= MIDDLE SECTION ================= */}
      <div className="w-full px-4 sm:px-6 py-10 mx-auto grid gap-10 md:grid-cols-3 max-w-[1212px]">
        <div>
          <h4 className="font-semibold mb-4 text-[20px]">About Us</h4>
          <p className="text-gray-400 text-[15px] max-w-xs">
            Neev Reality is a trusted name in real estate consulting that
            believes every property journey should be smooth and rewarding.
          </p>
        </div>

        <div className="mx-auto">
          <h4 className="font-semibold mb-4 text-[20px]">Quick Links</h4>
          <div className="grid grid-cols-2 gap-y-2 text-gray-400 text-[15px] w-full max-w-[420px]">
            <span>NRI Services</span>
            <span>Terms</span>
            <span>News</span>
            <span>Privacy</span>
            <span>Events</span>
            <span>FAQs</span>
            <span>About</span>
            <span>Sitemap</span>
            <span>Awards</span>
            <span>Our Services</span>
            <Link href="/Career">Careers</Link>
            <Link href="/Contact">Contact</Link>
          </div>
        </div>

        <div className="mx-auto">
          <h4 className="font-semibold mb-4 text-[20px]">Connect with us</h4>
          <p className="text-gray-400 text-[15px]">support@neevreality.com</p>
          <p className="mt-4 text-gray-400 text-[15px]">info@neevreality.com</p>

          <h4 className="mt-6 text-sm font-semibold">Follow us on</h4>
          <div className="mt-3 flex items-center gap-2 text-sm">
            {[FaFacebookF, FaLinkedinIn, FaInstagram, FaXTwitter, FaYoutube].map(
              (Icon, i) => (
                <a
                  key={i}
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition"
                  href="#"
                >
                  <Icon />
                </a>
              )
            )}
          </div>
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="border-t border-[#2c1b32] mx-auto w-full max-w-[780px]">
        <div className="px-4 py-4 text-center">
          <p className="text-[11px] text-gray-500">
            © Copyright 360 Realtors.com. 2025 Comprehensive Property Portal
            in India. All Right Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
