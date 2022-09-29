import React from "react";
import { BodyMeasurementRecord } from "./BodyMeasurementTable";
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-moment';
import {
  Chart as ChartJS,
  CategoryScale,
  ChartOptions,
  LinearScale,
  TimeScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  TimeScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface Props
{
    data: BodyMeasurementRecord[]
}

export const WeightLineChart : React.FC<Props> = (props : Props) =>
{
    let formatDate = (date : Date) =>  date.toISOString().split('T')[0];
    let dataset = props.data.map(data => ({x: formatDate(data.valueDate), y: data.weight}));

    let data = {
        axis: 'x',
        datasets: [
          {
            label: 'Waga (kg)',
            tension: 0.4,
            data: dataset,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          }
        ],
      };
    
      const options : ChartOptions<'line'> = {
      responsive: true,
      scales: {
        x: {
          grid: {
            display: false
          },
          type: 'time',
          time: {
            unit: 'day'
          }
        }
      },
      plugins: {
        legend: {
          position: 'top' as const,
        },
        title: {
          display: true,
          text: 'Dynamika przyrostu sadełka',
        },
      },
    };

    return <Line options={options} data={data} />;
}