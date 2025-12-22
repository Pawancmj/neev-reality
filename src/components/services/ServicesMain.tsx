import {
  FiHome,
  FiCheckSquare,
  FiLayers,
  FiUser,
  FiDollarSign,
  FiHeadphones,
} from "react-icons/fi";

const services = [
  {
    title: "Site Visit Assistance",
    desc: "We offer guided site visits with complete project insights to help you make informed decisions.",
    icon: <FiHome />,
  },
  {
    title: "Fully Transparent Process",
    desc: "No hidden costs. No surprises. Every detail from pricing to paperwork is shared clearly.",
    icon: <FiCheckSquare />,
  },
  {
    title: "One-Stop Real Estate Solution",
    desc: "From property selection to site visits, home loans, legal checks, and documentation.",
    icon: <FiLayers />,
  },
  {
    title: "Expert Real Estate Advisors",
    desc: "Our advisors recommend the best properties based on your budget, location, and goals.",
    icon: <FiUser />,
  },
  {
    title: "Home Loan Consultation",
    desc: "We help you secure the best loan options and manage documents with banking partners.",
    icon: <FiDollarSign />,
  },
  {
    title: "After-Sales Assistance",
    desc: "We assist with builder coordination, possession updates, agreements, and support.",
    icon: <FiHeadphones />,
  },
];

export default function OurServices() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-[1240px] mx-auto px-4">
        
        {/* HEADING */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl font-semibold text-gray-900">
            Our <span className="text-[#F5A300]">Services</span>
          </h2>
          <p className="mt-4 text-sm text-gray-600">
            Whether you are searching for a home, a commercial space, or a high-potential
            investment, Neev Realty offers expert guidance at every step.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition p-6"
            >
              {/* ICON */}
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#F5A300] text-black mb-4">
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-sm font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-xs text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

