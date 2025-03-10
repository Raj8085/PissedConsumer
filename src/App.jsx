import { Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import Review from "./component/Review/Review";
import { SiteHeader } from "./component/SIteHeader";
import FacebookSupport from "./component/Facebook/Facebook";
import TechnologyCybersecuritySupport from "./component/TechnologySupport/TechnologyCybersecuritySupport";
import LegalConsultant from "./component/LegalPage/LegalConsultant";
import Robin from "./component/RobinPage/Robin";
import UtilitiesCustomerSupport from "./component/UtilitySupport/UtilitiesCustomerSupport";
import MicrosoftSupport from "./component/Microsoft/Microsoft";
import HomeSelter from "./component/HomePage/HomeSelter";
import HomeIosSection from "./component/Ios/Home";
import ContentConsumer from "./ContentSupport/ContentSupport";
import Hero from "./component/VPN/compo/Hero";
import VPNInfoSection from "./component/VPN/compo/InfoSection";
import FeaturesSection from "./component/VPN/compo/Features";
import OneStopShopSection from "./component/VPN/compo/ShopSection";
import TestimonialsSection from "./component/VPN/compo/TestimonialSection";
import PromotionalBanner from "./component/VPN/compo/Promotional";
import FAQSection from "./component/VPN/compo/FAQ";
import Footer from "./component/RobinPage/component/Footer";
import PricingTable from "./component/VPN/Pricing/PricingTable";
import Navbar from "./component/VPN/compo/Navbar";
import PrivacyPolicy from "./component/RobinPage/component/Footer/Privacy";
import TermOfUse from "./component/RobinPage/component/Footer/TermOfUse";
import MainLegal from "./component/RobinPage/component/Footer/MainLegal";
import MainBusinessSolution from "./component/RobinPage/component/BusinessSolution/MainBusinessSolution";
import ListBusiness from "./component/RobinPage/component/ListBusiness/ListYourBusiness";
import MainConsumer from "./component/RobinPage/component/Footer/MainConsumer";
import MainCompanies from "./component/RobinPage/component/Footer/TipsForCompanies/MainCompanies";
import AboutPissed from "./component/RobinPage/component/Footer/AboutFooter/AboutPissed";
import Press from "./component/RobinPage/component/Footer/AboutFooter/Press";
import BlogPage from "./component/RobinPage/component/Footer/AboutFooter/Blog";
import FAQCONSUMER from "./component/RobinPage/component/Footer/AboutFooter/FAQCOnsumer";
import Career from "./component/RobinPage/component/Footer/AboutFooter/Careers";
import ContactPissedConsumer from "./component/RobinPage/component/Footer/AboutFooter/ContactPissedConsumer";
import CompanyListingPage from "./component/RobinPage/component/Footer/Browse/Company";
import Reviews from "./component/RobinPage/component/Footer/Browse/Reviews";
import BrowseCategoriesPage from "./component/RobinPage/component/Footer/Browse/Catogory";
import AttorneyGeneralContacts from "./component/RobinPage/component/Footer/Browse/StateAttorney";
import AmazonCustomer from "./component/Amazon/AmazonCustomerSupport";
import HeroSection from "./component/TrafficStar/TrafficComponent/Hero";
import FeaturesSectionTraffic from "./component/TrafficStar/TrafficComponent/Features";
import StatisticsSection from "./component/TrafficStar/TrafficComponent/Static";
import TestimonialsSectionTraffic from "./component/TrafficStar/TrafficComponent/Testimonial";
import Header from "./component/TrafficStar/TrafficComponent/Header";
import AboutTraffic from "./component/TrafficStar/About";
import Services from "./component/TrafficStar/Services";
import Contact from "./component/TrafficStar/Contact";
import Advertisers from "./component/TrafficStar/Advise";
import Publishers from "./component/TrafficStar/Publishers";
import Pricing from "./component/TrafficStar/Pricing";
import Blog from "./component/TrafficStar/Blog";
import AuthForms from "./component/UserCredential/Auth";
import WriteReviewPage from "./component/UserCredential/WriteReviewPage";
// import TipsConsumer from "./component/RobinPage/component/Footer/TipsForConsumer"

const App = () => {
  return (
    <div>
      <SiteHeader />
      <main className=""> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reviews" element={<Review />} />
          <Route path="/amazon-support/option1" element={<AmazonCustomer/>} />
          <Route path="/facebook/option2" element={<FacebookSupport />} />
          <Route
            path="/techno-support/option3"
            element={<TechnologyCybersecuritySupport />}
          />
          <Route path="/legal-support/option4" element={<LegalConsultant />} />
          <Route path="/robin/option5" element={<Robin />} />
          <Route
            path="/utility/option6"
            element={<UtilitiesCustomerSupport />}/>
          <Route path="/micro/option7" element={<MicrosoftSupport />} />
          <Route path="/home/option8" element={<HomeSelter />} />
          <Route path="/ios/option9" element={<HomeIosSection />} />
          <Route path="/content/option10" element={<ContentConsumer />} />
          {/* <Route path="/ama/option13" element={<Ama/>} /> */}
          <Route path="/traffic/option12" element={
              <>
              <Header/>
                <HeroSection/>
                <FeaturesSectionTraffic/>
                <StatisticsSection/>
                <TestimonialsSectionTraffic/>
              </>
            } />
            <>
            <Route path="/about" element={<AboutTraffic/>} />
             <Route path="/services" element={<Services/>} />
             <Route path="/contact" element={<Contact/>} />
             <Route path="/advertisers" element={<Advertisers/>} />
             <Route path="/publishers" element={<Publishers/>} />
             <Route path="/pricing" element={<Pricing/>} />
             <Route path="/blog" element={<Blog/>} />
             </>
          <Route
            path="/vpn/option11"
            element={
              <>
                <Navbar />
                <Hero />
                {/* <ComparePlans /> */}
                <VPNInfoSection />
                <FeaturesSection />
                <OneStopShopSection />
                <TestimonialsSection />
                <PromotionalBanner />
                <FAQSection />
                {/* <Footer/> */}
              </>
            }
          />
          <Route path="/pricing" element={<PricingTable />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/term" element={<TermOfUse />} />
          <Route path="/legal" element={<MainLegal />} />
          <Route path="/bussiness" element={<MainBusinessSolution />} />{" "}
          <Route path="/list-bussiness" element={<ListBusiness />} />
          <Route path="/tips-consumer" element={<MainConsumer />} />
          <Route path="/tips-company" element={<MainCompanies />} />
          <Route path="/about-pissed" element={<AboutPissed />} />
          <Route path="/press" element={<Press />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/faq-consumer" element={<FAQCONSUMER />} />
          <Route path="/faq-consumer" element={<FAQCONSUMER />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact-pissed" element={<ContactPissedConsumer />} />
          <Route path="/company" element={<CompanyListingPage />} />
          <Route path="/review" element={<Reviews />} />
          <Route path="/category" element={<BrowseCategoriesPage />} />
          <Route path="/attoney" element={<AttorneyGeneralContacts />} />
          <Route path="/auth" element={<AuthForms/>} />
          <Route path="/write-review" element={<WriteReviewPage/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};
export default App;