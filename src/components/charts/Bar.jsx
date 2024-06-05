import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { 
  barChartData1_Ammonia as ammonia, 
  barChartData2_Nitric_Acid as nutric_acid, 
  barChartData3_Ethylene_Glycol as ethylene_glycol,
  barChartData4_Lead_Compounds as lead_compounds, 
  barChartData5_Toleune as toleune, 
  barChartData6_Methanol as methanol,
  } from '../../constants/chartdata.js'
import { useRef } from 'react'
import { getElementsAtEvent } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const BarGraph = ({index}) => {
  const barChartRef = useRef();
  
    const options = {}

  const datas = [ammonia, nutric_acid, ethylene_glycol, lead_compounds, toleune, methanol]
 
  return (
      <Bar ref={barChartRef} options={options} data={datas[index]}/>
  )
}