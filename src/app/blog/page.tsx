"use client";

import { useState } from "react";
import Navbar from "../reusable_components/navbar/navbar";
import Footer from "../reusable_components/footer/footer";
import Pagination from "@/components/apartment-property/Pagination";
import BlogPage from "./section1/section1";

const blogs = [
  { id: 1, title: "Unveils the Best Canadian Cities for Biking and Walk", excerpt: "Stay updated with the most important developments in the most important...", date: "Feb", day: "03", image: "/images/blogsection/img1.jpg" },
  { id: 2, title: "Unveils the Best Canadian Cities for Biking and Walk", excerpt: "Stay updated with the most important developments in the most important...", date: "Feb", day: "03", image: "/images/blogsection/img1.jpg" },
  { id: 3, title: "Unveils the Best Canadian Cities for Biking and Walk", excerpt: "Stay updated with the most important developments in the most important...", date: "Feb", day: "03", image: "/images/blogsection/img1.jpg" },
  { id: 4, title: "Unveils the Best Canadian Cities for Biking and Walk", excerpt: "Stay updated with the most important developments in the most important...", date: "Feb", day: "03", image: "/images/blogsection/img1.jpg" },
  { id: 5, title: "Unveils the Best Canadian Cities for Biking and Walk", excerpt: "Stay updated with the most important developments in the most important...", date: "Feb", day: "03", image: "/images/blogsection/img1.jpg" },
  { id: 6, title: "Unveils the Best Canadian Cities for Biking and Walk", excerpt: "Stay updated with the most important developments in the most important...", date: "Feb", day: "03", image: "/images/blogsection/img1.jpg" },
];

export default function Blog() {
  const [page, setPage] = useState(1);

  const blogsPerPage = 4;
  const start = (page - 1) * blogsPerPage;
  const visibleBlogs = blogs.slice(start, start + blogsPerPage);

  return (
    <>
      <Navbar />

      {/* ================= BREADCRUMB ================= */}
        <div className="max-w-[1240px] mx-auto px-4 py-2  text-sm text-gray-500">
          Home / Blog 
        </div>
      <BlogPage blogs={visibleBlogs} />
      <div className="py-10">
      <Pagination
        currentPage={page}
        totalPages={Math.ceil(blogs.length / blogsPerPage)}
        onPageChange={setPage}
      />
      </div>

      <Footer />
    </>
  );
}
