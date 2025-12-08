import Navbar from "../../app/reusable_components/navbar/navbar";
import Hero from "./herosection/hero"
import Banner from "./banner/banner"
import NewLaunchProjects from "./newproject/newlaunches";
import Trendingprojects from "./trendingproject/trending";
import WhyChooseNeev from "./whychoose/choose";
import DevelopersSection from "./developer/developers";
import BlogSection from "./blog/blog";
import Footer from "../reusable_components/footer/footer";


export default function Homepage() {
    return( 

          <div  >
    <Navbar/>
    <Hero/>
    <Banner/>
    <NewLaunchProjects/>
    <Trendingprojects/>
    <WhyChooseNeev/>
    <DevelopersSection/>
    <BlogSection/>
    <Footer/>
    </div>
    )
}
