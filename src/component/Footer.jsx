
const Footer = () => {
  return (
    <div>
       <footer className="bg-white border-t py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div>
              <h3 className="font-semibold mb-2">About</h3>
              <ul className="space-y-1 text-gray-600">
                <li><a href="#">About PissedConsumer</a></li>
                <li><a href="#">Press Page</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">FAQ for Consumers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Browse</h3>
              <ul className="space-y-1 text-gray-600">
                <li><a href="#">Companies</a></li>
                <li><a href="#">Reviews</a></li>
                <li><a href="#">Categories</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Services</h3>
              <ul className="space-y-1 text-gray-600">
                <li><a href="#">Business Solutions</a></li>
                <li><a href="#">List your Business</a></li>
                <li><a href="#">Tips For Consumers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Legal</h3>
              <ul className="space-y-1 text-gray-600">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms Of Use</a></li>
                <li><a href="#">Legal Information</a></li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-gray-500 text-center">
            &copy; {new Date().getFullYear()} PissedConsumer. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
