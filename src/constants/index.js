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
      "source": {
        "title": "Source",
        "content": "Ammonia Source is xxxxxxxxxx"
      },
      "ex_route": {
        "title": "Exposure Route",
        "content": "Ammonia Exposure Route is xxxxxxxxxx"
      },
      "exposure": {
        "title": "Exposure",
        "content": "Ammonia Exposure is xxxxxxxxxx"
      },
      "symptoms": {
        "title": "Symptoms",
        "content": "Ammonia Symptoms is xxxxxxxxxx"
      },
      "treatment": {
        "title": "Treatment",
        "content": "Ammonia Treatment is xxxxxxxxxx"
      }

    },
    {
      id: "1",
      title: "Nitric Acid",
      industry: "Agriculture, Fabricated Metals, Electrical Equipment",
      text: "Nitric acid is used to oxidize and clean metals, and is a key component in fertilizers.",
      backgroundUrl: "./src/assets/benefits/card-2.svg",
      iconUrl: chemicalIcon,
      imageUrl: chemicalbg,
      "source": {
        "title": "Source",
        "content": "Nitric Acid Source is xxxxxxxxxx"
      },
      "ex_route": {
        "title": "Exposure Route",
        "content": "Nitric Acid Exposure Route is xxxxxxxxxx"
      },
      "exposure": {
        "title": "Exposure",
        "content": "Nitric Acid Exposure is xxxxxxxxxx"
      },
      "symptoms": {
        "title": "Symptoms",
        "content": "Nitric Acid Symptoms is xxxxxxxxxx"
      },
      "treatment": {
        "title": "Treatment",
        "content": "Nitric Acid Treatment is xxxxxxxxxx"
      }
      
    },
    {
      id: "2",
      title: "Ethylene Glycol ",
      industry: "Petroleum, Chemicals",
      text: "Ethylene glycol is mainly used as a raw material in the manufacture of polyester fibers and for antifreeze formulations.",
      backgroundUrl: "./src/assets/benefits/card-3.svg",
      iconUrl: chemicalIcon,
      imageUrl: chemicalbg,
      "source": {
        "title": "Source",
        "content": "Ethylene Glycol Source is xxxxxxxxxx"
      },
      "ex_route": {
        "title": "Exposure Route",
        "content": "Ethylene Glycol Exposure Route is xxxxxxxxxx"
      },
      "exposure": {
        "title": "Exposure",
        "content": "Ethylene Glycol Exposure is xxxxxxxxxx"
      },
      "symptoms": {
        "title": "Symptoms",
        "content": "Ethylene Glycol Symptoms is xxxxxxxxxx"
      },
      "treatment": {
        "title": "Treatment",
        "content": "Ethylene Glycol Treatment is xxxxxxxxxx"
      }
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
      "source": {
        "title": "Source",
        "content": "Lead Compounds Source is xxxxxxxxxx"
      },
      "ex_route": {
        "title": "Exposure Route",
        "content": "Lead Compounds Exposure Route is xxxxxxxxxx"
      },
      "exposure": {
        "title": "Exposure",
        "content": "Lead Compounds Exposure is xxxxxxxxxx"
      },
      "symptoms": {
        "title": "Symptoms",
        "content": "Lead Compounds Symptoms is xxxxxxxxxx"
      },
      "treatment": {
        "title": "Treatment",
        "content": "Lead Compounds Treatment is xxxxxxxxxx"
      }
    },
    {
      id: "4",
      title: "Toleune",
      industry: "Chemicals, Plastics and Rubber, Cosmetics",
      text: "Toluene is used with other chemicals in paints, varnishes, nail polish, glues and adhesives.",
      backgroundUrl: "./src/assets/benefits/card-5.svg",
      iconUrl: chemicalIcon,
      imageUrl: chemicalbg,
      "source": {
        "title": "Source",
        "content": "Toleune source is xxxxxxxxxx"
      },
      "ex_route": {
        "title": "Exposure Route",
        "content": "Toleune ex route is xxxxxxxxxx"
      },
      "exposure": {
        "title": "Exposure",
        "content": "Toleune exposure is xxxxxxxxxx"
      },
      "symptoms": {
        "title": "Symptoms",
        "content": "Toleune symtoms is xxxxxxxxxx"
      },
      "treatment": {
        "title": "Treatment",
        "content": "Toleune is treatment xxxxxxxxxx"
      }
    },
    {
      id: "5",
      title: "Methanol",
      industry: "Chemicals, Hazardous Waste, Petroleum",
      text: "Methonol is used as a solvent for inks, resins, adhesives, and dyes. It is also used in the manufacturing of vitamins, hormones, and other pharmaceuticals.",
      backgroundUrl: "./src/assets/benefits/card-6.svg",
      iconUrl: chemicalIcon,
      imageUrl: chemicalbg,
      "source": {
        "title": "Source",
        "content": "Methanol Source is xxxxxxxxxx"
      },
      "ex_route": {
        "title": "Exposure Route",
        "content": "Methanol Exposure Route is xxxxxxxxxx"
      },
      "exposure": {
        "title": "Exposure",
        "content": "Methanol Exposure is xxxxxxxxxx"
      },
      "symptoms": {
        "title": "Symptoms",
        "content": "Methanol Symptoms is xxxxxxxxxx"
      },
      "treatment": {
        "title": "Treatment",
        "content": "Methanol Treatment is xxxxxxxxxx"
      }
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
    sliders04,
  ];

  export const chemicalCardInfo = ["source", "ex_route", "exposure", "symptoms","treatment"]
  export const chemicalCategories = {"0": "Ammonia", "1": "Nitric Acid", "2": "Ethylene Glycol", "3": "Lead Compounds", "4": "Toleune", "5": "Methanol"}
  export const chemicalCardMatchTitle = {"source": "Source", "ex_route": "Exposure Route", "exposure": "Exposure", "symptoms": "Symptoms", "treatment": "Treatment"}