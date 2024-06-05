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
        "title": "Exposure Source",
        "content": "Ammonia Source is xxxxxxxxxx",
        "names": ["Cleaning Products", "Accidental Releases"],
        "descriptions": ["Ammonia is found in many household cleaning supplies such as window cleaners, toilet cleaners, and furniture polish."
        , "Accidental releases of ammonia in the farming, industrial, and commericial industries may occur."]
      },
      "ex_route": {
        "title": "Exposure Route",
        "content": "Ammonia Exposure Route is xxxxxxxxxx",
        "names": ["Inhalation", "Ingestion", "Dermal", "Eye"],
        "descriptions": [""]
      },
      "exposure": {
        "title": "Level of Exposure",
        "content": "Ammonia Exposure is xxxxxxxxxx",
        "names": ["Minimum Risk", "Lethal Risk"],
        "descriptions": ["Acute Inhalation: 1.7 ppm, Chronic Inhalation: 0.1 ppm", "2500 - 4500 ppm over 30 minutes"]
      },
      "symptoms": {
        "title": "Symptoms",
        "content": "Ammonia Symptoms is xxxxxxxxxx",
        "names": ["Inhalation/Ingestion", "Dermal", "Eye"],
        "descriptions": ["Burning, Cough, Sore Throat, Shortness of Breath", "Redness, Pain, Blisters, Skin Burns", "Redness, Pain, Severe Burns"]
      },
      "treatment": {
        "title": "Treatment",
        "content": "Ammonia Treatment is xxxxxxxxxx",
        "names": ["Inhalation/Ingestion", "Dermal", "Eye"],
        "descriptions": ["Make sure not induce vomiting. Rinse mouth with water and seek medical attention.", 
        "Rinse affected parts in cold runing water for at least 15 minutes, then wash thoroughly with soap and water.", 
        "Irrigate opened eyes for several minutes under running water."]
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
        "title": "Exposure Source",
        "content": "Nitric Acid Source is xxxxxxxxxx",
        "names": ["Fertilizer", "Metal Cleaning"],
        "descriptions": ["Nitric acid is a primary chemical used to make ammonium nitrate fertilizer, useful for pasture and hay fertilization as it is highly soluble and easily absorbed by plants."
        , "Nitric acid can convert metals to their oxidized forms, and with the right mixture, can be used to clean rust and corrosion off metal items."]
      },
      "ex_route": {
        "title": "Exposure Route",
        "content": "Nitric Acid Exposure Route is xxxxxxxxxx",
        "names": ["Inhalation/Ingestion", "Dermal", "Eye"],
        "descriptions": ["Ammonia is found in many household cleaning supplies such as window cleaners, toilet cleaners, and furniture polish."
        , "Accidental releases of ammonia in the farming, industrial, and commericial industries may occur."]
      },
      "exposure": {
        "title": "Level of Exposure",
        "content": "Nitric Acid Exposure is xxxxxxxxxx",
        "names": ["Minimum Risk", "Lethal Risk"],
        "descriptions": ["Acute Ingestion: 430 mg/kg", "The lethal dosage of nitric acid is unkown."]
      },
      "symptoms": {
        "title": "Symptoms",
        "content": "Nitric Acid Symptoms is xxxxxxxxxx",
        "names": ["Inhalation/Ingestion", "Dermal", "Eye"],
        "descriptions": ["Burning Sensation in Mouth and Throat, Abdominal Pain, Vomiting", "Pain, Yellow Staining of Skin, Skin Burns",
        , "Redness, Severe Burns"]
      },
      "treatment": {
        "title": "Treatment",
        "content": "Nitric Acid Treatment is xxxxxxxxxx",
        "names": ["Inhalation/Ingestion", "Dermal", "Eye"],
        "descriptions": ["Quickly seek medical attention, providing information for amount inhaled/ingested.", "Wash affected area with water.",
        "Immediately flush contaminated eyes with copious amounts of gently flowing water."]
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
        "title": "Exposure Source",
        "content": "Ethylene Glycol Source is xxxxxxxxxx",
        "names": ["Coolant/Antifreeze Products", "Plastics"],
        "descriptions": ["Ethylene glycol is a primary chemical used to make coolant or antifreeze found in autombiles and computer systems."
        , "Ethylene glycol has become an important chemical for the plastics industry for the manufacturing of polyester fibers and resins, such as polyethylene terephthalate, which is used in soft drink plastic bottles."]
      },
      "ex_route": {
        "title": "Exposure Route",
        "content": "Ethylene Glycol Exposure Route is xxxxxxxxxx",
        "names": ["Inhalation/Ingestion", "Dermal", "Eye"],
        "descriptions": [""]
      },
      "exposure": {
        "title": "Level of Exposure",
        "content": "Ethylene Glycol Exposure is xxxxxxxxxx",
        "names": ["Minimum Risk", "Lethal Risk"],
        "descriptions": ["Acute Inhalation: 2 mg/m3, Acute Oral: 0.8 mg/kg/day.", "The lethal dosage of ethylene glycol is unknown."]
      },
      "symptoms": {
        "title": "Symptoms",
        "content": "Ethylene Glycol Symptoms is xxxxxxxxxx",
        "names": ["Inhalation/Ingestion", "Dermal", "Eye"],
        "descriptions": ["Ammonia is found in many household cleaning supplies such as window cleaners, toilet cleaners, and furniture polish."
        , "Accidental releases of ammonia in the farming, industrial, and commericial industries may occur."]
      },
      "treatment": {
        "title": "Treatment",
        "content": "Ethylene Glycol Treatment is xxxxxxxxxx",
        "names": ["Inhalation/Ingestion", "Dermal", "Eye"],
        "descriptions": ["Ammonia is found in many household cleaning supplies such as window cleaners, toilet cleaners, and furniture polish."
        , "Accidental releases of ammonia in the farming, industrial, and commericial industries may occur."]
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
        "title": "Exposure Source",
        "content": "Lead Compounds Source is xxxxxxxxxx",
        "names": ["Cleaning Products", "Accidental Releases"],
        "descriptions": ["Ammonia is found in many household cleaning supplies such as window cleaners, toilet cleaners, and furniture polish."
        , "Accidental releases of ammonia in the farming, industrial, and commericial industries may occur."]
      },
      "ex_route": {
        "title": "Exposure Route",
        "content": "Lead Compounds Exposure Route is xxxxxxxxxx",
        "names": ["Inhalation/Ingestion", "Dermal", "Eye"],
        "descriptions": ["Ammonia is found in many household cleaning supplies such as window cleaners, toilet cleaners, and furniture polish."
        , "Accidental releases of ammonia in the farming, industrial, and commericial industries may occur."]
      },
      "exposure": {
        "title": "Level of Exposure",
        "content": "Lead Compounds Exposure is xxxxxxxxxx",
        "names": ["Minimum Risk", "Lethal Risk"],
        "descriptions": ["Ammonia is found in many household cleaning supplies such as window cleaners, toilet cleaners, and furniture polish."
        , "Accidental releases of ammonia in the farming, industrial, and commericial industries may occur."]
      },
      "symptoms": {
        "title": "Symptoms",
        "content": "Lead Compounds Symptoms is xxxxxxxxxx",
        "names": ["Inhalation/Ingestion", "Dermal", "Eye"],
        "descriptions": ["Ammonia is found in many household cleaning supplies such as window cleaners, toilet cleaners, and furniture polish."
        , "Accidental releases of ammonia in the farming, industrial, and commericial industries may occur."]
      },
      "treatment": {
        "title": "Treatment",
        "content": "Lead Compounds Treatment is xxxxxxxxxx",
        "names": ["Inhalation/Ingestion", "Dermal", "Eye"],
        "descriptions": ["Ammonia is found in many household cleaning supplies such as window cleaners, toilet cleaners, and furniture polish."
        , "Accidental releases of ammonia in the farming, industrial, and commericial industries may occur."]
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
        "title": "Exposure Source",
        "content": "Toleune source is xxxxxxxxxx",
        "names": ["Cleaning Products", "Accidental Releases"],
        "descriptions": ["Ammonia is found in many household cleaning supplies such as window cleaners, toilet cleaners, and furniture polish."
        , "Accidental releases of ammonia in the farming, industrial, and commericial industries may occur."]
      },
      "ex_route": {
        "title": "Exposure Route",
        "content": "Toleune ex route is xxxxxxxxxx",
        "names": ["Inhalation/Ingestion", "Dermal", "Eye"],
        "descriptions": ["Ammonia is found in many household cleaning supplies such as window cleaners, toilet cleaners, and furniture polish."
        , "Accidental releases of ammonia in the farming, industrial, and commericial industries may occur."]
      },
      "exposure": {
        "title": "Level of Exposure",
        "content": "Toleune exposure is xxxxxxxxxx",
        "names": ["Minimum Risk", "Lethal Risk"],
        "descriptions": ["Ammonia is found in many household cleaning supplies such as window cleaners, toilet cleaners, and furniture polish."
        , "Accidental releases of ammonia in the farming, industrial, and commericial industries may occur."]
      },
      "symptoms": {
        "title": "Symptoms",
        "content": "Toleune symtoms is xxxxxxxxxx",
        "names": ["Inhalation/Ingestion", "Dermal", "Eye"],
        "descriptions": ["Ammonia is found in many household cleaning supplies such as window cleaners, toilet cleaners, and furniture polish."
        , "Accidental releases of ammonia in the farming, industrial, and commericial industries may occur."]
      },
      "treatment": {
        "title": "Treatment",
        "content": "Toleune is treatment xxxxxxxxxx",
        "names": ["Inhalation/Ingestion", "Dermal", "Eye"],
        "descriptions": ["Ammonia is found in many household cleaning supplies such as window cleaners, toilet cleaners, and furniture polish."
        , "Accidental releases of ammonia in the farming, industrial, and commericial industries may occur."]
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
        "title": "Exposure Source",
        "content": "Methanol Source is xxxxxxxxxx",
        "names": ["Cleaning Products", "Accidental Releases"],
        "descriptions": ["Ammonia is found in many household cleaning supplies such as window cleaners, toilet cleaners, and furniture polish."
        , "Accidental releases of ammonia in the farming, industrial, and commericial industries may occur."]
      },
      "ex_route": {
        "title": "Exposure Route",
        "content": "Methanol Exposure Route is xxxxxxxxxx",
        "names": ["Inhalation/Ingestion", "Dermal", "Eye"],
        "descriptions": ["Ammonia is found in many household cleaning supplies such as window cleaners, toilet cleaners, and furniture polish."
        , "Accidental releases of ammonia in the farming, industrial, and commericial industries may occur."]
      },
      "exposure": {
        "title": "Level of Exposure",
        "content": "Methanol Exposure is xxxxxxxxxx",
        "names": ["Minimum Risk", "Lethal Risk"],
        "descriptions": ["Ammonia is found in many household cleaning supplies such as window cleaners, toilet cleaners, and furniture polish."
        , "Accidental releases of ammonia in the farming, industrial, and commericial industries may occur."]
      },
      "symptoms": {
        "title": "Symptoms",
        "content": "Methanol Symptoms is xxxxxxxxxx",
        "names": ["Inhalation/Ingestion", "Dermal", "Eye"],
        "descriptions": ["Ammonia is found in many household cleaning supplies such as window cleaners, toilet cleaners, and furniture polish."
        , "Accidental releases of ammonia in the farming, industrial, and commericial industries may occur."]
      },
      "treatment": {
        "title": "Treatment",
        "content": "Methanol Treatment is xxxxxxxxxx",
        "names": ["Inhalation/Ingestion", "Dermal", "Eye"],
        "descriptions": ["Ammonia is found in many household cleaning supplies such as window cleaners, toilet cleaners, and furniture polish."
        , "Accidental releases of ammonia in the farming, industrial, and commericial industries may occur."]
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