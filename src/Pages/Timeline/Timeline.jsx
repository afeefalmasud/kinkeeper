import React, { act, useContext } from 'react'
import { TimeLineContext } from '../../Context/TimeLineContext'

export const Timeline = () => {
  const {interections} = useContext(TimeLineContext);
  const activityIcons = {
    call: '/assets/call.png',
    text: '/assets/text.png',
    video: '/assets/video.png',
  }
  return (
    <div className='bg-[#F8FAFC]'>
      <div className='container mx-auto min-h-screen py-20 px-10 md:px-0'>
        <div>
          <h2 className='text-[#1F2937] text-[48px] font-bold mb-6'>Timeline</h2>
          <div className='space-y-6'>
            {interections.length === 0 ? <p className='text-[20px] text-center font-medium text-[#64748B]'>No Data Found</p>
            :(interections.map((activity)=>(
              <div className='p-4 flex gap-4 items-center border-3 border-[#dadada74] rounded-lg bg-[#ffffff]'>
                <img src={activityIcons[activity.type]} alt="" />
                <p className='font-medium text-[20px] text-[#1F2937]'>
                  {
                    activity.type ===  "call"
                    ? 'Call '
                    : activity.type === "text"
                    ? 'Text '
                    : 'Video '
                  }
                  <span className='text-[18px] text-[#64748B]'>with {activity.name}</span>
                </p>
              </div>
            )))}
          </div>
        </div>
      </div>
    </div>

  )
}
