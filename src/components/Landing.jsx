import Section from "./Section"
import toxic2 from "../assets/toxic2.jpg"
import { BackgroundCircles, BottomLine, Gradient } from "./design/Landing";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Button from "./Button";
import Generating from "./Generating";

const Landing = () => {
    const parallaxRef = useRef(null);
  return (
    <Section Section
    className="pt-[7rem] -mt-[5.25rem]"
    crosses
    crossesOffset="lg:translate-y-[5.25rem]"
    customPaddings
    id="map">
      <div className="container relative" ref={parallaxRef}>
      <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
      <h1 className="h1 mb-6">
      Do you know how many toxic chemicals are produced by the
            <span className="inline-block relative">
            industries around us?{" "}
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
          The United States manages upwards of 35 million tons of hazardous chemicals per year for production and manufacturing, and Californian facilities alone manage over 10 million tons of chemicals a year. 
          </p>
          <Button href="/map" white>
            Explore Your Area
          </Button>
      </div>
      <div  className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
        <div className="relative z-1 p-0.5 rounded-2xl">
            <div className="relative bg-n-8 rounded-[1rem]">
                <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
                <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/400]">
                    <img  
                    src={toxic2}
                    className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                    width={1024}
                    height={400}
                    alt="toxic" />
                    <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />

                    <ScrollParallax isAbsolutelyPositioned>
                    <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                        {heroIcons.map((icon, index) => (
                        <li className="p-5" key={index}>
                            <img src={icon} width={24} height={25} alt={icon} />
                        </li>
                        ))}
                    </ul>
                    </ScrollParallax>
                    
                </div>
            </div>
            <Gradient />
        </div>
       
        <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
        </div>
          <BackgroundCircles />
      </div>
      </div>
      <BottomLine />
    </Section>
  )
}

export default Landing
