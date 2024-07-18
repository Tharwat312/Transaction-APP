import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)
export default function Bargraph({ userAmount }) {
    const [dates, values] = userAmount;
    const data = {
        labels: dates,
        datasets: [
            {
                label: "Transactions",
                data: values,
                backgroundColor: ["rgb(48, 94, 221)"],
                borderColor: 'rgba(54, 162, 235, 1)',
            }
        ]
    };
    return <>
        <Bar data={data} />
    </>
}
