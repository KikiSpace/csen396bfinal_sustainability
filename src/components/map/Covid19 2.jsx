import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import CovidMap from "./CovidMap";
import LoadCountryTask from "./LoadCountryTask";
import Legend from "./Legend";
import legendItems from "./legendItems";
import industryData from "./Industry_Data.json";

const Covid19 = () => {
  const [countries, setCountries] = useState([]);
  const [year, setYear] = useState(1987);
  const years = [...new Set(industryData.map(data => data.YEAR))]; // Ensure unique years

  const legendItemsReverse = [...legendItems].reverse();

  useEffect(() => {
    const loadCountryTask = new LoadCountryTask();
    loadCountryTask.load(setCountries, year);
  }, [year]); // Dependency array includes 'year' now

  return (
    <div>
      <div className="year-dropdown">
        <select onChange={(e) => setYear(parseInt(e.target.value))} value={year}>
          {years.map((yr) => (
            <option key={yr} value={yr}>{yr}</option>
          ))}
        </select>
      </div>
      {countries.length === 0 ? (
        <Loading />
      ) : (
        <div>
          <CovidMap countries={countries} year={year} /> 
          <Legend legendItems={legendItemsReverse} />
        </div>
      )}
    </div>
  );
};

export default Covid19;
