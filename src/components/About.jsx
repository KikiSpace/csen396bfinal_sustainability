import Section from "./Section"
import Heading from "./Heading"
import Button from "./Button"
import videobg from "../assets/aboutVideoBg.mp4"
const About = () => {
  return (
    <div>
      <Section id="about">
      <div className="container relative w-screen min-h-screen z-2">
        <Heading
                title="Our Project"
              />
            <div className="overlay"></div>
            <video src={videobg} autoPlay loop muted />
            <div className="content">
                <h1 className="h4 mb-6">Mission</h1>
                <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">In modern times, our lives have become more convenient, and people's lifestyles are rapidly changing with technology. However, beneath the bright lights powered by our resources, many potential toxic side effects accompany this progress. That’s why we must all care about sustainability. It is a way to find balance for the world, achievable only if everyone gets involved.</p>
                <h1 className="h4 mb-6">About this Study</h1>
                <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">We deploy data and deliver facts through powerful visualizations. Our goal is for everyone to gain valuable insights and form informed opinions based on our data.</p>
                <h1 className="h4 mb-6">Dataset</h1>
                <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">We analyze hazard data from 1987 to 2022 using the United States Government database Toxics Release Inventory (TRI).</p>

            </div>
            </div>
            </Section>
    </div>
  )
}

export default About
