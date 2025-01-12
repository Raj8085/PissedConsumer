// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"
// // import { Link } from "react-router-dom"

// export function SiteHeader() {
//   return (
//     <header className="sticky top-0 z-50 w-full border-b bg-background">
//       <div className="container flex h-16 items-center">
//         <div className="mr-8">
//           {/* <Link to="" className="flex items-center space-x-2"> */}
//             {/* <span className="text-xl font-bold">PISSED consumer</span> */}
//             <img src="/logo.svg" alt="" className="w-44"/>
//           {/* </Link> */}
//         </div>
//         <nav className="flex flex-1">
//           <ul className="flex items-center space-x-6">
//             <li>
//               {/* <Link to="/reviews" className="text-sm font-medium"> */}
//                 Reviews
//               {/* </Link> */}
//             </li>
//             <li>
//               {/* <Link to="/categories" className="text-sm font-medium"> */}
//                 Categories
//               {/* </Link> */}
//             </li>
//             <li>
//               {/* <Link to="/companies" className="text-sm font-medium"> */}
//                 Companies
//               {/* </Link> */}
//             </li>
//           </ul>
//         </nav>
//         <div className="flex items-center space-x-4">
//           <div className="relative w-64">
//             <Input
//               type="search"
//               placeholder="Search"
//               className="w-full"
//             />
//           </div>
//           <Button variant="destructive">Write review</Button>
//           <Button variant="outline">For Business</Button>
//           <Button variant="ghost">Login</Button>
//         </div>
//       </div>
//     </header>
//   )
// }




import { useState } from "react"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <img src="/logo.svg" alt="Logo" className="w-36 sm:w-44" />
        </div>

        {/* Hamburger Menu (visible on mobile + tablet, hidden on desktop) */}
        <button
          className="lg:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              // X icon when menu is open
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              // Hamburger icon when menu is closed
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* NAV + Actions Container 
            - For mobile & tablet: show/hide based on `menuOpen`.
            - For desktop (`lg:`): always visible.
        */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute left-0 top-16 w-full border-b bg-background lg:static lg:block lg:border-0`}
        >
          <div className="flex flex-col items-start space-y-4 p-4 lg:flex-row lg:items-center lg:justify-end lg:space-x-6 lg:space-y-0 lg:p-0">
            {/* Navigation Links */}
            <nav className="flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-6">
              <a href="#" className="text-sm font-medium hover:underline">
                Reviews
              </a>
              <a href="#" className="text-sm font-medium hover:underline">
                Categories
              </a>
              <a href="#" className="text-sm font-medium hover:underline">
                Companies
              </a>
            </nav>

            {/* Optional divider line */}
            <div className="hidden h-6 w-px bg-gray-200 lg:block" />

            {/* Search + Buttons */}
            <div className="flex flex-col items-start space-y-2 lg:flex-row lg:items-center lg:space-y-0 lg:space-x-4">
              {/* Search Bar */}
              <div className="relative w-full lg:w-64">
                <Input type="search" placeholder="Search" className="w-full" />
              </div>

              {/* Action Buttons */}
              <Button variant="destructive" className="w-full lg:w-auto">
                Write review
              </Button>
              <Button variant="outline" className="w-full lg:w-auto">
                For Business
              </Button>
              <Button variant="ghost" className="w-full lg:w-auto">
                Login
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
