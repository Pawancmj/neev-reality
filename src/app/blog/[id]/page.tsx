"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
type FaqItem = {
  question: string;
  answer: string;
};

type BlogPost = {
  title: string;
  author: string;
  date: string;
  story: string;
  share: string;
  heroImage: string;
  heroAlt: string;
  faqs: FaqItem[];
};

const blogPost: BlogPost = {
  title: "20 Simple False Ceiling Design for Hall",
  author: "Silky Malhotra",
  date: "Nov 12, 2025",
  story: "Share this story",
  share: "/images/blogsection/blogimg2.png",
  heroImage: "/images/blogsection/blogimg1.png",
  heroAlt: "False ceiling design for hall",
  faqs: [
    {
      question: "Which is the most popular false ceiling design for hall?",
      answer:
        "Simple gypsum board ceilings with recessed lights or cove lighting are the most commonly used because they are cost-effective, easy to install, and suit both small and large halls.",
    },
    {
      question: "Is false ceiling good for a small hall?",
      answer:
        "Yes, as long as the design is not too heavy or layered. A single-level false ceiling with clean lines and minimal drop can make a small hall look more structured and well-lit.",
    },
    {
      question:
        "Which lighting works best with modern main hall fall ceiling design?",
      answer:
        "Yes, as long as the design is not too heavy or layered. A single-level false ceiling with clean lines and minimal drop can make a small hall look more structured and well-lit.",
    },
    {
      question: "Can I install a false ceiling in a small hall?",
      answer:
        "Yes, as long as the design is not too heavy or layered. A single-level false ceiling with clean lines and minimal drop can make a small hall look more structured and well-lit.",
    },
    {
      question:
        "How much does a simple false ceiling design for hall cost?",
      answer:
        "Yes, as long as the design is not too heavy or layered. A single-level false ceiling with clean lines and minimal drop can make a small hall look more structured and well-lit.",
    },
    {
      question:
        "Which is better – POP or gypsum ceiling design for hall?",
      answer:
        "Yes, as long as the design is not too heavy or layered. A single-level false ceiling with clean lines and minimal drop can make a small hall look more structured and well-lit.",
    },
    {
      question:
        "Does a false ceiling reduce room height significantly?",
      answer:
        "Yes, as long as the design is not too heavy or layered. A single-level false ceiling with clean lines and minimal drop can make a small hall look more structured and well-lit.",
    },
    {
      question: "How do I maintain my hall new ceiling design?",
      answer:
        "Yes, as long as the design is not too heavy or layered. A single-level false ceiling with clean lines and minimal drop can make a small hall look more structured and well-lit.",
    },
    {
      question:
        "Can false ceilings improve room temperature and acoustics?",
      answer:
        "Yes, as long as the design is not too heavy or layered. A single-level false ceiling with clean lines and minimal drop can make a small hall look more structured and well-lit.",
    },
    {
      question:
        "What are the trending hall modern ceiling designs in 2025?",
      answer:
        "Yes, as long as the design is not too heavy or layered. A single-level false ceiling with clean lines and minimal drop can make a small hall look more structured and well-lit.",
    },
  ],
};

const recentBlogs = [
  {
    title: "IGRSUP 2025: Complete Guide to Online Property Registration in UP",
    logo: "/images/blogsection/logo1.png",
  },
  {
    title: "20 Simple False Ceiling Design for Hall",
    logo: "/images/blogsection/logo2.png",
  },
  {
    title: "Top Citizenship by Investment Agents in 2026",
    logo: "/images/blogsection/logo3.jpg",
  },
  {
    title:
      "Managing AR and AP in Real Estate Projects for Better Cash Flow",
    logo: "/images/blogsection/logo4.jpg",
  },
  {
    title: "Top 15 Posh Areas in Delhi NCR (2025)",
    logo: "/images/blogsection/logo5.png",
  },
];
const tocItems = [
  { id: "intro", label: "Introduction" },
  { id: "fall-ceiling-intro", label: "Minimalist Ceiling" },
  { id: "recessed", label: "Recessed Lights" },
  { id: "gypsum", label: "Gypsum Ceiling" },
  { id: "wooden", label: "Wooden Coffered Ceiling" },
  { id: "layered", label: "Layered Ceiling" },
  { id: "chandelier", label: "Ceiling with Chandelier" },
  { id: "pop", label: "POP Linear Ceiling" },
  { id: "glossy", label: "Glossy Ceiling" },
  { id: "light-shapes", label: "Creative Light Shapes" },
  { id: "wooden-pannel", label: "Wooden Panel Ceiling" },
  { id: "two-tone", label: "Two-Tone Ceiling" },
  { id: "pendant", label: "Pendant Lighting" },
  { id: "pop-border", label: "POP Border Ceiling" },
  { id: "cove-lightining", label: "Cove Lighting" },
  { id: "grey-white", label: "Grey & White Ceiling" },
  { id: "led-color", label: "LED Color Play" },
  { id: "zigzag", label: "Zig-Zag Ceiling" },
  { id: "conclusion", label: "Conclusion" },
];




export default function BlogDetailPage() {
  const blog = blogPost;

  const [activeId, setActiveId] = useState("intro");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-140px 0px -60% 0px",
        threshold: 0,
      }
    );

    tocItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-140px 0px -60% 0px",
        threshold: 0,
      }
    );

    tocItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const y =
      el.getBoundingClientRect().top +
      window.scrollY -
      140;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };


  return (
    <main className="bg-[#f5f5f5] w-full">
      <div className="mx-auto max-w-7xl px-4 ">
        {/* ================= BREADCRUMB ================= */}
        <div className="max-w-[1240px] mx-auto px-4 py-2 md:py-4 text-sm text-gray-500">

          Home / Blog /{" "}
          <span className="text-gray-900 font-medium">{blogPost.title}</span>
        </div>
        {/* ================= CONTENT + SIDEBAR ================= */}
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[3fr_1fr]">

          {/* ================= LEFT COLUMN ================= */}
          <div className="space-y-8">

            {/* TITLE + META + IMAGE */}
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold">
                {blog.title}
              </h1>

              <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-gray-500">
                <span>
                  By <span className="text-blue-700">{blog.author}</span>
                </span>
                <span>• {blog.date}</span>

                <div className="ml-auto flex items-center gap-2">
                  <span>{blog.story}</span>
                  <Image src={blog.share} alt="" width={32} height={32} />
                </div>
              </div>

              <div className="relative mt-4 w-full aspect-[16/7] rounded-lg overflow-hidden">
                <Image
                  src={blog.heroImage}
                  alt={blog.heroAlt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* BLOG CONTENT */}
            <article className="bg-white rounded-lg p-5 md:p-8 shadow-sm space-y-6">
              <section id="intro" className="mb-6"> <h2 className="mb-3 border-l-4 border-[#993F7F] pl-3 text-lg font-semibold"> Introduction <br /> <span className="block mt-1 text-sm md:text-base font-normal italic text-gray-700">
                Launched in 2015, across 100 cities in India, the Smart City Initiative
                offers an exceptional living experience to home buyers with smart
                e-governance, better water and traffic management, and more.
              </span> </h2>

                {/* ================= MOBILE TABLE OF CONTENTS ================= */}
                <section className="mt-5 lg:hidden">
                  <details className="group bg-[#FDECEC] rounded-lg p-5">
                    <summary className="flex items-center justify-between cursor-pointer list-none">
                      <h2 className="text-lg font-semibold text-gray-900">
                        Table of Contents
                      </h2>
                      <span className="transition-transform duration-300 group-open:rotate-180">
                        ▼
                      </span>
                    </summary>

                    <div className="mt-4 space-y-2 text-sm text-gray-800">
                      <ol className="list-decimal pl-5 space-y-1">
                        <li><a href="#intro">Introduction</a></li>
                        <li><a href="#what-is-smart-city">What is a Smart City</a></li>
                        <li>
                          Top 10 Smart Cities
                          <ol className="list-decimal pl-5 mt-1 space-y-1">
                            <li><a href="#bhubaneswar">Bhubaneswar</a></li>
                            <li><a href="#pune">Pune</a></li>
                            <li><a href="#indore">Indore</a></li>
                            <li><a href="#ahmedabad">Ahmedabad</a></li>
                            <li><a href="#jaipur">Jaipur</a></li>
                            <li><a href="#coimbatore">Coimbatore</a></li>
                            <li><a href="#chandigarh">Chandigarh</a></li>
                            <li><a href="#hyderabad">Hyderabad</a></li>
                          </ol>
                        </li>
                        <li><a href="#conclusion">Conclusion</a></li>
                      </ol>
                    </div>
                  </details>
                </section>



                <p className="text-sm leading-relaxed md:text-base">
                  When you think of interior design, the ceiling often goes unnoticed. However, this structure plays a significant role in shaping the overall vibe of your property. A well-planned false ceiling design for your hall can instantly elevate the overall look of the space. You’d love a stylish and practical ceiling to enhance the visual appeal of your space. A false ceiling is a smart design that maximizes the splendor of your interiors. A false ceiling design for hall neatly conceals messy electrical wires, improves sound quality, and sets the perfect structure for mood lighting. </p> <p className="mt-5">False ceiling designs for living room and main halls in modern homes are now an essential part of interior designs. Homeowners are now interested in designs that blend elegance and simplicity. With the right </p> </section>
              <section id="fall-ceiling-intro"> <h2 className="font-bold">fall ceiling design for hall.</h2> <p>In this article, we have shortlisted 20 simple main hall false ceiling designs that blend style and elegance, transforming your living spaces.</p> </section> <section className="mt-6">
                <h1 className="font-bold text-xl" id="minimalist">Best False Ceiling Designs For Living Room</h1> <h1 className="mt-3">Minimalist False Ceiling with Warm Yellow Lighting </h1> <p>A plain, single-layer ceiling with sharp edges can sometimes do more for a room than heavy designs. Add a strip of warm yellow lighting along the borders, and the hall immediately feels softer, calmer, and more welcoming. This look works especially well in smaller spaces where you want brightness without crowding the room with details.</p> <p className="mt-4">This kind of setup is also perfect for modern homes where less is more, yet style cannot be compromised. With its neat finish and soothing ambiance, this simple main hall false ceiling design blends functionality with comfort, giving your living area a timeless look that feels effortlessly classy.</p> </section>
              <section id="recessed"> <h1 className="font-bold mt-6">Recessed Lights in Hall False Ceiling</h1> <p className="mt-4">Do you want your hall to look modern without going too flashy? Look out for a ceiling design with recessed lights.</p> <p className="mt-3">This false ceiling design for hall keeps the lights tucked away, so nothing hangs down or clutters the view. The glow feels soft, almost like daylight flowing through the space. Isn’t that what we want in a hall? It’s bright, open, and welcoming.</p> <p className="mt-3">If you want to frame the ceiling, run the lights along the frame. You can also place them in neat rows to achieve a balanced shine. In case you’re hosting friends, dim the lights down to create a cozy vibe. When you’re celebrating festivals, the room will come alive when you turn them up.</p> <p className="mt-3">This false ceiling design is clean, simple, and stylish. It makes people feel comfortable the moment they step in.</p> </section>
              <section className="mt-5" id="gypsum"> <h1 className="font-bold">Bright & Airy Gypsum Ceiling for Modern Living Room</h1> <p className="mt-3">A living room sets the tone for your entire home. If it feels dull or heavy, the whole space loses its charm. That’s why many homeowners turn to gypsum. It’s light, smooth, and instantly makes the hall feel more open.</p> <p className="mt-3">This false ceiling design for living room has a natural brightness that bounces light beautifully. If you want a cozy vibe in the evenings, add recessed lights or LED strips around the edges. In case you prefer a cheerful, airy look during the day, keep the finish simple and white. It reflects every bit of sunlight.</p> <p className="mt-3">What makes gypsum so popular is its versatility. It comes with clean lines, modern shapes, and elegant style. It’s a ceiling that lifts the entire mood of the room.</p> </section>
              <section className="mt-6" id="wooden"> <h1 className="font-bold">Wooden Coffered False Ceiling Design</h1> <p className="mt-3">The organic essence of wood makes your interiors warmer. You can add a coffered pattern to it to make your hall grand. It will resemble the interiors of old mansions. </p> <p className="mt-3">This new ceiling design uses wooden beams arranged in neat squares or rectangles. The depth it creates makes the ceiling stand out without being too loud. Want to make it dramatic? Slip in recessed lights within the panels. Prefer something homely? Keep the natural wood tones, and the texture will enhance the elegance of your home.</p> <p className="mt-3">A wooden coffered ceiling adds character to your halls. The interior feels warmer, richer, and welcoming.</p> </section>
              <section className="mt-6" id="layered"> <h1 className="font-bold">Layered and Hanging False Ceiling Combo</h1> <p className="mt-3">Sometimes, one ceiling style just isn’t enough. That’s where a layered and hanging combo shines. You get the depth of layers and the drama of hanging panels, perfect for a modern main hall fall ceiling design. </p> <p className="mt-3">Imagine walking into your hall and noticing that the ceiling itself becomes a feature. Layers catch the light in different ways, and hanging elements can frame a light fixture or even a piece of art. It makes the room feel alive, not flat.</p> <p className="mt-3">You can keep it subtle with soft, floating layers or bold with contrasting colors. Either way, it’s about creating a space that feels open, stylish, and inviting. Experience the mood of the room when you elevate it.</p> </section>
              <section className="mt-6" id="chandelier"> <h1 className="font-bold">Elegant Plywood Hall Ceiling with Chandelier</h1> <p className="mt-3">Have you ever walked into a hall and felt instantly at home? A new ceiling design with plywood and a chandelier evokes exactly this kind of a vibe. With the wood, you get warmth, texture, and a natural charm that makes your room feel cozy and stylish. </p> <p className="mt-3">The chandelier is the centerpiece of your hall. It’s more than the soft glow that bounces off the plywood. Your evenings are going to be welcoming and magical. This hall design is effective in impressing your guests without overwhelming them. Just keep the design simple. </p> <p className="mt-3">If you are looking for a modern twist, add geometric patterns or layered panels. The ceiling lifts your mood and infuses your hall with personality. Every moment you spend in these spaces feels special.</p> </section>
              <section className="mt-6" id="pop"> <h1 className="font-bold">POP Linear Frame Ceiling for Compact Halls</h1> <p className="mt-3">If you have a compact hall, you might be wondering what the right false ceiling design must look like. That’s why a POP linear frame ceiling for compact halls is such a smart choice. The linear frames attract attention across the room. It creates a sense of space and depth without occupying much space.</p> <p className="mt-3">You can keep it simple with straight lines or play with patterns to add character. Consider adding recessed lights along the edges, so that these compact spaces look airy and inviting. This small hall ceiling design is lightweight and easy to install. Besides, you can paint these ceilings in any colour to match your interior décor.  </p> <p className="mt-3">For compact halls, this design makes the space look bigger and brighter as you step in.</p> </section>
              <section className="mt-6" id="glossy"> <h1 className="font-bold">Glossy Polished False Ceiling for a Minimal Look</h1> <p className="mt-3"> with a glossy, polished finish. The smooth surface reflects light in a way that makes the room feel airy and</p> <p className="mt-3">Those who love minimalism may try this design. The clean and neutral tones keep the design elements simple. The shine adds a bit of sophistication to the interiors. If you are someone who loves to enjoy soft evening moods, add some well-spaced lights so that the ceiling glows. It will create a cozy yet elegant vibe. This ceiling design feels lively and welcoming. Sometimes, a simple touch like this is all it takes to change the whole room.  </p> </section>
              <section className="mt-6" id="light-shapes"> <h1 className="font-bold">Light Shape Patterns for Creative Hall Ceiling Design</h1> <p className="mt-3"> Looking to make your hall feel playful and unique? A hall modern ceiling design with light-shape patterns can do wonders. This particular design involves geometric shapes, waves, or even abstract patterns that catch the eye and spark curiosity.</p> <p className="mt-3">It’s not just about looks, but the way the lights are arranged. It can completely change the mood. Want a calm, cozy evening? Soft, warm LEDs are all you need. Feeling festive or hosting friends? Bright, dynamic shapes make the hall lively and inviting.  </p> <p className="mt-3">The best part is that these ceilings let your personality shine. They’re perfect for anyone who wants their space to feel creative, fun, and alive without making the room feel overwhelming.   </p> <p className="mt-3">These false ceiling designs are not just about the structure overhead, but choosing the right design elements that people notice and remember.</p> </section>
              <section className="mt-6" id="wooden-pannel"> <h1 className="font-bold">Wooden Panel False Ceiling for Warmth</h1> <p className="mt-3"> Wood has this fantastic way of making a hall feel alive, doesn’t it? A hall modern ceiling design with wooden panels instantly adds warmth and character. The moment you step in, it doesn’t feel cold or empty anymore.</p> <p className="mt-3">You can keep it simple with long horizontal panels or mix widths for a playful texture. Tuck warm LEDs along the edges and watch the wood glow. It feels cozy, almost like the room is hugging you. </p> <p className="mt-3">The best part is how natural it feels. It’s not trying too hard. Just a ceiling that quietly makes the hall inviting, stylish, and full of life.  </p> </section> <section className="mt-6"> <h1 className="font-bold">Ceiling Dividers for Multi-Zone Halls</h1> <p className="mt-3"> Sometimes a big hall feels too empty or chaotic. That’s where ceiling dividers for multi-zone halls come in. These structures are used to separate spaces without building walls. Therefore, you get separate zones for lounging, dining, or work.</p> <p className="mt-3">So, when you walk in, you’ll notice how the ceiling serves as a guide. One section of your hall gives way to another. The design is intentionally done, and you can play around with materials. For instance, wood slats add warmth, gypsum panels add to the elegance, and you can even mix up different materials and textures. Along the divider, install ceiling lights so that each zone is highlighted beautifully. </p> <p className="mt-3">The design is practical and stylish. When you host a family gathering, it gives everyone their natural space. A well- planned ceiling divider provides structure to your hall, creating a mood and elevating the feeling of liveliness.</p> </section>
              <section className="mt-6" id="two-tone"> <h1 className="font-bold">Two-Tone False Ceiling with Gypsum & Wood</h1> <p className="mt-3"> Have you ever walked into a hall and felt the ceiling itself pulling you in? That’s the charm of a hall new ceiling design with gypsum and wood. Out of these tones, one keeps the design light and airy. On the other hand, the wood adds warmth and character to your interiors.</p> <p className="mt-3">There’s a lot of scope for experimentation. If you want a bright interior, use gypsum on most parts of your hall. The wooden panels should create cozy pockets and highlight specific areas. Along the junction, add some soft lights to make the ceiling come alive. This false ceiling design for hall is subtle but powerful. A simple two-tone mix can completely change the mood. It makes your hall feel welcoming, stylish, and full of personality.</p> </section> <section className="mt-6"> <h1 className="font-bold">Fusion False Ceiling with Mixed Elements</h1> <p className="mt-3">Why stick to one material when you can mix and match? A hall modern ceiling design with fused elements brings creativity and personality to your space. Imagine wood, gypsum, and even a touch of metal coming together in a single ceiling. It feels playful, modern, and unique..</p> <p className="mt-3">You can create patterns, layers, or subtle contrasts. For instance, consider adding concealed LED strips along the edges or inside the panels. As the light changes, the hall keeps transforming. The ceiling design becomes a part of the mood your interiors evoke. It influences the energy and essence of the room.This design isn’t meant just for decoration. It adds depth to your property and guides the eyes. The design makes the space feel alive and dynamic.</p> </section>
              <section className="mt-6" id="pendant"> <h1 className="font-bold">Luxury Hall Ceiling with Pendant Lighting</h1> <p className="mt-3">Have you ever noticed how a ceiling can completely change the feel of a room? A modern ceiling design with pendant lighting does just that. The lights hang gently, attracting the eyes upward while adding a sense of elegance to the hall.</p> <p className="mt-3">The best part about this ceiling design for hall is your freedom to mix different shapes and sizes or maintain a clean and uniform look. The soft glow from the pendants spreads warmth across the space. If you are hosting friends or enjoying a quiet evening, the lights adjust the mood seamlessly.</p> <p className="mt-3">Think of small details like metallic finishes or subtle colors. All these design elements can make a significant difference. The ceiling sets the tone of the entire hall, which makes every moment feel luxurious and cozy.</p> </section>
              <section className="mt-6" id="pop-border"> <h1 className="font-bold">POP Border False Ceiling for Hall</h1> <h3 className="font-bold">false ceiling design for hall</h3> <p className="mt-3">You can keep it thin and minimal, or go for gentle patterns that draw the eye. Also, consider adding a few soft LED lights along the border. With the right design, you can make the ceiling play with the light. This is a great way to create a warm and inviting vibe in your hall. Although this is a simple false ceiling design for hall, it works great. With a POP border, the halls feel more complete and cozy. No wonder small touches matter the most when you design your false ceiling.</p> </section> <section className="mt-6"> <h1 className="font-bold">Circular False Ceiling with Chandelier</h1> <p className="mt-3">Have you ever looked up and felt the ceiling itself making a statement? That’s the essence of a hall ceiling design with a circular false ceiling and chandelier. The round shape naturally draws your eyes, giving the hall a sense of balance and focus.</p> <p className="mt-3">In the centre, you need to hang a chandelier. The soft light spills across all the curves. The gatherings in the evenings feel warm and intimate. In the daytime, the brightness reflects beautifully off the smooth surface. Want to make it playful? Add a tiny LED accent around the circle. It adds to the sparkle softly.</p> <p className="mt-3">Every time you walk in, the ceiling greets you with elegance. It makes the space feel alive and welcoming. It’s all about adding personality to the hall, something plain and flat designs fail to deliver.</p> </section>
              <section className="mt-6" id="cove-lightining"> <h1 className="font-bold">White Cove Lighting Ceiling for Modern Hall</h1> <p className="mt-3">How about adding soft lighting to transform the vibe of your room completely? Just get a hall modern ceiling design with white cove lighting. The gentle glow along the edges makes the hall feel airy and calm. You’ll love how effortlessly stylish it looks. </p> <p className="mt-3">While this is a subtle ceiling design for hall, it works wonders. You need not add bright overhead lights all the time. The cove lighting creates a welcoming ambiance that’s perfect for evenings, gatherings, or even quiet nights at home.</p> <p className="mt-3">If you’re looking for something more dramatic, add a chandelier or pendant lights in the center. This will make the hall feel layered and alive.</p> <p className="mt-3">The simplicity of this design makes it amazing. The ceiling looks elegant, yet not so loud. It whispers splendour, making your space look bigger. The interior space gets a serene and modern personality.</p> </section>
              <section className="mt-6" id="grey-white"> <h1 className="font-bold">Grey Interior Hall with Sleek White Ceiling</h1> <p className="mt-3">Grey walls can feel serious, even a little cold sometimes. But a modern hall ceiling design in sleek white changes everything. The interiors feel lighter, open and calm.  </p> <p className="mt-3">When you look up, you’ll notice how the white ceiling softens the grey, bouncing light around so corners. It looks elegant without being too heavy. Hosting friends? The hall feels fresh and welcoming. Just sitting alone with a cup of coffee? It feels peaceful and soothing.</p> <p className="mt-3">Give small touches to your false ceiling like a pendant light, or a few recessed LEDs. These design elements eventually work together to create a visible difference. The ceiling design interacts with the room and lifts the mood. It quietly tells that your space is meant to be lived in the way you love.</p> </section>
              <section className="mt-6" id="led-color"> <h1 className="font-bold">LED-Enhanced False Ceiling with Color Play</h1> <p className="mt-3">Have you ever looked up and felt instantly energized? A hall new ceiling design with LED enhancements and color play does exactly that. Imagine soft blues, warm ambers, or even dynamic colours shifting subtly across the ceiling. It makes the hall feel alive and playful.</p> <p className="mt-3">It’s perfect for every mood. Hosting a party? Turn up vibrant tones and watch the energy in the room soar. If you want a relaxing evening vibe, just dim the lights to soothing hues. It simply melts away the tension and lightens your mood.</p> <p className="mt-3">Install personalized LED lights that highlight shapes, edges, or patterns. These design elements add depth to your ceiling. Beyond enriching your interior décor, it adds to your experience. Whenever you look upward, the design will surprise you and lift your spirits. This makes your hall feel modern and classy.</p> </section>
              <section className="mt-6" id="zigzag"> <h1 className="font-bold">Modern Zig-Zag False Ceiling for Living Room</h1> <p className="mt-3">The zigzag ceiling instantly gives the hall a personality of its own. A false ceiling design for living room like this isn’t just about lines, buts about movement and life. The sharp patterns guide your eyes across the room, making the space feel dynamic and exciting.</p> <p className="mt-3">Add a few hidden LED strips, and suddenly the shapes pop. Shadows dance along the walls. The hall feels modern, cozy, and alive all at once. Sitting with a cup of coffee or hosting friends, the ceiling becomes a quiet conversation starter, something people notice without even trying.</p> <p className="mt-3">It’s bold, but not overwhelming. Clean lines, clever lighting, and a touch of creativity make this design feel fresh, stylish, and totally memorable.</p> </section>
              <section className="mt-6" id="conclusion"> <h1 className="font-bold">Conclusion</h1> <p className="mt-3">A perfectly customized false ceiling design for hall can completely transform your living space. In this blog, we have presented you with 20 amazing ideas that can blend seamlessly with your interiors. All these false ceiling designs are simple and modern. Each of them lifts your room, which makes your hall feel stylish and welcoming.</p>
              </section>
            </article>

            {/* FAQ */}
            <section className="bg-white rounded-lg p-4 shadow-sm">
              <h3 className="font-semibold mb-3">FAQs</h3>
              {blog.faqs.map((faq, i) => (
                <details key={i} className="group py-2">
                  <summary className="flex cursor-pointer items-center justify-between bg-gray-50 p-2 text-sm font-medium">
                    {faq.question}
                    <span className="group-open:rotate-180 transition-transform">
                      ▾
                    </span>
                  </summary>
                  <p className="mt-2 text-sm text-gray-600">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </section>

            {/* ================= MOBILE LATEST BLOGS ================= */}
            <section className="bg-white rounded-lg p-4 lg:hidden">
              <h3 className="font-semibold mb-2">Latest Blogs</h3>

              <p className="text-xs text-gray-400 mb-4">
                Updates from around the world
              </p>

              <ul className="space-y-4">
                {recentBlogs.map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <Image
                      src={item.logo}
                      alt=""
                      width={44}
                      height={44}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-medium">
                        {item.title}
                      </p>
                      <button className="text-xs text-[#993F7F] font-semibold">
                        Read More
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="flex justify-center mt-4">
                <button className="bg-[#DBA40D] text-white px-4 py-2 rounded-lg text-sm font-semibold">
                  View more
                </button>
              </div>
            </section>

          </div>

          {/* ================= RIGHT COLUMN ================= */}
          <aside className="hidden lg:block space-y-6">
            <div className="sticky top-[110px] mt-[95px]">

              {/* ===== TABLE OF CONTENTS ===== */}
              <div className="bg-white rounded-lg p-5 shadow-sm">
                <h3 className="text-lg font-semibold mb-4">
                  Table of Contents
                </h3>

                <ul className="space-y-2 text-sm">
                  {tocItems.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className={`
                w-full text-left pl-3 border-l-2 transition-all duration-200
                ${activeId === item.id
                            ? "border-[#993F7F] text-[#DBA40D] font-semibold"
                            : "border-transparent text-gray-600 hover:text-[#DBA40D]"
                          }
              `}
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ===== RECENT BLOGS (OPTIONAL – SAME AS PEHLE) ===== */}
              <section className="bg-white rounded-lg p-4 mt-6">
                <h3 className="font-semibold mb-2">Latest Blogs</h3>
                <p className="text-xs text-gray-400 mb-4">
                  Updates from around the world
                </p>

                <ul className="space-y-4">
                  {recentBlogs.map((item, index) => (
                    <li key={index} className="flex gap-3">
                      <Image
                        src={item.logo}
                        alt=""
                        width={44}
                        height={44}
                        className="rounded-full object-cover"
                      />
                      <div>
                        <p className="text-sm font-medium">
                          {item.title}
                        </p>
                        <button className="text-xs text-[#993F7F] font-semibold">
                          Read More
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="flex justify-center mt-4">
                  <button className="bg-[#DBA40D] text-white px-4 py-2 rounded-lg text-sm font-semibold">
                    View more
                  </button>
                </div>
              </section>

            </div>
          </aside>

        </div>

      </div>
    </main>
  );
}
