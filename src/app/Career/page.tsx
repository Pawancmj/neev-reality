import Navbar from "../reusable_components/navbar/navbar";
import Career from "./section1";
import LifeAtNeev from "./section2";
import WhatWeOffer from "./section3";
import Footer from "../reusable_components/footer/footer";

export default function ContactPage() {
  return (
    <div>
<Navbar/>
     <Career/> 
     <LifeAtNeev/>
     <WhatWeOffer/>
      <Footer/>
    </div>
  );
}
