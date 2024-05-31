import file02 from "../assets/file-02.svg";
import homeSmile from "../assets/home-smile.svg";
import plusSquare from "../assets/plus-square.svg";
import searchMd from "../assets/search-md.svg";
import chemicalIcon from "../assets/ChemicalsInfo/icon-1.svg"
import chemicalbg from "../assets/ChemicalsInfo/chemical.jpg"
import recording03 from "../assets/Insights/recording-03.svg"
import recording01 from "../assets/Insights/recording-01.svg" 
import disc02 from "../assets/Insights/disc-02.svg"
import chromecast from "../assets/Insights/chrome-cast.svg"
import sliders04 from "../assets/Insights/sliders-04.svg"

export const navigation = [
    {
      id: "0",
      title: "Map",
      url: "#map",
    },
    {
      id: "1",
      title: "Chemicals",
      url: "#chemicals",
    },
    {
      id: "2",
      title: "Insights",
      url: "#insights",
    },
    {
      id: "3",
      title: "About",
      url: "#about",
    },
  ];

  export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

  export const chemicals = [
    {
      id: "0",
      title: "Ammonia",
      industry: "Agriculture, Petroleum, Chemicals",
      text: "Ammonia is commonly used as fertilizer, in the manufacture of plastics, explosives and other chemicals, and often found in household cleaning solutions.",
      backgroundUrl: "./src/assets/benefits/card-1.svg",
      iconUrl: chemicalIcon,
      imageUrl: chemicalbg,
    },
    {
      id: "1",
      title: "Nitric Acid",
      industry: "Agriculture, Fabricated Metals, Electrical Equipment",
      text: "Nitric acid is used to oxidize and clean metals, and is a key component in fertilizers.",
      backgroundUrl: "./src/assets/benefits/card-2.svg",
      iconUrl: chemicalIcon,
      imageUrl: chemicalbg,
      light: true,
    },
    {
      id: "2",
      title: "Ethylene Glycol ",
      industry: "Petroleum, Chemicals",
      text: "Ethylene glycol is mainly used as a raw material in the manufacture of polyester fibers and for antifreeze formulations.",
      backgroundUrl: "./src/assets/benefits/card-3.svg",
      iconUrl: chemicalIcon,
      imageUrl: chemicalbg,
    },
    {
      id: "3",
      title: "Lead Compounds",
      industry: "Hazardous Waste, Electrical Equipment",
      text: "Lead is used abundantly in products such as paint, pipes, gasoline, batteries, ammunition, and cosmetics.",
      backgroundUrl: "./src/assets/benefits/card-4.svg",
      iconUrl: chemicalIcon,
      imageUrl: chemicalbg,
      light: true,
    },
    {
      id: "4",
      title: "Toleune",
      industry: "Chemicals, Plastics and Rubber, Cosmetics",
      text: "Toluene is used with other chemicals in paints, varnishes, nail polish, glues and adhesives.",
      backgroundUrl: "./src/assets/benefits/card-5.svg",
      iconUrl: chemicalIcon,
      imageUrl: chemicalbg,
    },
    {
      id: "5",
      title: "Methanol",
      industry: "Chemicals, Hazardous Waste, Petroleum",
      text: "Methonol is used as a solvent for inks, resins, adhesives, and dyes. It is also used in the manufacturing of vitamins, hormones, and other pharmaceuticals.",
      backgroundUrl: "./src/assets/benefits/card-6.svg",
      iconUrl: chemicalIcon,
      imageUrl: chemicalbg,
    },
  ];

  export const chartTitles = [
    "chartTitles generating1",
    "chartTitles generating2",
    "chartTitles generating3",
  ];

  export const chartholderIcons = [
    recording03,
    recording01,
    disc02,
    chromecast,
    sliders04,
  ];