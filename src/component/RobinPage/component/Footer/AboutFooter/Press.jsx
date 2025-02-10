import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Download, Mail } from "lucide-react"

export default function Press() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-12">Media Center</h1>

        {/* Media Collaboration Section */}
        <Card className="mb-12 p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Media Collaboration with PissedConsumer</h2>
              <p className="text-slate-600 mb-6">
                PissedConsumer has a professional research team that is ready to help and assist journalists with their
                requests, even the ones on the deadline. We want to help our consumers be heard, and media
                representatives to find an exclusive story to tell.
              </p>

              <h3 className="font-semibold mb-4">We can provide:</h3>
              <ul className="space-y-2 text-slate-600 mb-6">
                <li>• Consumer data & trends by industries and companies</li>
                <li>• Knowledgebase of 2.5M reviews</li>
                <li>• Research on the topic or company</li>
                <li>• Help in contacting real consumers</li>
                <li>• News pitches on consumer issues sent to your inbox</li>
                <li>• Your news shared on our social pages</li>
              </ul>

              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>For research or media assistance, please contact: </span>
                <a href="mailto:media@pissedconsumer.com" className="text-blue-600 hover:underline">
                  media@pissedconsumer.com
                </a>
              </div>
            </div>
            <div className="relative aspect-video">
              <img
                src="/AboutPissed/image-1.jpg"
                alt="Michael Podolsky media appearance"
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </Card>

        {/* Media Kit Section */}
        <Card className="mb-12 p-8">
          <h2 className="text-2xl font-semibold mb-6">Media Kit and Logo</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-slate-600 mb-6">
                Uncover more details about the platform, its benefits, main channels, and collaboration opportunities.
                You are welcome to include our logo in your reports and stories.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Download Logo (svg)
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Download Logo (png)
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Download Media Kit (pdf)
              </Button>
            </div>
          </div>
        </Card>

        {/* CEO Profile Section */}
        <Card className="mb-12 p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Michael Podolsky (CEO and Co-Founder)</h2>
              <div className="prose max-w-none">
                <p className="mb-4">
                  Michael Podolsky is a co-founder and CEO of PissedConsumer.com, a review platform and consumer
                  advocacy website. After completing two degrees in Computer Science and Finance, Michael has spent over
                  20 years on Wall Street crafting his career from a Help Desk Assistant to an independent business
                  owner.
                </p>
                <p className="mb-6">
                  Having extensive experience in customer service, Michael advocates for consumers&apos; right to free speech
                  and the First Amendment. As an accomplished entrepreneur, Michael shares practical insights and tips
                  with young business owners.
                </p>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">Request as Media Expert</Button>
            </div>
            <div className="relative aspect-square md:aspect-video">
              <img src="/AboutPissed/image-2.jpg" alt="Michael Podolsky" className="object-cover rounded-lg" />
            </div>
          </div>
        </Card>

        {/* News Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">In the News</h2>
          <div className="space-y-6">
            {newsArticles.map((article, index) => (
              <Card key={index} className="p-6">
                <div className="flex gap-6">
                  <div className="w-24 h-24 relative flex-shrink-0">
                    <img
                      src={article.logo || "/placeholder.svg"}
                      alt={article.source}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 mb-2">{article.date}</div>
                    <h3 className="text-xl font-semibold mb-2">
                      <a href={article.url} className="hover:text-blue-600">
                        {article.title}
                      </a>
                    </h3>
                    <p className="text-slate-600">{article.excerpt}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-8">
            <Button variant="outline" disabled>
              Prev
            </Button>
            {[1, 2, 3, 4, 5].map((page) => (
              <Button key={page} variant={page === 1 ? "default" : "outline"}>
                {page}
              </Button>
            ))}
            <Button variant="outline">Next</Button>
          </div>
        </section>
      </div>
    </main>
  )
}

const newsArticles = [
  {
    date: "January 14, 2025",
    source: "Forbes",
    logo: "/AboutPissed/forbes business council.jpg",
    title: "15 Ways Leaders Can Harmonize Board Members' Competing Interests",
    excerpt:
      "The complex and sometimes competing interests of individual members can quickly shift a business away from its central mission and goals...",
    url: "#",
  },
  {
    date: "January 10, 2025",
    source: "Business News",
    logo: "/AboutPissed/businesscom logo.jpg",
    title: "How Much Can a Bad Review Hurt Your Business?",
    excerpt:
      "Most businesses care about their online reviews — and for good reason. Business leaders share tips about bad reviews...",
    url: "#",
  },
  // Add more articles as needed
]