// /* eslint-disable react/prop-types */
// import { Card, CardContent, CardFooter } from "@/components/ui/card"



// export function ReviewCard({ company, resolutionTime, preview }) {
//   return (
//     <Card className="h-full">
//       <CardContent className="p-4">
//         <div className="mb-2 text-sm text-muted-foreground">
//           Resolution time: {resolutionTime}
//         </div>
//         <div>
//           <span className="font-semibold">{company}:</span>
//           <span className="ml-1">{preview}</span>
//         </div>
//       </CardContent>
//       <CardFooter className="p-4 pt-0">
//         {/* <Link href={reviewLink} className="text-sm text-blue-600 hover:underline"> */}
//           Read full review ›
//         {/* </Link> */}
//       </CardFooter>
//     </Card>
//   )
// }

/* eslint-disable react/prop-types */




import { ArrowRight } from 'lucide-react';
import { Star } from 'lucide-react'; 

export const ReviewCards = ({ company, logo, date, preview, reviewLink, rating }) => {
  // Generate an array of 5 elements for the stars
  const stars = Array.from({ length: 5 }, (_, i) => i < Math.round(rating));
  
  return (
    <div className="rounded-lg border bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="p-4">
        {/* Company Header */}
        <div className="flex items-center gap-3 mb-3">
          <div className="h-10 w-10 overflow-hidden rounded-full flex items-center justify-center bg-gray-100">
            <img 
              src={logo} 
              alt={`${company} logo`} 
              className="h-full w-full object-contain"
              onError={(e) => {
                e.target.src = '/Images/default-company.png'; // Fallback image
                e.target.onerror = null; // Prevent infinite loop
              }}
            />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{company}</h3>
            <p className="text-sm text-gray-500">{date}</p>
          </div>
        </div>
        
        {/* Rating Stars */}
        {rating > 0 && (
          <div className="flex items-center mb-2">
            {stars.map((filled, index) => (
              <Star 
                key={index}
                className={`w-4 h-4 ${filled ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
              />
            ))}
          </div>
        )}
        
        {/* Preview Text */}
        <p className="text-gray-700 line-clamp-3 mb-4">{preview}</p>
        
        {/* Read More Link */}
        <a 
          href={reviewLink} 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
        >
          Read full review
          <ArrowRight className="ml-1 h-4 w-4" />
        </a>
      </div>
    </div>
  );
};