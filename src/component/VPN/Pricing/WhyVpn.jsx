
const WhyNordVPN = () => {
  const features = [
    {
      title: "Protect your privacy",
      description:
        "Your IP address, browsing history, location, and more are available to advertisers and cybercriminals – unless you’re using a VPN.",
      points: [
        "Block web trackers",
        "Protect your identity online",
        "Keep your data private",
      ],
      image: "/Pricing/privacy-lock-female-protection-sm.svg", // Replace with actual image path
    },
    {
      title: "Stay safe online",
      description:
        "Protect yourself from malware, cyberattacks, malicious ads, and other online threats with a VPN for all your devices.",
      points: [
        "Block malicious sites",
        "Secure your online banking",
        "Stay safe on public Wi-Fi",
      ],
      image: "/Pricing/easy-use-different-devices-users-sm.svg", // Replace with actual image path
    },
    {
      title: "Access content abroad",
      description:
        "Not all sites are available in all countries. With a VPN, you can access the content and websites you normally use – from anywhere.",
      points: [
        "Stream securely while traveling",
        "Access your favorite content",
        "Bypass internet censorship",
      ],
      image: "/Pricing/content-abroad-male-globe-worldwide-sm.svg", // Replace with actual image path
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-gray-900 mb-12">
          Why should you use NordVPN?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-center"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-72 h-72 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <ul className="space-y-2 text-left">
                {feature.points.map((point, i) => (
                  <li key={i} className="flex items-center">
                    <svg
                      className="h-5 w-5 text-blue-500 mr-2"
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
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700">
            Get NordVPN
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyNordVPN;
