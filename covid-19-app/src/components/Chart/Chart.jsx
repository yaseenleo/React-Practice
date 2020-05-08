import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Bar, lineChart, Line } from 'react-chartjs-2';
import Styles from './Chart.module.css';

const Chart = ({ data, country }) => {

    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData())
        }
        // console.log(dailyData);

        fetchAPI()
    }, []); // when the useEffect call array is empty it will only execute once like componentDidMount

    const lineChart = (
        dailyData.length
            ? (
                <Line
                    data={{
                        labels: dailyData.map(({ date }) => date),
                        datasets: [{
                            data: dailyData.map(({ confirmed }) => confirmed),
                            label: 'Infected',
                            borderColor: '#3333ff',
                            fill: true,
                        }, {
                            data: dailyData.map(({ deaths }) => deaths),
                            label: 'Deaths',
                            borderColor: 'red',
                            backgroundColor: 'rgba(255,0,0,0.5)',
                            fill: true,
                        }],
                    }}
                />) : null
    );

    // console.log(data.confirmed, data.recovered, data.deaths);
    

    const barChart = (
        data.confirmed ? (
            <Bar
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: "people",
                        backgroundColor: ['rgba(0, 0, 255, 0.5)',
                            'rgba(255, 0, 0, 0.5)',
                            'rgba(0, 255, 0, 0.5)'],
                        data: [data.confirmed.value, data.recovered.value, data.deaths.value]
                    }]
                }}
                options={{
                    legend: { display: false },
                    options: { display: true, text: `Current state in ${country}` }
                }}
            />) : null
    )

    return (
        <div className={Styles.container}>
            {country ? barChart: lineChart}
        </div>
    )
}

export default Chart;