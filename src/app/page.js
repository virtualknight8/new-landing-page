import Header from "./components/Header"
import Form from "./components/Form"
import BenefitsParent from "./components/BenefitsParent"
import VideoComp from "./components/VideoComp"
import Reviews from "./components/ReviewsParent"
import FeatureParent from "./components/FeatureParent"

export default function Home() {
  return (
   <main>
        <Header />
        <Form />
        <BenefitsParent />
        <VideoComp />
        <Reviews />
        <FeatureParent />

    </main>
  )
}
