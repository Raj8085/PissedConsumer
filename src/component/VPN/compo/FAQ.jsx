import { useState } from "react";

const faqs = [
  {
    question: "What makes NordVPN one of the best VPNs on the market?",
    answer:
      "NordVPN provides top-notch security, fast connection speeds, and a wide range of server locations. It also offers advanced features like Threat Protection, Double VPN, and Meshnet.",
  },
  {
    question: "Why should I choose a paid VPN over a free VPN?",
    answer:
      "Paid VPNs, like NordVPN, offer better security, faster speeds, and more reliable service. Free VPNs often lack proper encryption and may log or sell your data.",
  },
  {
    question: "Is it legal to use NordVPN?",
    answer:
      "Yes, it is legal to use NordVPN in most countries. However, you should always check the local laws regarding VPN usage in your region.",
  },
  {
    question: "Does NordVPN offer special deals?",
    answer:
      "Yes, NordVPN frequently offers discounts and promotions. Keep an eye on the website for the latest deals.",
  },
  {
    question: "Can I use NordVPN while traveling abroad?",
    answer:
      "Absolutely! NordVPN allows you to securely connect to servers worldwide, ensuring privacy and access to your favorite content no matter where you are.",
  },
  {
    question: "Which devices does NordVPN support?",
    answer:
      "NordVPN supports a wide range of devices, including Windows, macOS, Android, iOS, Linux, and many others. You can connect up to 6 devices simultaneously.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 sm:text-4xl">
          Frequently asked questions
        </h2>
        <div className="mt-8 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center text-gray-900 font-medium"
              >
                {faq.question}
                <span className="text-gray-500">
                  {openIndex === index ? "–" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 text-gray-600 border-t border-gray-200">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
