/* eslint-disable react/prop-types */

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Youtube } from "lucide-react"
import { Link } from "react-router-dom"

// Article Card Component
function ArticleCard({ title, date, excerpt, imageUrl, to }) {
  return (
    <Card className="overflow-hidden border-none shadow-none">
      <Link to={to} className="space-y-4">
        <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
          <img
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            className="object-cover transition-transform hover:scale-105"
          />
        </div>
        <CardContent className="space-y-2 p-0">
          <h2 className="text-xl font-semibold text-gray-800 line-clamp-2">{title}</h2>
          <p className="text-sm text-gray-500">{date}</p>
          <p className="text-gray-600 line-clamp-3">{excerpt}</p>
        </CardContent>
      </Link>
    </Card>
  )
}

// Hot Topic Card Component
function HotTopicCard({ title, excerpt, imageUrl, to }) {
  return (
    <Link to={to} className="group flex gap-4">
      <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="space-y-1">
        <h3 className="font-semibold text-gray-800 line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{excerpt}</p>
      </div>
    </Link>
  )
}

// YouTube Subscribe Component
function YoutubeSubscribe() {
  return (
    <Card className="overflow-hidden">
      <CardContent className="space-y-4 p-6 text-center">
        <div className="mx-auto w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
          <Youtube className="h-8 w-8 text-red-600" />
        </div>
        <h3 className="text-xl font-semibold">Become a smart consumer!</h3>
        <p className="text-sm text-gray-600">Keep up with the latest consumer news and tips on our YouTube channel.</p>
        <Button className="w-full bg-red-600 hover:bg-red-700">Subscribe</Button>
      </CardContent>
    </Card>
  )
}

// Main Blog Layout Component
export default function BlogLayout() {
  // Sample article data
  const articles = [
    {
      title: "Is the Costco Return Policy Good? Everything You Need to Know About Returning Goods to Costco",
      date: "Feb 06, 2025",
      excerpt:
        "Costco has one of the most customer-friendly return and refund policies among retailers. However, based on online reviews, customer experiences with Costco's return policy vary.",
      imageUrl:
        "/an-asian-woman-doing-shopping-and-walking-with-her-2024-05-13-05-33-32-utc-2-scaled.jpg",
      to: "#",
    },
    {
      title: "Avoiding the Latest Scams: Expert Insights and Safety Tips",
      date: "Feb 04, 2025",
      excerpt:
        "Stay ahead of scammers with expert advice. Explore types of online fraud, including Facebook scams, and why they are more common among the youth.",
      imageUrl:
        "/top-view-of-laptop-toy-padlock-keys-and-scrabble-2023-11-27-05-00-40-utc-2-scaled (1).jpg",
      to: "#",
    },
    {
      title: "How to Contact eBay Customer Service to Resolve Issues?",
      date: "Jan 30, 2025",
      excerpt:
        "How do you contact eBay? Learn how to reach eBay customer service by phone, email, social pages, community, and resolution center.",
      imageUrl:
        "/online-shopping-concept-shopping-cart-laptop-on-2023-11-27-05-04-36-utc-2-scaled.jpg",
      to: "#",
    },
    {
        title: "Everything You Should Know About HP: Customer Support, Common Issues and Refunds",
        date: "Jan 30, 2025",
        excerpt:
          "Struggling with HP printer ink subscriptions or laptop issues? Get tips on how to troubleshoot your devices, contact Hewlett Packard customer support for assistance, explore HP’s refund and return policies, and get the most out of your HP products.",
        imageUrl:
          "/smart-modern-female-customer-choosing-laptop-in-th-2024-03-21-19-23-01-utc-2-scaled (1).jpg",
        to: "#",
      },
  ]

  // Sample hot topics data
  const hotTopics = [
    {
      title: "How to Spot Email Scams and Phishing Attacks",
      excerpt: "Email is essential in daily life but is also a favorite tool for scammers...",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20(240)-K0lo2TzEjCQoU1PZO4uYpVmgf51tgx.png",
      to: "#",
    },
    {
      title: "Black and Decker vs. Hamilton Beach: Which One Is Better?",
      excerpt: "Wondering which kitchen brand is better: Black and Decker or Hamilton...",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20(240)-K0lo2TzEjCQoU1PZO4uYpVmgf51tgx.png",
      to: "#",
    },
    {
      title: "Home Warranty Companies From Worst to Best Based on Customer Reviews",
      excerpt: "Confused by home warranty choices? Uncover the worst to best home warranty...",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20(240)-K0lo2TzEjCQoU1PZO4uYpVmgf51tgx.png",
      to: "#",
    },
  ]

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <div className="grid gap-8 lg:grid-cols-[1fr,320px]">
        {/* Latest Articles Section */}
        <div className="space-y-8">
          <h1 className="text-2xl font-bold text-gray-900">Latest Articles</h1>
          <div className="space-y-8">
            {articles.map((article, index) => (
              <ArticleCard key={index} {...article} />
            ))}
          </div>
        </div>
        {/* Sidebar */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-gray-900">Hot Topics</h2>
            <div className="space-y-6">
              {hotTopics.map((topic, index) => (
                <HotTopicCard key={index} {...topic} />
              ))}
            </div>
          </div>
          <YoutubeSubscribe />
        </div>
      </div>
    </div>
  )
}