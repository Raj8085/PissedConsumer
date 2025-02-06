import FAQSection from "../compo/FAQ"
import Footer from "../compo/Footer"
import ComparePlans from "./ComparePlan"
import PricingPlans from "./PricingPlans"
import WhyNordVPN from "./WhyVpn"


const PricingTable = () => {
  return (
    <div className="mt-10">
      <PricingPlans/>
      <ComparePlans/>
      <WhyNordVPN/>
      <FAQSection/>
      <Footer/>
    </div>
  )
}

export default PricingTable
