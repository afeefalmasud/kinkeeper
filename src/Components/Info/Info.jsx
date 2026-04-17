import React, { use, useContext } from 'react'
import { TimeLineContext } from '../../Context/TimeLineContext';

export const Info = ({infoPromise}) => {
  const {interections} = useContext(TimeLineContext);
  const infos = use(infoPromise);
  const needAttention = infos.filter(info => info.status === "overdue");
  const onTrack = infos.filter(info => info.status ==="on-track")
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
      <div className='p-8 shadow-md rounded-md flex flex-col items-center bg-white'>
        <h2 className='text-[#244D3F] font-semibold text-[32px]'>{infos.length}</h2>
        <p className='text-[18px] text-[#64748B]'>Total Friends</p>
      </div>
      <div className='p-8 shadow-md rounded-md flex flex-col items-center bg-white'>
        <h2 className='text-[#244D3F] font-semibold text-[32px]'>{onTrack.length}</h2>
        <p className='text-[18px] text-[#64748B]'>On Track</p>
      </div>
      <div className='p-8 shadow-md rounded-md flex flex-col items-center bg-white'>
        <h2 className='text-[#244D3F] font-semibold text-[32px]'>{needAttention.length}</h2>
        <p className='text-[18px] text-[#64748B]'>Need Attention</p>
      </div>
      <div className='p-8 shadow-md rounded-md flex flex-col items-center bg-white'>
        <h2 className='text-[#244D3F] font-semibold text-[32px]'>{interections.length}</h2>
        <p className='text-[18px] text-[#64748B]'>Interactions This Month</p>
      </div>
    </div>
  )
}
