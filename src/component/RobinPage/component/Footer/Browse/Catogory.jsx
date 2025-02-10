import { useState } from 'react';
import { Search } from 'lucide-react';

const BrowseCategoriesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    {
      id: 'animals',
      icon: '🐾',
      title: 'Animals',
      subcategories: [
        'Animals',
        'Animal Services',
        'Breeders',
        'Pet Medicine and Veterinary Clinics',
        'Pet Stores'
      ]
    },
    {
      id: 'events',
      icon: '📅',
      title: 'Events',
      subcategories: [
        'Events',
        'Event Venues',
        'Flowers / Florist',
        'Funerals',
        'Party Supplies',
        'Photography',
        'Weddings'
      ]
    },
    {
      id: 'household',
      icon: '🏠',
      title: 'Household Services',
      subcategories: [
        'Household Services',
        'Cleaning Services',
        'Heating, Cooling and Air Conditioning',
        'Household Essentials',
        'Landscaping and Gardening',
        'Locksmiths',
        'Pest Control and Services',
        'Plumbing',
        'Restoration, Renovation and Remodeling',
        'Utility',
        'Waste And Recycling Services'
      ]
    },
    {
      id: 'rentals',
      icon: '🚗',
      title: 'Rentals',
      subcategories: ['Rentals']
    },
    {
      id: 'security',
      icon: '🔒',
      title: 'Security and Protection Services',
      subcategories: [
        'Security and Protection Services',
        'Investigation'
      ]
    },
    {
      id: 'service-centers',
      icon: '🔧',
      title: 'Service Centers and Repairs',
      subcategories: ['Service Centers and Repairs']
    },
    {
      id: 'appliances',
      icon: '🔌',
      title: 'Appliances and Electronics',
      subcategories: [
        'Appliances and Electronics',
        'Gadgets and Accessories'
      ]
    },
    {
      id: 'arts',
      icon: '🎨',
      title: 'Arts and Fine Arts',
      subcategories: [
        'Arts and Fine Arts',
        'Craft Supplies and Tools',
        'Music stores'
      ]
    },
    {
      id: 'astrology',
      icon: '🌟',
      title: 'Astrology',
      subcategories: ['Astrology']
    },
    {
      id: 'financial',
      icon: '💰',
      title: 'Financial Services',
      subcategories: [
        'Financial Services',
        'Accounting',
        'Banks',
        'Cards',
        'Cash Services',
        'Collection Agencies',
        'Cryptocurrency Services',
        'Loans and Mortgages',
        'Pawnshops',
        'Taxes'
      ]
    },
    {
      id: 'insurance',
      icon: '🛡',
      title: 'Insurance',
      subcategories: [
        'Insurance',
        'Home Warranty'
      ]
    },
    {
      id: 'it-services',
      icon: '💻',
      title: 'IT Services and Solutions',
      subcategories: [
        'IT Services and Solutions',
        'Hosting',
        'Software',
        'Web Design and Development'
      ]
    },
    {
      id: 'sport',
      icon: '⚽',
      title: 'Sport',
      subcategories: [
        'Sport',
        'Bicycles and Skateboards',
        'Fitness Centers',
        'Hunting, Fishing and Camping',
        'Sport Equipment and Accessories',
        'Weight Loss, Diets and Training'
      ]
    },
    {
      id: 'staff',
      icon: '👥',
      title: 'Staff',
      subcategories: [
        'Staff',
        'Job Search and Employment'
      ]
    }
  ];

  const filteredCategories = categories.filter(category =>
    category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.subcategories.some(sub => 
      sub.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Navigation */}
      <nav className="bg-white border-b">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center gap-2 text-sm">
            <a href="#" className="text-blue-500 hover:underline">Home</a>
            <span>›</span>
            <span>All Categories</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Browse Categories</h1>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              className="w-full p-3 pr-10 border rounded-lg shadow-sm"
              placeholder="Search Category"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute right-3 top-3 text-gray-400" size={24} />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              {/* Category Header */}
              <div className="bg-gray-100 p-4 flex items-center gap-3">
                <span className="text-2xl">{category.icon}</span>
                <h2 className="font-semibold text-lg">{category.title}</h2>
              </div>

              {/* Subcategories */}
              <div className="p-4">
                <ul className="space-y-2">
                  {category.subcategories.map((subcategory) => (
                    <li key={subcategory}>
                      <a
                        href="#"
                        className="text-blue-600 hover:underline block text-sm"
                      >
                        {subcategory}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowseCategoriesPage;