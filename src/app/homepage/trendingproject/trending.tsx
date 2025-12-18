import React from "react";
import Image from "next/image";


type ProjectCardProps = {
  title: string;
  builder: string;
  location: string;
  bhk: string;
  area: string;
  priceRange: string;
  image: string;
};

const projects: ProjectCardProps[] = [
  {
    title: "Adani Shantigram The Meadows",
    builder: "Adani Shantigram",
    location: "S G Highway, Ahmedabad",
    bhk: "2,2.5,3 BHK",
    area: "1458 SQ. FT.",
    priceRange: "₹ 1.25 Cr - 2.89 Cr",
    image: "/images/newlaunchproject/newpro1.jpg",
  },
  {
    title: "Adani Shantigram The Meadows",
    builder: "Adani Shantigram",
    location: "S G Highway, Ahmedabad",
    bhk: "2,2.5,3 BHK",
    area: "1458 SQ. FT.",
    priceRange: "₹ 1.25 Cr - 2.89 Cr",
    image: "/images/newlaunchproject/newpro2.png",
  },
  {
    title: "Adani Shantigram The Meadows",
    builder: "Adani Shantigram",
    location: "S G Highway, Ahmedabad",
    bhk: "2,2.5,3 BHK",
    area: "1458 SQ. FT.",
    priceRange: "₹ 1.25 Cr - 2.89 Cr",
    image: "/images/newlaunchproject/newpro3.jpg",
  },
  {
    title: "Adani Shantigram The Meadows",
    builder: "Adani Shantigram",
    location: "S G Highway, Ahmedabad",
    bhk: "2,2.5,3 BHK",
    area: "1458 SQ. FT.",
    priceRange: "₹ 1.25 Cr - 2.89 Cr",
    image: "/images/newlaunchproject/newpro4.jpg",
  },
];

const Badge = ({ text }: { text: string }) => (
  <span className="rounded-full bg-[#f3f3f3] px-3 py-1 text-xs font-medium flex text-gray-700 shadow-sm">
    {text} <span> 
        <Image
          src="/images/newlaunchproject/rera.png"
          alt=""
          width={12}
          height={12}
          className="relative left-2 top-0.5"
          style={{width:12,height:12}}
        /></span>

  </span>
);

const ContactButton = () => (
  <button className="rounded-full bg-[#F4F2F1] px-6 py-2 text-xs font-medium text-[#D23292] shadow-sm ">
    Contact
  </button>
);

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  builder,
  location,
  bhk,
  area,
  priceRange,
  image,
}) => {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-l bg-white shadow-sm ">
      <div className="relative ">
        <Image
          src={image}
          alt={title}
          width={1400}
          height={150}
          className="object-cover"
        //   sizes="(min-width: 1024px) 300px, 100vw"
        style={{width:1400,height:170}}
        />
      </div>

      <div className="flex flex-1 flex-col justify-between px-4 pb-4 pt-3">
        <div>
          <div className="mb-2 flex items-center justify-between gap-2">
            <p className="text-sm font-semibold text-gray-900 line-clamp-1">
              {title}
            </p>
            <Badge text="RERA" />
          </div>
          <p className="text-xs text-gray-500">
            By <span className="font-medium text-gray-700">{builder}</span>
          </p>
          <p className="mt-1 text-xs text-gray-500">{location}</p>

          <div className="mt-3 flex items-center justify-between text-[11px] text-gray-500">
            <span>{bhk}</span>
            <span>{area}</span>
          </div>
          <h1 className="border-1 relative top-3"></h1>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-xs font-semibold text-gray-900">{priceRange}</p>
          <ContactButton />
        </div>
      </div>
    </div>
  );
};

const trendingprojects: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 relative top-70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4">
        <div className="text-center md:text-left">
          <h2 className=" font-semibold  text-gray-900 relative left-90 bottom-10" style={{fontSize:40}}>
            Trending <span className="text-[#DBA40D]">Projects</span>
          </h2>
          <p className="mt-2  text-black relative left-78 bottom-12" style={{fontSize:17}}>
            Explore our curated selection of the finest homes available right now.
          </p>
          <p className="text-black relative left-110 bottom-6" style={{fontSize:17}}>
            The Noteworthy Real Estate in India
          </p>
        </div>

        <button className="relative left-41 top-15 rounded-sm bg-[#DBA40D] px-6 py-2 text-xs font-medium text-white shadow-sm hover:bg-[#1D4ED8] md:mt-0">
          Explore More
        </button>
      </div>

      <div className="mx-auto mt-10 grid  grid-cols-1 gap-5 px-4 md:grid-cols-2 lg:grid-cols-4" style={{width:1480,height:350}}>
        {projects.map((project) => (
          <ProjectCard key={project.title + project.image} {...project} />
        ))}
      </div>
    </section>
  );
};

export default trendingprojects;
