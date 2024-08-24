import React, { useState } from 'react';
import Switch from 'react-switch';

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const LocationsWidget = () => {
  const [showPercentage, setShowPercentage] = useState(true);

  // Hardcoded location data with 5 locations
  const locations = [
    { name: 'Chandanagar', count: 50 },
    { name: 'Miyapur', count: 30 },
    { name: 'Ameenpur', count: 20 },
    { name: 'BHEL', count: 15 },
    { name: 'Beeramguda', count: 10 },
  ];

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

  const total = locations.reduce((sum, location) => sum + location.count, 0);
  const maxCount = Math.max(...locations.map(location => location.count));

  return (
    <div className='bg-gradient-to-br from-[#FFCDCD] p-[2px] to-[#3d3d3d] rounded-[30px] text-white flex items-center justify-between shadow-lg w-2/3'>
      <div className="bg-[#1D1E22] p-5 rounded-[30px] text-white shadow-lg w-full">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg">Location</h3>
          <div className="flex items-center">
            {/* <span className="text-sm">{showPercentage ? 'Show Actual' : 'Show %'}</span> */}
            <Switch
            onChange={() => setShowPercentage(!showPercentage)}
            checked={showPercentage}
            offColor="#888"
            onColor="#FFCDCD"
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
        <p className='text-[#FFCDCD] outfit-medium text-lg'>You've had your hospital visits from...</p>
        <ul className="mt-3 flex flex-col py-2 px-3 rounded-3xl gap-3 bg-[#6f6f6f7a]">
          {locations.map((location, index) => {
            const percentage = ((location.count / total) * 100).toFixed(2);
            const displayValue = showPercentage ? `${percentage}%` : location.count;

            return (
              <li key={index} className="flex items-center">
                <span className="text-sm outfit-medium w-1/3">{capitalizeFirstLetter(location.name)}</span>
                <div className="bg-[#535353] rounded h-2 relative w-2/3 mx-2 overflow-hidden">
                  <div
                    className="bg-[#FFCDCD] h-full rounded transition-all duration-500 ease-in-out"
                    style={{ width: `${showPercentage ? percentage : (location.count / maxCount) * 100}%` }}
                  ></div>
                </div>
                <span className="text-sm text-white w-1/4 text-right transition-opacity duration-500 ease-in-out">
                  {displayValue}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default LocationsWidget;
