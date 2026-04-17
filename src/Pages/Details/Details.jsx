import React, { useContext, useState } from 'react'
import { RiDeleteBin6Line, RiNotificationSnoozeLine } from 'react-icons/ri';
import { TbArchive } from 'react-icons/tb';
import { useLoaderData, useParams } from 'react-router'
import { TimeLineContext } from '../../Context/TimeLineContext';
import { Bounce, toast, ToastContainer } from 'react-toastify';

export const Details = () => {
  const {id} = useParams()
  const cardDetails = useLoaderData();
  const friend = cardDetails.find(cardDetail => cardDetail.id === parseInt(id));
  const statusStyle = {
    "overdue" : "bg-[#EF4444]",
    "almost due" : "bg-[#EFAD44]",
    "on-track" : "bg-[#244D3F]"
  }
  const {interections,setInterections} = useContext(TimeLineContext);
  const handleCall = () => {
    setInterections((prev) => [...prev, {...friend, type:"call"}]);
    toast.success(`Call with ${friend.name}`, {
      position: "top-center",
      transition: Bounce,
    });
  }
  const handleText = () => {
    setInterections((prev) => [...prev, {...friend, type:"text"}]);
    toast.success(`Text with ${friend.name}`, {
      position: "top-center",
      transition: Bounce,
    });
  }
  const handleVideo = () => {
    setInterections((prev) => [...prev, {...friend, type:"video"}]);
    toast.success(`Video with ${friend.name}`, {
      position: "top-center",
      transition: Bounce,
    });
  }

  return (
    <div className='bg-[#F8FAFC]'>
      <div className='container mx-auto py-30 min-h-screen px-6 md:px-0'>
        <div className='grid gap-4 md:gap-8 grid-cols-3 lg:grid-cols-5 grid-rows-4 lg:grid-rows-3'>

          <div className='space-y-3 p-8 flex flex-col items-center justify-center shadow-lg rounded-md col-span-3 md:col-span-2 md:row-span-3 row-span-2 lg:row-span-2 bg-white'>
            <img className="rounded-full mb-3" src={friend.picture} alt="" />
            <h2 className="text-[#1F2937] text-[20px] font-semibold">{friend.name}</h2>
            <ul className="flex gap-2 flex-wrap">
              {friend.tags.map((tag, id) => (
                <li 
                  key={id} 
                  className="bg-[#CBFADB] text-[#244D3F] font-bold text-[12px] px-4 py-1.5 rounded-full"
                >
                  {tag.toUpperCase()}
                </li>
              ))}
            </ul>
            <div className={`font-bold text-[12px] w-fit text-[#ffffff] px-4 py-1.5 rounded-full ${statusStyle[friend.status]}`}>
              <p>{friend.status}</p>
            </div>
            <p className='text-[#64748B] font-medium italic'>"{friend.bio}"</p>
            <p className='text-[#64748B] text-[14px]'>Email: {friend.email}</p>
          </div>

          <div className='order-2 md:order-1 p-4 md:p-8 shadow-lg rounded-md flex flex-col items-center justify-center bg-white'>
            <h2 className='text-[#244D3F] font-semibold text-[24px] md:text-[32px]'>{friend.days_since_contact}</h2>
            <p className='text-[18px] text-[#64748B]'>Days Since Contact</p>
          </div>
          <div className='order-2 md:order-1 p-8 shadow-lg rounded-md flex flex-col items-center justify-center bg-white'>
            <h2 className='text-[#244D3F] font-semibold text-[24px] md:text-[32px]'>{friend.goal}</h2>
            <p className='text-[18px] text-[#64748B]'>Goal (Days)</p>
          </div>
          <div className='order-2 md:order-1 p-8 shadow-lg rounded-md flex flex-col items-center justify-center bg-white'>
            <h2 className='text-[#244D3F] font-semibold text-[24px] md:text-[32px]'>{friend.next_due_date}</h2>
            <p className='text-[18px] text-[#64748B]'>Next Due</p>
          </div>
          
          <div className='p-8 rounded-md shadow-lg md:col-span-2 col-span-3 lg:col-span-3 flex flex-col justify-center order-3 lg:order-2 bg-white'>
            <div className='flex justify-between mb-5'>
              <p className='font-medium text-[#244D3F] text-[20px]'>Relationship Goal</p>
              <button className='btn'>Edit</button>
            </div>
            <p className='text-[#64748B] text-[18px]'>Connect Every <span className='text-[#1F2937] font-bold'>{friend.goal} days</span></p>
          </div>
            
          <div className='col-span-3 md:col-span-1 lg:col-span-2 space-y-5 order-1 lg:order-3 '>
            <div className='flex gap-2 items-center justify-center py-4 rounded-lg border-3 border-[#dadada74] cursor-pointer bg-white'>
              <RiNotificationSnoozeLine className='text-[20px]'/>
              <p className='text-[#1F2937] font-medium'>Snooze 2 weeks</p>
            </div>
            <div className='flex gap-2 items-center justify-center py-4 rounded-lg border-3 border-[#dadada74] cursor-pointer bg-white'>
              <TbArchive className='text-[20px]' />
              <p className='text-[#1F2937] font-medium'>Archive</p>
            </div>
            <div className='flex gap-2 items-center justify-center  py-4 rounded-lg border-3 border-[#dadada74] cursor-pointer text-[#EF4444] bg-white'>
              <RiDeleteBin6Line className='text-[20px]'/>
              <p className='font-medium'>Delete</p>
            </div>
          </div>
          
          <div className='p-8 rounded-md shadow-lg col-span-3 order-4 bg-white'>
            <p className='font-medium text-[#244D3F] text-[20px] mb-4'>Quick Check-In</p>
            <div className='flex gap-4 flex-col lg:flex-row flex-wrap'>
              <button onClick={handleCall} className=' flex flex-col items-center px-20 py-6 bg-[#efeff0] rounded-lg shadow-sm space-y-2.5 cursor-pointer'>
                <i className="fa-solid fa-phone-volume text-[#1F2937] text-3xl"></i>
                <p className='text-[18px] text-[#1F2937]'>Call</p>
              </button>
              <button onClick={handleText} className=' flex flex-col items-center px-20 py-6 bg-[#efeff0] rounded-lg shadow-sm space-y-2.5 cursor-pointer'>
                <i className="fa-solid fa-paper-plane text-[#1F2937] text-3xl"></i>
                <p className='text-[18px] text-[#1F2937]'>Text</p>
              </button>
              <button onClick={handleVideo} className=' flex flex-col items-center px-19 py-6 bg-[#efeff0] rounded-lg shadow-sm space-y-2.5 cursor-pointer'>
                <i className="fa-solid fa-video text-[#1F2937] text-3xl"></i>
                <p className='text-[18px] text-[#1F2937]'>Video</p>
              </button>
              <ToastContainer/>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
