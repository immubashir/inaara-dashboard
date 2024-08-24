'use client';

import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient';
import Image from 'next/image';

const VisitsWidget = () => {
  const [visits, setVisits] = useState(0);
  const [change, setChange] = useState(0);

  useEffect(() => {
    const fetchVisitsData = async () => {
      const hospitalId = '4rGAVPwMavcn6ZXQJSqynPoJKyE3';
      const doctorId = '0c99dde8-1414-4867-9395-26ffe3355f3f';
      const dateRange = 'custom';
      const customStartDate = '2024-01-01';
      const customEndDate = '2024-01-31';

      const { data, error } = await supabase.rpc('get_appointment_stats', {
        p_hospital_id: hospitalId,
        p_doctor_id: doctorId,
        p_date_range: dateRange,
        p_custom_start_date: customStartDate,
        p_custom_end_date: customEndDate,
      });

      if (error) {
        console.error('Error fetching appointment stats:', error);
      } else if (data && data.length > 0) {
        setVisits(data[0].total_visits); // Adjust based on your data structure
        setChange(data[0].change_percentage); // Adjust based on your data structure
      }
    };

    fetchVisitsData();
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#8E7FC1] p-[2px] to-[#3d3d3d] rounded-[30px] text-white flex items-center justify-between shadow-lg w-1/3">
      <div className='bg-[#1D1E22] rounded-[30px] p-5 w-full h-full flex flex-col items-c justify-between'>
        <div className='flex items-center justify-between'>
          <div className='bg-[#A7AFC8] px-3 py-1 flex items-center justify-center rounded-3xl gap-2'>
            <Image src='/images/Visits.svg' width={20} height={20}/>
            <h3 className="text-lg uppercase text-black outfit-bold">Visits</h3>
          </div>
          <button>
            <Image src="/images/Arrow.svg" height={36} width={36}/>
          </button>
        </div>
        <div className="text-4xl text-[#BF9EFF] outfit-semibold">
          400
         <span className="ml-1 text-lg outfit-light text-[#9BB7FF]">Today</span>
        </div>
        <div className="mt-8 text-xs text-gray-400 flex items-center">
          <p className='text-[#3E8C58] bg-[#BFE9BC] px-1 rounded-3xl outfit-semibold'>+12.5</p>
          <p className='ml-1 text-[#C2D0FB] outfit-light'>Than last month</p>
        </div>
      </div>
    </div>
  );
};

export default VisitsWidget;
