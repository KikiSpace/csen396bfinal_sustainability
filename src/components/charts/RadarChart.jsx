import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { radarChartData } from '../../constants/chartdata.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const RadarGraph = () => {
    const options = {
    }

    return (
        <Radar options={options} data={radarChartData}/>
    )   
}
