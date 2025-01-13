// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Search } from 'lucide-react'

// export function HeroSection() {
//   return (
//     <section className="relative">
//       <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/80">
//         {/* <div className="absolute inset-0 bg-[url('/hero-img-home (1).jpg')] bg-cover bg-center opacity-50" /> */}
//         <img src="public/hero-img-home (1).jpg" alt=""/>
//       </div>
//       <div className="container relative">
//         <div className="flex min-h-[400px] flex-col items-center justify-center space-y-8 py-20 text-center">
//           <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
//             Write review and communicate with brands
//           </h1>
//           <div className="flex w-full max-w-xl items-center space-x-2">
//             <Input
//               type="text"
//               placeholder="Research Company"
//               className="h-12 text-lg"
//             />
//             <Button size="lg" className="h-12 w-12 bg-[#006699] p-0 hover:bg-[#006699]/90">
//               <Search className="h-5 w-5" />
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function HeroSection() {
  return (
    <>
      <section className="relative h-44 sm:h-96 md:h-96">
        {/* Background image & overlay */}
        <div className="absolute inset-0">
          <img
            src="/hero-img-home (1).jpg"
            alt="Hero background"
            className="h-full w-full object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0" />
        </div>

        {/* Content container */}
        <div className="relative container mx-auto px-4 py-20">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            {/* Responsive Heading */}
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Write review and communicate with brands
            </h1>

            {/* Search + Button (stacks on mobile, row on larger screens) */}
            <div className="flex w-full max-w-xl flex-col items-center space-y-3 sm:flex-row sm:space-x-2 sm:space-y-0 h-[30rem]">
              <Input
                type="text"
                placeholder="Research Company"
                className="h-12 w-full text-lg border-red-900"
              />
              <Button
                size="lg"
                className="flex h-12 w-12 items-center justify-center bg-[#006699] p-0 hover:bg-[#006699]/90"
              >
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        {/* <h1>Latest Reviews From Over 27 Million Consumers</h1> */}
      </section>
    </>
  );
}
