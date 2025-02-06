  export default function Hero() {
      return (
        <>
          {/* ========== Large Screens ONLY ========== */}
          <div
            className="hidden lg:block relative bg-gradient-to-br from-blue-100 to-blue-200 overflow-hidden pt-20"
            style={{
              backgroundImage: "url('/vpn/christmas-24-gingerbread-2xl-cd.jpg')",
              backgroundPosition: 'center',
              backgroundSize: 'contain', // or 'cover' if you prefer
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="max-w-7xl mx-auto">
              <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
                <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                  <div className="sm:text-center lg:text-left">
                    <p className="text-base font-semibold text-gray-900 sm:text-lg md:text-xl">
                      Don&apos;t miss our sweet holiday deal!
                    </p>
                    <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl">
                      <span className="block">Get 70% off NordVPN</span>
                      <span className="block text-blue-600">+ 3 extra months</span>
                    </h1>
                    <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                      Your chance to get the premium VPN experience for less.
                    </p>
                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                      <div className="rounded-md shadow">
                        <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10">
                          Get the Deal
                        </button>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-gray-600 flex items-center sm:justify-center lg:justify-start">
                      <svg
                        className="h-5 w-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
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
                  </div>
                </main>
              </div>
            </div>
          </div>
    
          {/* ========== Mobile and Tablet ONLY ========== */}
          <div className="block lg:hidden relative bg-gradient-to-br from-blue-100 to-blue-200 overflow-hidden pt-16">
            <div className="max-w-7xl mx-auto">
              <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
                <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                  <div className="sm:text-center lg:text-left">
                    <p className="text-base font-semibold text-gray-900 sm:text-lg md:text-xl">
                      Don&apos;t miss our sweet holiday deal!
                    </p>
                    <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl">
                      <span className="block">Get 70% off NordVPN</span>
                      <span className="block text-blue-600">+ 3 extra months</span>
                    </h1>
                    <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                      Your chance to get the premium VPN experience for less.
                    </p>
                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                      <div className="rounded-md shadow">
                        <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10">
                          Get the Deal
                        </button>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-gray-600 flex items-center sm:justify-center lg:justify-start">
                      <svg
                        className="h-5 w-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
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
                  </div>
                </main>
              </div>
            </div>
            <div className="relative z-10 w-full mt-8">
              <img
                src="/christmas-24-hero-gingerbread-xs-cd.png"
                alt="Gingerbread mascot"
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </>
      );
    }