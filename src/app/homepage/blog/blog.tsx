"use client";

import React from "react";
import Image from "next/image";

type BlogPost = {
  title: string;
  excerpt: string;
  date: string;   // e.g. "03"
  month: string;  // e.g. "Feb"
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
    <section className="w-full bg-white py-16 mt-94">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-3xl font-semibold text-gray-900">
          Blog and News Updates
        </h2>
        <p className="mt-4 text-sm text-gray-600">
          Your trusted source for expert updates on residential and commercial real estate.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-8 px-4 md:grid-cols-3">
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
                <div className="flex flex-col items-center relative left-6 rounded-lg bg-white px-6 py-4 shadow-md">
                  <span className="text-xs text-gray-500">{post.month}</span>
                  <span className="text-lg font-semibold text-gray-900">
                    {post.date}
                  </span>
                </div>
              </div>
            </div>

            <div className="px-5 pb-5 pt-7">
              <h3 className="text-sm font-semibold leading-snug text-gray-900">
                {post.title}
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-gray-600">
                {post.excerpt}
              </p>

              <button
                type="button"
                className=" text-xs relative left-64 bottom-6 font-semibold text-gray-900"
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
