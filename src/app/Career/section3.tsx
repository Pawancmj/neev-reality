"use client";

const benefitsLeft = [
  "Health Benefits",
  "Employee Recognition Platform",
  "Professional Development",
  "Access to Industry Events",
];

const benefitsRight = [
  "100% Company Paid Life Insurance",
  "Work-Life Balance",
  "Diversity & Inclusion Initiatives",
];

const WhatWeOffer = () => {
  return (
    <section className="w-full bg-[#F6FAFF] py-16">
      {/* MAIN CONTAINER */}
      <div className="mx-auto max-w-6xl space-y-12 px-4">

        {/* HEADING */}
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            What we <span className="text-[#DBA40D]">Offer</span>
          </h2>
        </div>

        {/* BENEFITS GRID */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* LEFT */}
          <div className="space-y-4">
            {benefitsLeft.map((item) => (
              <div
                key={item}
                className="flex items-center rounded-md border border-[#E4EDF8] bg-white px-6 py-4 text-sm font-medium text-slate-600 shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <div className="space-y-4">
            {benefitsRight.map((item) => (
              <div
                key={item}
                className="flex items-center rounded-md border border-[#E4EDF8] bg-white px-6 py-4 text-sm font-medium text-slate-600 shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* JOIN OUR TEAM */}
      <div className="mt-14 px-4">
        <div className="mx-auto max-w-6xl rounded-3xl bg-slate-50 px-6 py-10 md:px-10 lg:px-16">
          <div className="space-y-6 max-w-xl">
            <h3 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Join Our <span className="text-[#DBA40D]">Team</span>
            </h3>

            <p className="text-sm leading-relaxed text-slate-600">
              We believe in teamwork, transparency and continuous growth. At Neev
              Realty, your ideas matter and your career grows with the organization.
            </p>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg bg-[#DBA40D] px-8 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(219,164,13,0.45)] transition hover:brightness-110"
            >
              Send your Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
