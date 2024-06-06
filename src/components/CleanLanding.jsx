import Section from "./Section"
import videobg from "../assets/videoBg.mp4"
import Button from "./Button"
const CleanLanding = () => {
  return (
    <div>
      <Section id="landing">
          <div className="container relative w-screen h-screen z-2">
            <div className="overlay"></div>
            <video src={videobg} autoPlay loop muted />
            <div className="content">
                <h1 className="h1 mb-6">Discover the Hidden Dangers.</h1>
                <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">Find Out the Source of Toxic Waste in Your Area</p>
                <Button href="#map" white>
                Explore Your Area
                </Button>
            </div>
            </div>
            </Section>
    </div>
  )
}

export default CleanLanding
