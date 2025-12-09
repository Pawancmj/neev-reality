"use client";

import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className=" text-gray-200 bg-[#1B121E] mx-auto" style={{width:1520}}>
      {/* top links */}
      <div className=" px-6 py-10 mx-auto grid gap-6 md:grid-cols-5 bg-[#29192B] border-b border-[#2c1b32]">
        <div>
          <h4 className="font-semibold mb-4 text-[16px]">
            Property in Top Country
          </h4>
          <ul className="space-y-3 text-white text-[15px]">
            <li>Property in India</li>
            <li>Residential Property in India</li>
            <li>Commercial Property in India</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-[16px]">
            Property in Top State
          </h4>
          <ul className="space-y-3 text-white text-[15px]">
            <li>Property in Haryana</li>
            <li>Property in Maharashtra</li>
            <li>Property in Uttar Pradesh</li>
            <li>Property in Tamil Nadu</li>
            <li>Property in West Bengal</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-[16px]">
            Property in Top City
          </h4>
          <ul className="space-y-3 text-white text-[15px]">
            <li>Property in Gurgaon</li>
            <li>Property in Pune</li>
            <li>Property in Noida</li>
            <li>Property in Chennai</li>
            <li>Property in Bangalore</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-[16px]">
            Property in Popular Localities
          </h4>
          <ul className="space-y-3 text-white text-[15px]">
            <li>Property in NH 8 Gurgaon</li>
            <li>Property in Hinjewadi Pune</li>
            <li>Property in NH24 Ghaziabad</li>
            <li>Property in Porur Chennai</li>
            <li>Property in North Bangalore</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-[16px]">Popular Developer</h4>
          <ul className="space-y-3 text-white text-[15px]">
            <li>Property of Godrej</li>
            <li>ATS Group</li>
            <li>Lodha</li>
            <li>Mahagun</li>
            <li>Gulshan Homz</li>
          </ul>
        </div>
      </div>

      {/* middle row */}
   {/* middle row */}
<div className="w-full px-6 py-10 mx-auto grid gap-10 md:grid-cols-3">
  {/* About Us */}
  <div>
    <h4 className="font-semibold mb-4 text-[20px]">About Us</h4>
    <p className="text-gray-400 text-[15px] max-w-xs">
      Neev Reality is a trusted name in real estate consulting that
      believes every property journey should be a smooth and rewarding
      transition from vision to reality. Our team operates with core
      principles of customer trust, integrity and excellence, helping
      you find properties perfectly aligned with your needs.
    </p>
  </div>

  {/* Quick Links */}
  <div className="mx-auto">
    <h4 className="font-semibold mb-4 text-[20px]">Quick Links</h4>
    <div
      className="grid grid-cols-2 gap-y-2 text-gray-400 text-[15px]"
      style={{ width: 420 }}
    >
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
  <div className="mx-auto">
    <h4 className="font-semibold mb-4 text-[20px]">Connect with us</h4>
    <p className="text-gray-400 text-[15px]">support@neevreality.com</p>
    <p className="mt-4 text-gray-400 text-[15px]">info@neevreality.com</p>

    <h4 className="mt-6 text-sm font-semibold">Follow us on</h4>
    <div className="mt-3 flex items-center gap-2 text-sm">
       <a className="flex h-7 w-7 items-center justify-center rounded-full bg-white/5 hover:bg-white/10">
              <FaFacebookF />
            </a>
            <a className="flex h-7 w-7 items-center justify-center rounded-full bg-white/5 hover:bg-white/10">
              <FaLinkedinIn />
            </a>
            <a className="flex h-7 w-7 items-center justify-center rounded-full bg-white/5 hover:bg-white/10">
              <FaInstagram />
            </a>
            <a className="flex h-7 w-7 items-center justify-center rounded-full bg-white/5 hover:bg-white/10">
              <FaXTwitter />
            </a>
            <a className="flex h-7 w-7 items-center justify-center rounded-full bg-white/5 hover:bg-white/10">
              <FaYoutube />
            </a>
      
    </div>
  </div>
</div>
<div
        className="border-t border-[#2c1b32] mx-auto "
        style={{ width: 780 }}
      >
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
