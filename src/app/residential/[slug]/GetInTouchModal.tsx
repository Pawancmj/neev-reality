"use client";

import { useEffect } from "react";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";

type Props = {
  open: boolean;
  onClose: () => void;
  propertyTitle?: string;
};

export default function GetInTouchModal({ open, onClose, propertyTitle, }: Props) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 px-4">

      {/* MODAL */}
      <div className="relative w-full max-w-md bg-white rounded-2xl p-6 shadow-xl">

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-black"
        >
          <FaTimes size={18} />
        </button>

        {/* HEADER */}
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Neev Realty"
            width={38}
            height={38}
          />

          <h2 className="text-2xl font-semibold">
            Get in <span className="text-[#F5A300]">Touch</span>
          </h2>
        </div>

        <p className="text-sm text-gray-500 mt-2">
          Please fill in your details below and We will get in
          touch with you shortly
        </p>

        {/* FORM */}
        <form className="mt-6 space-y-4">

          {/* INTERESTED IN */}
          <p className="text-sm font-semibold text-gray-800">
            I Am Interested In
          </p>
          <p className="mt-1 text-sm text-[#c8950a] font-medium">
            {propertyTitle}
          </p>

          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:border-[#F5A300]"
          />

          <div className="flex border border-gray-300 rounded-md overflow-hidden">
            <select className="px-3 text-sm bg-gray-50 outline-none border-r">
              <option>+91 India</option>
            </select>
            <input
              type="tel"
              placeholder="Phone"
              className="flex-1 px-4 py-2 outline-none"
            />
          </div>

          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:border-[#F5A300]"
          />

          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none resize-none focus:border-[#F5A300]"
          ></textarea>

          {/* CHECKBOX */}
          <label className="flex items-center gap-3 text-sm text-gray-700">
            <input
              type="checkbox"
              defaultChecked
              className="w-5 h-5 accent-green-500"
            />
            <span>
              I agree to neevrealty.com{" "}
              <span className="text-red-500 cursor-pointer">
                T&C & Privacy
              </span>
            </span>
          </label>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full mt-4 bg-[#c8950a] text-white py-3 rounded-md font-medium hover:bg-[#c8950a] transition"
          >
            Get a Call
          </button>
        </form>
      </div>
    </div>
  );
}
