import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MessageCircle } from "lucide-react"
import { Link } from "react-router-dom"

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-6">
          <div className="space-y-4">
            <Link href="/" className="text-sm text-slate-600 hover:text-slate-900">
              PissedConsumer Blog
            </Link>
            <h1 className="text-3xl font-bold">PissedConsumer Blog</h1>
          </div>
        </div>
      </header>

      {/* Ad Banner */}
      <div className="container mx-auto px-4 py-4">
        <div className="h-24 w-full bg-slate-100 rounded-lg flex items-center justify-center">
          <span className="text-slate-400">Advertisement Space</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-[1fr_300px] gap-8">
          {/* Blog Posts */}
          <div className="space-y-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="grid md:grid-cols-[300px_1fr] gap-6">
                  <div className="relative aspect-video md:aspect-square">
                    <img src={post.image || "/placeholder.svg"} alt={post.title} className="object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      <h2 className="text-xl font-bold hover:text-blue-600">
                        <Link to="">{post.title}</Link>
                      </h2>
                      <div className="text-sm text-slate-500">{post.date}</div>
                      <p className="text-slate-600">{post.excerpt}</p>
                      <Link
                        to=""
                        className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-2"
                      >
                        Read more →
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            
            <>
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-6">Hot Topics</h2>
              <div className="space-y-4">
                {hotTopics.map((topic, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="relative w-20 h-20 flex-shrink-0">
                      <img
                        src={topic.image || "/placeholder.svg"}
                        alt={topic.title}
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div>
                      <Link to="" className="font-medium hover:text-blue-600">
                        {topic.title}
                      </Link>
                      <p className="text-sm text-slate-600 line-clamp-2">{topic.excerpt}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
            </>
            {/* Chat Widget */}
            <Card className="p-6 bg-slate-800 text-white">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MessageCircle className="h-6 w-6" />
                  <h2 className="text-lg font-semibold">Chat w/ Online Experts 24/7</h2>
                </div>
                <p className="text-sm text-slate-300">
                  A Professional is Here to Answer Your Questions in Minutes. Chat Now.
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Start Chat</Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}

const blogPosts = [
  {
    title: "Ethical Consumerism 101: Alternatives to Brands That Won't Leave Russia",
    slug: "ethical-consumerism-101",
    date: "January 14, 2025",
    image: "/AboutPissed/Article-Choices.jpg",
    excerpt:
      "Brands like McDonald's, Mars, and PepsiCo still profit in Russia, fueling its economy. Take a stand with ethical consumerism. Discover shopping tips and alternatives to make informed choices that align with your values and promote global change.",
  },
  {
    title: "How to Write a Review on PissedConsumer.com",
    slug: "how-to-write-review",
    date: "October 23, 2024",
    image: "/AboutPissed/woman-choosing-with-tick-five-star-rating-on-paper-2023-11-27-04-54-12-utc-2-scaled.jpg",
    excerpt:
      "Good review writing is not art. You do not have to be a perfect narrator to write a review and you can have your own reasons to publish your feedback. Learn how to write a review on PissedConsumer.com with our step-by-step guide.",
  },
  {
    title: "Are Reviews on PissedConsumer Trustworthy?",
    slug: "reviews-trustworthy",
    date: "October 22, 2024",
    image: "/AboutPissed/pissedconsumer-reviews-1.jpg",
    excerpt:
      "Looking for a platform to vent your frustrations and connect with others? Plenty of review platforms allow you to share your experience and seek support. But can you trust reviews on PissedConsumer.com?",
  },
]

const hotTopics = [
  {
    title: "Drawing A Line: Consumers React To Companies That do Business in Countries With Poor Human Rights Records",
    slug: "drawing-a-line",
    image: "/AboutPissed/box-with-shopping-cart.jpg",
    excerpt: "The traditional drivers of consumer purchase decisions – product quality and price – are being...",
  },
  {
    title: "Ethics in Surveillance: Dahua and Hikvision's Contribution to Modern Warfare and Data Insecurity",
    slug: "ethics-in-surveillance",
    image: "/AboutPissed/Yales-professor-interview-on-companies-in-Russia.jpg",
    excerpt: "The names Dahua and Hikvision have become ubiquitous on worldwide surveillance equipment...",
  },
  {
    title: "Party at the Party Store",
    slug: "party-store",
    image: "/AboutPissed/business-community.jpg",
    excerpt: "Party City - Clarifications from an employee who dislikes being blamed for things he has no control...",
  },
]