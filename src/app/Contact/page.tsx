import Navbar from "../reusable_components/navbar/navbar";
import ContactSection from "./contact";
import Faq from "./faq";
import TestimonialsSection from "../about/testimonial/testimonial"
import Footer from "../reusable_components/footer/footer";

export default function ContactPage() {
  return (
    <div>
<Navbar/>
      <ContactSection />
       <Faq/>
      <TestimonialsSection/>
      <Footer/>
    </div>
  );
}
