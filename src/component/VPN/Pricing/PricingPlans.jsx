import  { useState } from "react";

const plansData = {
  "2-year": [
    {
      name: "Complete",
      price: "$5.49",
      discount: "Save 69%",
      features: [
        "Secure, high-speed VPN",
        "Threat Protection Pro™: Anti-malware and advanced browsing protection",
        "Threat Protection Pro™: Ad and tracker blocker",
        "Password manager with Data Breach Scanner",
        "1 TB of encrypted cloud storage",
      ],
      additionalInfo: "+ 3 EXTRA months",
      previousPrice: "$493.83",
      discountedPrice: "$148.23 for the first 27 months",
      buttonText: "Get Complete",
      highlight: false,
    },
    {
      name: "Plus",
      price: "$4.49",
      discount: "Save 70%",
      features: [
        "Secure, high-speed VPN",
        "Threat Protection Pro™: Anti-malware and advanced browsing protection",
        "Threat Protection Pro™: Ad and tracker blocker",
        "Password manager with Data Breach Scanner",
      ],
      additionalInfo: "+ 3 EXTRA months",
      previousPrice: "$404.73",
      discountedPrice: "$121.23 for the first 27 months",
      buttonText: "Get Plus",
      highlight: true,
    },
    {
      name: "Basic",
      price: "$3.59",
      discount: "Save 69%",
      features: ["Secure, high-speed VPN"],
      additionalInfo: "+ 3 EXTRA months",
      previousPrice: "$312.93",
      discountedPrice: "$96.93 for the first 27 months",
      buttonText: "Get Basic",
      highlight: false,
    },
  ],
  "1-year": [
    {
      name: "Complete",
      price: "$6.99",
      discount: "Save 58%",
      features: [
        "Secure, high-speed VPN",
        "Threat Protection Pro™: Anti-malware and advanced browsing protection",
        "Threat Protection Pro™: Ad and tracker blocker",
        "Password manager with Data Breach Scanner",
        "1 TB of encrypted cloud storage",
      ],
      additionalInfo: "+ 3 EXTRA months",
      previousPrice: "$345.00",
      discountedPrice: "$125.82 for the first 15 months",
      buttonText: "Get Complete",
      highlight: false,
    },
    {
      name: "Plus",
      price: "$5.99",
      discount: "Save 60%",
      features: [
        "Secure, high-speed VPN",
        "Threat Protection Pro™: Anti-malware and advanced browsing protection",
        "Threat Protection Pro™: Ad and tracker blocker",
        "Password manager with Data Breach Scanner",
      ],
      additionalInfo: "+ 3 EXTRA months",
      previousPrice: "$275.00",
      discountedPrice: "$105.82 for the first 15 months",
      buttonText: "Get Plus",
      highlight: true,
    },
    {
      name: "Basic",
      price: "$4.99",
      discount: "Save 50%",
      features: ["Secure, high-speed VPN"],
      additionalInfo: "+ 3 EXTRA months",
      previousPrice: "$215.00",
      discountedPrice: "$95.82 for the first 15 months",
      buttonText: "Get Basic",
      highlight: false,
    },
  ],
  monthly: [
    {
      name: "Complete",
      price: "$11.99",
      discount: "No discount",
      features: [
        "Secure, high-speed VPN",
        "Threat Protection Pro™: Anti-malware and advanced browsing protection",
        "Threat Protection Pro™: Ad and tracker blocker",
        "Password manager with Data Breach Scanner",
        "1 TB of encrypted cloud storage",
      ],
      additionalInfo: "",
      previousPrice: "",
      discountedPrice: "$11.99 per month",
      buttonText: "Get Complete",
      highlight: false,
    },
    {
      name: "Plus",
      price: "$9.99",
      discount: "No discount",
      features: [
        "Secure, high-speed VPN",
        "Threat Protection Pro™: Anti-malware and advanced browsing protection",
        "Threat Protection Pro™: Ad and tracker blocker",
        "Password manager with Data Breach Scanner",
      ],
      additionalInfo: "",
      previousPrice: "",
      discountedPrice: "$9.99 per month",
      buttonText: "Get Plus",
      highlight: true,
    },
    {
      name: "Basic",
      price: "$7.99",
      discount: "No discount",
      features: ["Secure, high-speed VPN"],
      additionalInfo: "",
      previousPrice: "",
      discountedPrice: "$7.99 per month",
      buttonText: "Get Basic",
      highlight: false,
    },
  ],
};

function PricingPlans() {
  const [selectedPlan, setSelectedPlan] = useState("2-year");

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <select
            className="border border-gray-300 rounded-md px-4 py-2"
            value={selectedPlan}
            onChange={(e) => setSelectedPlan(e.target.value)}
          >
            <option value="2-year">2-year plans</option>
            <option value="1-year">1-year plans</option>
            <option value="monthly">Monthly plans</option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plansData[selectedPlan].map((plan, index) => (
            <div
              key={index}
              className={`border ${
                plan.highlight
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 bg-white"
              } rounded-lg shadow-md p-6 relative`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-0 bg-blue-500 text-white px-3  rounded-br-lg ">
                  Most popular
                </div>
              )}
              <p className="text-sm font-medium text-red-500 ">{plan.discount}</p>
              <h3 className="text-lg font-semibold text-gray-900 mt-2">
                {plan.name}
              </h3>
              <p className="text-4xl font-bold text-gray-900 mt-4">
                {plan.price}
                <span className="text-lg font-medium text-gray-600">/mo</span>
              </p>
              <p className="text-sm text-gray-600 mt-2">
                {plan.additionalInfo}
              </p>
              {plan.previousPrice && (
                <p className="text-sm text-gray-500 mt-1">
                  <span className="line-through">{plan.previousPrice}</span>{" "}
                  <span>{plan.discountedPrice}</span>
                </p>
              )}
              <button
                className={`mt-6 w-full py-2 rounded-md font-medium ${
                  plan.highlight
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                }`}
              >
                {plan.buttonText}
              </button>
              <div className="mt-4 text-sm text-gray-600">
                <p className="flex items-center">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  30-day money-back guarantee
                </p>
                <ul className="mt-4 space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg
                        className="h-4 w-4 text-green-500 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="text-blue-600 underline hover:text-blue-800 mt-4 block"
                >
                  See all features
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="px-6 py-3 text-blue-600 border border-blue-500 rounded-md hover:bg-blue-500 hover:text-white">
            Compare plans
          </button>
        </div>
      </div>
    </section>
  );
}


export default PricingPlans