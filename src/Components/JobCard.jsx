import React from 'react';
import Deloitte from '../Deloitte.png';
const JobCard = () => {
  return (
    <div className='p-4'>
      <div className='w-[680px] h-[350px] bg-cyan-400 drop-shadow-2xl px-4 py-3 rounded'>
        <div className=' flex items-center gap-4'>
          <img className='w-[100px] h-[100px] bg-white rounded-md object-contain' src={Deloitte} alt={Deloitte} />
          <div className='title'>
            <h2 className='text-2xl font-bold '>Business Development Manager</h2>
            <p className='-mt-2 text-xl text-gray-500'>$50,000 - $75,000/Month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
