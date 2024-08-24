'use client';
import Image from 'next/image'
import React, { useState } from 'react'
import Searchbar from './Searchbar'
import Header from './Header'
import VisitsWidget from './VisitsWidget'
import LocationsWidget from './LocationsWidget'
import DiscoveryWidget from './DiscoveryWidget';
import ReasonWidget from './ReasonWidget';
import AgeGroupWidget from './AgeGroupWidget';
import GenderWidget from './GenderWidget';
import TrendsWidget from './TrendsWidget';

const WidgetContainer = () => {
  const [timeRange, setTimeRange] = useState({
    type: '1 Day', // Default value
    startDate: '',
    endDate: ''
  });

  const [trendsData, setTrendsData] = useState({
    visits: null,
    locations: null,
    discovery: null,
    reasons: null,
    ageGroups: null,
    gender: null,
  });

  const updateTrendsData = (type, data) => {
    setTrendsData(prevData => ({
      ...prevData,
      [type]: data,
    }));
  };

  return (
    <div className='relative pt-12 ml-6 w-[60%] '>
        <Searchbar/>
        <Header/>
        <div className='flex gap-4 max-sm:flex-col'>
          <VisitsWidget/>
          <LocationsWidget timeRange={timeRange} onDataUpdate={(data) => updateTrendsData('locations', data)} />
        </div>
        <div className='flex gap-4 mt-4'>
          <ReasonWidget/>
          <AgeGroupWidget/>
        </div>
        <div className='flex gap-4 mt-4'>
          <GenderWidget timeRange={timeRange}/>
          <DiscoveryWidget/>
        </div>
        <TrendsWidget/>
    </div>
  )
}

export default WidgetContainer