import Header from "./components/Header"
import Form from "./components/Form"
import BenefitsParent from "./components/BenefitsParent"
import VideoComp from "./components/VideoComp"
import Reviews from "./components/ReviewsParent"
import FeatureParent from "./components/FeatureParent"
import About from "./components/About"
import Footer from "./components/Footer"

export default function Home() {
  return (
   <main>
        <Header />
        <Form />
        <BenefitsParent />
        <VideoComp />
        <Reviews />
        <FeatureParent />
        <About />
        <Footer />

    </main>
  )
}
