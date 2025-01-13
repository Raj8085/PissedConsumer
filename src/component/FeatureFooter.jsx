function FeatureFooter() {
  return (
    <div className="flex flex-col min-h-screen">
     

      {/* MAIN CONTENT */}
      <main className="flex-grow">
        {/* News Section */}
        <section className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold mb-6">PissedConsumer News</h2>

          {/* Grid of Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="border rounded-lg overflow-hidden shadow bg-white">
              <img
                src="/Below/news_1.jpg"
                alt="News 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  Get Help from PissedConsumer Experts
                </h3>
                <p className="text-gray-600 mb-4">
                  Do you have unresolved issues with companies? Struggle with an issue resolution...
                </p>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Join the club &rarr;
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="border rounded-lg overflow-hidden shadow bg-white">
              <img
                src="/Below/news_2.png"
                alt="News 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  Everything You Need to Know About Our Review Website
                </h3>
                <p className="text-gray-600 mb-4">
                  Curious if PissedConsumer is legit? Learn our platform’s mission...
                </p>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Learn about us &rarr;
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="border rounded-lg overflow-hidden shadow bg-white">
              <img
                src="/Below/news_3.jpg"
                alt="News 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  PissedConsumer Statement on Shaming Brands Operating in Russia
                </h3>
                <p className="text-gray-600 mb-4">
                  Since Russia invaded Ukraine, we have felt ethically compelled to keep the public...
                </p>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Learn more &rarr;
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Trust PissedConsumer Section */}
        <section className="bg-gray-50 py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Why Trust PissedConsumer?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
              <img src="/Below/user-generated.svg" alt="" className="mx-auto"/>
                <div className="mb-2 text-red-500 text-3xl">
                  {/* Icon Placeholder (could use heroicons or FontAwesome) */}
                </div>
                <h3 className="text-xl font-semibold mb-1">100% user-generated content</h3>
                <p className="text-gray-600">All reviews come from actual consumers.</p>
              </div>
              <div className="p-4">
              <img src="/Below/human_and_ai.svg" alt="" className="mx-auto"/>
                <div className="mb-2 text-red-500 text-3xl">
                </div>
                <h3 className="text-xl font-semibold mb-1">Human and AI content moderation</h3>
                <p className="text-gray-600">Ensuring quality and compliance.</p>
              </div>
              <div className="p-4">
              <img src="/Below/zero_tolerance.svg" alt="" className="mx-auto"/>
                <div className="mb-2 text-red-500 text-3xl">
                </div>
                <h3 className="text-xl font-semibold mb-1">Zero tolerance for fake reviews</h3>
                <p className="text-gray-600">We track and remove inauthentic content.</p>
              </div>
              <div className="p-4">
              <img src="/Below/verified_content.svg" alt="" className="mx-auto"/>
                <div className="mb-2 text-red-500 text-3xl">
                </div>
                <h3 className="text-xl font-semibold mb-1">Verified content</h3>
                <p className="text-gray-600">We verify details to ensure authenticity.</p>
              </div>
              <div className="p-4">
              <img src="/Below/opportunity_to_contact.svg" alt="" className="mx-auto"/>
                <div className="mb-2 text-red-500 text-3xl">
                </div>
                <h3 className="text-xl font-semibold mb-1">Opportunity to contact brands</h3>
                <p className="text-gray-600">Communicate directly with companies.</p>
              </div>
              <div className="p-4">
              <img src="/Below/protecting_freedom.svg" alt="" className="mx-auto"/>
                <div className="mb-2 text-red-500 text-3xl">
                </div>
                <h3 className="text-xl font-semibold mb-1">Protecting freedom of speech</h3>
                <p className="text-gray-600">We stand for consumer rights.</p>
              </div>
            </div>
            <div className="text-center mt-6">
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                See more details
              </button>
            </div>
          </div>
        </section>

        {/* Search & Write a Review Section */}
        <section className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="text"
              className="border rounded px-4 py-2 w-full md:w-2/3"
              placeholder="Company or keyword"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full md:w-auto">
              Search
            </button>
            <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50 w-full md:w-auto">
              Write a review
            </button>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-white border-t py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div>
              <h3 className="font-semibold mb-2">About</h3>
              <ul className="space-y-1 text-gray-600">
                <li><a href="#">About PissedConsumer</a></li>
                <li><a href="#">Press Page</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">FAQ for Consumers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Browse</h3>
              <ul className="space-y-1 text-gray-600">
                <li><a href="#">Companies</a></li>
                <li><a href="#">Reviews</a></li>
                <li><a href="#">Categories</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Services</h3>
              <ul className="space-y-1 text-gray-600">
                <li><a href="#">Business Solutions</a></li>
                <li><a href="#">List your Business</a></li>
                <li><a href="#">Tips For Consumers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Legal</h3>
              <ul className="space-y-1 text-gray-600">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms Of Use</a></li>
                <li><a href="#">Legal Information</a></li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-gray-500 text-center">
            &copy; {new Date().getFullYear()} PissedConsumer. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default FeatureFooter;
