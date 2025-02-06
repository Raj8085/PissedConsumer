import CreditCardBenefits from "./component/CreditCards"
import FamilyDesign from "./component/FamilyDesign"
import Footer from "./component/Footer"
import GoldCard from "./component/GoldCard"
import RobinhoodLanding from "./component/HeroSection"
import VirtualCards from "./component/VirtualCard"
import VisaCard from "./component/VisaCard"

const Robin = () => {
  return (
    <div>
      <RobinhoodLanding/>
      <CreditCardBenefits/>
      <VirtualCards/>
      <FamilyDesign/>
      <GoldCard/>
      <VisaCard/>
      <Footer/>
    </div>
  )
}
export default Robin;