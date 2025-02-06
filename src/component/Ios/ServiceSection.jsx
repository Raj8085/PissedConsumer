import { Settings, HelpCircle, Cloud, Gift, BarChart2, Shield } from "lucide-react"

export default function ServicesSection() {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-16">
      {/* What we Offer Section */}
      <div className="max-w-7xl mx-auto mb-32">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-2">
          What we <span className="text-[#34c759]">Offer</span> Step-by-Step Guide
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis dolor pariatur sit!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Setup Assistance Card */}
          <div className="bg-[#1c1c1e] rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-[#34c759]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Settings className="w-6 h-6 text-[#34c759]" />
            </div>
            <h3 className="font-semibold text-xl mb-3">Setup Assistance</h3>
            <p className="text-gray-400 text-sm">Get help setting up your iOS devices effortlessly.</p>
          </div>

          {/* Troubleshooting Card */}
          <div className="bg-[#1c1c1e] rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-[#34c759]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <HelpCircle className="w-6 h-6 text-[#34c759]" />
            </div>
            <h3 className="font-semibold text-xl mb-3">Troubleshooting</h3>
            <p className="text-gray-400 text-sm">Fix technical issues on iPhones and iPads.</p>
          </div>

          {/* iCloud Management Card */}
          <div className="bg-[#1c1c1e] rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-[#34c759]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Cloud className="w-6 h-6 text-[#34c759]" />
            </div>
            <h3 className="font-semibold text-xl mb-3">iCloud Management</h3>
            <p className="text-gray-400 text-sm">Manage backups, recovery, and file synchronization.</p>
          </div>

          {/* App Support Card */}
          <div className="bg-[#1c1c1e] rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-[#34c759]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Gift className="w-6 h-6 text-[#34c759]" />
            </div>
            <h3 className="font-semibold text-xl mb-3">App Support</h3>
            <p className="text-gray-400 text-sm">Resolve app crashes or installation problems.</p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-[#34c759] text-3xl font-bold mb-4">Services</h2>
            <p className="text-gray-400 mb-8">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis dolor.
            </p>

            {/* Services List */}
            <div className="space-y-4">
              <div className="bg-[#1c1c1e] rounded-lg p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#34c759]/10 rounded-full flex items-center justify-center">
                    <BarChart2 className="w-6 h-6 text-[#34c759]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-1">iOS Updates</h3>
                    <p className="text-gray-400 text-sm">Assistance with updating or troubleshooting iOS versions.</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#1c1c1e] rounded-lg p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#34c759]/10 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-[#34c759]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-1">Security</h3>
                    <p className="text-gray-400 text-sm">Help with Apple ID, two-factor authentication, and privacy.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Illustration */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/Robin/cube-leg.png"
              alt="iOS Support Illustration"
              width={400}
              height={600}
              className="w-64 md:w-80"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

