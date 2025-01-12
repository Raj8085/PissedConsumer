import { ReviewCard } from "../component/Review"
import { ProductCard } from "../component/ProductCard"

const reviews = [
  {
    company: "BDO Unibank",
    logo: "/Images/bdo-unibank.png",
    date: "Jan 11, 2025",
    preview: "Hello. I really need to open my bdo online app on my phone. Coz i got bills need to pay in philippines and need send money money. I dont what...",
    reviewLink: "#"
  },
  {
    company: "Kuaishou",
    logo: "/Images/kuaishou.png",
    date: "Jan 11, 2025",
    preview: "لقد تم تسجيل الدخول الى البرنامج بشكل رئيسي وصحيح ولكن يتم اخراجي من التطبيق او الاتصال على رقم الهاتف ولا اعرف ماذا افعل",
    reviewLink: "#"
  },
  {
    company: "Netspend",
    logo: "/Images/netspend.png",
    date: "Jan 11, 2025",
    preview: "Cant activate my card!! and I add money on it already !! I need my card and money on it I got kids and bills to pay for",
    reviewLink: "#"
  },
  {
    company: "Ticketmaster",
    logo: "/Images/ticketmaster.svg",
    date: "Jan 11, 2025",
    preview: "My girls friend bought two tickets to the bills game and we didnt receive tickets and cant access them",
    reviewLink: "#"
  }
]

const products = [
  {
    title: "I'm Pissed at Company Name Print T-Shirt",
    image: "/Images/860_1gif_450x650_crop_center.gif",
    price: 28.00,
    originalPrice: 35.00
  },
  {
    title: "Undress Your Stress Print Pullover Hoodie",
    image: "/Images/457d723a-f55c-41b5-b4af-20577c258594_450x650_crop_center.png",
    price: 35.20,
    originalPrice: 44.00
  },
  {
    title: "Life's Too Short Print Pullover Hoodie",
    image: "/Images/49825edf-c825-4d3c-95f1-507846b3f738_450x650_crop_center.png",
    price: 35.20,
    originalPrice: 44.00
  },
  {
    title: "I'm Pissed Consumer Print Pullover Hoodie",
    image: "/Images/b6538f1b-8f80-4789-9684-2429e143faff_450x650_crop_center.jpg",
    price: 35.20,
    originalPrice: 44.00
  },
  {
    title: "Speak Up Print Pullover Hoodie",
    image: "/Images/860_1gif_450x650_crop_center.gif",
    price: 35.20,
    originalPrice: 44.00
  }
]
function FeatureDetails() {
  return (
    <div className="min-h-screen bg-gray-50 mt-72">
      <main className="container py-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <button className="rounded-md border border-blue-600 px-6 py-2 text-blue-600 hover:bg-blue-50">
            See more reviews
          </button>
        </div>

        <section className="mt-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Amplify your voice</h2>
            <p className="mt-4 text-muted-foreground">
              Explore our merch and join us in making a real difference as we fight for consumer rights.
            </p>
          </div>
          
          <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default FeatureDetails