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
    <footer className="bg-[#1B121E] text-gray-200 w-full">
      {/* ================= TOP LINKS ================= */}
      <div className="bg-[#29192B] border-b border-[#2c1b32]">
        <div className="max-w-7xl mx-auto px-6 py-10 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 text-left">
          
          {[
            {
              title: "Property in Top Country",
              links: [
                "Property in India",
                "Residential Property in India",
                "Commercial Property in India",
              ],
            },
            {
              title: "Property in Top State",
              links: [
                "Property in Haryana",
                "Property in Maharashtra",
                "Property in Uttar Pradesh",
                "Property in Tamil Nadu",
                "Property in West Bengal",
              ],
            },
            {
              title: "Property in Top City",
              links: [
                "Property in Gurgaon",
                "Property in Pune",
                "Property in Noida",
                "Property in Chennai",
                "Property in Bangalore",
              ],
            },
            {
              title: "Property in Popular Localities",
              links: [
                "Property in NH 8 Gurgaon",
                "Property in Hinjewadi Pune",
                "Property in NH24 Ghaziabad",
                "Property in Porur Chennai",
                "Property in North Bangalore",
              ],
            },
            {
              title: "Popular Developer",
              links: [
                "Property of Godrej",
                "ATS Group",
                "Lodha",
                "Mahagun",
                "Gulshan Homz",
              ],
            },
          ].map((section, i) => (
            <div key={i}>
              <h4 className="font-semibold mb-4 text-[16px]">
                {section.title}
              </h4>
              <ul className="space-y-3 text-white text-[15px]">
                {section.links.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ================= MIDDLE ROW ================= */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid gap-10 grid-cols-1 md:grid-cols-3 text-left">
        
        {/* About Us */}
        <div>
          <h4 className="font-semibold mb-4 text-[20px]">About Us</h4>
          <p className="text-gray-400 text-[15px] max-w-md">
            Neev Reality is a trusted name in real estate consulting that
            believes every property journey should be a smooth and rewarding
            transition from vision to reality. Our team operates with core
            principles of customer trust, integrity and excellence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4 text-[20px]">Quick Links</h4>
          <div className="grid grid-cols-2 gap-y-2 text-gray-400 text-[15px] max-w-md">
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
            <span>Careers</span>
            <span>Contact</span>
          </div>
        </div>

        {/* Connect with us */}
        <div>
          <h4 className="font-semibold mb-4 text-[20px]">Connect with us</h4>
          <p className="text-gray-400 text-[15px]">support@neevreality.com</p>
          <p className="mt-2 text-gray-400 text-[15px]">info@neevreality.com</p>

          <h4 className="mt-6 text-sm font-semibold">Follow us on</h4>
          <div className="mt-3 flex gap-3">
            {[FaFacebookF, FaLinkedinIn, FaInstagram, FaXTwitter, FaYoutube].map(
              (Icon, i) => (
                <a
                  key={i}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition"
                >
                  <Icon />
                </a>
              )
            )}
          </div>
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="border-t border-[#2c1b32]">
        <div className="max-w-7xl mx-auto px-4 py-4 text-left md:text-center">
          <p className="text-[11px] text-gray-500">
            © Copyright 360 Realtors.com. 2025 Comprehensive Property Portal
            in India. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
