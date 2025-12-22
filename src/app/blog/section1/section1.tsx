import Image from "next/image";
import Link from "next/link";

/* ================= TYPES ================= */
type Blog = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  day: string;
  image: string;
};

type RecentBlog = {
  title: string;
  logo: string;
};

/* ================= DATA ================= */
const blogs: Blog[] = [
  {
    id: 1,
    title: "Unveils the Best Canadian Cities for Biking and Walk",
    excerpt:
      "Stay updated with the most important developments in the most important...",
    date: "Feb",
    day: "03",
    image: "/images/blogsection/img1.jpg",
  },
  {
    id: 2,
    title: "Unveils the Best Canadian Cities for Biking and Walk",
    excerpt:
      "Stay updated with the most important developments in the most important...",
    date: "Feb",
    day: "03",
    image: "/images/blogsection/img1.jpg",
  },
  {
    id: 3,
    title: "Unveils the Best Canadian Cities for Biking and Walk",
    excerpt:
      "Stay updated with the most important developments in the most important...",
    date: "Feb",
    day: "03",
    image: "/images/blogsection/img1.jpg",
  },
  {
    id: 4,
    title: "Unveils the Best Canadian Cities for Biking and Walk",
    excerpt:
      "Stay updated with the most important developments in the most important...",
    date: "Feb",
    day: "03",
    image: "/images/blogsection/img1.jpg",
  },
];

const recentBlogs: RecentBlog[] = [
  {
    title: "IGRSUP 2025: Complete Guide to Online Property Registration in UP",
    logo: "/images/blogsection/logo1.png",
  },
  {
    title: "20 Simple False Ceiling Design for Hall",
    logo: "/images/blogsection/logo2.png",
  },
  {
    title: "Top Citizenship by Investment Agents in 2026",
    logo: "/images/blogsection/logo3.jpg",
  },
  {
    title: "Managing AR and AP in Real Estate Projects for Better Cash Flow",
    logo: "/images/blogsection/logo4.jpg",
  },
  {
    title: "Top 15 Posh Areas in Delhi NCR (2025)",
    logo: "/images/blogsection/logo5.png",
  },
];

/* ================= PAGE ================= */
export default function BlogPage() {
  return (
    <main
      className="bg-white px-4 py-10 md:px-10 lg:px-20 mx-auto"
      style={{ width: 1520, height: 1132 }}
    >
      {/* Heading */}
      <section className="mb-6 text-center">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          Blog and News Updates
        </h1>
        <p className="mt-4 text-sm text-gray-500 md:text-base">
          Your trusted source for expert updates on residential and commercial real estate.
        </p>
      </section>

      {/* ================= MAIN GRID ================= */}
      <section className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] items-start">


        {/* ================= LEFT CONTENT ================= */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">

          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
            >
              {/* IMAGE */}
              <div className="relative h-48 w-full">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />

                {/* DATE PILL */}
                <div className="absolute -bottom-6 right-5 bg-white rounded-2xl px-4 py-2 text-center shadow">
                  <p className="text-xs text-gray-500">{blog.date}</p>
                  <p className="text-lg font-semibold">{blog.day}</p>
                </div>
              </div>

              {/* CONTENT */}
              <div className="px-5 pt-8 pb-5">
                <h2 className="text-sm font-semibold md:text-base line-clamp-2">
                  {blog.title}
                </h2>

                <p className="mt-2 text-xs text-gray-500 line-clamp-2 md:text-sm">
                  {blog.excerpt}
                </p>

                <button className="mt-4 text-xs font-semibold text-black">
                  Read More
                </button>
              </div>
            </article>
          ))}

        </div>

        {/* ================= RIGHT SIDEBAR ================= */}
        <aside className="space-y-6 lg:sticky lg:top-24">

          {/* SEARCH */}
          <section className="bg-white border rounded-xl p-5 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/blogsection/searchlogo.png"
                alt=""
                width={36}
                height={36}
              />
              <h3 className="font-semibold text-sm md:text-base">
                Search Blogs
              </h3>
            </div>

            <div className="flex items-center rounded-full border px-4 py-2">
              <input
                type="text"
                placeholder="Type your search here"
                className="w-full text-xs md:text-sm outline-none"
              />
              <Image
                src="/images/blogsection/searchicon.png"
                alt=""
                width={14}
                height={14}
              />
            </div>
          </section>

          {/* RECENT BLOGS */}
          <section className="bg-white border rounded-xl p-5 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/blogsection/recentlogo.png"
                alt=""
                width={36}
                height={36}
              />
              <h3 className="font-semibold text-sm md:text-base">
                Recent Blogs
              </h3>
            </div>

            <ul className="space-y-4">
              {recentBlogs.map((blog, i) => (
                <li key={i} className="flex gap-3">
                  <Image
                    src={blog.logo}
                    alt=""
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      {blog.title}
                    </p>
                    <button className="text-xs font-semibold text-black mt-1">
                      Read More
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* SUBSCRIBE */}
          <section className="bg-white border rounded-xl p-5 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <Image
                src="/images/blogsection/subscribelgo.png"
                alt=""
                width={36}
                height={36}
              />
              <h3 className="font-semibold text-sm md:text-base">
                Subscribe
              </h3>
            </div>

            <p className="text-xs text-gray-500 mb-3">
              Stay updated with everything real estate!
            </p>

            <div className="flex items-center border rounded-lg px-3 py-2">
              <input
                type="email"
                placeholder="Enter email address"
                className="w-full text-xs md:text-sm outline-none"
              />
              <Image
                src="/images/blogsection/messagelogo.png"
                alt=""
                width={14}
                height={14}
              />
            </div>
          </section>

        </aside>
      </section>
    </main>
  );
}

