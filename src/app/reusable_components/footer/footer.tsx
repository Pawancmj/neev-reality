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
    <footer className="bg-[#1B121E] text-gray-300 w-full">

         {/* ================= TOP LINKS changed ================= */}
      <div className="relative px-6 sm:px-30 py-10 mx-auto bg-[#29192B] border-b border-[#2c1b32]">
        <div
  className="
    flex md:grid
    md:grid-cols-4 xl:grid-cols-5
    gap-6
    overflow-x-auto md:overflow-visible
    scrollbar-hide
    snap-x snap-mandatory
  ">


          {/* Div 1 */}
          <div
            className={`
              min-w-[85%] sm:min-w-[70%] md:min-w-0 snap-start
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
          <div className="ml-0 md:ml-8 min-w-[85%] sm:min-w-[70%] md:min-w-0 snap-start">
            <h4 className="font-semibold mb-4 text-[16px]">Properties by type</h4>
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
          <div className="ml-0 md:ml-8 w-full max-w-[284px] min-w-[85%] sm:min-w-[70%] md:min-w-0 snap-start">
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
          <div className="ml-0 md:ml-8 w-full max-w-[297px] min-w-[85%] sm:min-w-[70%] md:min-w-0 snap-start">
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

          <div className="ml-0 md:ml-8 w-full max-w-[310px] min-w-[85%] sm:min-w-[70%] md:min-w-0 snap-start">
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

         

          {/* Div 5 
          <div
            className={`
              min-w-[85%] sm:min-w-[70%] md:min-w-0 snap-start
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

        {
        <div className="hidden md:block absolute top-1 sm:top-45 right-5 z-20 pt-5">

          <button
            onClick={toggleDivs}
            className="w-10 h-10 rounded-full flex items-center justify-center
              text-[#979797] text-3xl shadow-2xl border-4 border-white
              bg-white hover:scale-110 active:scale-85 transition-all duration-300"
          >
            {showLastDiv ? "<" : ">"}
          </button>*/}
        </div>
      </div>

      {/* ================= MIDDLE ================= */}
      <div className="max-w-[1212px] mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-left">

        {/* ABOUT US */}
        <div>
          <h4 className="text-white font-semibold text-[18px] mb-4">
            About Us
          </h4>

          <p className="text-gray-400 text-[15px] leading-[26px] max-w-[420px]">
            Neev Realty is a trusted name in real estate consulting that believes
            every property journey should be a smooth and rewarding transition
            from Vision to Reality. Our team of real estate experts operates with
            core principles of customer trust, integrity, and excellence. Neev
            Realty includes some of the finest professionals in the real estate
            sector who are dedicated to identifying properties perfectly aligned
            with your needs.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-white font-semibold text-[18px] mb-4">
            Quick Links
          </h4>

          <div className="grid grid-cols-2 gap-y-3 text-gray-400 text-[15px] max-w-[360px]">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <Link href="/terms" className="hover:text-white transition">Terms</Link>

            <Link href="/about" className="hover:text-white transition">About</Link>
            <Link href="/privacy" className="hover:text-white transition">Privacy</Link>

            <Link href="/services" className="hover:text-white transition">Our Services</Link>
            <Link href="/faqs" className="hover:text-white transition">FAQs</Link>

            <Link href="/residential" className="hover:text-white transition">Residential</Link>
            <Link href="/blog" className="hover:text-white transition">Blog</Link>

            <Link href="/commercial" className="hover:text-white transition">Commercial</Link>
            <Link href="/services" className="hover:text-white transition">Our Services</Link>

            <Link href="/Career" className="hover:text-white transition">Careers</Link>
            <Link href="/Contact" className="hover:text-white transition">Contact</Link>
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-white font-semibold mb-4">Connect with us</h4>
          <p className="text-sm text-gray-400">support@neevreality.com</p>
          <p className="text-sm text-gray-400 mt-2">info@neevreality.com</p>

          <h4 className="mt-6 text-white font-semibold text-sm">Follow us on</h4>
          <div className="mt-3 flex gap-2">
            {[FaFacebookF, FaLinkedinIn, FaInstagram, FaXTwitter, FaYoutube].map(
              (Icon, i) => (
                <span
                  key={i}
                  className="h-8 w-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
                >
                  <Icon />
                </span>
              )
            )}
          </div>
        </div>

      </div>

      {/* ================= BOTTOM ================= */}
      <div className="border-t border-[#2c1b32]">
        <div className="py-4 text-center text-[11px] text-gray-500">
          © Copyright NeevRealty.com 2025. Comperhensive Property Portal in India. All Rights Reserved.
        </div>
      </div>

    </footer>
  );
};

export default Footer;
