// import { ChevronDown } from 'lucide-react';

function TipsCompanies() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Breadcrumb */}
      <nav className="px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex gap-2 text-sm">
          <a href="#" className="text-blue-600 hover:text-blue-800">Home</a>
          <span className="text-gray-500">&gt;</span>
          <a href="#" className="text-blue-600 hover:text-blue-800">Help Center</a>
          <span className="text-gray-500">&gt;</span>
         
        </div>
      </nav>
      {/* Main Content */}
      <main className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Tips for Companies to Build and Manage Brand Reputation</h1>

          {/* Navigation Menu */}
          {/* <nav className="bg-white rounded-lg shadow mb-8">
            <div className="flex flex-wrap items-center gap-2 p-4">
              <a href="#" className="text-blue-600 hover:text-blue-800 px-3 py-2">Comparison</a>
              <a href="#" className="text-blue-600 hover:text-blue-800 px-3 py-2">Travel</a>
              <a href="#" className="text-blue-600 hover:text-blue-800 px-3 py-2">Health and Beauty</a>
              <a href="#" className="text-blue-600 hover:text-blue-800 px-3 py-2">Holidays</a>
              <a href="#" className="text-blue-600 hover:text-blue-800 px-3 py-2">Scam Alert</a>
              <a href="#" className="text-blue-600 hover:text-blue-800 px-3 py-2">PissedConsumer Features</a>
              <a href="#" className="text-blue-600 hover:text-blue-800 px-3 py-2">Surveys</a>
              <a href="#" className="text-blue-600 hover:text-blue-800 px-3 py-2">Finance</a>
              <a href="#" className="text-blue-600 hover:text-blue-800 px-3 py-2">Shopping</a>
              <button className="flex items-center text-blue-600 hover:text-blue-800 px-3 py-2 ml-auto">
                More Tips
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
            </div>
          </nav> */}

          {/* Trending Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Trending Now</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <article className="bg-white rounded-lg shadow p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <img 
                        src="/RM-Strategy-Image.png"
                        alt="Customer Service Survey"
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold text-blue-600 hover:text-blue-800 mb-2">
                        <a href="#">PissedConsumer Survey: The Best and Worst Customer Service</a>
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">Jan 15, 2025</p>
                      <p className="text-gray-700">
                        The list of companies with the best and worst customer service revealed! 
                        See which companies resolve issues, satisfy customers, and earn trust—and 
                        which fail to deliver according to consumers. Find out how your favorite 
                        brands rank in customer care and support this year.
                      </p>
                    </div>
                  </div>
                </article>
              </div>

              {/* Sidebar */}
              <div>
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">More Trending</h3>
                  <div className="space-y-6">
                    {[
                      {
                        title: 'How to Choose the Best Reputation Management Company for Your Needs',
                        description: 'Struggling to find the right reputation management company? Our article...',
                        image: '/Article-how-to-choose-orm-1.png'
                      },
                      {
                        title: '5-stars PissedConsumer Profile: How to Achieve It',
                        description: 'How can a company get 5 stars on PissedConsumer? What features does the...',
                        image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=200&h=100&q=80'
                      }
                    ].map((item, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex-1">
                          <h4 className="font-semibold text-blue-600 hover:text-blue-800 mb-1">
                            <a href="#">{item.title}</a>
                          </h4>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-24 h-16 object-cover rounded"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>


         

          <section>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
export default TipsCompanies;