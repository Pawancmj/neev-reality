
import Image from "next/image";

const steps = [
  {
    title: "Personalized Consultation",
    desc: "Our experts will evaluate your real estate goals and preferences.",
    logo:"/images/aboutimg/logo1.png"
  },
  {
    title: "Curated Property Selection",
    desc: "We'll present the best options tailored to your preferences.",
    logo:"/images/aboutimg/logo2.png"
  },
  {
    title: "Immersive Property Experiences",
    desc: "Explore properties through virtual tours or in-person visits.",
    logo:"/images/aboutimg/logo3.png"
  },
  {
    title: "Comprehensive Financial Guidance",
    desc: "Get expert advice on loans, investments, and tax implications.",
    logo:"/images/aboutimg/logo4.png"
  },
  {
    title: "Seamless Transactions And Support",
    desc: "Enjoy a smooth buying process and ongoing assistance.",
    logo:"/images/aboutimg/logo5.png"
  },
];


export default function Home() {
  return (
    <main>
      <div className="mx-auto relative bottom-15" style={{width:1520,height:617}}>
 <h1 className="relative top-34 left-25  text-white" style={{fontSize:60,width:638,height:60}}>Turning <span className="text-[#E7C873]"> Dreams </span> into Real Homes</h1>
         <Image
                        src="/images/aboutimg/img1.jpg"
                        alt=""
                        width={1520}
                        height={617}
                        className=""
                        style={{width:1520,height:617}}
                      />
                      <button className="border-2 text-white p-2 rounded-lg relative bottom-80 left-30">LET US GUIDE YOUR HOME</button>

                      <div className="flex relative bottom-42 left-25 " style={{width:172,height:54}}>
                       <Image
                        src="/images/aboutimg/img2.png"
                        alt=""
                        width={172}
                        height={54}
                        className="rounded-full"
                        style={{width:172,height:54}}
                      />
                      </div>
      </div>

      <div>
        <h1 className="font-medium relative  top-16 mx-auto  " style={{fontSize:68,width:1144,fontFamily:"Roboto",height:182}}>Welcome to Neev Realty - <span className="text-[#1D4ED8]"> Turning Dreams </span> Into Real Homes</h1>
      </div>


      <div className="relative top-54 right-88 mx-auto "style={{width:440}}>
        <h1 className="mb-6" style={{width:440,height:84,fontSize:52}}> <span className="text-[#1D4ED8]" style={{fontSize:66}}>WHO</span> WE ARE</h1>
        <p className="font-medium  text-[#3E3E3E]" style={{fontSize:20,width:390}}>As a leading luxury real estate boutique firm, we offer a comprehensive range of solutions tailored to your specific needs. We specialize in brand-new projects across Delhi NCR. <br />From investment portfolios to first-time home purchases, property sales, and loan assistance, our team of experienced advisors is dedicated to providing personalized solutions that meet your unique needs. <br />Discover your real estate journey with Neev Realty.</p>
      </div>
       
       <div className="grid grid-cols-2 relative left-90 bottom-64 mx-auto" style={{width:510,height:501}}>
        <Image
                        src="/images/aboutimg/img3.jpg"
                        alt=""
                        width={177}
                        height={177}
                        className="rotate-45 relative top-8 left-10 object-cover"
                        style={{width:177,height:177}}
                      />
                      <Image
                        src="/images/aboutimg/img4.jpg"
                        alt=""
                        width={251}
                        height={251}
                        className="object-cover "
                        style={{width:251,height:251}}
                      />
                      <Image
                        src="/images/aboutimg/img5.jpg"
                        alt=""
                        width={251}
                        height={251}
                        className="rounded-bl-full object-cover"
                        style={{width:251,height:251}}
                      />
                      <Image
                        src="/images/aboutimg/img6.jpg"
                        alt=""
                        width={251}
                        height={251}
                        className="rounded-full object-cover"
                        style={{width:251,height:251}}
                      />
       </div>



       <div className="mx-auto relative bottom-40" style={{width:1154,height:365,gap:21}}>
        <h1 className="relative mx-auto text-center " style={{fontSize:48,width:1154,height:105}}> <span className="text-[#1D4ED8]" style={{fontSize:65}}>Why</span> Are We Different?</h1>

        <div className="flex gap-16 relative left-2">
            <p className="text-[#3E3E3E]" style={{width:539,height:215}}>At Neev Realty, we redefine real estate with a client-first philosophy.Our unique solutions are crafted to match your unique aspirations,whether you are seeking a luxurious home, building a profitable investment portfolio or navigating the complexities of property sales. We believe in empowering our clients with expert insights,curated property selections and expert financial advice to make informed decisions. Our approach is rooted in trust, transparency and a deep understanding of the ever-evolving real estate landscape.</p>
        

        
            <p className="text-[#3E3E3E]" style={{width:539,height:239}}>What truly makes us stand out is our ability to merge personalizationwith expertise. With over 20 years of experience and a portfolio of 100 premium projects, we deliver a world of opportunities tailored just for you. From immersive virtual tours and in-person visits to seamless transaction support and ongoing assistance, we ensure your journey with us is as smooth as it is successful. At Neev Realty, we combine local expertise and global insight, ensuring that every client enjoys unparalleled service and a rewarding real estate experience. Experience the difference with Neev Realty - a trustedpartner who brings your real estate dreams to life.</p>
        </div>

       </div>



        <section className="w-full  mx-auto " style={{width:1281,height:329}}>
      {/* Heading */}
      <div className="text-center mb-10 px-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900">
          <span className="text-blue-500 font-semibold">5 Steps</span>{" "}
          to Your Dream Home
        </h2>
      </div>

      {/* Cards */}
      <div className="mx-auto  px-4 grid gap-6 md:grid-cols-3 lg:grid-cols-5" style={{width:1281}}>
        {steps.map((step) => (
          <div
            key={step.title}
            className="flex flex-col items-center text-center border  border-gray-200 rounded-md  shadow-sm py-8 px-4"
             style={{width:221,height:192}}>
            
           <div className="">
              <Image
                src={step.logo}
                alt={step.title}
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <h3 className="font-semibold text-gray-900 " style={{fontSize:16,width:190}}>
              {step.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed" style={{fontSize:13}}>
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
      
    </main>
  );
}
