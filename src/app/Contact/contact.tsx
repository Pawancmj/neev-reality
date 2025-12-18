// app/contact/page.tsx
"use client";

import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
     <main>
      <div className="text-center mx-auto bg-[#F8FBFF]" style={{width:1520}} >
        <h1 className="font-bold mx-auto "style={{fontSize:32,width:182}}>Contact <span className="text-[#DBA40D]">Us</span> </h1>
        <p className="text-[#6D717F]">Looking for your dream home or a prime investment opportunity ? Our expert are here to guide you with trusted real advice personalized solutions.</p>
      </div>
    
    <div className=" flex items-center justify-center bg-white mx-auto px-4 py-16" style={{width:1190}}>
      <div className=" flex flex-col md:flex-row shadow-[0_18px_45px_rgba(0,0,0,0.06)] rounded-2xl overflow-hidden"style={{width:1190}}>
        
        <aside className="md:w-5/12 bg-[#D79D26] text-white px-10 py-12 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl md:text-[32px] font-semibold mb-4 leading-tight">
              Let’s get in touch
            </h2>

            <p className="text-sm leading-relaxed opacity-95  text-gray-100 mb-10 max-w-xs">
              Fill out the form and our team will connect with you shortly. We&apos;re
              happy to assist with residential, commercial or investment-related queries.
            </p>

            <div className="space-y-6 text-sm">
              
              <div className="flex items-center gap-4">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/55">
                  <Phone className="h-4 w-4" />
                </span>
                <span className="tracking-wide">+1012 3456 789</span>
              </div>

              
              <div className="flex items-center gap-4">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/55">
                  <Mail className="h-4 w-4" />
                </span>
                <span>demo@gmail.com</span>
              </div>

            
              <div className="flex items-start gap-4">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/55 mt-0.5">
                  <MapPin className="h-4 w-4" />
                </span>
                <span>
                  132 Dartmouth Street Boston,
                  <br />
                  Massachusetts 02156 United States
                </span>
              </div>
            </div>
          </div>

          
          <div className="relative mt-10 h-32">
            <div className="absolute right-[-40px] bottom-[-40px] h-40 w-40 rounded-full bg-white/15" />
            <div className="absolute right-6 bottom-[50px] h-28 w-28 rounded-full bg-white/10" />
          </div>
        </aside>

        
        <section className="md:w-7/12 bg-white px-10 py-12 flex flex-col justify-center">
          
          <div className="w-full max-w-xl ml-auto md:pl-10 mb-8">
            <label
              htmlFor="serviceType"
              className="block text-xs font-medium text-slate-500 mb-1"
            >
              How can we help you with*
            </label>
            <select
              id="serviceType"
              className=" border border-slate-300 text-[13px]  text-slate-500 py-2 px-3 rounded-md bg-white focus:outline-none focus:border-[#D79D26] cursor-pointer" style={{width:537}}
              defaultValue="residential"
            >
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
            </select>
          </div>

          <form className="w-full max-w-xl ml-auto md:pl-10 space-y-10">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-1">
                <label
                  htmlFor="firstName"
                  className="text-xs font-medium text-slate-700"
                >
                  First Name*
                </label>
                <input
                  id="firstName"
                  type="text"
                  className="w-full border-0 border-b border-slate-300 text-[13px] py-1 focus:outline-none focus:border-[#DBA40D]"
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="lastName"
                  className="text-xs font-medium text-slate-700"
                >
                  Last Name*
                </label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Doe"
                  className="w-full border-0 border-b border-slate-300 text-[13px] py-1 focus:outline-none focus:border-[#DBA40D]"
                />
              </div>
            </div>

          
            <div className="grid grid-cols-1 relative bottom-6 md:grid-cols-2 gap-10">
              <div className="space-y-1">
                <label
                  htmlFor="email"
                  className="text-xs font-medium text-slate-700"
                >
                  Email*
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full border-0 border-b border-slate-300 text-[13px] py-1 focus:outline-none focus:border-[#DBA40D]"
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="phone"
                  className="text-xs font-medium text-slate-700"
                >
                  Phone Number*
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+1 012 3456 789"
                  className="w-full border-0 border-b border-slate-300 text-[13px] py-1 focus:outline-none focus:border-[#DBA40D]"
                />
              </div>
            </div>

            
            <div className="space-y-1 relative bottom-10">
              <label
                htmlFor="message"
                className="text-xs font-medium text-slate-700"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={3}
                placeholder="Write your message.."
                className="w-full border-0 border-b border-slate-300 text-[13px] py-1 resize-none focus:outline-none focus:border-[#DBA40D]"
              />
            </div>

          
            <div className="pt-6 flex justify-center md:justify-start relative bottom-14 left-38">
              <button
                type="submit"
                className="rounded-md bg-[#DBA40D] px-10 py-3 text-sm font-semibold text-white shadow-[0_12px_25px_rgba(0,0,0,0.08)"
              >
                Send Message
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
   </main>
  );
}
