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
export default function BlogLayoutCompany() {
  // Sample article data
  const articles = [
    {
      title: "Why Online Reviews Hold the Key to Outpacing Your Competition",
      date: "Feb 06, 2025",
      excerpt:
        "Stand out in a crowded market with the help of online reviews. Discover their role in shaping trust, driving customer loyalty, and staying ahead of the competition.",
      imageUrl:
        "/product-or-service-review-ideas-from-customers-2023-11-27-05-33-41-utc-2-scaled.jpg",
      to: "#",
    },
    {
      title: "How to Build Reputation Management Strategy Step-by-Step.",
      date: "Feb 04, 2025",
      excerpt:
        "Learn how to build and maintain a strong online reputation for your business. Discover effective strategies for managing online reviews, social media interactions, and customer feedback. Protect your brand and drive business growth.",
      imageUrl:
        "/RM-Strategy.png",
      to: "#",
    },
    {
      title: "How Can Sentiment Analysis Be Used to Improve Customer Experience?",
      date: "Jan 30, 2025",
      excerpt:
        "Unlock the power of sentiment analysis to transform customer feedback into actionable insights. Discover how this cutting-edge tool can enhance satisfaction and give your brand a competitive edge.",
      imageUrl:
        "/Bussiness/freepik-export-20240902075011cHZb.png",
      to: "#",
    },
    {
        title: "FTC Rule Banning Fake Reviews & Testimonials: Impact on Business",
        date: "Jan 30, 2025",
        excerpt:
          "Discover how the FTC’s new rule banning fake reviews will change the online review landscape, impact businesses, and protect consumers. Learn key compliance tips to stay ahead.",
        imageUrl:
          "/Fake-reviews-article_1.png",
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