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
    <section className="w-full bg-white py-16">
      {/* Heading */}
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
          Blog and News Updates
        </h2>
        <p className="mt-4 text-sm sm:text-base text-gray-600">
          Your trusted source for expert updates on residential and commercial
          real estate.
        </p>
        <button className="relative left-120 bottom-12 bg-[#DBA40D] p-1 border-2 border-[#DBA40D] rounded-sm text-white">Explore More</button>
      </div>

      {/* Blog Cards */}
      <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-8 px-4 md:grid-cols-3">
        {posts.map((post) => (
          <article
            key={`${post.title}-${post.date}`}
            className="overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-md transition"
          >
            {/* Image */}
            <div className="relative h-56 w-full">
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(min-width: 1024px) 350px, 100vw"
                className="object-cover"
              />

              {/* Date Badge */}
              <div className="absolute -bottom-6 right-4 sm:right-6 z-10">
                <div className="flex flex-col items-center rounded-lg bg-white px-4 py-3 shadow-md">
                  <span className="text-xs text-gray-500">
                    {post.month}
                  </span>
                  <span className="text-lg font-semibold text-gray-900">
                    {post.date}
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="px-5 pb-6 pt-8">
              <h3 className="text-sm font-semibold leading-snug text-gray-900">
                {post.title}
              </h3>

              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-gray-600">
                {post.excerpt}
              </p>

              <button
                type="button"
                className="mt-4 inline-block text-xs font-semibold text-gray-900 hover:text-blue-600 transition"
              >
                Read More →
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
