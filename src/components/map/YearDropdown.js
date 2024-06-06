import React from "react";

const YearDropdown = ({ selectedYear, onSelectYear, years }) => {
  return (
    <select onChange={(e) => onSelectYear(parseInt(e.target.value))} value={selectedYear}>
      {years.map((year) => (
        <option key={year} value={year}>{year}</option>
      ))}
    </select>
  );
};

export default YearDropdown;
