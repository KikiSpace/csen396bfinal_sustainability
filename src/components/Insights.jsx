import Section from "./Section";
import Heading from "./Heading";
import chartholder from "../assets/Insights/service-1.png";
import check from "../assets/Insights/check.svg";
import { chartTitles, chartholderIcons } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Insights.jsx";

import Generating from "./Generating.jsx";
import { LineGraph } from "./charts/Line.jsx";
import { RadarGraph } from "./charts/RadarChart.jsx";

const Insights = () => {
  return (
    <Section id="insights">
      <div className="container w-screen min-h-screen">
        <Heading
          title="Industries Produce Many Different Chemicals"
          text="Californian facilities manage over 800 different chemicals across 24 different industry sectors. Click on each bar or industry name to see which chemicals that industry produces and their amounts. Click the background to move back up."
        />

        <div></div>

        {/* <iframe width="100%" height="594" frameborder="1"
  src="https://observablehq.com/embed/8cafda7de076e39f?cells=chart&banner=false"></iframe> */}

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] -mt-10 mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              {/* <img
                    className="w-full h-full object-cover md:object-right"
                    width={800}
                    alt="Smartest AI"
                    height={730}
                    src={chartholder}
                  /> */}
            </div>
            <iframe
              width="100%"
              height="594"
              src="https://observablehq.com/embed/8cafda7de076e39f?cells=chart&banner=false"
            ></iframe>
          </div>

          <div className="relative z-1 gap-5">
            <div className="relative min-h-[50rem] border border-n-1/10 rounded-3xl overflow-auto w-full">
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
                <h4 className="h4 mb-4">Toxic Waste Trendlines (1991 - 2022)</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                </p>
                <LineGraph />
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
