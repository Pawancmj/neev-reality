"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type NavLink = {
  label: string;
  href?: string;
  hasDropdown?: boolean;
  children?: { label: string; href: string }[];
};

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Our Services", href: "/services" },
  {
    label: "Residential",
    hasDropdown: true,
    children: [
      { label: "Apartments", href: "/residential/apartments" },
      { label: "Villas", href: "/residential/villas" },
      { label: "Plots", href: "/residential/plots" },
    ],
  },
  {
    label: "Commercial",
    hasDropdown: true,
    children: [
      { label: "Office Space", href: "/commercial/office-space" },
      { label: "Retail Spaces", href: "/commercial/retail-spaces" },
      { label: "Industrial", href: "/commercial/industrial" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);

  return (
    /* 🔥 HIGH Z-INDEX + STICKY */
    <header className="sticky top-0 w-full bg-white shadow-sm z-[9999]">
      <nav className="max-w-[1240px] mx-auto flex items-center justify-between px-6 py-4 relative">
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Neev Realty Logo"
            width={55}
            height={55}
            className="cursor-pointer"
          />
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8 text-[15px] text-black">
          {navLinks.map((item) =>
            item.hasDropdown && item.children ? (
              <li key={item.label} className="relative group">
                <button className="flex items-center gap-2 hover:text-blue-600 transition">
                  <span>{item.label}</span>
                  <svg width="10" height="6" viewBox="0 0 10 6">
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="#374151"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {/* ✅ FIXED DROPDOWN */}

                <div className="absolute left-0 mt-3 w-48 bg-white border rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-200 z-[10000]">


                  <ul>
                    {item.children.map((c) => (
                      <li key={c.href}>
                        <Link
                          href={c.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                        >
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ) : (
              <li key={item.label}>
                <Link href={item.href || "#"} className="hover:text-blue-600 transition">
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* PHONE (DESKTOP) */}
        <div className="hidden md:block text-[15px] font-medium">
          <a href="tel:+918824966669" className="hover:text-blue-600 transition">
            +91 8824966669
          </a>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          onClick={() => {
            setMenuOpen(!menuOpen);
            if (menuOpen) setMobileOpen(null);
          }}
          className="md:hidden flex flex-col gap-1.5"
        >
          <span className="h-[2px] w-6 bg-black" />
          <span className="h-[2px] w-6 bg-black" />
          <span className="h-[2px] w-6 bg-black" />
        </button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-sm px-6 py-4 z-[9999]">
          <ul className="flex flex-col gap-2 text-[16px]">
            {navLinks.map((item) =>
              item.hasDropdown && item.children ? (
                <li key={item.label}>
                  <button
                    onClick={() =>
                      setMobileOpen(mobileOpen === item.label ? null : item.label)
                    }
                    className="w-full flex justify-between py-2"
                  >
                    {item.label}
                    <span>{mobileOpen === item.label ? "−" : "+"}</span>
                  </button>

                  {mobileOpen === item.label && (
                    <ul className="pl-4">
                      {item.children.map((c) => (
                        <li key={c.href}>
                          <Link
                            href={c.href}
                            onClick={() => {
                              setMenuOpen(false);
                              setMobileOpen(null);
                            }}
                            className="block py-2 text-gray-600"
                          >
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={item.label}>
                  <Link
                    href={item.href || "#"}
                    onClick={() => setMenuOpen(false)}
                    className="block py-2"
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}

            <li className="pt-4 border-t">
              <a href="tel:+918824966669" className="text-blue-600 font-semibold">
                +91 8824966669
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
