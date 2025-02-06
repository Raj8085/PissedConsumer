// /* eslint-disable react/prop-types */
import { Route, Routes } from "react-router-dom"
import Home from "./component/Home/Home"
import Review from "./component/Review/Review"
import { SiteHeader } from "./component/SIteHeader"
import AmazonCustomerSupport from "./component/Amazon/AmazonCustomerSupport"
import FacebookSupport from "./component/Facebook/Facebook"
import TechnologyCybersecuritySupport from "./component/TechnologySupport/TechnologyCybersecuritySupport"
import LegalConsultant from "./component/LegalPage/LegalConsultant"
import Robin from "./component/RobinPage/Robin"
import UtilitiesCustomerSupport from "./component/UtilitySupport/UtilitiesCustomerSupport"
import MicrosoftSupport from "./component/Microsoft/Microsoft"
import HomeSelter from "./component/HomePage/HomeSelter"
import HomeIosSection from "./component/Ios/Home"
import ContentConsumer from "./ContentSupport/ContentSupport"
import Hero from "./component/VPN/compo/Hero"
import VPNInfoSection from "./component/VPN/compo/InfoSection"
import FeaturesSection from "./component/VPN/compo/Features"
import OneStopShopSection from "./component/VPN/compo/ShopSection"
import TestimonialsSection from "./component/VPN/compo/TestimonialSection"
import PromotionalBanner from "./component/VPN/compo/Promotional"
import FAQSection from "./component/VPN/compo/FAQ"
import Footer from "./component/RobinPage/component/Footer"
import PricingTable from "./component/VPN/Pricing/PricingTable"
import Navbar from "./component/VPN/compo/Navbar"
import PrivacyPolicy from "./component/RobinPage/component/Footer/Privacy"
import TermOfUse from "./component/RobinPage/component/Footer/TermOfUse"
import MainLegal from "./component/RobinPage/component/Footer/MainLegal"
import HeroSolution from "./component/RobinPage/component/BusinessSolution/HeroSolution"

const App = () => {
  return (
    <div>
      <SiteHeader/>
      <main className="">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/reviews" element={<Review/>}/>
        <Route path="/company/option1" element={<AmazonCustomerSupport/>}/>
        <Route path="/facebook/option2" element={<FacebookSupport/>}/>
        <Route path="/techno-support/option3" element={<TechnologyCybersecuritySupport/>}/>
        <Route path="/legal-support/option4" element={<LegalConsultant/>}/>
        <Route path="/robin/option5" element={<Robin/>}/>
        <Route path="/utility/option6" element={<UtilitiesCustomerSupport/>}/>
        <Route path="/micro/option7" element={<MicrosoftSupport/>}/>
        <Route path="/home/option8" element={<HomeSelter/>}/>
        <Route path="/ios/option9" element={<HomeIosSection/>}/>
        <Route path="/content/option10" element={<ContentConsumer/>}/>
        {/* <Route path="/vpn/option11" element={<HomeVpnApp/>}/> */}
        <Route
          path="/vpn/option11"
          element={
            <>
            <Navbar/>
              <Hero />
              {/* <ComparePlans /> */}
              <VPNInfoSection />
              <FeaturesSection />
              <OneStopShopSection />
              <TestimonialsSection />
              <PromotionalBanner />
              <FAQSection />
              {/* <Footer/> */}
            </>
          }
        />
        <Route path="/pricing" element={<PricingTable/>} />
        <Route path="/privacy" element={<PrivacyPolicy/>} />
        <Route path="/term" element={<TermOfUse/>} />
        <Route path="/legal" element={<MainLegal/>} />
        <Route path="/bussiness" element={<HeroSolution/>} />
      </Routes>
      </main>
      <Footer/>
    </div>
  )
}
export default App



// import { useState } from 'react';
// import { AlertCircle, CheckCircle2, XCircle, AlertTriangle, X } from 'lucide-react';

// const AlertPopup = ({ isOpen, onClose, title, message, type = 'info' }) => {
//   if (!isOpen) return null;

//   const getAlertStyles = () => {
//     const styles = {
//       info: {
//         bgColor: 'bg-gradient-to-r from-blue-500/10 to-blue-600/10',
//         borderColor: 'border-blue-500',
//         textColor: 'text-blue-700',
//         icon: <AlertCircle className="h-6 w-6 text-blue-500 animate-pulse" />
//       },
//       success: {
//         bgColor: 'bg-gradient-to-r from-green-500/10 to-green-600/10',
//         borderColor: 'border-green-500',
//         textColor: 'text-green-700',
//         icon: <CheckCircle2 className="h-6 w-6 text-green-500 animate-bounce" />
//       },
//       error: {
//         bgColor: 'bg-gradient-to-r from-red-500/10 to-red-600/10',
//         borderColor: 'border-red-500',
//         textColor: 'text-red-700',
//         icon: <XCircle className="h-6 w-6 text-red-500 animate-spin" />
//       },
//       warning: {
//         bgColor: 'bg-gradient-to-r from-yellow-500/10 to-yellow-600/10',
//         borderColor: 'border-yellow-500',
//         textColor: 'text-yellow-700',
//         icon: <AlertTriangle className="h-6 w-6 text-yellow-500 animate-bounce" />
//       }
//     };
//     return styles[type] || styles.info;
//   };

//   const styles = getAlertStyles();

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center">
//       {/* Animated Backdrop with enhanced blur */}
//       <div 
//         className="fixed inset-0 backdrop-blur-md bg-black/40 animate-fadeIn"
//         onClick={onClose}
//       />
      
//       {/* Alert Container */}
//       <div className={`
//         relative
//         w-full max-w-md
//         m-4 p-8
//         rounded-xl
//         border-2 ${styles.borderColor}
//         shadow-2xl
//         ${styles.bgColor}
//         animate-dropIn
//         hover:scale-105
//         transition-transform duration-300
//         backdrop-blur-sm
//       `}>
//         {/* Decorative Elements */}
//         <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-white/30 animate-pulse" />
//         <div className="absolute -bottom-4 -right-4 w-12 h-12 rounded-full bg-white/20 animate-ping" />
        
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className={`
//             absolute right-3 top-3
//             p-1.5 rounded-full
//             hover:bg-black/10
//             transition-all duration-300
//             hover:rotate-90
//             ${styles.textColor}
//           `}
//         >
//           <X className="h-5 w-5" />
//         </button>

//         {/* Alert Content */}
//         <div className="flex items-start space-x-4 relative">
//           <div className="flex-shrink-0 mt-1">
//             {styles.icon}
//           </div>
//           <div className="flex-1">
//             <h3 className={`text-lg font-bold mb-2 ${styles.textColor}`}>
//               {title}
//             </h3>
//             <p className={`text-sm opacity-90 leading-relaxed ${styles.textColor}`}>
//               {message}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Add custom animations to Tailwind config
// const style = document.createElement('style');
// style.textContent = `
//   @keyframes dropIn {
//     0% { opacity: 0; transform: translateY(-20px) scale(0.9); }
//     70% { transform: translateY(10px) scale(1.05); }
//     100% { opacity: 1; transform: translateY(0) scale(1); }
//   }
//   .animate-dropIn {
//     animation: dropIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
//   }
//   .animate-fadeIn {
//     animation: fadeIn 0.3s ease-out;
//   }
//   @keyframes fadeIn {
//     from { opacity: 0; }
//     to { opacity: 1; }
//   }
// `;
// document.head.appendChild(style);

// // Demo component with multiple alert types
// const App = () => {
//   const [alert, setAlert] = useState({ isOpen: false, type: 'info' });

//   const showAlert = (type) => {
//     setAlert({ isOpen: true, type });
//   };

//   const messages = {
//     info: "This is an informative message with important details for you to know.",
//     success: "Congratulations! Your action was completed successfully.",
//     error: "Oops! Something went wrong. Please try again.",
//     warning: "Heads up! This action might have unexpected results."
//   };

//   return (
//     <div className="p-8 space-y-4">
//       <div className="space-x-4">
//         {/* <button
//           onClick={() => showAlert('info')}
//           className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
//         >
//           Info Alert
//         </button> */}
//         {/* <button
//           onClick={() => showAlert('success')}
//           className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
//         >
//           Success Alert
//         </button> */}
//         <button
//           onClick={() => showAlert('error')}
//           className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
//         >
//           Facebook
//         </button>
//         {/* <button
//           onClick={() => showAlert('warning')}
//           className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
//         >
//           Warning Alert
//         </button> */}
//       </div>

//       <AlertPopup
//         isOpen={alert.isOpen}
//         onClose={() => setAlert({ ...alert, isOpen: false })}
//         title={`${alert.type.charAt(0).toUpperCase() + alert.type.slice(1)} Alert`}
//         message={messages[alert.type]}
//         type={alert.type}
//       />

//       {/* Sample content for blur effect */}
//       {/* <div className="max-w-lg mt-8">
//         <h2 className="text-2xl font-bold mb-4">Sample Content</h2>
//         <p className="mb-4">
//           This content will be blurred when the popup appears. Try clicking
//           different alert types to see various animations and styles!
//         </p>
//       </div> */}
//     </div>
//   );
// };

// export default App;