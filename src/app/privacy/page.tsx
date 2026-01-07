import Navbar from "../reusable_components/navbar/navbar";
import Footer from "../reusable_components/footer/footer";

export default function PrivacyPolicy() {  // Better name, but works as ComingSoon too
  return (
    <>
      <Navbar />
      
      <section className="py-12 px-4 sm:px-6 lg:ml-20 lg:-left-20 lg:px-0 text-left">
        <div className="max-w-[1243px] mx-auto">
          {/* Title - centered, exact size */}
          <h1 className="font-semibold text-4xl text-center mb-5">Privacy Policy</h1>
          
          {/* Intro Paragraph */}
          <div className="w-full lg:w-[1223px] mb-2">
            <p className="w-full lg:w-[1223px]">
              At Neev Realty your privacy is of utmost importance to us. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you use our services or interact with us through our website or other communication channels in India.
            </p>
          </div>

          {/* Section 1 */}
          <div className="w-full lg:w-[1120px] mb-8 lg:mb-3">
            <h1 className="font-semibold text-xl lg:text-2xl lg:leading-tight">1. information we collect</h1>
            <p className="mb-4 lg:mb-2">We may collect the following types of personal information:</p>
            <div className="ml-0 lg:ml-4 space-y-2">
              <h3 className="leading-tight"><span className="font-semibold">.Personal Details:</span> Name, email address, phone number, and address.</h3>
              <h3 className="leading-tight"><span className="font-semibold">.Property Preferences:</span>Information about your preferred property type, location, and budget.</h3>
              <h3 className="leading-tight"><span className="font-semibold">.Transaction Details:</span>Data related to property transactions, agreements, and payment details.</h3>
              <h3 className="leading-tight"><span className="font-semibold">.Website Usage Data:</span>Information such as IP address, device type, browser type, and pages visited.</h3>
              <h3 className="leading-tight"><span className="font-semibold">.Other Information:</span>Any additional details you provide, such as feedback, inquiries, or service requests.</h3>
            </div>
          </div>

          {/* Section 2 */}
          <div className="w-full lg:w-[1120px] mb-8 lg:mb-3">
            <h1 className="font-semibold text-xl lg:text-2xl lg:leading-tight">2. How We Use Your Information</h1>
            <p className="mb-4 lg:mb-2"><span className="font-bold">.</span> Your personal information is used to:</p>
            <div className="ml-0 lg:ml-4 space-y-2">
              <h3 className="leading-tight"><span className="font-bold">.</span> Understand your real estate requirements and provide tailored property recommendations.</h3>
              <h3 className="leading-tight"><span className="font-bold">.</span> Facilitate property-related services, including negotiations and transactions.</h3>
              <h3 className="leading-tight"><span className="font-bold">.</span> Communicate updates, offers, and promotional materials (only with your consent).</h3>
              <h3 className="leading-tight"><span className="font-bold">.</span> Improve our website and services through user feedback and analytics.</h3>
              <h3 className="leading-tight"><span className="font-bold">.</span> Comply with applicable laws and regulations.</h3>
            </div>
          </div>

          {/* Section 3 */}
          <div className="w-full lg:w-[1120px] mb-8 lg:mb-3">
            <h1 className="font-semibold text-xl lg:text-2xl lg:leading-tight">3. Sharing Your Information</h1>
            <p className="mb-4 lg:mb-2">We may share your personal information with:</p>
            <div className="ml-0 lg:ml-4 space-y-2 lg:mb-4">
              <h3 className="leading-tight"><span className="font-bold">.</span> Developers and Builders: To assist with property viewings and transactions.</h3>
              <h3 className="leading-tight"><span className="font-bold">.</span> Service Providers: Trusted third parties that provide operational, marketing, and technical support.</h3>
              <h3 className="leading-tight"><span className="font-bold">.</span> Legal Authorities: When required by law or to protect our legal rights.</h3>
              <h3 className="leading-tight"><span className="font-bold">.</span> Other Parties: With your explicit consent for specific purposes.</h3>
              <h3 className="leading-tight">We do not sell or rent your personal information to third parties.</h3>
            </div>
          </div>

          {/* Section 4 */}
          <div className="w-full lg:w-[1120px] mb-8 lg:mb-3">
            <h1 className="font-semibold text-xl lg:text-2xl lg:leading-tight">4. Data Retention</h1>
            <p className="leading-relaxed">We retain your information only as long as necessary to fulfill the purposes outlined in this policy or as required by law.</p>
          </div>

          {/* Section 5 */}
          <div className="w-full lg:w-[1220px] mb-8 lg:mb-3">
            <h1 className="font-semibold text-xl lg:text-2xl lg:leading-tight">5. Security Measures</h1>
            <p className="leading-relaxed">
              Neev Realty uses appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, or disclosure. While we strive to safeguard your data, no system is entirely secure, and we cannot guarantee complete protection.
            </p>
          </div>

          {/* Section 6 */}
          <div className="w-full lg:w-[1120px] mb-8 lg:mb-3">
            <h1 className="font-semibold text-xl lg:text-2xl lg:leading-tight">6. Your Rights</h1>
            <p className="mb-4 lg:mb-2">As an Indian user, you have the following rights:</p>
            <div className="ml-0 lg:ml-4 space-y-2 lg:mb-4">
              <h3 className="leading-tight"><span className="font-bold">.</span> Access and review your personal information.</h3>
              <h3 className="leading-tight"><span className="font-bold">.</span> Update or correct inaccuracies in your data.</h3>
              <h3 className="leading-tight"><span className="font-bold">.</span> Request the deletion of your personal information, subject to legal obligations.</h3>
              <h3 className="leading-tight"><span className="font-bold">.</span> Opt-out of receiving marketing communications.</h3>
            </div>
            <h3 className="leading-tight">To exercise your rights, contact us at Info@neevrealty.in</h3>
          </div>

          {/* Sections 7-11: Exact widths preserved */}
          <div className="space-y-8 lg:space-y-0 lg:mb-3">
            <div className="w-full lg:w-[1220px] mb-8 lg:mb-3">
              <h1 className="font-semibold text-xl lg:text-2xl lg:leading-tight">7. Use of Cookies</h1>
              <p className="leading-relaxed">Our website uses cookies to enhance user experience and gather insights into website usage. You can manage your cookie preferences through your browser settings.</p>
            </div>
            <div className="w-full lg:w-[1220px] mb-8 lg:mb-3">
              <h1 className="font-semibold text-xl lg:text-2xl lg:leading-tight">8. Third-Party Links</h1>
              <p className="leading-relaxed">Our website may contain links to external websites. We are not responsible for the privacy practices or content of these websites. Please review their privacy policies independently.</p>
            </div>
            <div className="w-full lg:w-[1220px] mb-8 lg:mb-3">
              <h1 className="font-semibold text-xl lg:text-2xl lg:leading-tight">9. Compliance with Indian Laws</h1>
              <p className="leading-relaxed">This Privacy Policy is compliant with applicable Indian laws, including the Information Technology Act, 2000 and associated rules, as well as the guidelines of the Personal Data Protection Bill, 2019, where applicable.</p>
            </div>
            <div className="w-full lg:w-[1220px] mb-8 lg:mb-3">
              <h1 className="font-semibold text-xl lg:text-2xl lg:leading-tight">10. Updates to This Policy</h1>
              <p className="leading-relaxed">We reserve the right to update this Privacy Policy from time to time. Any changes will be posted on this page, and the "Effective Date" will be updated. We encourage you to review this policy periodically to stay informed.</p>
            </div>
            <div className="w-full lg:w-[1220px]">
              <h1 className="font-semibold text-xl lg:text-2xl lg:leading-tight">11. Contact Us</h1>
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
