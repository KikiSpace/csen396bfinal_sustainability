import countiesData from "./counties.json"; // Import the entire JSON
import industryData from "./Industry_Data.json"; // Import industry data
import legendItems from "./legendItems"; // Import legendItems

const { features } = countiesData; // Extract features from the imported JSON

class LoadCountryTask {
  setState = null;
  year = null;

  load = (setState, year) => {
    this.setState = setState;
    this.year = year;
    this.#processIndustryData(); // Process data for the selected year
  };

  #processIndustryData = () => {
    const dataForYear = industryData.filter(data => data.YEAR === this.year); // Filter data for selected year
    const wasteData = dataForYear.length > 0 ? dataForYear[0].WASTE : []; // Get waste data for the selected year

    for (let i = 0; i < features.length; i++) {
      const county = features[i];
      county.properties.chemicals = [];

      wasteData.forEach(wasteItem => {
        for (const [countyName, amount] of Object.entries(wasteItem)) {
          if (countyName.toUpperCase() === county.properties.name.toUpperCase() && amount > 0) {
            county.properties.chemicals.push({
              industry: wasteItem["20. Industry Sector"],
              amount: parseFloat(amount), // Ensure amount is a number
            });
          }
        }
      });

      this.#setCountyColor(county); // Set color based on the data
    }

    console.log("Processed features:", features); // Debug: Log processed features

    this.setState([...features]); // Update state with new data
  };

  #setCountyColor = (county) => {
    const totalAmount = county.properties.chemicals.reduce((sum, chemical) => sum + chemical.amount, 0);
    const legendItem = legendItems.find((item) =>
      item.isFor(totalAmount)
    );

    if (legendItem != null) county.properties.color = legendItem.color;
  };
}

export default LoadCountryTask;
