'use client';
import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import Switch from 'react-switch';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Register necessary chart components and plugins
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

const AgeGroupWidget = () => {
  const [showPercentage, setShowPercentage] = useState(true);

  const UncheckedIcon = () => (
    <div className="flex items-center justify-center text-white text-md h-full w-full outfit-bold">
      %
    </div>
  );
  
  const CheckedIcon = ({ value }) => (
    <div className="w-full h-full flex items-center justify-center text-gray-300 text-xs outfit-bold">
      {value}
    </div>
  );

  const ageGroups = [
    { range: '17-25 Years', count: 120 },
    { range: '26-35 Years', count: 150 },
    { range: '36-45 Years', count: 90 },
    { range: '46-55 Years', count: 60 },
    { range: '56+ Years', count: 30 },
  ];

  // Calculate the total sum for percentage calculation
  const total = ageGroups.reduce((sum, group) => sum + group.count, 0);

  // Prepare data for the bar chart
  const data = {
    labels: ageGroups.map(group => group.range),
    datasets: [
      {
        label: showPercentage ? 'Percentage' : 'Number of Patients',
        data: showPercentage
          ? ageGroups.map(group => ((group.count / total) * 100).toFixed(2))
          : ageGroups.map(group => group.count),
        backgroundColor: '#CD5479', // Purple color for bars
        borderRadius: 5,
        barThickness: 20,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#ffffff', // X-axis label color
        },
        border: {
          display: false, // Hide the x-axis line
        },
      },
      y: {
        grid: {
          display: false, // Hide the grid lines on the y-axis
        },
        ticks: {
          color: '#ffffff', // Y-axis label color
          beginAtZero: true,
          callback: function (value) {
            return showPercentage ? `${value}%` : value;
          },
        },
        border: {
          display: false, // Hide the y-axis line
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true, // Enable the default tooltip
        callbacks: {
          label: function (tooltipItem) {
            return showPercentage ? `${tooltipItem.raw}%` : tooltipItem.raw;
          },
        },
      },
      datalabels: {
        display: true,
        color: '#ffffff', // White color for the data labels
        anchor: 'end',
        align: 'start',
        offset: -10,
        formatter: (value) => {
          return showPercentage ? `${value}%` : value;
        },
      },
    },
  };

  return (
    <div className='w-1/2 p-[2px] bg-gradient-to-br from-[#FC6D99] rounded-[30px] '>
      <div className="bg-[#1D1E22] p-5 rounded-[30px] text-white shadow-lg w-full h-full">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg">Age Group</h3>
        <div className="flex items-center space-x-2">
          {/* <span className="text-sm">{showPercentage ? 'Show Actual' : 'Show %'}</span> */}
          <Switch
            onChange={() => setShowPercentage(!showPercentage)}
            checked={showPercentage}
            offColor="#888"
            onColor="#CD5479"
            uncheckedIcon={<UncheckedIcon />}  // Custom % icon
            checkedIcon={<CheckedIcon value="Value" />}  // Custom string value icon
            offHandleColor="#fff"
            onHandleColor="#fff"
            handleDiameter={20}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px rgba(0, 0, 0, 0.6)"
            height={25}
            width={58}
          />
        </div>
      </div>
        <div className="rounded-lg p-2 bg-[#393648] mt-6">
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default AgeGroupWidget;
