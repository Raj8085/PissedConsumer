// import { ReviewCard } from "../component/Review"
// import { ProductCard } from "../component/ProductCard"

// const reviews = [
//   {
//     company: "BDO Unibank",
//     logo: "/Images/bdo-unibank.png",
//     date: "Jan 11, 2025",
//     preview: "Hello. I really need to open my bdo online app on my phone. Coz i got bills need to pay in philippines and need send money money. I dont what...",
//     reviewLink: "#"
//   },
//   {
//     "company": "Fast Hand", 
//     "logo": "/Images/kuaishou.png",
//     "date": "Jan 11, 2025",
//     "preview": "I have successfully logged into the application, but I keep getting logged out or receiving phone calls, and I don't know what to do.",
//     "reviewLink": "#"
// },
//   {
//     company: "Netspend",
//     logo: "/Images/netspend.png",
//     date: "Jan 11, 2025",
//     preview: "Cant activate my card!! and I add money on it already !! I need my card and money on it I got kids and bills to pay for",
//     reviewLink: "#"
//   },
//   {
//     company: "Ticketmaster",
//     logo: "/Images/ticketmaster.svg",
//     date: "Jan 11, 2025",
//     preview: "My girls friend bought two tickets to the bills game and we didnt receive tickets and cant access them",
//     reviewLink: "#"
//   }
// ]

// const products = [
//   {
//     title: "I'm Pissed at Company Name Print T-Shirt",
//     image: "/Images/860_1gif_450x650_crop_center.gif",
//     price: 28.00,
//     originalPrice: 35.00
//   },
//   {
//     title: "Undress Your Stress Print Pullover Hoodie",
//     image: "/Images/457d723a-f55c-41b5-b4af-20577c258594_450x650_crop_center.png",
//     price: 35.20,
//     originalPrice: 44.00
//   },
//   {
//     title: "Life's Too Short Print Pullover Hoodie",
//     image: "/Images/49825edf-c825-4d3c-95f1-507846b3f738_450x650_crop_center.png",
//     price: 35.20,
//     originalPrice: 44.00
//   },
//   {
//     title: "I'm Pissed Consumer Print Pullover Hoodie",
//     image: "/Images/b6538f1b-8f80-4789-9684-2429e143faff_450x650_crop_center.jpg",
//     price: 35.20,
//     originalPrice: 44.00
//   },
//   {
//     title: "Speak Up Print Pullover Hoodie",
//     image: "/Images/860_1gif_450x650_crop_center.gif",
//     price: 35.20,
//     originalPrice: 44.00
//   }
// ]
// function FeatureDetails() {
//   return (
//     <div className="min-h-screen bg-gray-50 mt-72">
      
//       <main className="container py-8">
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//           {reviews.map((review, index) => (
//             <ReviewCard key={index} {...review} />
//           ))}
//         </div>
        
//         <div className="mt-8 text-center">
//           <button className="rounded-md border border-blue-600 px-6 py-2 text-blue-600 hover:bg-blue-50">
//             See more reviews
//           </button>
//         </div>

//         <section className="mt-16">
//           <div className="text-center">
//             <h2 className="text-3xl font-bold">Amplify your voice</h2>
//             <p className="mt-4 text-muted-foreground">
//               Explore our merch and join us in making a real difference as we fight for consumer rights.
//             </p>
//           </div>
          
//           <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
//             {products.map((product, index) => (
//               <ProductCard key={index} {...product} />
//             ))}
//           </div>
//         </section>
//       </main>
//     </div>
//   )
// }
// export default FeatureDetails



import  { useState, useEffect } from 'react';
import { ProductCard } from "../component/ProductCard";
import { ReviewCard } from './Review';

// Fallback products data (we'll keep this static for now)
const products = [
  {
    title: "I'm Pissed at Company Name Print T-Shirt",
    image: "/Images/860_1gif_450x650_crop_center.gif",
    price: 28.00,
    originalPrice: 35.00
  },
  {
    title: "Undress Your Stress Print Pullover Hoodie",
    image: "/Images/457d723a-f55c-41b5-b4af-20577c258594_450x650_crop_center.png",
    price: 35.20,
    originalPrice: 44.00
  },
  {
    title: "Life's Too Short Print Pullover Hoodie",
    image: "/Images/49825edf-c825-4d3c-95f1-507846b3f738_450x650_crop_center.png",
    price: 35.20,
    originalPrice: 44.00
  },
  {
    title: "I'm Pissed Consumer Print Pullover Hoodie",
    image: "/Images/b6538f1b-8f80-4789-9684-2429e143faff_450x650_crop_center.jpg",
    price: 35.20,
    originalPrice: 44.00
  },
  {
    title: "Speak Up Print Pullover Hoodie",
    image: "/Images/860_1gif_450x650_crop_center.gif",
    price: 35.20,
    originalPrice: 44.00
  }
];

function FeatureDetails() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleReviews, setVisibleReviews] = useState(4); // Initially show 4 reviews

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://ozleaddatabase-1.onrender.com/api/reviews');
        
        if (!response.ok) {
          throw new Error(`Error fetching reviews: ${response.statusText}`);
        }
        
        const data = await response.json();
        
        // Map the API response to match our component props
        const formattedReviews = data.map(review => ({
          company: review.title || 'Company', // Use title as company name if available
          logo: review.images && review.images.length > 0 
            ? review.images[0] 
            : `/Images/default-company.png`, // Use first image as logo or fallback
          date: new Date(review.createdAt || Date.now()).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          }),
          preview: review.review || 'No review text available',
          reviewLink: `/reviews/${review._id}`, // Assume review detail page with ID
          rating: review.rating || 0,
          // Add any other fields you need
        }));
        
        setReviews(formattedReviews);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch reviews:", err);
        setError("Failed to load reviews. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const loadMoreReviews = () => {
    setVisibleReviews(prev => prev + 4); // Show 4 more reviews
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Latest Consumer Reviews</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real people sharing their experiences with companies. Read their stories and share yours.
          </p>
        </header>
        <main>
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Reviews</h2>
            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            ) : error ? (
              <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 text-center">
                {error}
                <button 
                  className="ml-4 text-blue-600 underline" 
                  onClick={() => window.location.reload()}
                >
                  Retry
                </button>
              </div>
            ) : reviews.length === 0 ? (
              <div className="bg-gray-50 border border-gray-200 text-gray-600 rounded-lg p-8 text-center">
                <p className="text-lg font-medium mb-2">No reviews available yet</p>
                <p>Be the first to share your experience!</p>
                <a 
                  href="/write-review" 
                  className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md"
                >
                  Write a Review
                </a>
              </div>
            ) : (
              <>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {reviews.slice(0, visibleReviews).map((review, index) => (
                    <ReviewCard key={index} {...review} />
                  ))}
                </div>
                
                {visibleReviews < reviews.length && (
                  <div className="mt-8 text-center">
                    <button 
                      onClick={loadMoreReviews}
                      className="rounded-md border border-blue-600 px-6 py-2 text-blue-600 hover:bg-blue-50 transition-colors"
                    >
                      See more reviews
                    </button>
                  </div>
                )}
              </>
            )}
          </section>

          <section>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Amplify your voice</h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Explore our merch and join us in making a real difference as we fight for consumer rights.
              </p>
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {products.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <a href="/shop" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
                View All Products
              </a>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default FeatureDetails;