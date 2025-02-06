import { Shield, Plane, Car, Lock, RefreshCw, Phone } from 'lucide-react'

export default function CreditCardBenefits() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-100 via-orange-100 to-orange-200">
      <div className="container mx-auto px-4 py-12 space-y-16">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
            {"It's the only credit card you'll need, and it's exclusively for Robinhood Gold members."}
          </h1>
        </div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
          <div className="space-y-2">
            <h3 className="font-medium text-xl">No annual fee²</h3>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium text-xl">
              No foreign transaction fees²
            </h3>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium text-xl">
              3% cash back on all categories²
            </h3>
          </div>
        </div>

        {/* Travel Rewards Section */}
        <div className="relative max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 items-center gap-8">
            <div>
              <h2 className="text-2xl font-medium mb-2">Earn even more on travel</h2>
            </div>
            <div className="text-center md:text-left">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-orange-300 bg-opacity-50">
                <span className="text-4xl font-bold">5%</span>
              </div>
              <p className="mt-4 text-sm">
                Get 5% cash back when you book travel through the Robinhood Travel portal³
              </p>
            </div>
          </div>
        </div>

        {/* Benefits & Perks */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-medium mb-8 text-center">Benefits & Perks⁴</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <Plane className="h-6 w-6 mb-2" />
              <span className="text-sm">Trip Interruption Protection</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <Lock className="h-6 w-6 mb-2" />
              <span className="text-sm">Extended Warranty Protection</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <Shield className="h-6 w-6 mb-2" />
              <span className="text-sm">Visa Signature Concierge Service</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <Shield className="h-6 w-6 mb-2" />
              <span className="text-sm">Purchase Security</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <RefreshCw className="h-6 w-6 mb-2" />
              <span className="text-sm">Return Protection</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <Phone className="h-6 w-6 mb-2" />
              <span className="text-sm">Travel and Emergency Assistance</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <Car className="h-6 w-6 mb-2" />
              <span className="text-sm">Auto Rental Collision Damage Waiver</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <Shield className="h-6 w-6 mb-2" />
              <span className="text-sm">Zero Liability Protection</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <Phone className="h-6 w-6 mb-2" />
              <span className="text-sm">Roadside Dispatch™</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

