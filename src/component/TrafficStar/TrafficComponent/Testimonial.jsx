import { Card, CardContent } from "../../../components/ui/card"

const testimonials = [
  {
    quote: "TrafficStars has revolutionized our advertising strategy. The results speak for themselves!",
    author: "Jane Doe",
    company: "Tech Innovators Inc."
  },
  {
    quote: "The AI-driven optimization has significantly improved our ROI. Highly recommended!",
    author: "John Smith",
    company: "Global Media Group"
  },
  {
    quote: "Excellent support team and cutting-edge technology. TrafficStars is our go-to advertising platform.",
    author: "Emily Johnson",
    company: "E-commerce Solutions Ltd."
  }
]

export default function TestimonialsSectionTraffic() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">&quot;{testimonial.quote}&quot;</p>
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-gray-500">{testimonial.company}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}