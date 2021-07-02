import React from 'react';
import { Pie } from 'react-chartjs-2';

const data = {
  datasets: [
    {
      label: 'Five Practice Zones',
      data: [20, 13, 7, 10, 10],
      backgroundColor: [
        'hsl(348, 100%, 61%)',
        'hsl(217, 86%, 53%)',
        'hsl(48, 100%, 67%)',
        'hsl(141, 53%, 53%)',
        'hsl(277, 71%, 53%)',
      ],
      borderColor: [
        'hsl(348, 100%, 61%)',
        'hsl(217, 86%, 53%)',
        'hsl(48, 100%, 67%)',
        'hsl(141, 53%, 53%)',
        'hsl(277, 71%, 53%)',
      ],
      borderWidth: 1,
    },
  ],
};

const PieChart = () => (
    <Pie data={data} />
);

export default PieChart;