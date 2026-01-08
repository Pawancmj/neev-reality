import Navbar from "../reusable_components/navbar/navbar";
import Footer from "../reusable_components/footer/footer";

export default function PrivacyPolicy() {  // Better name, but works as ComingSoon too
  return (
    <>
      <Navbar />
      
      <section className="py-4 px-4 sm:px-6 lg:ml-20 lg:-left-20 lg:px-0 text-left">
        <div className="max-w-[1243px] mx-auto">
          {/* Title - centered, exact size */}
          <h1 className="font-semibold text-4xl text-center mb-5">Disclaimer</h1>
          
          {/* Intro Paragraph */}
          <div className="w-full lg:w-[1223px] mb-2">
            <p className="w-full lg:w-[1223px]">
The information provided on the Neev Realty website ("www.neevrealty.com") is for general informational purposes only. While we strive to ensure the accuracy and reliability of the content, we make no guarantees or warranties of any kind, express or implied, regarding the completeness, accuracy, or availability of the information provided.            </p>
          </div>

          {/* Section 1 */}
          <div className="w-full lg:w-[1120px] mb-8 lg:mb-3">
            <h1 className="font-semibold text-xl lg:text-2xl lg:leading-tight">1. No Real Estate Advice</h1>
            <p className="mb-4 lg:mb-2">The content on this Site, including property listings, descriptions, and related materials, is provided for informational purposes only and should not be considered professional real estate advice. For specific advice tailored to your needs, please consult with qualified real estate professionals or legal advisors.</p>
          </div>

          {/* Section 2 */}
          <div className="w-full lg:w-[1120px] mb-8 lg:mb-3">
            <h1 className="font-semibold text-xl lg:text-2xl lg:leading-tight">2. Accuracy of Information</h1>
            <div className="ml-0 lg:ml-4 space-y-2">
              <h3 className="leading-tight"><span className="font-bold">.</span>Property details, availability, prices, and other related information are subject to change without prior notice.</h3>
              <h3 className="leading-tight"><span className="font-bold">.</span> While we endeavor to keep the information up to date, inaccuracies or typographical errors may occur. Neev Realty disclaims liability for any such errors or omissions.</h3>
                </div>
          </div>

          {/* Section 3 */}
          <div className="w-full lg:w-[1120px] mb-8 lg:mb-3">
            <h1 className="font-semibold text-xl lg:text-2xl lg:leading-tight">3. No Guarantee of Availability</h1>
            <p className="mb-4 lg:mb-2">The properties listed on the Site are subject to availability and may no longer be available for sale, lease, or rent at the time of your inquiry. Neev Realty is not responsible for any loss or inconvenience caused by reliance on the information provided.</p>
            
          </div>

          {/* Section 4 */}
          <div className="w-full lg:w-[1120px] mb-8 lg:mb-3">
            <h1 className="font-semibold text-xl lg:text-2xl lg:leading-tight">4. Third-Party Links</h1>
            <p className="leading-relaxed">This Site may contain links to external websites for your convenience. Neev Realty does not endorse or assume responsibility for the content, accuracy, or practices of these third-party sites. Access them at your own discretion and risk.</p>
          </div>

          {/* Section 5 */}
          <div className="w-full lg:w-[1220px] mb-8 lg:mb-3">
            <h1 className="font-semibold text-xl lg:text-2xl lg:leading-tight">5. No Warranty</h1>
            <p className="leading-relaxed">
             The Site is provided on an “as-is” and “as-available” basis without warranties of any kind, express or implied, including but not limited to:
            </p>
             <h3 className="leading-tight"><span className="font-bold">.</span>Warranties of merchantability or fitness for a particular purpose.</h3>
              <h3 className="leading-tight"><span className="font-bold">.</span>Warranties regarding the uninterrupted or error-free operation of the Site.</h3>

          </div>

          {/* Section 6 */}
          <div className="w-full lg:w-[1120px] mb-8 lg:mb-3">
            <h1 className="font-semibold text-xl lg:text-2xl lg:leading-tight">6. Limitation of Liability</h1>
            <p className="mb-4 lg:mb-2">Neev Realty shall not be held liable for any direct, indirect, incidental, consequential, or special damages arising from or related to your use of the Site, including but not limited to:</p>
            <div className="ml-0 lg:ml-4 space-y-2 lg:mb-4">
              <h3 className="leading-tight"><span className="font-bold">.</span> Loss of data or profits.</h3>
              <h3 className="leading-tight"><span className="font-bold">.</span>Inaccurate property details..</h3>
              <h3 className="leading-tight"><span className="font-bold">.</span> Delays or interruptions in service.</h3>
            </div>
          </div>

          {/* Sections 7-11: Exact widths preserved */}
          <div className="space-y-8 lg:space-y-0 lg:mb-3">
            <div className="w-full lg:w-[1220px] mb-8 lg:mb-3">
              <h1 className="font-semibold text-xl lg:text-2xl lg:leading-tight">7. No Partnership or Agency</h1>
              <p className="leading-relaxed">Use of this Site does not establish any partnership, joint venture, or agency relationship between you and Neev Realty. All property-related transactions and decisions should be made independently.</p>
            </div>
            <div className="w-full lg:w-[1220px] mb-8 lg:mb-3">
              <h1 className="font-semibold text-xl lg:text-2xl lg:leading-tight">8. Legal Compliance</h1>
              <p className="leading-relaxed">The content on the Site is intended for use in accordance with Indian laws and regulations. Neev Realty disclaims any liability for non-compliance with local laws outside India.</p>
            </div>
            <div className="w-full lg:w-[1220px] mb-8 lg:mb-3">
              <h1 className="font-semibold text-xl lg:text-2xl lg:leading-tight">9. Changes to the Disclaimer</h1>
              <p className="leading-relaxed">Neev Realty reserves the right to modify this Disclaimer at any time without prior notice. Updates will be posted on this page with the “Effective Date” revised accordingly.</p>
            </div>
            {/* <div className="w-full lg:w-[1220px] mb-8 lg:mb-3">
              <h1 className="font-semibold text-xl lg:text-2xl lg:leading-tight">10. Updates to This Policy</h1>
              <p className="leading-relaxed">We reserve the right to update this Privacy Policy from time to time. Any changes will be posted on this page, and the "Effective Date" will be updated. We encourage you to review this policy periodically to stay informed.</p>
            </div> */}
            <div className="w-full lg:w-[1220px]">
              <h1 className="font-semibold text-xl lg:text-2xl lg:leading-tight">10. Contact Us</h1>
              <p className="leading-relaxed mb-2">If you have any questions or concerns about this Privacy Policy or our data handling practices, please contact us at:</p>
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
