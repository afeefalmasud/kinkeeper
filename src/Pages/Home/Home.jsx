import React, { Suspense, use } from 'react'
import { Card } from '../../Components/Card/Card'
import { Info } from '../../Components/Info/Info';

const cardPromise = fetch("/friends.json").then((res) =>res.json());
const infoPromise = fetch("/friends.json").then((res) =>res.json());

export const Home = () => {
  return (
    <div className='bg-[#F8FAFC] min-h-screen py-30'>
      <div className='container mx-auto px-10 md:px-0'>
        <div>
          <div className='flex flex-col items-center text-center md:text-start'>
            <h2 className='text-[#1F2937] font-bold text-[48px] pv-4'>Friends to keep close in your life</h2>
            <p className='text-[#64748B] pb-8'>Your personal shelf of meaningful connections. Browse, tend, and nurture the
            relationships that matter most.</p>
            <button className='btn bg-[#244D3F] text-[#ffffff] hover:border-2 border-[#244D3F] hover:text-[#244D3F] hover:bg-[#ffffff] transition'><i className="fa-solid fa-plus"></i>Add a Friend</button>
          </div>
          <div className='py-10 border-[#dadada74] border-b-3'>
            <Info infoPromise={infoPromise}></Info>
          </div>
          <div className='py-10'>
            <h2 className='text-[#1F2937] font-semibold text-[24px] pb-6'>Your Friends</h2>
            <Suspense fallback={
              <div className='flex items-center justify-center'>
                <span className="loading loading-dots loading-xl"></span>
              </div>
            }>
              <Card cardPromise={cardPromise}></Card>
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}
