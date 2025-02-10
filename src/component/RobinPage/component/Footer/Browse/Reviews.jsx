import  { useState } from 'react';
import { Search, Star, MoreVertical, ThumbsUp } from 'lucide-react';

function Reviews() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav className="text-sm">
          <ol className="flex items-center space-x-2">
            <li><a href="#" className="text-blue-600 hover:underline">Home</a></li>
            <li className="text-gray-500">/</li>
            <li className="text-gray-500">Browse reviews</li>
          </ol>
        </nav>
      </div>

      {/* Page Title */}
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-gray-800">Browse Reviews and Complaints</h1>
      </div>

      {/* Tabs */}
      <div className="container mx-auto px-4 border-b">
        <div className="flex space-x-8">
          <button className="px-4 py-2 border-b-2 border-blue-600 text-blue-600 font-medium">
            Latest
          </button>
          <button className="px-4 py-2 text-gray-600 hover:text-gray-800">
            Recently discussed
          </button>
          <button className="px-4 py-2 text-gray-600 hover:text-gray-800">
            Resolved Reviews
          </button>
        </div>
      </div>

      {/* Advertisement Banner */}
      <div className="container mx-auto px-4 py-4">
        <div className="bg-white rounded-lg shadow p-4 text-center">
          <p className="text-gray-500 text-sm">Advertisement Space</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="container mx-auto px-4 py-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2">
            <Search className="w-5 h-5 text-gray-500" />
          </button>
        </div>
      </div>

      {/* Review Card */}
      <div className="container mx-auto px-4 py-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          {/* Review Header */}
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                TZ
              </div>
              <div>
                <h3 className="font-medium">Tiffany O Zpz</h3>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs">
                    Verified Buyer
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-xs">
                    Verified Reviewer
                  </span>
                  <span>Wheaton, Illinois</span>
                </div>
              </div>
            </div>
            <button className="p-2">
              <MoreVertical className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          {/* Review Title */}
          <h2 className="text-xl font-semibold mt-4 text-blue-600">
            Dorado Fashion - Never received Item
          </h2>

          {/* Review Meta */}
          <div className="flex items-center space-x-2 mt-2">
            <span className="text-gray-500">Feb 07, 2023</span>
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-4 h-4 ${
                    star === 1 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-blue-600 font-semibold">1.0</span>
          </div>

          {/* Review Images */}
          <div className="flex space-x-4 mt-4">
            {[1, 2, 3].map((img) => (
              <div key={img} className="w-24 h-24 bg-gray-200 rounded-lg"></div>
            ))}
          </div>

          {/* Review Content */}
          <div className="mt-4 text-gray-700 space-y-4">
            <p className="italic text-sm text-gray-500">
              Contains 1 confidential file for company representatives
            </p>
            <p>
              This is the second time Im having an issue with items from this place. I received a $100 gift card from them for the last time I gave them a bad review to compensate for my unhappiness...
            </p>
            <p>
              My first order I ordered plated items which I did receive which looked horribly fake they refunded gave me the gift card and also sent me a replacement that looks exactly the same as the first ones I ordered brown and oxidized fake looking.
            </p>
            <p className="font-semibold">User&apos;s recommendation: DO NOT SHOP HERE</p>
          </div>

          {/* Review Actions */}
          <div className="mt-6 flex items-center space-x-4">
            <button className="flex items-center space-x-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
              <ThumbsUp className="w-4 h-4" />
              <span>Helpful</span>
            </button>
            <button className="text-blue-600 font-medium">Comment</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;