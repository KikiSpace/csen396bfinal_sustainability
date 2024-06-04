import { chemicals } from "../constants"
import Heading from "./Heading"
import Section from "./Section"
import Arrow from "../assets/svg/Arrow"
import { GradientLight } from "./design/ChemicalsInfo"
import ClipPath from "../assets/svg/ClipPath"
import { chartTitles, chartholderIcons, chemicalCardInfo, chemicalCategories, chemicalCardMatchTitle } from "../constants"
import chemicalbg from "../assets/ChemicalsInfo/chemical.jpg"
import { useState } from "react"
import { BarGraph } from "./charts/Bar"
import { RadarGraph } from "./charts/RadarChart"


const ChemicalsInfo = () => {

    const [currentChemicalIndex, setCurrentChemicalIndex] = useState(0)
    const [currentChemical, setChemical] = useState(chemicals[0])
    const [currentSubTitle, setCurrentSubTitle] = useState("source") 
    const [currentSubInfo, setCurrentSubInfo] = useState(chemicals[0].source) 
    const updateChemicalClickHandler = (index) => {
      setCurrentChemicalIndex(index)
      setChemical(chemicals[index])
      setCurrentSubTitle("source") 
      setCurrentSubInfo(chemicals[index].source)
    }

    const updateSubTitleClickHandler = (subTitle) => {
      setCurrentSubTitle(subTitle)
      setCurrentSubInfo(chemicals[currentChemicalIndex][subTitle]) 
    }


    return (
        <Section id="chemicals">
          <div className="container relative z-2">
            <Heading
              className="md:max-w-md lg:max-w-2xl"
              title="Toxic chemicals are everywhere"
            />

            <div className="flex gap-10 ">
              <ul className="flex flex-col items-center justify-between">
                      {chartholderIcons.map((item, index) => (
                        <li
                          key={index}
                          className={`rounded-2xl flex items-center justify-center cursor-pointer ${
                            index === currentChemicalIndex
                              ? "w-[6rem] h-[6rem] p-0.25 bg-conic-gradient md:w-[6rem] md:h-[6rem]"
                              : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15 "
                          }`}
                          onClick={()=>updateChemicalClickHandler(index)}
                        >
                          <div
                            className={
                              index === currentChemicalIndex
                                ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem] cursor-pointer"
                                : "cursor-pointer"
                            }
                           >
                          {index}
                            {/* <img src={item} width={24} height={24} alt={item} /> */}
                          </div>
                        </li>
                      ))}
                    </ul>
              <div className="ml-10 p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem] w-full h-full">
                  <div className="py-12 px-4 xl:px-8">
                    <h4 className="h4 mb-4">{currentChemical.title}</h4>
                    <p className="body-2 mb-[2rem] text-n-3">
                      🏭: {currentChemical.industry}
                    </p>
                    
                    <div className="flex flex-row ">
                      {chemicalCardInfo.map((item) => (
                        <div
                          className="block relative cursor-pointer p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[13rem] md:max-h-[4rem] border-color-1 border hover:bg-purple-300"
                          style={{
                            backgroundImage: `url(${item.backgroundUrl})`,
                          }}
                          key={item.id}
                          onClick={()=>updateSubTitleClickHandler(item)}
                        >
                          <div className="relative z-2 flex flex-col min-h-[22rem] pt-[1rem] pl-[1rem] pr-[1rem] pointer-events-none hover:bg-purple-300" >
                            <h5 className="h7 ml-0 mr-0">{chemicalCardMatchTitle[item]}</h5>
                          </div>
            
                          <div
                            className="absolute inset-0.5 bg-n-8"
                            style={{ clipPath: "url(#benefits)" }}
                          >
                            <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                              {item.imageUrl && (
                                <img
                                  src={item.imageUrl}
                                  width={380}
                                  height={362}
                                  alt={item.title}
                                  className="w-full h-full object-cover"
                                />
                              )}
                            </div>
                          </div>
            
                          <ClipPath />
                        </div>
                      ))}
                    </div>
                  </div>
    
                  <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[35rem]">
                    {/* <img
                      src={chartholder}
                      className="w-full h-full object-cover"
                      width={520}
                      height={400}
                      alt="Scary robot"
                    /> */}
                    {currentSubInfo.content} 
                    <BarGraph/>
                    
                    
                  </div>
                </div>
            </div>
    
          </div>
        </Section>
      );
}

export default ChemicalsInfo
