import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { barChartData } from '../../constants/chartdata.js'
import { useRef } from 'react'
import { getElementsAtEvent } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const BarGraph = () => {
  const barChartRef = useRef();
  
    const options = {}
 
  return (
      <Bar ref={barChartRef} options={options} data={barChartData}/>
  )
}