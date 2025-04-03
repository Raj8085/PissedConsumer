// import { CategoryCard } from "../component/CatogoryCard"
// import { ReviewCard } from "../component/ReviewCard"

// const categories = [
//   { title: "Footwear and Clothing", href: "#" },
//   { title: "Media", href: "#" },
//   { title: "Transportation and Logistics", href: "#" },
//   { title: "Telecommunications", href: "#" },
//   { title: "Software", href: "#" },
//   { title: "Games and Movies", href: "#" },
//   { title: "Financial Services", href: "#" },
//   { title: "Auctions and Marketplaces", href: "#" },
//   { title: "Insurance", href: "#" },
//   { title: "Food Delivery", href: "#" },
//   { title: "E-commerce", href: "#" },
//   { title: "Supermarkets and Malls", href: "#" }
// ]

// const reviews = [
//   {
//     company: "Pit Boss",
//     resolutionTime: "27 minutes",
//     preview: "The app doesn't work. Ever. Don't buy it. You'll never know when your food is at the right temperature. It...",
//     reviewLink: "#"
//   },
//   {
//     company: "Amazon",
//     resolutionTime: "15 days",
//     preview: "On line it offers to take a dollar of the refund and mail you a label. I opted this as my work email would not...",
//     reviewLink: "#"
//   },
//   {
//     company: "Etsy",
//     resolutionTime: "15 days",
//     preview: "Missing wine glasses have received it yet. Never has no problems with this company. I've been a customer for...",
//     reviewLink: "#"
//   },
//   {
//     company: "South Florida Vision Centers",
//     resolutionTime: "1 month",
//     preview: "As an older person,this doctor was very disrespectful.She failed to examine my eyes properly.South Vision...",
//     reviewLink: "#"
//   }
// ]

// export default function MiddleCard() {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <main className="container py-8">
//         <section>
//           <h2 className="mb-6 text-center text-2xl font-bold">Browse Company By Categories</h2>
//           <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
//             {categories.map((category) => (
//               <CategoryCard
//                 key={category.title}
//                 title={category.title}
//                 href={category.href}
//               />
//             ))}
//           </div>
//           <div className="mt-6 text-center">
//             {/* <Link
//               href="#"
//               className="inline-block rounded-md border border-blue-600 px-6 py-2 text-blue-600 hover:bg-blue-50"
//             > */}
//               See all categories
//             {/* </Link> */}
//           </div>
//         </section>

//         <section className="mt-16">
//           <h2 className="mb-6 text-center text-2xl font-bold">Resolved Reviews</h2>
//           <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
//             {reviews.map((review) => (
//               <ReviewCard
//                 key={review.company}
//                 company={review.company}
//                 resolutionTime={review.resolutionTime}
//                 preview={review.preview}
//                 reviewLink={review.reviewLink}
//               />
//             ))}
//           </div>
//           <div className="mt-6 text-center">
//             {/* <Link
//               href="#"
//               className="inline-block rounded-md border border-blue-600 px-6 py-2 text-blue-600 hover:bg-blue-50"
//             > */}
//               See all resolved reviews
//             {/* </Link> */}
//           </div>
//         </section>
//       </main>
//     </div>
//   )
// }

