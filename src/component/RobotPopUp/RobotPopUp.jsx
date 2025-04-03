/* eslint-disable react/prop-types */
// // const CaptchaVerificationPage = () => {
// //   // Get current date in ISO format
// //   const currentDate = new Date().toISOString();
// //   // Get IP address placeholder (would normally be dynamic)
// //   const ipAddress = "104.28.104.126";
  
// //   return (
// //     <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
// //       <div className="w-full max-w-md border border-gray-300 rounded p-6 bg-white">
// //         <div className="border-t border-gray-300 my-6"></div>
        
// //         <div className="bg-gray-100 border border-gray-300 rounded p-4 flex items-center mb-4">
// //           <div className="mr-4">
// //             <input type="checkbox" className="h-6 w-6 border-gray-300" />
// //           </div>
          
// //           <div className="flex-grow">
// //             <p className="text-base">I&apos;m not a robot</p>
// //           </div>
          
// //           <div className="flex flex-col items-center">
// //             <div className="w-10 h-10 flex items-center justify-center mb-1">
// //               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full">
// //                 <path fill="#4285f4" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
// //                 <path fill="#fff" d="M17 12l-1.41 1.41L12 9.83l-3.59 3.58L7 12l5-5 5 5z" />
// //                 <path fill="#4285f4" d="M12 18c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z" />
// //                 <path fill="#fff" d="M12 8v4l3 3-1 1-4-4V8h2z" />
// //               </svg>
// //             </div>
// //             <div className="text-xs text-gray-500">
// //               <span>reCAPTCHA</span>
// //             </div>
// //             <div className="text-xs text-gray-500">
// //               <span>Privacy - Terms</span>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="border-t border-gray-300 my-6"></div>
        
// //         <div className="mb-6">
// //           <h2 className="text-xl font-bold mb-4">About this page</h2>
// //           <p className="mb-4">
// //             Our systems have detected unusual traffic from your computer network. 
// //             This page checks to see if it&apos;s really you sending the requests, and not a robot.{' '}
// //             <a href="#" className="text-blue-600 hover:underline">Why did this happen?</a>
// //           </p>
          
// //           <div className="text-sm">
// //             <p>IP address: {ipAddress}</p>
// //             <p>Time: {currentDate}</p>
// //             <p className="break-words">URL: https://calendar.google.com/calendar/embed?height=400&wkst=1&bgcolor=%23ffffff&ctz=America%</p>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };
// // export default CaptchaVerificationPage;




// import  { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const CaptchaVerificationPage = () => {
//   const [isChecked, setIsChecked] = useState(false);
//   const navigate = useNavigate(); // Hook for programmatic navigation

//   // Get current date in ISO format
//   const currentDate = new Date().toISOString();
//   // Get IP address placeholder (would normally be dynamic)
//   const ipAddress = "104.28.104.126";

//   // Handle checkbox change
//   const handleCheckboxChange = (e) => {
//     setIsChecked(e.target.checked);
//   };

//   // Redirect to the home page when the checkbox is checked
//   const handleSubmit = () => {
//     if (isChecked) {
//       navigate("/"); // Navigate to the home page
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
//       <div className="w-full max-w-md border border-gray-300 rounded p-6 bg-white">
//         <div className="border-t border-gray-300 my-6"></div>

//         <div className="bg-gray-100 border border-gray-300 rounded p-4 flex items-center mb-4">
//           <div className="mr-4">
//             <input
//               type="checkbox"
//               className="h-6 w-6 border-gray-300"
//               checked={isChecked}
//               onChange={handleCheckboxChange}
//             />
//           </div>

//           <div className="flex-grow">
//             <p className="text-base">I&apos;m not a robot</p>
//           </div>

//           <div className="flex flex-col items-center">
//             <div className="w-10 h-10 flex items-center justify-center mb-1">
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full">
//                 <path fill="#4285f4" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
//                 <path fill="#fff" d="M17 12l-1.41 1.41L12 9.83l-3.59 3.58L7 12l5-5 5 5z" />
//                 <path fill="#4285f4" d="M12 18c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z" />
//                 <path fill="#fff" d="M12 8v4l3 3-1 1-4-4V8h2z" />
//               </svg>
//             </div>
//             <div className="text-xs text-gray-500">
//               <span>reCAPTCHA</span>
//             </div>
//             <div className="text-xs text-gray-500">
//               <span>Privacy - Terms</span>
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-gray-300 my-6"></div>

//         <div className="mb-6">
//           <h2 className="text-xl font-bold mb-4">About this page</h2>
//           <p className="mb-4">
//             Our systems have detected unusual traffic from your computer network.
//             This page checks to see if it&apos;s really you sending the requests, and not a robot.{' '}
//             <a href="#" className="text-blue-600 hover:underline">Why did this happen?</a>
//           </p>

//           <div className="text-sm">
//             <p>IP address: {ipAddress}</p>
//             <p>Time: {currentDate}</p>
//             <p className="break-words">URL: https://calendar.google.com/calendar/embed?height=400&wkst=1&bgcolor=%23ffffff&ctz=America%</p>
//           </div>
//         </div>

//         {/* Button to trigger navigation */}
//         <div className="flex justify-center">
//           <button
//             className="px-4 py-2 bg-blue-600 text-white rounded"
//             onClick={handleSubmit}
//             disabled={!isChecked} // Disable button until the checkbox is checked
//           >
//             Continue
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CaptchaVerificationPage;





import { useState } from "react"
import { useNavigate } from "react-router-dom"


const CaptchaVerificationPage = ({ setIsCaptchaVerified }) => {
  const [isChecked, setIsChecked] = useState(false)
  const navigate = useNavigate()

  // Get current date in ISO format
  const currentDate = new Date().toISOString()
  // Get IP address placeholder (would normally be dynamic)
  const ipAddress = "104.28.104.126"

  // Handle checkbox change
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked)
  }

  // Redirect to the home page when the checkbox is checked
  const handleSubmit = () => {
    if (isChecked) {
      // Update the state in the parent component
      setIsCaptchaVerified(true)

      // Store verification in localStorage for persistence
      localStorage.setItem("captchaVerified", "true")

      // Navigate to the home page
      navigate("/")
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-md border border-gray-300 rounded p-6 bg-white">
        <div className="border-t border-gray-300 my-6"></div>

        <div className="bg-gray-100 border border-gray-300 rounded p-4 flex items-center mb-4">
          <div className="mr-4">
            <input
              type="checkbox"
              className="h-6 w-6 border-gray-300"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
          </div>

          <div className="flex-grow">
            <p className="text-base">I&apos;m not a robot</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-10 h-10 flex items-center justify-center mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full">
                <path fill="#4285f4" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                <path fill="#fff" d="M17 12l-1.41 1.41L12 9.83l-3.59 3.58L7 12l5-5 5 5z" />
                <path fill="#4285f4" d="M12 18c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z" />
                <path fill="#fff" d="M12 8v4l3 3-1 1-4-4V8h2z" />
              </svg>
            </div>
            <div className="text-xs text-gray-500">
              <span>reCAPTCHA</span>
            </div>
            <div className="text-xs text-gray-500">
              <span>Privacy - Terms</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 my-6"></div>

        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4">About this page</h2>
          <p className="mb-4">
            Our systems have detected unusual traffic from your computer network. This page checks to see if it&apos;s
            really you sending the requests, and not a robot.{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Why did this happen?
            </a>
          </p>

          <div className="text-sm">
            <p>IP address: {ipAddress}</p>
            <p>Time: {currentDate}</p>
            <p className="break-words">
              URL: https://calendar.google.com/calendar/embed?height=400&wkst=1&bgcolor=%23ffffff&ctz=America%
            </p>
          </div>
        </div>

        {/* Button to trigger navigation */}
        <div className="flex justify-center">
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded"
            onClick={handleSubmit}
            disabled={!isChecked} // Disable button until the checkbox is checked
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  )
}

export default CaptchaVerificationPage

