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

const ReasonWidget = () => {
  const [showPercentage, setShowPercentage] = useState(true);

  const UncheckedIcon = () => (
    <div className="flex items-center justify-center text-white text-md h-full w-full outfit-bold">
      %
    </div>
  );
  
  const CheckedIcon = ({ value }) => (
    <div className="w-full h-full flex items-center justify-center text-gray-800 text-xs outfit-bold">
      {value}
    </div>
  );

  // Example actual numbers for each reason
  const reasonData = [
    { name: 'Acne', actual: 130 },
    { name: 'Hair', actual: 100 },
    { name: 'Eczema', actual: 120 },
    { name: 'Skin', actual: 80 },
    { name: 'Coloring', actual: 60 },
  ];

  // Define a color palette for the bars
  const colors = ['#96F1C7', '#3FC6C6', '#49D38E', '#00EEFF', '#B1FFF6'];

  // Calculate the total sum of all actual numbers
  const total = reasonData.reduce((sum, reason) => sum + reason.actual, 0);

  // Calculate the percentages based on the actual numbers
  const percentageData = reasonData.map((reason, index) => ({
    ...reason,
    percentage: ((reason.actual / total) * 100).toFixed(2),
    color: colors[index % colors.length], // Assign color based on index
  }));

  const data = {
    labels: percentageData.map(reason => reason.name),
    datasets: [
      {
        label: showPercentage ? 'Percentage' : 'Actual Number',
        data: showPercentage
          ? percentageData.map(reason => Number(reason.percentage))
          : reasonData.map(reason => reason.actual),
        backgroundColor: percentageData.map(reason => reason.color), // Use the assigned colors
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
          display: false, // Hide the grid lines on the x-axis
        },
        ticks: {
          color: '#ffffff', // X-axis label color
        },
        border: {
          display: true, // Hide the x-axis line
          color:"#fff"
        },
      },
      y: {
        grid: {
          display: false, // Hide the grid lines on the y-axis
        },
        ticks: {
          color: '#ffffff', // Y-axis label color
          beginAtZero: true,
          maxTicksLimit: 5,
        },
        border: {
          display: true, // Hide the y-axis line
          color: '#ffff',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true, // Disable the default tooltip
      },
      datalabels: {
        display: true,
        color: '#ffffff',
        anchor: 'end',
        align: 'top',
        formatter: (value) => {
          return showPercentage ? `${value}%` : value;
        },
      },
    },
  };

  return (
    <div className='w-1/2 h-full p-[1px] bg-gradient-to-br from-[#28FFED] to-[#18779900] rounded-[30px]'>
      <div className="bg-[#1d1e22fe] p-5 rounded-[30px] text-white shadow-md w-full h-full relative">
        <div className="flex justify-between items-center mb-3">
          <div className="text-lg">Reason</div>
          <div className="flex items-center space-x-2">
            {/* <span className="text-sm">{showPercentage ? 'Show Actual' : 'Show %'}</span> */}
            <Switch
            onChange={() => setShowPercentage(!showPercentage)}
            checked={showPercentage}
            offColor="#888"
            onColor="#28FFED"
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
        <div className="bg-[#ffffff1f] rounded-xl px-2 pt-10">
          <Bar data={data} options={options} className='' />
        </div>
      </div>
    </div>
  );
};

export default ReasonWidget;
