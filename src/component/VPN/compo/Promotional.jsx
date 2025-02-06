export default function PromotionalBanner() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-16"
      style={{
        backgroundImage: "url('/vpn/Last/christmas-24-banner-md.jpg')", // Adjust the path if needed
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <p className="text-lg font-medium">
            Our sweet holiday deal:
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            70% discount + 3 months extra
          </h2>
          <button className="mt-6 px-6 py-3 text-white bg-red-600 hover:bg-red-700 font-medium rounded-full shadow">
            Get the Deal
          </button>
          <div className="mt-4 text-sm">
            <div className="flex justify-center items-center text-gray-900">
              <svg
                className="h-5 w-5 mr-2"
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
            </div>
            <p className="mt-2 text-white">
              Take a look at our promotion’s{" "}
              <a
                href="#"
                className="text-gray-900 underline hover:text-gray-400"
              >
                terms and conditions
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
