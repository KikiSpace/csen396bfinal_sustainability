import Section from "./Section";
import Heading from "./Heading";
import Button from "./Button";
import videobg from "../assets/aboutVideoBg.mp4";

const About = () => {
  return (
    <Section id="about">
      <div className="relative w-screen h-screen overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src={videobg}
          autoPlay
          loop
          muted
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-1"></div>
        <div className="relative z-2 flex flex-col justify-center items-center h-full text-white p-4">
          <div className="content max-w-3xl text-center">
            <Heading title="Our Project" />
            <h1 className="h4 mb-6">Mission</h1>
            <p className="body-1 mb-6">
              In modern times, our lives have become more convenient, and
              people's lifestyles are rapidly changing with technology. However,
              beneath the bright lights powered by our resources, many potential
              toxic side effects accompany this progress. That’s why we must all
              care about sustainability. It is a way to find balance for the
              world, achievable only if everyone gets involved.
            </p>
            <h1 className="h4 mb-6">About this Study</h1>
            <p className="body-1 mb-6">
              We deploy data and deliver facts through powerful visualizations.
              Our goal is for everyone to gain valuable insights and form
              informed opinions based on our data.
            </p>
            <h1 className="h4 mb-6">Dataset</h1>
            <p className="body-1 mb-6">
              We analyze hazard data from 1987 to 2022 using the United States
              Government database Toxics Release Inventory (TRI).
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
