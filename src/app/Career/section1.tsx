import Image from "next/image";

export default function Career() {
  return (
    <section className="w-full bg-[#F8FBFF] py-16">
      <div className="max-w-[1240px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">

        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Reshape the{" "}
            <span className="text-[#DBA40D]">Real Estate</span>{" "}
            Industry With Us
          </h1>

          <h2 className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-medium">
            The{" "}
            <span className="text-[#DBA40D]">Neev Realty</span>{" "}
            Team
          </h2>

          <button className="mt-8 inline-block rounded-lg bg-[#DBA40D] px-8 py-3 text-white font-medium hover:bg-[#c8940c] transition">
            View Open Positions
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <Image
            src="/images/career/img1.png"
            alt="Neev Realty Careers"
            width={394}
            height={423}
            className="object-contain max-w-full h-auto"
            priority
          />
        </div>

      </div>
    </section>
  );
}
