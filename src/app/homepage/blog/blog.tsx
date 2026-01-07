"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

type BlogPost = {
  title: string;
  excerpt: string;
  date: string;
  month: string;
  image: string;
};

const posts: BlogPost[] = Array.from({ length: 5 }).map((_, i) => ({
  title: "Unveils the Best Canadian Cities for Biking and Walk",
  excerpt:
    "Stay updated with the most important developments in the most important......",
  date: "03",
  month: "Feb",
  image: "/images/blog/blog1.jpg", // ✅ SAME IMAGE
}));

const BlogSection: React.FC = () => {
  return (
    <section className="max-w-[1240px] mx-auto px-4 mt-16 mb-10">

      {/* HEADER + BUTTON (SAME ALIGNMENT AS TRENDING PROJECTS) */}
      <div className="max-w-[1480px] mx-auto px-1 flex flex-col md:flex-row md:items-end md:justify-between gap-4">

        <div className="flex-1 text-center">
          <h2 className="text-3xl font-semibold text-gray-900">
            Blog and News <span className="text-[#DBA40D]">Updates</span>
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Your trusted source for expert updates on residential and commercial real estate.
          </p>
        </div>

        <div className="max-sm:text-center">
          <Link
            href="/blog"
            className="
              inline-flex items-center justify-center
              bg-[#DBA40D] border border-[#DBA40D]
              rounded-sm text-white font-medium
              px-4 py-2 text-sm transition
              max-sm:w-38 max-sm:text-center
            "
          >
            Explore More
          </Link>
        </div>
      </div>

      {/* 🔥 HORIZONTAL SCROLL – EXACT LIKE TRENDING PROJECTS */}
      <div className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth p-2 pb-8 mt-6">

        {posts.map((post, index) => (
          <Link
            key={index}
            href={`/blog/${index + 1}`}
            className="min-w-[320px] max-w-[320px] flex-shrink-0"
          >
            <div
              className="
                group flex h-full w-80 flex-col overflow-hidden rounded-xl
                bg-white shadow-sm hover:shadow-md transition-all duration-300
                hover:scale-[1.02] hover:-translate-y-1 hover:shadow-lg
              "
            >
              {/* IMAGE – SAME HEIGHT AS PROJECT CARD */}
              <div className="relative h-46 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="flex flex-1 flex-col px-4 py-3">
                <h3 className="text-sm font-semibold text-gray-900 line-clamp-2">
                  {post.title}
                </h3>

                <p className="mt-3 text-xs text-gray-500 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="mt-auto pt-4 flex items-center justify-between">
                  <span className="text-xs font-medium text-gray-500">
                    {post.month} {post.date}
                  </span>

                  <span className="text-xs font-semibold text-[#DBA40D]">
                    Read More →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
