import Navbar from "../reusable_components/navbar/navbar"
import BlogPage from "./section1/section1"
import Footer from "../reusable_components/footer/footer"


export default function blog(){
    return(
        <div>
            <Navbar/>
           <BlogPage/>
           <Footer/>
        </div>
    )
}