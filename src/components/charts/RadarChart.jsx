import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { 
    radarChartData1_Ammonia as ammonia,
    radarChartData2_Ethylene_Glycol as ethylene_glycol,
    radarChartData3_Nitric_Acid as nitric_acid,
    radarChartData4_Lead as lead,
    radarChartData5_Toleune as toleune,
    radarChartData6_Methanol as methanol,
 } from '../../constants/chartdata.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const RadarGraph = ({index}) => {
    const options = {
        elements: {
            general: {
                order: 3
            },
            line: {
                borderJoinStyle: "round",
                borderWidth: 1,
            }
        }
    }

    const datas = [ammonia, nitric_acid, lead, ethylene_glycol, toleune, methanol]

    return (
        <Radar options={options} data={datas[index]}/>
    )   
}
