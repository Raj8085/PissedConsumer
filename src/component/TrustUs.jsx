import { Users, Settings, FileX, CheckSquare, MessageCircle, Shield } from "lucide-react"

export default function TrustSection() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Why Trust WriteReview?</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {/* Feature 1 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 mb-4 text-red-500">
            <Users className="w-full h-full" />
          </div>
          <h3 className="text-lg font-semibold mb-2">100% user-generated content</h3>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 mb-4 text-red-500">
            <Settings className="w-full h-full" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Human and AI content moderation</h3>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 mb-4 text-red-500">
            <FileX className="w-full h-full" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Zero tolerance for fake reviews</h3>
        </div>

        {/* Feature 4 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 mb-4 text-red-500">
            <CheckSquare className="w-full h-full" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Verified content</h3>
        </div>

        {/* Feature 5 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 mb-4 text-red-500">
            <MessageCircle className="w-full h-full" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Opportunity to contact brands</h3>
        </div>

        {/* Feature 6 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 mb-4 text-red-500">
            <Shield className="w-full h-full" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Protecting freedom of speech</h3>
        </div>
      </div>

      <div className="flex justify-center">
        <button className="px-6 py-2 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 transition-colors">
          See more details
        </button>
      </div>
    </div>
  )
}

