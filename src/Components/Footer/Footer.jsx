import React from 'react'

export const Footer = () => {
  return (
    <div className='bg-[#244D3F]'>
      <div className='container mx-auto py-30 px-5 lg:px-0'>
        <div>
          <div className='border-b flex justify-center items-center flex-col pb-10 border-[#dadada5b] text-center lg:text-start'>
            <img className='w-fit mb-4' src="/assets/logo-xl.png" alt="" />
            <p className='text-[#ffffffe2] mb-6'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            <h2 className='font-medium text-[20px] text-[#ffffff] mb-4'>Social Links</h2>
            <div className='flex gap-3'>
              <img className='hover:-translate-y-2 transition cursor-pointer' src="/assets/instagram.png" alt="" />
              <img className='hover:-translate-y-2 transition cursor-pointer' src="/assets/facebook.png" alt="" />
              <img className='hover:-translate-y-2 transition cursor-pointer' src="/assets/twitter.png" alt="" />
            </div>
          </div>
          <div className='flex flex-col lg:flex-row items-center lg:items-stretch justify-between text-[#fafafaaf] mt-7.5'>
            <p>© 2026 Afeef Al Masud | KeenKeeper. All rights reserved.</p>
            <div className='flex gap-4'>
              <a href="">Privacy Policy</a>
              <a href="">Terms of Service</a>
              <a href="">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
