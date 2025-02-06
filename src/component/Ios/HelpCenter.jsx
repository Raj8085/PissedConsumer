import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Link } from "react-router-dom"

export default function HelpCenter() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">
          Common Issues We Can Help With <span className="text-emerald-500">Questions</span>
        </h1>

        <Accordion type="single" collapsible className="mb-8">
          <AccordionItem value="item-1">
            <AccordionTrigger>Device Issues: Why is my iPhone battery draining quickly?</AccordionTrigger>
            <AccordionContent>
              Check your battery health, background app refresh settings, and screen brightness.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>App Troubleshooting: How do I fix crashing apps?</AccordionTrigger>
            <AccordionContent>
              Try force closing the app, updating it, or reinstalling if issues persist.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>iOS Updates: Why is my iOS update stuck?</AccordionTrigger>
            <AccordionContent>Ensure you have enough storage space and a stable internet connection.</AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>iCloud Support: How do I recover files from iCloud?</AccordionTrigger>
            <AccordionContent>
              Visit iCloud.com or check the Recently Deleted folder in your device settings.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>Apple ID Issues: How do I reset my Apple ID password?</AccordionTrigger>
            <AccordionContent>Visit iforgot.apple.com or use the Settings app on your device.</AccordionContent>
          </AccordionItem>
        </Accordion>

        <p className="mb-20">
          Still have questions?{" "}
          <Link to="#" className="text-emerald-500 hover:underline">
            Contact us
          </Link>
        </p>

        <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-t border-gray-800">
          <div>
            <h2 className="font-semibold mb-4">Follow US</h2>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-gray-400 hover:text-white">
                  Github
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white">
                  Twitter
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white">
                  Dribbble
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold mb-4">Platforms</h2>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-gray-400 hover:text-white">
                  Web
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white">
                  Mobile
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white">
                  Desktop
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold mb-4">About</h2>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-gray-400 hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold mb-4">Community</h2>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-gray-400 hover:text-white">
                  Youtube
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white">
                  Discord
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white">
                  Twitch
                </Link>
              </li>
            </ul>
          </div>
        </footer>

        <div className="text-center py-8 text-sm text-gray-400 border-t border-gray-800">
          © 2024{" "}
          <Link to="#" className="text-emerald-500 hover:underline">
            iOS Customer Support
          </Link>
        </div>
      </main>
    </div>
  )
}

