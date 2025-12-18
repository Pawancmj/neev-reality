// components/Navbar.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Residential", href: "/residential", hasDropdown: true },
  { label: "Commercial", href: "/commercial", hasDropdown: true },
  { label: "Blog", href: "/blog" },
  // { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className=" bg-white mx-auto " style={{width:1520}} >
      <nav className="mx-auto flex  items-center justify-between px-6 py-3" style={{width:1212,height:132}}>
        <div className="flex items-center"style={{width:73,height:62}}>
          <Link href="/">
            <Image
              src="/images/logo.png" 
              alt="Neev Realty Logo"
              width={50}
              height={50}
              className="h-auto w-auto"
            />
          </Link>
        </div>

        {/* Center: Nav links */}
        <ul className="hidden items-center gap-8 text-sm font-normal md:flex text-black" style={{width:668,height:30}}>
          {navLinks.map((item) => (
            <li key={item.label} className="relative cursor-pointer">
              <Link href={item.href} className="hover:text-black">
                {item.label}
              </Link>
              {item.hasDropdown && (
                <span className="ml-1 text-xs align-top text-gray-500">▾</span>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden text-sm font-normal text-black  md:block shadow-sm bg-white">
          <a href="tel:+918824966669" className="hover:text-black">
            +91 8824966669
          </a>
        </div>

        <button
          className="inline-flex items-center rounded md:hidden"
          aria-label="Open menu"
        >
          <span className="block h-0.5 w-5 bg-gray-800" />
          <span className="ml-1 block h-0.5 w-5 bg-gray-800" />
        </button>
      </nav>
    </header>
  );
}
