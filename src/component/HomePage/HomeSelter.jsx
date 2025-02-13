import { useState, useEffect } from "react"
import Modal from "react-modal"

// This tells react-modal which element is the main root of your app
Modal.setAppElement("#root")

const HomeShelter = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Show modal on initial render
  useEffect(() => {
    setModalIsOpen(true)
  }, [])

  // Lock body scroll when modal is open
  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [modalIsOpen])

  const closeModal = () => {
    setModalIsOpen(false)
  }

  return (
    <>
      {/* Fixed, Gradient Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo Section */}
            <div className="text-2xl font-extrabold tracking-wide">
              Home Shelter
            </div>

            {/* Navigation Links (Visible on md and up) */}
            <nav className="hidden md:flex space-x-6 font-medium">
              <a
                href="#home"
                className="hover:text-gray-200 transition-colors"
              >
                Home
              </a>
              <a
                href="#features"
                className="hover:text-gray-200 transition-colors"
              >
                Features
              </a>
              <a
                href="#contact"
                className="hover:text-gray-200 transition-colors"
              >
                Contact
              </a>
            </nav>

            {/* Hamburger Menu Button (Mobile) */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {!isMenuOpen ? (
                  // Hamburger icon
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                ) : (
                  // Close (X) icon
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu (Visible when isMenuOpen is true) */}
          {isMenuOpen && (
            <nav
              id="mobile-menu"
              className="md:hidden animate-fade-in-down pb-4 border-t border-white/20"
            >
              <ul className="mt-2 px-2 space-y-2">
                <li>
                  <a
                    href="#home"
                    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </header>

      <div className="relative h-screen">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-20" />
        <img
          src="/HomeSelter.webp"
          alt="Luxury Home Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="relative z-30 h-full flex flex-col items-center justify-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-6">
            Find Your Dream Home Today
          </h1>
          <p className="text-xl md:text-2xl text-white text-center mb-8">
            Your Journey to Home Ownership Starts Here
          </p>
          
          
        </div>
      </div>

      

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Welcome Pop-up"
        className="relative max-w-lg w-full mx-auto mt-60 p-6 bg-white rounded shadow-md outline-none"
        overlayClassName="fixed inset-0 bg-black/50 flex items-start justify-center z-50"
        shouldCloseOnOverlayClick
      >
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-2xl text-gray-600 hover:text-gray-800 transition"
        >
          &times;
        </button>
        <img
          src="/AboutPissed/Housing-pop-up.jpg"
          alt="Welcome Popup"
          className="w-full h-auto rounded"
        />
        <div className="text-center mt-4">
          <h2 className="text-xl font-bold">Welcome to Home Shelter!</h2>
          <p className="text-gray-600 mt-2">
            Discover the best housing options for your budget.
          </p>
        </div>
      </Modal>

      {/* Main Content */}
      <div className="container max-w-screen-xl mx-auto px-4 py-10">
        {/* Features Section */}
        <section id="features" className="py-10 md:py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-item bg-white rounded shadow p-6 text-center">
              <i className="fas fa-wallet text-4xl text-blue-600 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Affordable Solutions</h3>
              <p className="text-gray-600">
                We provide housing solutions and mortgage plans tailored to your
                budget.
              </p>
            </div>
            <div className="feature-item bg-white rounded shadow p-6 text-center">
              <i className="fas fa-th-large text-4xl text-blue-600 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Wide Range of Options</h3>
              <p className="text-gray-600">
                Choose from apartments, houses, and other living spaces that
                suit your needs.
              </p>
            </div>
            <div className="feature-item bg-white rounded shadow p-6 text-center">
              <i className="fas fa-credit-card text-4xl text-blue-600 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Easy Payment Plans</h3>
              <p className="text-gray-600">
                Flexible payment options designed to make home ownership
                stress-free.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials bg-gray-100 py-10 md:py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
            What Our Clients Say
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="testimonial-item bg-white rounded shadow p-6">
              <p className="text-gray-700 italic">
                “Home Shelter made finding our dream home so easy and
                affordable. Highly recommend their services!”
              </p>
              <h4 className="mt-4 font-semibold text-gray-800">- Jane Doe</h4>
            </div>
            <div className="testimonial-item bg-white rounded shadow p-6">
              <p className="text-gray-700 italic">
                “The payment plans offered were flexible and suited our budget
                perfectly. Thank you, Home Shelter!”
              </p>
              <h4 className="mt-4 font-semibold text-gray-800">- John Smith</h4>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-10 md:py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
            Get in Touch
          </h2>
          <p className="max-w-2xl mx-auto text-center text-gray-600 mb-8">
            Contact us today to explore your options and take the first step
            towards your dream home.
          </p>
          <form
            action="#"
            method="post"
            className="max-w-xl mx-auto bg-white rounded shadow p-6 space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Your Name"
                className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Your Email"
                className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium"
              >
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                placeholder="Your Message"
                className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition font-medium"
            >
              Submit
            </button>
          </form>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 mt-10">
        <div className="max-w-screen-xl mx-auto px-4 flex flex-col items-center space-y-2">
          <p className="text-sm text-center">
            © 2024 Home Shelter &amp; Mortgage Solutions. All Rights Reserved.
          </p>
          <a href="#" className="text-sm underline hover:text-gray-200">
            Privacy Policy
          </a>
        </div>
      </footer>
    </>
  )
}

export default HomeShelter
