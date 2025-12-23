// components/Navbar.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Our Services", href: "/services" },
  {
    label: "Residential",
    href: "/residential",
    hasDropdown: true,
    children: [
      { label: "Residential Apartment", href: "/residential/apartments" },
      { label: "Builder Floor", href: "/residential/builder-floor" },
    ],
  },
  {
    label: "Commercial",
    href: "/commercial",
    hasDropdown: true,
    children: [
      { label: "Retail", href: "/commercial/retail" },
      { label: "SCO", href: "/commercial/sco" },
    ],
  },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  return (
    <header className="bg-white mx-auto w-full max-w-[1520px]">
      <nav className="mx-auto flex items-center justify-between px-4 sm:px-6 py-3 w-full max-w-[1212px] h-[132px]">

        {/* Logo */}
        <div className="flex items-center w-[73px] h-[62px]">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Neev Realty Logo"
              width={50}
              height={50}
              priority
            />
          </Link>
        </div>

        {/* Center Nav Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-normal text-black">
          {navLinks.map((item) => (
            <li
              key={item.label}
              className="relative group cursor-pointer whitespace-nowrap"
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 hover:text-black"
              >
                {item.label}
                {item.hasDropdown && (
                  <span className="text-xs text-gray-500">▾</span>
                )}
              </Link>

              {/* Dropdown */}
              {item.hasDropdown && item.children && (
                <ul
                  className="
                    absolute left-0 top-full mt-3
                    min-w-[220px]
                    rounded-lg bg-white
                    shadow-[0_10px_30px_rgba(0,0,0,0.12)]
                    border border-gray-100
                    opacity-0 invisible
                    group-hover:opacity-100 group-hover:visible
                    transition-all duration-200
                    z-50
                  "
                >
                  {item.children.map((child) => (
                    <li key={child.label}>
                      <Link
                        href={child.href}
                        className="
                          block px-4 py-3 text-sm text-gray-700
                          hover:bg-gray-50 hover:text-black
                        "
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Phone */}
        <div className="hidden md:block text-sm font-normal text-[#DBA40D]">
          <a href="tel:+918824966669" className="hover:text-black">
            +91 8824966669
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="inline-flex flex-col gap-1 md:hidden"
          aria-label="Open menu"
        >
          <span className="block h-0.5 w-5 bg-gray-800" />
          <span className="block h-0.5 w-5 bg-gray-800" />
        </button>
      </nav>
    </header>
  );
}
