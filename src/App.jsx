import { SiteHeader } from "./component/SIteHeader"
import { HeroSection } from "./component/HeroSection"
import FeatureDetails from "./component/FeaturesDetails"
import MiddleCard from "./component/MiddleCard"
import FeatureFooter from "./component/FeatureFooter"

export default function Home() {
  return (
    <>
       <SiteHeader />
        <HeroSection/>
      <FeatureDetails/>
      <MiddleCard/>  
      <FeatureFooter/>
    </>
  )
}