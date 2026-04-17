import React, { useContext, useState } from 'react'
import { TimeLineContext } from '../../Context/TimeLineContext'
import { IoIosArrowDropdownCircle } from 'react-icons/io';

export const Timeline = () => {
  const { interections } = useContext(TimeLineContext);

  const [filter, setFilter] = useState("all");
  const [open, setOpen] = useState(false);

  const activityIcons = {
    call: '/assets/call.png',
    text: '/assets/text.png',
    video: '/assets/video.png',
  }

  let filteredInterections;
  if(filter === "all"){
    filteredInterections = interections;
  }
  else{
    filteredInterections = interections.filter(item => item.type === filter);
  }

  return (
    <div className='bg-[#F8FAFC]'>
      <div className='container mx-auto min-h-screen py-20 px-10 md:px-0'>
        <h2 className='text-[#1F2937] text-[48px] font-bold mb-6'>
          Timeline
        </h2>
        <div className="relative mb-6">
          <div onClick={() => setOpen(!open)} tabIndex="0" role="button" className="btn m-1">
            Filter timeline <IoIosArrowDropdownCircle />
          </div>
          {
            open && (
              <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box w-52 p-2 shadow-sm">
                <li onClick={() => {setFilter('all'); setOpen(false);}}><a>All</a></li>
                <li onClick={() => {setFilter('call'); setOpen(false);}}><a>Call</a></li>
                <li onClick={() => {setFilter('text'); setOpen(false);}}><a>Text</a></li>
                <li onClick={() => {setFilter('video'); setOpen(false);}}><a>Video</a></li>
              </ul>
            )
          }
        </div>
        <div className='space-y-6'>
          {filteredInterections.length === 0 ? (
            <p className='text-[20px] text-center font-medium text-[#64748B]'>
              No Data Found
            </p>
          ) : (
            filteredInterections.map((activity, index) => (
              <div
                key={index}
                className='p-4 flex gap-4 items-center border-3 border-[#dadada74] rounded-lg bg-white'
              >
                <img src={activityIcons[activity.type]} alt="" />
                <div className='flex flex-col'>
                  <p className='font-medium text-[20px] text-[#1F2937]'>
                    {activity.type === "call"
                      ? "Call "
                      : activity.type === "text"
                      ? "Text "
                      : "Video "}
                    <span className='text-[18px] text-[#64748B]'>
                      with {activity.name}
                    </span>
                  </p>
                  <p className='text-[16px] text-[#64748B] font-medium'>{new Date().toLocaleString()}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}