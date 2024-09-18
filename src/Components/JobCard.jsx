import React from 'react';
import Deloitte from '../Deloitte.png';
import save from '../save.png';
import reply from '../reply-fill.png';
import Briefcase from '../briefcase.png'
import Location from '../location.png';
import Clock from '../clock.png';
const JobCard = () => {
  return (
    <div className='p-4 font-sans'>
      <div className='w-[680px] h-[350px] bg-gray-100 drop-shadow-2xl px-4 py-3 rounded-sm'>
        {/* Heading section */}
        <div className=' flex items-center gap-4'>
          <img className='w-[100px] h-[100px] bg-white rounded-md object-contain' src={Deloitte} alt={Deloitte} />

          <div className='title'> 
            <h2 className='text-[26px] font-bold text-nowrap '>Business Development Manager</h2>
            <p className='-mt-2 text-xl text-gray-500'>$50,000 - $75,000/Month</p>
          </div>

          <div className='flex gap-2 -mt-16 ml-7'>
            <img  className="" src={save} alt={save} />
            <img src={reply} alt={reply} />
          </div>
        </div>
        {/* Heading section end */}

        {/* Job description */}
        <div className='flex gap-3 items-center'>
          <img className='w-7 object-contain ' src={Briefcase} alt={Briefcase} />
          <p className='mt-[10px] text-[18px] text-gray-500'>Deloitte</p>
        </div>
        <div className='flex gap-3 items-center -mt-2'>
          <img className='w-7 object-contain ' src={Location} alt={Location} />
          <p className='mt-[10px] text-[18px] text-gray-500'>Gurugram, Noida</p>
        </div>
        <div className='flex gap-3 items-center -mt-2'>
          <img className='w-7 object-contain ' src={Clock} alt={Clock} />
          <p className='mt-[10px] text-[18px] text-gray-500'>3 Days ago</p>
        </div>
        {/* Job description end */}

        {/* Skills section */}

        <p className='text-gray-500'><span className='text-gray-600 font-bold'>Skills: </span> Lead generation, Cold calling, Convincing skills</p>
        <p className='text-gray-500 font-bold -mt-2'>0-6 years of Experience in delivery</p>

        {/* Skills section end */}

      <div className='w-full h-[10px]'></div>
 
      </div>
    </div>
  );
};

export default JobCard;
