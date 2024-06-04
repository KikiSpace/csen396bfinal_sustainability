<<<<<<< HEAD
import Section from "./Section";
import Heading from "./Heading";
import chartholder from "../assets/Insights/service-1.png";
import check from "../assets/Insights/check.svg";
import { chartTitles, chartholderIcons } from "../constants";
=======
import Section from "./Section" 
import Heading from "./Heading"
import chartholder from "../assets/Insights/service-1.png"
import check from "../assets/Insights/check.svg"
import { chartTitles, chartholderIcons } from "../constants"
>>>>>>> 3104a6a (updated some titles)
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Insights.jsx";

import Generating from "./Generating.jsx";

const Insights = () => {
<<<<<<< HEAD
  return (
    <Section id="insights">
      <div className="container">
        <Heading
          title="Top 3 Chemicals Insights"
          text="data insights for toxic chemicals produced by industry from 1987 - 2023."
        />
        <div>
          <iframe
            width="100%"
            height="594"
            src="https://observablehq.com/embed/8cafda7de076e39f?cells=chart&banner=false"
            style={{ border: "none" }}
          ></iframe>
        </div>
        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              {/* <img
=======
    return (
        <Section id="insights">
          <div className="container">
            <Heading
              title="Industry Produced Chemicals"
              text="Click on each bar or industry name to see which chemicals that industry produces and their amounts. Click the background to move back up."
            />
            <div>
            <iframe width="100%" height="594" frameborder="0" src="https://observablehq.com/embed/8cafda7de076e39f@421?cells=chart&banner=false"></iframe>
            </div>
            <div className="relative">
              <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
                  {/* <img
>>>>>>> 6f6fc25 (updated json + graph)
                    className="w-full h-full object-cover md:object-right"
                    width={800}
                    alt="Smartest AI"
                    height={730}
                    src={chartholder}
                  /> */}
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">Top 3 Bar Chart (Q3)</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Brainwave unlocks the potential of AI-powered applications
              </p>
            </div>
          </div>

          <div className="relative z-1 gap-5">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden w-full">
              <div className="absolute inset-0">
                {/* <img
                      src={chartholder}
                      className="h-full w-full object-cover"
                      width={630}
                      height={750}
                      alt="robot"
                    /> */}
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Trending amount of toxic taste(Q5)</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Automatically enhance your photos using our AI app&apos;s
                  photo editing feature. Try it now!
                </p>
              </div>

              {/* <PhotoChatMessage /> */}
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Insights;
