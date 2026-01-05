"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiPhone } from "react-icons/fi";
import { usePathname } from "next/navigation";

/* ================= DATA ================= */
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

/* ================= COMPONENT ================= */
export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  /* BODY SCROLL LOCK */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white w-full">
      <nav className="mx-auto flex items-center justify-between px-4 sm:px-6 py-3 max-w-[1212px] h-[102px]">
        {/* LOGO */}
        <Link href="/" className="w-[75px] h-[75px] flex items-center">
          <Image
            src="/images/logo.png"
            alt="Neev Realty"
            width={75}
            height={75}
            priority
          />
        </Link>

        {/* ================= DESKTOP MENU ================= */}
        <ul className="hidden min-[800px]:flex items-center gap-8 text-sm">
          {navLinks.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <li key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className={`
                    flex items-center gap-1 pb-2 transition-all
                    ${
                      isActive
                        ? "text-[#DBA40D] border-b-2 border-[#DBA40D]"
                        : "text-gray-700 hover:text-[#DBA40D]"
                    }
                  `}
                >
                  {item.label}
                  {item.hasDropdown && <span className="text-xs">▾</span>}
                </Link>

                {item.children && (
                  <ul className="absolute left-0 top-full mt-3 min-w-[220px] bg-white rounded-lg border shadow opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          href={child.href}
                          className={`
                            block px-4 py-3 text-sm transition
                            ${
                              pathname === child.href
                                ? "text-[#DBA40D] bg-[#DBA40D]/10"
                                : "hover:bg-gray-50"
                            }
                          `}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>

        {/* ================= DESKTOP PHONE ================= */}
        <div className="hidden min-[800px]:block text-sm rounded-full bg-[#F5F5F5] px-4 py-1.5 font-medium text-[#DBA40D]">
          <a href="tel:+918824966669">+91 8824966669</a>
        </div>

        {/* ================= MOBILE ACTIONS ================= */}
        <div className="flex items-center gap-4 min-[800px]:hidden">
          <a href="tel:+918824966669" aria-label="Call">
            <FiPhone className="text-xl" />
          </a>

          {/* HAMBURGER */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle Menu"
            className="flex flex-col gap-1"
          >
            <span className="h-0.5 w-5 bg-black" />
            <span className="h-0.5 w-5 bg-black" />
            <span className="h-0.5 w-5 bg-black" />
          </button>
        </div>
      </nav>

      {/* ================= MOBILE OVERLAY ================= */}
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/30 z-40"
            onClick={() => setMenuOpen(false)}
          />

          {/* ================= MOBILE MENU ================= */}
          <div className="fixed top-[102px] left-0 right-0 z-50 bg-white shadow-md min-[800px]:hidden">
            <ul className="flex flex-col px-6 py-4 gap-4 text-sm">
              {navLinks.map((item) => {
                const isActive =
                  pathname === item.href ||
                  pathname.startsWith(item.href);

                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className={`font-medium ${
                        isActive
                          ? "text-[#DBA40D]"
                          : "text-gray-800"
                      }`}
                    >
                      {item.label}
                    </Link>

                    {item.children && (
                      <ul className="ml-4 mt-2 space-y-2 text-gray-600">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <Link
                              href={child.href}
                              onClick={() => setMenuOpen(false)}
                              className={
                                pathname === child.href
                                  ? "text-[#DBA40D]"
                                  : ""
                              }
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}

              <li className="pt-4 border-t text-[#DBA40D] font-medium">
                <a href="tel:+918824966669">+91 8824966669</a>
              </li>
            </ul>
          </div>
        </>
      )}
    </header>
  );
}
