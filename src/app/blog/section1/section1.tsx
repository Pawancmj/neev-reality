// app/blog/page.tsx
import Image from "next/image";

type BlogCard = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  day: string;
  image: string;
};

const cards: BlogCard[] = [
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

const recentBlogs = [
  {
    title: "IGRSUP 2025: Complete Guide to Online Property Registration in UP",
    logo:"/images/blogsection/logo1.png"
  },
  { title: "20 Simple False Ceiling Design for Hall",
    logo:"/images/blogsection/logo2.png"
   },
  { title: "Top Citizenship by Investment Agents in 2026",
    logo:"/images/blogsection/logo3.jpg"
   },
  { title: "Managing AR and AP in Real Estate Projects for Better Cash Flow",
    logo:"/images/blogsection/logo4.jpg"
   },
  { title: "Top 15 Posh Areas in Delhi NCR (2025)" ,
    logo:"/images/blogsection/logo5.png"
  },
];

export default function BlogPage() {
  return (
    <main className=" bg-white px-4 py-10 md:px-10 lg:px-20 mx-auto" style={{width:1520,height:1132}}>
      {/* Heading */}
      <section className="mb-6 text-center">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          Blog and News Updates
        </h1>
        <p className="mt-8 text-sm text-gray-500 md:text-base">
          Your trusted source for expert updates on residential and commercial
          real estate.
        </p>
      </section>

      {/* Content grid */}
      <section className="grid gap-10 items-start lg:grid-cols-[2fr,1fr]">
        {/* Blog cards */}
        <div className="grid gap-6 md:grid-cols-2  mt-10" style={{width:898}}>
          {cards.map((card) => (
            <article
              key={card.id}
              className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
                style={{width:430,height:343}} >
              <div className="relative h-48 w-full">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                  priority={card.id === 1}
                />
              </div>
              <div className="relative px-5 pb-5 pt-4">
                {/* Date pill */}
                <div className="absolute -top-7 right-5 flex h-16 w-14 flex-col items-center justify-center rounded-2xl bg-white text-xs font-semibold shadow-md">
                  <span className="text-gray-500">{card.date}</span>
                  <span className="text-lg text-gray-900">{card.day}</span>
                </div>

                <h2 className="mb-2 text-sm font-semibold md:text-base"style={{width:262}}>
                  {card.title}
                </h2>
                <p className="mb-4 line-clamp-2 text-xs text-gray-500 md:text-sm">
                  {card.excerpt}
                </p>
                <button className="text-xs relative left-72 bottom-9 font-semibold text-black md:text-sm">
                  Read More
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Sidebar */}
        <aside className="absolute right-30 mt-5 mx-auto h-fit space-y-6 rounded-2xl  p-5 md:p-6" style={{width:387}}>
          {/* Search */}
          <section className="rounded-lg border border-gray-200 bg-white p-4"style={{width:387}}>
            <div>
                <Image
                  src="/images/blogsection/searchlogo.png"
                  alt=""
                  width={40}
                  height={40}
                  className="object-cover absolute"
                  style={{width:40,height:40}}
                  
                /> 
            <h3 className="mb-4 relative top-1  text-sm font-semibold md:text-base ml-14"style={{width:387}}>
              Search Blogs
            </h3>
            </div>
            <div className="flex items-center relative top-2 rounded-full border border-gray-200 px-3 py-2">
              <input
                type="text"
                placeholder="Type your search here"
                className="w-full border-none bg-transparent text-xs text-gray-600 outline-none md:text-sm"
              />
             <div className="h-6 border-1 mr-5 text-gray-400"></div>
                <Image
                  src="/images/blogsection/searchicon.png"
                  alt=""
                  width={15}
                  height={15}
                  className="object-cover absolute right-2"
                  style={{width:15,height:15}}
                  
                />
            </div>
          </section>

          {/* Recent blogs */}
          <section className="rounded-lg border border-gray-200 bg-white p-4" style={{width:387,height:553}}>
            <div className="flex">
              <Image
                  src="/images/blogsection/recentlogo.png"
                  alt=""
                  width={45}
                  height={45}
                  className="object-cover absolute left-10"
                  style={{width:45,height:45}}
                  
                />
            <h3 className="mb-4 text-sm  font-semibold md:text-base ml-14 relative top-2"style={{width:357,height:62}}>
              Recent Blogs
            </h3>
            </div>
            <ul className="space-y-3" style={{width:352,height:462}}>
              {recentBlogs.map((blog, index) => (
                <li key={index} className="flex gap-4  "style={{width:357,height:67}}>
                  <div className="" />
                       <Image
                  src={blog.logo}
                  alt=""
                  width={45}
                  height={45}
                  className="object-cover rounded-full relative right-3 "
                  style={{width:45,height:45}}
                  
                />
                  <div>


                    <p className="text-sm font-medium text-gray-800 md:text-sm">
                      {blog.title}
                    </p>
                    <button className="mt-1 text-xs font-semibold text-black">
                      Read More
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Subscribe */}
          <section className="rounded-lg  border border-gray-200 bg-white p-4"style={{width:387}}>
            <div>
                <Image
                  src="/images/blogsection/subscribelgo.png"
                  alt=""
                  width={45}
                  height={45}
                  className="object-cover absolute mt-2"
                  style={{width:45,height:45}}
                  
                />
            <h3 className="mb-1 text-sm font-semibold ml-14 md:text-base">
              Subscribe
            </h3>
            </div>
            <p className="mb-3 text-xs text-gray-500 md:text-sm ml-14">
              Stay updated with everything real estate!
            </p>
            <div className="flex items-center rounded-lg border border-gray-200 px-3 py-2">
              <input
                type="email"
                placeholder="Enter email address"
                className="w-full border-none bg-transparent text-xs text-gray-600 outline-none md:text-sm"
              />
              <div className="h-6 border-1 mr-5 text-gray-400"></div>
                <Image
                  src="/images/blogsection/messagelogo.png"
                  alt=""
                  width={15}
                  height={15}
                  className="object-cover absolute  right-12"
                  style={{width:15,height:15}}
                  
                />
            </div>
          </section>
        </aside>
      </section>
    </main>
  );
}
