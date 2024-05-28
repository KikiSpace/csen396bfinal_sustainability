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
      title: "Chemical1",
      text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
      backgroundUrl: "./src/assets/benefits/card-1.svg",
      iconUrl: chemicalIcon,
      imageUrl: chemicalbg,
    },
    {
      id: "1",
      title: "Chemical2",
      text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
      backgroundUrl: "./src/assets/benefits/card-2.svg",
      iconUrl: chemicalIcon,
      imageUrl: chemicalbg,
      light: true,
    },
    {
      id: "2",
      title: "Chemical3",
      text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
      backgroundUrl: "./src/assets/benefits/card-3.svg",
      iconUrl: chemicalIcon,
      imageUrl: chemicalbg,
    },
    {
      id: "3",
      title: "Chemical4",
      text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
      backgroundUrl: "./src/assets/benefits/card-4.svg",
      iconUrl: chemicalIcon,
      imageUrl: chemicalbg,
      light: true,
    },
    {
      id: "4",
      title: "Chemical5",
      text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
      backgroundUrl: "./src/assets/benefits/card-5.svg",
      iconUrl: chemicalIcon,
      imageUrl: chemicalbg,
    },
    {
      id: "5",
      title: "Chemical6",
      text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
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