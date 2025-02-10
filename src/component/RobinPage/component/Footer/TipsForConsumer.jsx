// import { ChevronDown } from 'lucide-react';

function TipsConsumer() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Breadcrumb */}
      <nav className="px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex gap-2 text-sm">
          <a href="#" className="text-blue-600 hover:text-blue-800">Home</a>
          <span className="text-gray-500">&gt;</span>
          <a href="#" className="text-blue-600 hover:text-blue-800">Help Center</a>
          <span className="text-gray-500">&gt;</span>
          <span className="text-gray-600">Tips For Consumers</span>
        </div>
      </nav>
      {/* Main Content */}
      <main className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Tips For Consumers</h1>

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
                        src="/Bussiness/concept-of-inequality-ambition-social-hierarchy-2025-01-10-02-17-10-utc-2-scaled.jpg"
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
                        title: 'AliExpress vs. Temu: Which Online Shopping Platform is Best for You?',
                        description: 'Looking for the best online shopping platform? Compare AliExpress and Temu...',
                        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=200&h=100&q=80'
                      },
                      {
                        title: 'Top Consumer Complaints About Home Security Systems',
                        description: 'Thinking about ways to protect your house? Considering buying a home...',
                        image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=200&h=100&q=80'
                      },
                      {
                        title: 'What You Need to Know Before Agreeing to Terms and Conditions',
                        description: '80% of consumers skip terms and conditions without reading them. Are you...',
                        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=200&h=100&q=80'
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
export default TipsConsumer;