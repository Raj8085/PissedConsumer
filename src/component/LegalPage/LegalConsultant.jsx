

import PopComponent from "../Amazon/PopComponent";


function LegalConsultant() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="py-8 px-4 sm:px-6 lg:px-8 w-full text-black font-extrabold relative">
        <img
          src="/popup/legalbackgroundimage.jpg"
          alt="Technology and Cybersecurity Support"
          className="absolute inset-0 w-full h-[40rem] object-cover opacity-70"
        />
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center z-10 relative md:gap-40">
          {/* Content Section */}
          <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
              Legal & Consultancy Customer Support
            </h1>
            <p className="mt-4 text-base sm:text-lg md:text-2xl text-white drop-shadow-lg md:font-extrabold">
              Expert advice and assistance for all your legal and consultancy needs.
            </p>
            <button
              className="mt-6 bg-green-600 text-white py-2 px-6 rounded-md shadow-md hover:bg-green-700 transition-colors duration-300"
            >
              Get Started
            </button>
          </div>

          <img
            src="/popup/LegalPage.jpg"
            alt="Housing Popup"
            className="mt-10 w-[450px] transition-transform duration-300 hover:scale-105"
          />
        </div>
      </header>
      <PopComponent/>

      

      <div className="container mx-auto px-4 py-8 flex-grow mt-96">
        {/* Immigration Services */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">Immigration Services</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl font-medium mb-2">Visa and Citizenship Assistance</h3>
            <p className="text-gray-700">
              We provide expert guidance on immigration, including visa applications and
              citizenship processes. Our team ensures compliance with legal requirements
              and smooth handling of documentation.
            </p>
          </div>
        </section>

        {/* Tax Consultation */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">Tax Consultation</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl font-medium mb-2">Tax Filing and Planning</h3>
            <p className="text-gray-700">
              Need help with tax filing or planning? Our consultants offer personalized
              tax solutions to ensure compliance and maximize your refunds.
            </p>
          </div>
        </section>

        {/* Business Formation */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">Business Formation</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl font-medium mb-2">Starting Your Business</h3>
            <p className="text-gray-700">
              We assist with registering businesses, choosing legal structures, and ensuring
              compliance with state and federal regulations.
            </p>
          </div>
        </section>

        {/* Family Law */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">Family Law</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl font-medium mb-2">Legal Support for Families</h3>
            <p className="text-gray-700">
              Our legal experts provide compassionate advice on family law matters,
              including divorce, child custody, and estate planning.
            </p>
          </div>
        </section>

        {/* Contact Us */}
        <section id="contact" className="mb-8">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">Contact Us</h2>
          <p className="mb-6 text-gray-700">
            Need assistance? Fill out the form below, and our customer support team will
            get back to you shortly.
          </p>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md
                             focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Your Name"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md
                             focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Your Email"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="query" className="block text-gray-700 font-medium mb-2">
                  Your Query:
                </label>
                <textarea
                  id="query"
                  name="query"
                  rows="5"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md
                             focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Your Query"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-green-600 text-white py-2 px-4 rounded-md
                           hover:bg-green-700 transition-colors duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-green-800 text-white text-center py-4">
        <p>
          © 2024 Legal & Consultancy Customer Support. All Rights Reserved. |{' '}
          <a href="#" className="text-green-200 hover:underline">Privacy Policy</a>
        </p>
        <p className="font-bold mt-5">Call Now For Expert Support{" "}</p>

        <p className="">
          <a
            href="tel:+10865449042"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "tel:+10865449042";
            }}
            className="text-green-200 hover:underline"
          >
            +108-654-49042
          </a>
        </p>
      </footer>
    </div>
  );
}
export default LegalConsultant  


// import { useState } from "react";
// import PopComponent from "./PopComponent";

// function LegalConsultant() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Navbar */}
//       <nav className="bg-blue-900 text-white py-4 px-6">
//         <div className="max-w-screen-xl mx-auto flex justify-between items-center">
//           <div className="text-2xl font-extrabold">LegalConsult</div>
//           <div className="lg:flex hidden space-x-4">
//             <a href="#home" className="hover:text-green-200">Home</a>
//             <a href="#services" className="hover:text-green-200">Services</a>
//             <a href="#contact" className="hover:text-green-200">Contact</a>
//             <a href="#about" className="hover:text-green-200">About</a>
//           </div>
//           <div className="lg:hidden flex items-center">
//             <button
//               className="text-white"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 className="h-6 w-6"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="lg:hidden bg-green-800 text-white space-y-4 py-4 px-6">
//             <a href="#home" className="block hover:text-green-200">Home</a>
//             <a href="#services" className="block hover:text-green-200">Services</a>
//             <a href="#contact" className="block hover:text-green-200">Contact</a>
//             <a href="#about" className="block hover:text-green-200">About</a>
//           </div>
//         )}
//       </nav>

//       <header className="py-8 px-4 sm:px-6 lg:px-8 w-full text-black font-extrabold relative">
//         <img
//           src="/legalbackgroundimage.jpg"
//           alt="Technology and Cybersecurity Support"
//           className="absolute inset-0 w-full h-[40rem] object-cover opacity-70"
//         />
//         <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center z-10 relative md:gap-40">
//           {/* Content Section */}
//           <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
//             <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
//               Legal & Consultancy Customer Support
//             </h1>
//             <p className="mt-4 text-base sm:text-lg md:text-2xl text-white drop-shadow-lg md:font-extrabold">
//               Expert advice and assistance for all your legal and consultancy needs.
//             </p>
//             <button
//               className="mt-6 bg-green-600 text-white py-2 px-6 rounded-md shadow-md hover:bg-green-700 transition-colors duration-300"
//             >
//               Get Started
//             </button>
//           </div>

//           <img
//             src="/Housing-pop-up.jpg"
//             alt="Housing Popup"
//             className="mt-10 w-[450px] transition-transform duration-300 hover:scale-105"
//           />
//         </div>
//       </header>
//       <PopComponent />

//       <div className="container mx-auto px-4 py-8 flex-grow mt-96">
//         {/* Immigration Services */}
//         <section id="services" className="mb-8">
//           <h2 className="text-2xl font-semibold text-green-800 mb-4">Immigration Services</h2>
//           <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
//             <h3 className="text-xl font-medium mb-2">Visa and Citizenship Assistance</h3>
//             <p className="text-gray-700">
//               We provide expert guidance on immigration, including visa applications and
//               citizenship processes. Our team ensures compliance with legal requirements
//               and smooth handling of documentation.
//             </p>
//           </div>
//         </section>

//         {/* Tax Consultation */}
//         <section className="mb-8">
//           <h2 className="text-2xl font-semibold text-green-800 mb-4">Tax Consultation</h2>
//           <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
//             <h3 className="text-xl font-medium mb-2">Tax Filing and Planning</h3>
//             <p className="text-gray-700">
//               Need help with tax filing or planning? Our consultants offer personalized
//               tax solutions to ensure compliance and maximize your refunds.
//             </p>
//           </div>
//         </section>

//         {/* Business Formation */}
//         <section className="mb-8">
//           <h2 className="text-2xl font-semibold text-green-800 mb-4">Business Formation</h2>
//           <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
//             <h3 className="text-xl font-medium mb-2">Starting Your Business</h3>
//             <p className="text-gray-700">
//               We assist with registering businesses, choosing legal structures, and ensuring
//               compliance with state and federal regulations.
//             </p>
//           </div>
//         </section>

//         {/* Family Law */}
//         <section className="mb-8">
//           <h2 className="text-2xl font-semibold text-green-800 mb-4">Family Law</h2>
//           <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
//             <h3 className="text-xl font-medium mb-2">Legal Support for Families</h3>
//             <p className="text-gray-700">
//               Our legal experts provide compassionate advice on family law matters,
//               including divorce, child custody, and estate planning.
//             </p>
//           </div>
//         </section>

//         {/* Contact Us */}
//         <section id="contact" className="mb-8">
//           <h2 className="text-2xl font-semibold text-green-800 mb-4">Contact Us</h2>
//           <p className="mb-6 text-gray-700">
//             Need assistance? Fill out the form below, and our customer support team will
//             get back to you shortly.
//           </p>
//           <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
//             <form>
//               <div className="mb-4">
//                 <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
//                   Name:
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   required
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md
//                              focus:outline-none focus:ring-2 focus:ring-green-500"
//                   placeholder="Your Name"
//                 />
//               </div>

//               <div className="mb-4">
//                 <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
//                   Email:
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   required
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md
//                              focus:outline-none focus:ring-2 focus:ring-green-500"
//                   placeholder="Your Email"
//                 />
//               </div>

//               <div className="mb-4">
//                 <label htmlFor="query" className="block text-gray-700 font-medium mb-2">
//                   Your Query:
//                 </label>
//                 <textarea
//                   id="query"
//                   name="query"
//                   rows="5"
//                   required
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md
//                              focus:outline-none focus:ring-2 focus:ring-green-500"
//                   placeholder="Your Query"
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 className="bg-green-600 text-white py-2 px-4 rounded-md
//                            hover:bg-green-700 transition-colors duration-300"
//               >
//                 Submit
//               </button>
//             </form>
//           </div>
//         </section>
//       </div>

//       {/* Footer */}
//       <footer className="bg-green-800 text-white text-center py-4">
//         <p>
//           © 2024 Legal & Consultancy Customer Support. All Rights Reserved. |{' '}
//           <a href="#" className="text-green-200 hover:underline">Privacy Policy</a>
//         </p>
//         <p className="font-bold mt-5">Call Now For Expert Support{" "}</p>

//         <p className="">
//           <a
//             href="tel:+10865449042"
//             onClick={(e) => {
//               e.preventDefault();
//               window.location.href = "tel:+10865449042";
//             }}
//             className="text-green-200 hover:underline"
//           >
//             +108-654-49042
//           </a>
//         </p>
//       </footer>
//     </div>
//   );
// }

// export default LegalConsultant;
