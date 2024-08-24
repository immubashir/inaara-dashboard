import React, { useState } from 'react';
import Switch from 'react-switch';

const DiscoveryWidget = () => {
  const [showPercentage, setShowPercentage] = useState(true);

  const discoverySources = [
    { name: 'Friends & Family', count: 200, color: '#FD93FF' },  // Red
    { name: 'Google', count: 140, color: '#9D93FF' },   // Blue
    { name: 'Instagram', count: 100, color: '#EC6748' }, // Pink
    { name: 'Facebook', count: 60, color: '#5276ED' },  // Blue
  ];

  // Calculate the total sum for percentage calculation
  const total = discoverySources.reduce((sum, source) => sum + source.count, 0);

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

  return (
    <div className='w-1/2 bg-gradient-to-br from-gray-600 rounded-[30px] p-[2px]'>
        <div className="bg-[#1D1E22] p-5 rounded-[30px] text-white shadow-md w-full">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-semibold">Discovery</h3>
            <div className="flex items-center">
              {/* <span className="text-sm mr-2">{showPercentage ? 'Show Actual' : 'Show %'}</span> */}
              <Switch
                onChange={() => setShowPercentage(!showPercentage)}
                checked={showPercentage}
                offColor="#888"
                onColor="#9D93FF"
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
          <ul className="list-none p-0 m-0">
            {discoverySources.map((source, index) => {
              const percentage = ((source.count / total) * 100).toFixed(2);
              const displayValue = showPercentage ? `${percentage}%` : source.count;

              return (
                <li key={index} className="mb-4">
                  <div className="flex justify-between items-center mb-1 text-sm">
                    {source.name}
                    <span className="text-gray-400">{displayValue}</span>
                  </div>
                  <div className="bg-gray-600 rounded h-2 relative">
                    <div
                      className="absolute top-0 left-0 h-full rounded"
                      style={{
                        width: showPercentage ? `${percentage}%` : `${(source.count / total) * 100}%`,
                        backgroundColor: source.color,
                      }}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
    </div>
  );
};

export default DiscoveryWidget;
