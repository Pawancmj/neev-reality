import Navbar from "../reusable_components/navbar/navbar";
import Footer from "../reusable_components/footer/footer";

export default function PrivacyPolicy() {  // Better name, but works as ComingSoon too
  return (
    <>
      <Navbar />
      
      <section className="py-4 px-4 sm:px-6 lg:ml-20 lg:-left-20 lg:px-0 text-left">
        <div className="max-w-[1243px] mx-auto">
          {/* Title - centered, exact size */}
          <h1 className="font-semibold text-4xl text-center mb-5">Terms And Condition</h1>
          
          {/* Intro Paragraph */}
          <div className="w-full lg:w-[1223px] mb-2">
            <p className="w-full lg:w-[1223px]">
             Welcome to Neev Realty! By accessing or using our website ("www.neevrealty.com") you agree to comply with and be bound by these Terms and Conditions (“Terms”). Please read them carefully before using the Site. If you do not agree with these Terms, please refrain from using the Site. </p>        </div>

          {/* Section 1 */}
          <div className="w-full lg:w-[1120px] mb-8 lg:mb-3">
            <h1 className="font-semibold text-xl lg:text-2xl lg:leading-tight">1. Introduction</h1>
            <p className="mb-4 lg:mb-2">Neev Realty operates this Site to provide information about our real estate services and properties in India. These Terms govern your use of the Site, including all content, features, and services provided.</p>
          </div>

          {/* Section 2 */}
          <div className="w-full lg:w-[1120px] mb-8 lg:mb-3">
            <h1 className="font-semibold text-xl lg:text-2xl lg:leading-tight">2. Eligibility</h1>
            <div className="ml-0 lg:ml-4 space-y-2">
              <h3 className="leading-tight">By using the Site, you confirm that:</h3>
              <h3 className="leading-tight"><span className="font-bold">.</span> You are at least 18 years of age.</h3>
              <h3 className="leading-tight"><span className="font-bold">.</span> You have the legal authority to enter into these Terms.</h3>
                </div>
          </div>

          {/* Section 3 */}
          <div className="w-full lg:w-[1120px] mb-8 lg:mb-3">
            <h1 className="font-semibold text-xl lg:text-2xl lg:leading-tight">3. Use of the Site</h1>
            <p className="leading-tight">You agree to:</p>
            <h3 className="leading-tight"><span className="font-bold">.</span> Use the Site only for lawful purposes and in accordance with these Terms.</h3>
            <h3 className="leading-tight"><span className="font-bold">.</span> Refrain from using the Site in any manner that could damage, disable, or impair our services.</h3>
            <h3 className="leading-tight"><span className="font-bold">.</span>Not engage in unauthorized access, copying, or distribution of content from the Site.</h3>

          </div>

          {/* Section 4 */}
          <div className="w-full lg:w-[1120px] mb-8 lg:mb-3">
            <h1 className="font-semibold text-xl lg:text-2xl lg:leading-tight">4. Intellectual Property</h1>
           <h3 className="leading-tight"><span className="font-bold">.</span>All content on this Site, including text, graphics, logos, images, and software, is the intellectual property of Neev Realty or its licensors.</h3>
           <h3 className="leading-tight"><span className="font-bold">.</span>You may not copy, modify, distribute, or reproduce any content without prior written consent from Neev Realty.</h3>
          
          </div>

          {/* Section 5 */}
          <div className="w-full lg:w-[1220px] mb-8 lg:mb-3">
            <h1 className="font-semibold text-xl lg:text-2xl lg:leading-tight">5. Property Listings</h1>
           
             <h3 className="leading-tight"><span className="font-bold">.</span>Property listings on our Site are for informational purposes only and are subject to change without notice.</h3>
              <h3 className="leading-tight"><span className="font-bold">.</span>While we strive to provide accurate and up-to-date information, we do not guarantee the completeness, accuracy, or availability of listings.</h3>
              <h3 className="leading-tight"><span className="font-bold">.</span>All transactions and agreements related to properties are governed by applicable laws and specific terms of the agreements.</h3>

          </div>

          {/* Section 6 */}
          <div className="w-full lg:w-[1120px] mb-8 lg:mb-3">
            <h1 className="font-semibold text-xl lg:text-2xl lg:leading-tight">6. User-Submitted Information</h1>
           
            <div className="ml-0 lg:ml-4 space-y-2 lg:mb-4">
              <h3 className="leading-tight"><span className="font-bold">.</span> If you submit any information through the Site, including inquiries or feedback, you grant Neev Realty a non-exclusive, royalty-free license to use, modify, and display the content for business purposes.</h3>
              <h3 className="leading-tight"><span className="font-bold">.</span>You are responsible for ensuring the accuracy and legality of the information you provide.</h3>
            </div>
          </div>

          {/* Sections 7-11: Exact widths preserved */}
          <div className="space-y-8 lg:space-y-0 lg:mb-3">
            <div className="w-full lg:w-[1220px] mb-8 lg:mb-3">
              <h1 className="font-semibold text-xl lg:text-2xl lg:leading-tight">7. Privacy</h1>
              <p className="leading-relaxed">Your use of the Site is also governed by our Privacy Policy, which outlines how we collect, use, and protect your personal information.</p>
            </div>
            <div className="w-full lg:w-[1220px] mb-8 lg:mb-3">
              <h1 className="font-semibold text-xl lg:text-2xl lg:leading-tight">8. Disclaimer of Warranties</h1>
              <p className="leading-relaxed">The Site and its content are provided on an “as-is” and “as-available” basis. Neev Realty makes no representations or warranties of any kind, express or implied, regarding the Site, including but not limited to:</p>
               <h3 className="leading-tight"><span className="font-bold">.</span>The accuracy or reliability of content.</h3>
               <h3 className="leading-tight"><span className="font-bold">.</span>The uninterrupted or error-free operation of the Site.</h3>
            </div>
            <div className="w-full lg:w-[1220px] mb-8 lg:mb-3">
              <h1 className="font-semibold text-xl lg:text-2xl lg:leading-tight">9. Limitation of Liability</h1>
              <p className="leading-relaxed">To the fullest extent permitted by law, Neev Realty shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your use of the Site or reliance on its content</p>
            </div>
            <div className="w-full lg:w-[1220px] mb-8 lg:mb-3">
              <h1 className="font-semibold text-xl lg:text-2xl lg:leading-tight">10. Third-Party Links</h1>
              <p className="leading-relaxed">The Site may contain links to third-party websites for your convenience. Neev Realty is not responsible for the content, policies, or practices of these external sites. Access them at your own risk.</p>
            </div>
            <div className="w-full lg:w-[1220px] mb-8 lg:mb-3">
              <h1 className="font-semibold text-xl lg:text-2xl lg:leading-tight">11. Modifications to the Terms</h1>
              <p className="leading-relaxed">Neev Realty reserves the right to modify or update these Terms at any time without prior notice. Changes will be posted on this page with the “Effective Date” updated. Your continued use of the Site constitutes acceptance of the revised Terms.</p>
            </div>
            <div className="w-full lg:w-[1220px] mb-8 lg:mb-3">
              <h1 className="font-semibold text-xl lg:text-2xl lg:leading-tight">12. Governing Law and Dispute Resolution</h1>
              <p className="leading-relaxed">These Terms are governed by the laws of India. Any disputes arising from your use of the Site will be subject to the exclusive jurisdiction of the courts in Gurugram, Haryana.</p>
            </div>
            <div className="w-full lg:w-[1220px] mb-8 lg:mb-3">
              <h1 className="font-semibold text-xl lg:text-2xl lg:leading-tight">13 Termination</h1>
              <p className="leading-relaxed">Neev Realty reserves the right to suspend or terminate your access to the Site at its discretion, without notice, for any violation of these Terms or for other reasons deemed appropriate.</p>
            </div>
            <div className="w-full lg:w-[1220px]">
              <h1 className="font-semibold text-xl lg:text-2xl lg:leading-tight">14. Contact Us</h1>
              <p className="leading-relaxed mb-2">Neev Realty reserves the right to modify or update these Terms at any time without prior notice. Changes will be posted on this page with the “Effective Date” updated. Your continued use of the Site constitutes acceptance of the revised Terms.</p>
                            <h1 className="font-semibold text-xl lg:text-xl lg:leading-tight">11. Modifications to the Terms</h1>
                        <p>For any questions, concerns, or feedback regarding these Terms, please contact us:</p>
              <p className="leading-relaxed mb-1 font-medium">Neev Realty</p>
              <p className="leading-relaxed mb-1">Email: Info@neevrealty.com</p>
              <p className="leading-relaxed mb-1">Phone: +91 8824-966-966</p>
              <p className="leading-relaxed mb-2">Address: SF 09, Ninex City Mart, Sector 49, Gurgaon, Haryana, 122018</p>
              <p className="leading-relaxed">By using our services, you agree to the terms outlined in this Privacy Policy. We are committed to ensuring your privacy and building trust as your preferred real estate advisory in India.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

