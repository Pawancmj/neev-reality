import Navbar from "../reusable_components/navbar/navbar";
import Section1 from "./section1/section1"
import TestimonialsSection from "./testimonial/testimonial";
import Footer from "../reusable_components/footer/footer";



export default  function about(){
    return(
        <div>
      <Navbar/>
        <Section1/>
        <TestimonialsSection/>
        <Footer/>
    </div>
    );
}