

import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#1B121E] text-gray-300 w-full">

      {/* ================= TOP LINKS ================= */}
      <div className="bg-[#29192B] border-b border-[#2c1b32]">
        <div className="max-w-[1400px] mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-left">

          <div>
            <h4 className="text-white font-semibold mb-4">Projects by size</h4>
            <ul className="space-y-2 text-sm">
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

          <div>
            <h4 className="text-white font-semibold mb-4">Property by type</h4>
            <ul className="space-y-2 text-sm">
              <li>Residential property in Gurgaon</li>
              <li>Commercial property in Gurgaon</li>
              <li>Luxury apartment in Gurgaon</li>
              <li>Builder floor in Gurgaon</li>
              <li>Retail shops in Gurgaon</li>
              <li>SCO plots in Gurgaon</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">
              Projects by construction status
            </h4>
            <ul className="space-y-2 text-sm">
              <li>New launch project in Gurgaon</li>
              <li>Ready to move project in Gurgaon</li>
              <li>Under construction project in Gurgaon</li>
              <li>Pre launch project in Gurgaon</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Projects by Location</h4>
            <ul className="space-y-2 text-sm">
              <li>Projects in Dwarka Expressway</li>
              <li>Projects in Golf Course Road</li>
              <li>Projects in Golf Course Extension Road</li>
              <li>Projects in Sohna Road</li>
              <li>Projects in New Gurgaon</li>
              <li>Projects in Old Gurgaon</li>
              <li>Projects in SPR</li>
              <li>Projects in NH8</li>
            </ul>
          </div>

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
            <Link href="/sitemap" className="hover:text-white transition">Sitemap</Link>

            <Link href="/commercial" className="hover:text-white transition">Commercial</Link>
            <Link href="/services" className="hover:text-white transition">Our Services</Link>

            <Link href="/career" className="hover:text-white transition">Careers</Link>
            <Link href="/contact" className="hover:text-white transition">Contact</Link>
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
}

