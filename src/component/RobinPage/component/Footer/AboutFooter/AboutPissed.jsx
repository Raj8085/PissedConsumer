/* eslint-disable react/jsx-key */
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { PlayCircle } from "lucide-react"

export default function AboutPissed() {
    const images = [
        <img src="/AboutPissed/forbes.png" alt="Forbes" />,
        <img src="/AboutPissed/globee_awards_logo.png" alt="Globee Awards" />,
        <img src="/AboutPissed/inc_logo.svg" alt="Inc" />,
        <img src="/AboutPissed/stevie_award_logo.png" alt="Stevie Award" />,
      ];
      const mediaimages = [
        <img src="/AboutPissed/bloomberg.svg" alt="Forbes" />,
        <img src="/AboutPissed/abc.svg" alt="Globee Awards" />,
        <img src="/AboutPissed/forbes.png" alt="Inc" />,
        <img src="/AboutPissed/stevie_award_logo.png" alt="Stevie Award" />,
      ];
  return (
    <main className="min-h-screen">
      {/* Services Section */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Things We Do for Companies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card className="p-6 bg-white">
              <h3 className="text-6xl font-light text-slate-200 mb-4">01</h3>
              <h4 className="text-xl font-semibold mb-2">PissedConsumer Review Management</h4>
              <p className="text-slate-600 mb-4">Manage and respond to customer reviews effectively</p>
              <Button variant="link" className="p-0">
                Learn more →
              </Button>
            </Card>
            <Card className="p-6 bg-white">
              <h3 className="text-6xl font-light text-slate-200 mb-4">02</h3>
              <h4 className="text-xl font-semibold mb-2">Online Reputation Management</h4>
              <p className="text-slate-600 mb-4">Protect and enhance your online presence</p>
              <Button variant="link" className="p-0">
                Learn more →
              </Button>
            </Card>
            <Card className="p-6 bg-white">
              <h3 className="text-6xl font-light text-slate-200 mb-4">03</h3>
              <h4 className="text-xl font-semibold mb-2">Customer Service Solutions</h4>
              <p className="text-slate-600 mb-4">Improve your customer service experience</p>
              <Button variant="link" className="p-0">
                Learn more →
              </Button>
            </Card>
          </div>
          <div className="text-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Free consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Memberships Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Memberships and Awards</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
          {images.map((image, i) => (
              <div key={i} className="w-32 h-32 relative">
                {image}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="flex gap-6">
                <div className="w-32 h-32 relative flex-shrink-0">
                  <img
                    src="/AboutPissed/Michael-Podolsky.png"
                    alt={member.name}
                    className="object-cover rounded-full"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-slate-600 mb-2">{member.title}</p>
                  <p className="text-sm text-slate-500">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Section */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">We in Media</h2>
          <p className="text-center text-slate-600 mb-12">
            For any media inquiries please check our Press Page or contact our media team at media@pissedconsumer.com
          </p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-items-center">
          {mediaimages.map((image, i) => (
              <div key={i} className="w-32 h-32 relative">
                {image}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say About PissedConsumer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="relative">
                <div className="aspect-video bg-slate-100 rounded-lg relative mb-4">
                  <PlayCircle className="w-12 h-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-slate-600" />
                </div>
                <h4 className="font-semibold mb-2">{testimonial.title}</h4>
                <p className="text-sm text-slate-600">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-slate-600">
              PissedConsumer&apos;s mission is to build communication bridges between brands and consumers to help them
              achieve successful outcomes.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {values.map((value) => (
              <div key={value.name} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-slate-50 rounded-lg flex items-center justify-center">
                  {value.icon}
                </div>
                <h3 className="font-semibold">{value.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            <div>
              <h3 className="text-3xl font-bold text-blue-600">6M+</h3>
              <p className="text-slate-600">Reviews</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-blue-600">25M+</h3>
              <p className="text-slate-600">Users</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-blue-600">5M+</h3>
              <p className="text-slate-600">Visitors/month</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-blue-600">160</h3>
              <p className="text-slate-600">Categories</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-blue-600">158K+</h3>
              <p className="text-slate-600">Reviewed Companies</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

const teamMembers = [
  {
    name: "Michael Podolsky",
    title: "CEO and co-founder",
    image: "/placeholder.svg",
    bio: "Michael Podolsky is the CEO and co-founder of PissedConsumer.com. Entrepreneur, an expert in customer service, sales tactics, and leadership.",
  },
  // Add other team members...
]

const values = [
  { name: "Integrity", icon: "📚" },
  { name: "Freedom of Choice", icon: "🎯" },
  { name: "Communication", icon: "💬" },
  { name: "Collaboration", icon: "🤝" },
  { name: "Guidance", icon: "🧭" },
]

// const mediaLogos = ["Bloomberg", "NY Post", "TechDirt", "ABC", "Yahoo News", "US News"]

const testimonials = [
  {
    title: "Grateful for PissedConsumer",
    text: "A powerful platform for airing grievances and getting results.",
  },
  {
    title: "Must-do due diligence before major investments!",
    text: "PissedConsumer: Your essential free resource.",
  },
  {
    title: "PissedConsumer provided therapeutic venting",
    text: "Now wiser consumer - always checking before buying!",
  },
]