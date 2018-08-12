import React, { Component } from 'react';
import {BarChart, PieChart} from "react-easy-chart";

import './statistics.css';

class Statistics extends Component {
    render() {
        return <div className="statistics-container">
            <PieChart
                data={[
                    { key: 'A', value: 100 },
                    { key: 'B', value: 200 },
                    { key: 'C', value: 50 }
                ]}
            />
            <BarChart
                data={[
                    {x: 'A', y: 20},
                    {x: 'B', y: 30},
                    {x: 'C', y: 40},
                    {x: 'D', y: 20},
                    {x: 'E', y: 40},
                    {x: 'F', y: 25},
                    {x: 'G', y: 5}
                ]}
            />
        </div>
    }
}

export default Statistics;
