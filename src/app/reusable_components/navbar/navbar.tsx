// components/Navbar.tsx
"use client";

import { useState } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white mx-auto w-full max-w-[1520px]">
      <nav className="mx-auto flex items-center justify-between px-4 sm:px-6 py-3 w-full max-w-[1212px] h-[102px]">

        {/* Logo */}
        <div className="flex items-center w-[73px] h-[72px]">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Neev Realty Logo"
              width={75}
              height={75}
              priority
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden min-[800px]:flex items-center gap-8 text-sm text-black">
          {navLinks.map((item) => (
            <li key={item.label} className="relative group">
              <Link href={item.href} className="flex items-center gap-1">
                {item.label}
                {item.hasDropdown && <span className="text-xs">▾</span>}
              </Link>

              {item.hasDropdown && item.children && (
                <ul className="absolute left-0 top-full mt-3 min-w-[220px] bg-white rounded-lg border shadow opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  {item.children.map((child) => (
                    <li key={child.label}>
                      <Link
                        href={child.href}
                        className="block px-4 py-3 text-sm hover:bg-gray-50"
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
        <div className="hidden min-[800px]:block text-sm rounded-full bg-[#F5F5F5] px-4 py-1.5 text-xs font-medium text-[#F5A300]">
          <a href="tel:+918824966669">+91 8824966669</a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1 min-[800px]:hidden"
          aria-label="Open Menu"
        >
          <span className="h-0.5 w-5 bg-black" />
          <span className="h-0.5 w-5 bg-black" />
          <span className="h-0.5 w-5 bg-black" />
        </button>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div className="min-[800px]:hidden bg-white border-t shadow-md">
          <ul className="flex flex-col px-6 py-4 gap-4 text-sm">
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-medium"
                >
                  {item.label}
                </Link>

                {item.hasDropdown && item.children && (
                  <ul className="ml-4 mt-2 space-y-2 text-gray-600">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          href={child.href}
                          onClick={() => setMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}

            <li className="pt-4 border-t text-[#DBA40D] font-medium">
              <a href="tel:+918824966669">+91 8824966669</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

