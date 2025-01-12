// import { SiteHeader } from "./component/SIteHeader"
// import { HeroSection } from "./component/HeroSection"
// import FeatureDetails from "./component/FeaturesDetails"
// import MiddleCard from "./component/MiddleCard"

// export default function Home() {
//   return (
//     <>
//       {/* <SiteHeader />
//         <HeroSection />
//       <FeatureDetails/>
//       <MiddleCard/> */}



          
      
//     </>
//   )
// }





// import { Volume2 } from 'lucide-react'

// function App() {
//   return (
//     <div className="mx-auto max-w-2xl overflow-hidden rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-300 p-6">
//       {/* Header */}
//       <div className="flex justify-between px-4 text-2xl font-bold text-red-600">
//         <div>॥ ओम शांति ॥</div>
//         <div>॥ ओम शांति ॥</div>
//       </div>

//       {/* Title */}
//       <div className="my-4 text-center text-4xl font-bold text-red-600">
//         विनम्र श्रद्धांजलि
//       </div>

//       {/* Main Content Container */}
//       <div className="relative mx-auto max-w-xl">
//         {/* Decorative Elements */}
//         <div className="absolute -left-4 top-1/2 -translate-y-1/2">
//           <div className="relative h-32 w-24">
//             <img
//               src="/Images/png-clipart-white-flower-bouquet-illustration-flower-funeral-home-coffin-cemetery-funeral-miscellaneous-flower-arranging-removebg-preview (1).png"
//               alt="Decorative flowers"
//               className="object-contain"
//             />
//           </div>
//         </div>
//         <div className="absolute -right-4 top-1/2 -translate-y-1/2">
//           <div className="relative h-32 w-24">
//             <img
//               src="/Images/png-clipart-white-flower-bouquet-illustration-flower-funeral-home-coffin-cemetery-funeral-miscellaneous-flower-arranging-removebg-preview (1).png"
//               alt="Decorative flowers"
//               className="object-contain"
//             />
//           </div>
//         </div>

//         {/* Central Photo */}
//         <div className="relative mx-auto mb-6 w-64">
//           <div className="relative aspect-[3/4] overflow-hidden rounded-lg border-4 border-rose-200">
//             <img
//               src="Images/dadiji.jpg"
//               alt="Memorial photo"
//               className="object-cover"
//             />
//           </div>
//           {/* Roses at bottom */}
//           {/* <div className="absolute -bottom-4 left-1/2 w-48 -translate-x-1/2">
//             <img
//               src="/placeholder.svg"
//               alt="Rose decoration"
//               width={192}
//               height={48}
//               className="object-contain"
//             />
//           </div> */}
//           {/* Audio Icon */}
//           {/* <div className="absolute -right-8 top-0 rounded-full bg-white p-2 shadow-md">
//             <Volume2 className="h-5 w-5" />
//           </div> */}
//         </div>

//         {/* Text Content */}
//         <div className="space-y-4 text-center">
//           <p className="text-lg leading-relaxed text-blue-800">
//             अत्यंत दु:ख के साथ सूचित करना पड़ रहा है कि हमारी<br />
//             माता श्रीमति राधा पटेल जी का स्वर्गवास दिनांक- 09/01/2025<br />
//             हो गया है। 
//           </p>
//           {/* जिनकी आत्मशांति के लिये श्रद्धांजलि सभा एवं स्मरण कार्यक्रम<br />
//             दिनांक- 09/12/2024, दिन- सोमवार को रखी गई है।<br />
//             अतः पधार कर दिवंगत आत्मा को शांति प्रदान करें। */}

//           {/* Note Section */}
//           <div className="rounded-lg border-2 border-red-500 p-3 text-red-600">
//             <p className="font-semibold">
//               नोट- बैठके का कार्यक्रम दिनांक- 12/01/2025, 13/01/2025,<br />
//               14/01/2025/, 15/02/2025 को रखा गया है।<br />
//               स्मरण के बाद की प्रथायें बंद रहेंगी।
//             </p>
//           </div>

//           {/* Family Details */}
//           <div className="text-lg text-blue-800">
//             <p className="font-semibold">
//               शोक संतप्त- पुत्र- श्री गंगाराम जी पटेल , श्री हरिराम जी पटेल, स्वर्गीय. श्रीदेवी प्रसाद जी पटेल.<br />
            
//             </p>
//           </div>

//           {/* Venue Details */}
//           <div className="mt-4 text-red-600">
//             <p>
//               कार्यक्रम स्थल- निज निवास ग्राम पचलावरा, तह. पिपरिया, जिला- नर्मदापुरम<br />
//               7389986834, 8120414038
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default App







function App() {
  return (
    <div className="h-screen overflow-hidden bg-gradient-to-r from-yellow-400 to-yellow-300 p-2 flex flex-col justify-between items-center">
      {/* Header */}
      <div className="flex w-full items-center justify-between px-2 text-base font-bold text-red-600">
        <div>॥ ओम शांति ॥</div>
        <div>॥ ओम शांति ॥</div>
      </div>

      {/* Title */}
      <div className="text-center text-xl font-bold text-red-600">
        विनम्र श्रद्धांजलि
      </div>

      {/* Main Content Container */}
      <div className="relative flex w-full max-w-sm flex-col items-center">
        {/* Decorative Elements (Smaller) */}
        <div className="absolute left-0  flex -translate-y-1/2">
          <img
            src="/Images/png-clipart-white-flower-bouquet-illustration-flower-funeral-home-coffin-cemetery-funeral-miscellaneous-flower-arranging-removebg-preview (1).png"
            alt="Decorative flowers"
            className="h-16 w-24 object-contain"
          />
        </div>
        <div className="absolute right-0  flex -translate-y-1/2">
          <img
            src="/Images/png-clipart-white-flower-bouquet-illustration-flower-funeral-home-coffin-cemetery-funeral-miscellaneous-flower-arranging-removebg-preview (1).png"
            alt="Decorative flowers"
            className="h-16 w-24 object-contain"
          />
        </div>
{/* public/Images/bootom-removebg-preview.png */}
        {/* Central Photo (Smaller) */}
        {/* <div className="relative mb-2 w-48 mt-10">
          <div className="aspect-[3/4] overflow-hidden rounded-md border-2 border-rose-200">
            <img
              src="Images/dadiji.jpg"
              alt="Memorial photo"
              className="h-full w-full object-cover"
            />
          </div>
        </div> */}
        <div className="relative mx-auto mb-6 w-52">
  {/* Image container */}
  <div className="relative aspect-[3/4] overflow-hidden rounded-lg border-4 border-rose-200">
    <img
      src="Images/dadiji.jpg"
      alt="Memorial photo"
      className="h-full w-full object-cover"
    />
  </div>

  {/* Rose decoration at the bottom center */}
  <div className="absolute [bottom:-60px] left-1/2 w-48 -translate-x-1/2">
    <img
      src="/Images/bootom-removebg-preview.png"
      alt="Rose decoration"
      width={192}
      height={48}
      className="object-contain"
    />
  </div>
</div>

      </div>


       

      {/* Text Content (Reduced Font Sizes) */}
      <div className="flex flex-col items-center space-y-2 text-xs text-blue-900 px-1">
      
        <p className="leading-tight">
          अत्यंत दु:ख के साथ सूचित करना पड़ रहा है कि हमारी<br />
          माता श्रीमति राधा पटेल जी का स्वर्गवास दिनांक- 09/01/2025<br />
          को हो गया है।
        </p>

        {/* Note Section */}
        <div className="rounded border border-red-500 p-2 text-red-600">
          <p className="font-semibold leading-tight">
            नोट- बैठके का कार्यक्रम दिनांक- 12/01/2025,<br />
            13/01/2025, 14/01/2025, 15/02/2025 को रखा गया है।
            <br />
            स्मरण के बाद की प्रथायें बंद रहेंगी।
          </p>
        </div>

        {/* Family Details */}
        <p className="leading-tight">
          शोक संतप्त- पुत्र- श्री गंगाराम जी पटेल, श्री हरिराम जी पटेल,<br />
          स्वर्गीय श्रीदेवी प्रसाद जी पटेल.
        </p>

        {/* Venue Details */}
        <p className="text-red-600 leading-tight">
          कार्यक्रम स्थल- निज निवास ग्राम पचलावरा,<br />
          तह. पिपरिया, जिला- नर्मदापुरम<br />
          7389986834, 8120414038
        </p>
      </div>
    </div>
  )
}

export default App
