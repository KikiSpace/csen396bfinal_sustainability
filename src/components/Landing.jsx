import Section from "./Section";
import toxic2 from "../assets/toxic2.jpg";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Landing";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Button from "./Button";
import Example from "./charts/BrushChart/Example";
import Generating from "./Generating";

const Landing = () => {
  const parallaxRef = useRef(null);
  return (
    <Section
      className="pt-[7rem] -mt-[5.25rem] w-screen h-800"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="landing"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-10 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            Do you know how much toxic waste is produced around us?
            <span className="inline-block relative">{" "}
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            The United States manages upwards of 35 million tons of hazardous
            chemicals per year for production and manufacturing, and Californian
            facilities alone manage over 10 million tons of chemicals a year.
          </p>
          <Button href="#map" white>
            Explore waste in your area
          </Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-10 p-0.5 rounded-2xl">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/500]">
                <div className="absolute inset-0 z-0">
                  <img
                    src={toxic2}
                    className="w-full h-full object-cover opacity-50 rounded-xl"
                    alt="toxic"
                  />
                </div>
                <div className="relative z-10">
                  <Example width={1020} height={490} />
                </div>
              </div>
            </div>
            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]"></div>
          <BackgroundCircles />
        </div>
      </div>
      <BottomLine />
    </Section>
  );
};

export default Landing;
