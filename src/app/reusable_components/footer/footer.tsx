"use client";

import Link from "next/link";
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
      <div className=" px-6 py-10  mx-auto grid gap-6 md:grid-cols-5 bg-[#29192B] border-b border-[#2c1b32]">
        <div>
          <h4 className="font-semibold mb-4 text-[16px]">
            Projects by size
          </h4>
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
            <li> Above 5 BHK property in Gurgaon</li>
           
          </ul>
        </div>

        <div className="ml-14">
          <h4 className="font-semibold mb-4 text-[16px]">
            Property by type
          </h4>
          <ul className="space-y-3 text-white text-[15px]">
            <li>Residential property in gurgaon</li>
            <li>Commercial property in gurgaon</li>
            <li>Luxury apartment in Gurgaon</li>
            <li>Builder floor in Gurgaon</li>
            <li>Retail shops in Gurgaon</li>
            <li>SCO plots in Gurgaon</li>
          </ul>
        </div>

        <div className="ml-14"style={{width:284}}>
          <h4 className="font-semibold mb-4 text-[16px]">
            Projects by construction status
          </h4>
          <ul className="space-y-3 text-white text-[15px]">
            <li>New launch project in Gurgaon</li>
            <li>Ready to move project in Gurgaon</li>
            <li>Under construction project in Gurgaon </li>
            <li>Pre launch project in Gurgaon</li>
          </ul>
        </div>

        <div className="ml-14"style={{width:297}}>
          <h4 className="font-semibold mb-4 text-[16px]">
            Projects by Location
          </h4>
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

        {/* <div>
          <h4 className="font-semibold mb-4 text-[16px]">Popular Developer</h4>
          <ul className="space-y-3 text-white text-[15px]">
            <li>Property of Godrej</li>
            <li>ATS Group</li>
            <li>Lodha</li>
            <li>Mahagun</li>
            <li>Gulshan Homz</li>
          </ul>
        </div> */}
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
      <Link href="career">Careers</Link>
      <Link href="/Contact">Contact</Link>
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
