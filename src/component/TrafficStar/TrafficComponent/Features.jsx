import { Globe, Target, Zap, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Access a worldwide audience with our extensive network.'
  },
  {
    icon: Target,
    title: 'Advanced Targeting',
    description: 'Reach your ideal audience with precision targeting capabilities.'
  },
  {
    icon: Zap,
    title: 'Real-Time AI Optimization',
    description: 'Maximize performance with our AI-driven optimization engine.'
  },
  {
    icon: ShieldCheck,
    title: 'Fraud Protection',
    description: 'Ensure your ads are seen by real users with our advanced fraud detection.'
  }
]

export default function FeaturesSectionTraffic() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}