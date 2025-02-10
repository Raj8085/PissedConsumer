/* eslint-disable react/prop-types */
import  { useState } from 'react';
import { Search } from 'lucide-react';

const CompanyListingPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categorySearch, setCategorySearch] = useState('');

  // Sample company data
  const companies = [
    {
      id: 1,
      name: 'Facebook',
      logo: '/AboutPissed/facebook.svg',
      rating: 1.8,
      reviews: 31201,
      category: 'Social Media and Networking',
      website: 'www.facebook.com',
      recentReview: 'I need help to recover my account for Facebook. It is suspended because it was hacked yesterday by an unknown person. So, please, I need someone to reply and help me with this situation. Suspended account for Facebook...'
    },
    {
      id: 2,
      name: 'Amazon',
      logo: '/AboutPissed/amazon.svg',
      rating: 3.0,
      reviews: 42747,
      category: 'Auctions and Marketplaces',
      website: 'www.amazon.com',
      recentReview: 'I ordered my saree via Instagram through Amazon service, but I received the wrong product. That\'s why I want to return this product.'
    },
    {
      id: 3,
      name: 'Ubereats',
      logo: '/AboutPissed/ubereats.svg',
      rating: 1.7,
      reviews: 27558,
      category: 'Food Delivery',
      website: 'www.ubereats.com',
      recentReview: 'The promotion code eacbb77us is not working for me. I\'ve tried it a few different ways on the app and received an error message that says, "Promotion code is not valid". The email that the code is advertised under said, "Get $25..."'
    }
  ];

  // Categories for sidebar
  const categories = [
    { name: 'Animals', count: 289, subcategories: [
      { name: 'Animal Services', count: 462 },
      { name: 'Breeders', count: 191 },
      { name: 'Pet Medicine and Vet...', count: 529 },
      { name: 'Pet Stores', count: 842 }
    ]},
    { name: 'Appliances and Electr...', count: 3902, subcategories: [
      { name: 'Gadgets and Accesso...', count: 618 }
    ]},
    { name: 'Arts and Fine Arts', count: 456, subcategories: [
      { name: 'Craft Supplies and Tools', count: 884 },
      { name: 'Music stores', count: 720 }
    ]},
    { name: 'Astrology', count: 131 }
  ];

  const StarRating = ({ rating }) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <div
            key={star}
            className={`w-4 h-4 ${
              star <= rating ? 'bg-yellow-400' : 'bg-gray-200'
            }`}
          />
        ))}
        <span className="ml-2 text-lg">{rating.toFixed(1)}</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-800">Browse Companies</h1>
          <div className="mt-2">
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
              Newly added
            </span>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <aside className="w-full md:w-64 bg-white rounded-lg shadow p-4">
            <div className="mb-4">
              <h2 className="font-semibold mb-2">Category</h2>
              <div className="relative">
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Search"
                  value={categorySearch}
                  onChange={(e) => setCategorySearch(e.target.value)}
                />
                <Search className="absolute right-2 top-2.5 text-gray-400" size={20} />
              </div>
            </div>

            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category.name} className="text-sm">
                  <div className="flex items-center justify-between hover:bg-gray-50 p-1 rounded cursor-pointer">
                    <span>{category.name}</span>
                    <span className="text-gray-500">({category.count})</span>
                  </div>
                  {category.subcategories?.map((sub) => (
                    <div
                      key={sub.name}
                      className="flex items-center justify-between pl-4 hover:bg-gray-50 p-1 rounded cursor-pointer"
                    >
                      <span>{sub.name}</span>
                      <span className="text-gray-500">({sub.count})</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div className="mt-6">
              <h2 className="font-semibold mb-2">Location</h2>
              <div className="relative">
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Search"
                />
                <Search className="absolute right-2 top-2.5 text-gray-400" size={20} />
              </div>
            </div>

            <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
              Apply
            </button>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <div className="relative flex-1 max-w-2xl">
                <input
                  type="text"
                  className="w-full p-2 pr-10 border rounded"
                  placeholder="Search by Company name"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute right-2 top-2.5 text-gray-400" size={20} />
              </div>
              <select className="ml-4 p-2 border rounded">
                <option>Most Reviewed</option>
                <option>Highest Rated</option>
                <option>Lowest Rated</option>
              </select>
            </div>

            <p className="text-sm text-gray-500 mb-4">
              Showing {companies.length} companies
            </p>

            {/* Company Cards */}
            <div className="space-y-4">
              {companies.map((company) => (
                <div key={company.id} className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-start gap-4">
                    <img
                      src={company.logo}
                      alt=""
                      className="w-12 h-12 object-contain"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h2 className="text-xl font-semibold">{company.name}</h2>
                          <div className="flex items-center gap-2 mt-1">
                            <StarRating rating={company.rating} />
                            <span className="text-sm text-gray-500">
                              ({company.reviews.toLocaleString()} reviews)
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                        <span>{company.category}</span>
                        <span>{company.website}</span>
                      </div>

                      <p className="mt-4 text-gray-700">{company.recentReview}</p>

                      <div className="mt-4 flex gap-2">
                        <button className="text-blue-500 hover:underline">
                          Read All {company.reviews.toLocaleString()} reviews
                        </button>
                        <button className="text-blue-500 hover:underline">
                          Customer Service
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default CompanyListingPage;