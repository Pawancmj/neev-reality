type FaqItem = {
  question: string;
  answer: string;
};


type contacts = {
  faqs: FaqItem[];
};

const contact:contacts={

     faqs: [
    {
      question: "Where is Prestige City Hyderabad located?",
      answer:
        "Simple gypsum board ceilings with recessed lights or cove lighting are the most commonly used because they are cost-effective, easy to install, and suit both small and large halls.",
    },
    {
      question: "What is the floor plan of Prestige City Hyderabad?",
      answer:
        "Yes, as long as the design is not too heavy or layered. A single-level false ceiling with clean lines and minimal drop can make a small hall look more structured and well-lit.",
    },
    {
      question: "What is the price range of the apartments in Prestige City Hyderabad?",
      answer:
        "Yes, as long as the design is not too heavy or layered. A single-level false ceiling with clean lines and minimal drop can make a small hall look more structured and well-lit.",
    },
   
    
  ],

}

export default function Faq(){

    const contactpage=contact;
    return(
        
             <section
            
              className="rounded-lg mx-auto bg-white p-4 mb-6 shadow-sm"
              style={{width:1233}}>
              <h3 className="mb-3 text-sm font-semibold  md:text-base">
                FAQs
              </h3>
              <div className="">
                {contactpage.faqs.map((faq, index) => (
                  <details key={index} className="group py-4 ">
                    <summary className="flex cursor-pointer  p-1  items-center justify-between text-xs font-medium  md:text-sm">
                      <span className="">{faq.question}</span>
                      <span className="ml-2 text-lg text-gray-400 group-open:rotate-180 transition-transform">
                        ▾
                      </span>
                    </summary>
                    <p className="mt-2 text-xs text-gray-600 md:text-sm">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>
    
    )
}