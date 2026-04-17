import React, { useContext } from 'react'
import { Legend, Pie, PieChart, Tooltip } from 'recharts'
import { RechartsDevtools } from '@recharts/devtools';
import { TimeLineContext } from '../../Context/TimeLineContext';

export const Stats = () => {

  const {interections} = useContext(TimeLineContext);
  const callCount = interections.filter(item => item.type === "call").length;
  const textCount = interections.filter(item => item.type === "text").length;
  const videoCount = interections.filter(item => item.type === "video").length;

  const data = [
    { name: 'Call', value: callCount, fill: '#244D3F' },
    { name: 'Text', value: textCount, fill: '#7F37F5' },
    { name: 'Video', value: videoCount, fill: '#37A163' },
  ];

  return (
    <div className='bg-[#F8FAFC]'>
      <div className='container mx-auto min-h-screen px-10 md:px-0'>
        <div className='py-30'>
          <h1 className='text-[#1F2937] text-[48px] font-bold pb-6'>Friendship Analytics</h1>
          <div className='space-y-6 rounded-xl shadow-lg p-8 bg-[#ffffff]'>
            <h2 className='text-[#244D3F] font-medium text-[20px] pb-6'>By Interaction Type</h2>
            {interections.length === 0 ? <p className='text-[20px] text-center font-medium text-[#64748B]'>No Interactions Yet</p>
              :
              <div className='flex items-center justify-center gap-6'>
                <PieChart style={{ width: '100%', maxWidth: '350px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
                  <Pie
                    data={data}
                    innerRadius="80%"
                    outerRadius="100%"
                    cornerRadius="50%"
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    isAnimationActive={true}
                  />
                  <RechartsDevtools />
                  <Legend iconType="circle"/>
                  <Tooltip/>
                </PieChart>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}
