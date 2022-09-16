import React from "react";
import { BodyMeasurementRecord } from "./BodyMeasurementTable";
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
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
    let labels = props.data.map(x => x.valueDate.toLocaleDateString());
    let data = {
        labels,
        datasets: [
          {
            label: 'Waga (kg)',
            data: props.data.map(x => x.weight),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          }
        ],
      };
    let options = {
      responsive: true,
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