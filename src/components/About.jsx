import Section from "./Section"
import Heading from "./Heading"
const About = () => {
  return (
    <div>
      <Section id="about">
          <div className="container relative z-2">
            <Heading
              className="md:max-w-md lg:max-w-2xl"
              title="About Us"
            />
            LONA ABOUT SECTION 
            </div>
            </Section>
    </div>
  )
}

export default About
