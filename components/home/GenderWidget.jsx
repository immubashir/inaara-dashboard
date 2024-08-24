import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Switch from 'react-switch';

const GenderWidget = ({ width = 250, height = 150, timeRange }) => {
  const [showPercentage, setShowPercentage] = useState(true);
  const [genderData, setGenderData] = useState([
    {
      name: 'Male',
      count: 75, // Hardcoded value
      icon: <Image src="/images/Male.svg" width={40} height={40} />,
      color: '#9D93FF',
    },
    {
      name: 'Female',
      count: 125, // Hardcoded value
      icon: <Image src="/images/Female.svg" width={40} height={40} />,
      color: '#FD93FF',
    },
  ]);

  useEffect(() => {
    async function getGender() {
      // Fetch data if needed
    }

    getGender();
  }, [timeRange]);

  const total = genderData.reduce((sum, gender) => sum + gender.count, 0);

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
    <div className='w-1/2 p-[2px] bg-gradient-to-br from-slate-500 rounded-[30px]'>
      <div className="bg-[#1D1E22] p-5 rounded-[30px] text-white shadow-lg w-full h-full">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg">Gender</h3>
          <div className="flex items-center">
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
        <div className="flex items-center justify-between mt-6 flex-grow">
          {genderData.map((gender, index) => {
            const percentage = ((gender.count / total) * 100).toFixed(2);
            const displayValue = showPercentage ? `${percentage}%` : gender.count;
            const strokeDasharray = `${percentage} ${100 - percentage}`;

            return (
              <div key={index} className="text-center flex-1">
                <div className="relative inline-block" style={{ width: `${height / 2}px`, height: `${height / 2}px` }}>
                  <svg className="absolute top-0 left-0" width="100%" height="100%" viewBox="0 0 36 36">
                    <circle
                      cx="18"
                      cy="18"
                      r="15.9155"
                      fill="transparent"
                      stroke="transparent"
                      strokeWidth="2"
                    />
                    <circle
                      cx="18"
                      cy="18"
                      r="15.9155"
                      fill="transparent"
                      stroke={gender.color}
                      strokeWidth="2"
                      strokeDasharray={strokeDasharray}
                      strokeDashoffset="25"
                    />
                  </svg>
                  <div className="text-sm h-full flex items-center justify-center" style={{ fontSize: `calc(${height}px / 4)` }}>
                    {gender.icon}
                  </div>
                </div>
                <div className="mt-2" style={{ fontSize: `calc(${height}px / 7)` }}>
                  {gender.name}
                </div>
                <div className="font-bold mt-1 relative" style={{ fontSize: `calc(${height}px / 7)`, color: gender.color }}>
                  <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${showPercentage ? 'opacity-100' : 'opacity-0'}`}>
                    {`${percentage}%`}
                  </div>
                  <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${showPercentage ? 'opacity-0' : 'opacity-100'}`}>
                    {gender.count}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GenderWidget;
