const legendItems = [
  {
    title: "1,000,000 +",
    color: "#6b2bea",
    isFor: (population) => population >= 1000000,
  },
  {
    title: "500,000 - 999,999",
    color: "#8b58ee",
    isFor: (population) => population >= 500000 && population < 1000000,
  },
  {
    title: "200,000 - 499,999",
    color: "#ab88f2",
    isFor: (population) => population >= 200000 && population < 500000,
  },
  {
    title: "50,000 - 199,999",
    color: "#bc9ff4",
    isFor: (population) => population >= 50000 && population < 200000,
  },
  {
    title: "10,000 - 49,999",
    color: "#ccb7f6",
    isFor: (population) => population >= 10000 && population < 50000,
  },
  {
    title: "0 - 9,999",
    color: "#ddcff9",
    isFor: (population) => population < 10000,
  },
];

export default legendItems;
