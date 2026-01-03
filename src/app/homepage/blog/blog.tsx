"use client";

import React from "react";
import Image from "next/image";

type BlogPost = {
  title: string;
  excerpt: string;
  date: string;
  month: string;
  image: string;
};

const posts: BlogPost[] = [
  {
    title: "Unveils the Best Canadian Cities for Biking and Walk",
    excerpt:
      "Stay updated with the most important developments in the most important......",
    date: "03",
    month: "Feb",
    image: "/images/blog/blog1.jpg",
  },
  {
    title: "Unveils the Best Canadian Cities for Biking and Walk",
    excerpt:
      "Stay updated with the most important developments in the most important......",
    date: "03",
    month: "Feb",
    image: "/images/blog/blog1.jpg",
  },
  {
    title: "Unveils the Best Canadian Cities for Biking and Walk",
    excerpt:
      "Stay updated with the most important developments in the most important......",
    date: "03",
    month: "Feb",
    image: "/images/blog/blog1.jpg",
  },
];

const BlogSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-6">

      {/* ================= HEADING + BUTTON ================= */}
      <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        {/* Center Heading */}
        <div className="flex-1 text-center">
          <h2 className="text-3xl font-semibold text-gray-900">
            Blog and News <span className="text-[#DBA40D]">Updates</span>
          </h2>

          <p className="mt-2 text-sm text-gray-600">
            Your trusted source for expert updates on residential and commercial real estate.
          </p>
        </div>

        <button
          className="
    bg-[#DBA40D]
    border border-[#DBA40D]
    rounded-sm
    text-white font-medium

    px-4 py-2 text-sm        /* desktop default */

    max-sm:scale-70         
    max-sm:origin-center

    transition
    md:mr-0
  "
        >
          Explore More
        </button>
      </div>

      {/* ================= BLOG CARDS ================= */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 md:grid-cols-3 mt-6">

        {posts.map((post) => (
          <article
            key={`${post.title}-${post.date}`}
            className="overflow-hidden rounded-2xl bg-white shadow-sm"
          >
            <div className="relative h-56 w-full">
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(min-width: 1024px) 350px, 100vw"
                className="object-cover"
              />

              <div className="absolute -bottom-6 right-6 z-10">
                <div className="flex flex-col items-center rounded-lg bg-white px-6 py-4 shadow-md">
                  <span className="text-xs text-gray-500">{post.month}</span>
                  <span className="text-lg font-semibold text-gray-900">
                    {post.date}
                  </span>
                </div>
              </div>
            </div>

            <div className="px-5 pb-5 pt-7 relative">
              <h3 className="text-sm font-semibold leading-snug text-gray-900">
                {post.title}
              </h3>

              <p className="mt-3 text-xs leading-relaxed text-gray-600">
                {post.excerpt}
              </p>

              <button
                type="button"
                className="
                  mt-4 md:mt-0
                  md:absolute md:right-5 md:bottom-5
                  text-xs font-semibold text-gray-900
                "
              >
                Read More
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
