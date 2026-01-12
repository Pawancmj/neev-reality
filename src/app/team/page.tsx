"use client";
import Footer from '../reusable_components/footer/footer';
import Navbar from '../reusable_components/navbar/navbar';

import Image from 'next/image';
import Link from 'next/link';

interface TeamMember {
  image: string;
  name: string;
  title: string;
}

const Team = () => {
  const image1 = "/images/team/team1.png";
  const image2 = "/images/team/team2.png";

  const rows = [
    Array(4).fill({ image: image1, name: "Jason Oppenheimer", title: "Founder/Broker" }),
    Array(3).fill({ image: image2, name: "Peter Cornell", title: "Senior Realtor Associate / Dir. of Sports & Entertainment" }),
    Array(4).fill({ image: image1, name: "Jason Oppenheimer", title: "Founder/Broker" }),
    Array(3).fill({ image: image2, name: "Peter Cornell", title: "Senior Realtor Associate / Dir. of Sports & Entertainment" }),
    Array(4).fill({ image: image1, name: "Jason Oppenheimer", title: "Founder/Broker" }),
    Array(3).fill({ image: image2, name: "Peter Cornell", title: "Senior Realtor Associate / Dir. of Sports & Entertainment" }),
  ];

  const TeamCard = ({ member }: { member: TeamMember }) => (
    <Link 
      href="/team/1"
      className="group relative w-full bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 lg:hover:scale-[1.02] border border-gray-200 hover:border-gray-300 flex flex-col h-full"
    >
      <div className="relative w-full aspect-square bg-gray-100 flex-shrink-0">
        <Image
          src={member.image}
          alt={`${member.name}, ${member.title}`}
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-3 sm:p-4 flex-1 flex flex-col justify-center min-h-[80px]">
        <h3 className="text-sm lg:text-base font-semibold text-[#B31E35] group-hover:text-red-600 transition-colors duration-300 mb-1 leading-tight">
          {member.name}
        </h3>
        <p className="text-xs lg:text-sm font-medium text-gray-600 group-hover:text-gray-800 leading-tight">
          {member.title}
        </p>
      </div>
    </Link>
  );

  return (
    <>
      <Navbar/>

      {/* Header section unchanged */}
      <section className="w-full lg:w-[1330px] mx-auto mr-1 mb-14 min-h-[350px] lg:h-[256px] bg-white flex flex-col lg:flex-row overflow-hidden px-4 lg:px-0">
        <div className="w-full lg:w-1/3 flex flex-col justify-center items-start p-4 sm:p-6 lg:p-12 bg-gradient-to-br from-gray-50 to-white border-r lg:border-r border-red-500/30 min-h-[200px] sm:min-h-[250px] lg:min-h-auto">
          <div className="flex flex-col items-start space-y-3 sm:space-y-4 lg:space-y-6 w-full lg:w-[440px]">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-2 sm:w-3 h-6 sm:h-8 lg:h-10 bg-red-600 flex-shrink-0" />
              <span className="text-xs sm:text-sm lg:text-sm font-medium text-[#B71F37] uppercase tracking-wider">
                Our Brokers & Agents
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-thin bg-[#B71F37] bg-clip-text text-transparent leading-tight w-full lg:w-[440px] break-words">
              MEET
              <br />
              <span className="text-2xl sm:text-4xl lg:text-6xl bg-gradient-to-r font-bold from-[#B71F37] to-[#340000] text-transparent bg-clip-text">
                THE TEAM
              </span>
            </h2>
          </div>
        </div>
        <div className="w-full lg:w-[718px] p-4 sm:p-6 lg:p-12 flex flex-col justify-center gap-3 sm:gap-4 lg:gap-6 lg:min-h-[256px]">
          <p className="font-[15px] text-gray-700 w-full lg:w-[718px] text-sm sm:text-base lg:text-[15px] leading-relaxed text-left">
            The Oppenheimer Group, led Founder and Jason Oppenheimer, dominant force
            <br className="hidden sm:block lg:block" />
            Southern California luxury real estate market offices Hollywood, Newport Beach,
            <br className="hidden sm:block lg:block" />
            San Diego, Calo Luces.
          </p>
        </div>
      </section>

      {/* ✅ MOBILE 2x2 FOR 3-IMAGES + 4-IMAGES */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-6 md:space-y-8">
        {rows.map((row, rowIndex) => (
          <div 
            key={rowIndex}
            className={`grid gap-4 md:gap-5 lg:gap-6 w-full h-full ${
              row.length === 4
                ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
                : 'grid-cols-2 md:grid-cols-3 lg:justify-center lg:max-w-4xl mx-auto'
            }`}
          >
            {row.map((member, colIndex) => (
              <TeamCard key={colIndex} member={member} />
            ))}
          </div>
        ))}
      </section>
<Footer/>
    </>
  );
};

export default Team;
