import React from 'react';

const AboutCardMain = () => {
  return (
    <div className="w-full h-52 bg-[#f3f1ef] rounded-[12px] px-5">
        <div className="h-1/3"></div>
        <div className="w-16 h-16 bg-[#7b0076] rounded-[6px] grid place-items-center mb-3">
            <div className="w-4 h-4 bg-white"></div>
        </div>
        <p className="text-[#302a3a] font-bold">Lorem ipsum</p>
        <p className="text-[#bfb4af] text-sm">Lorem ipsum</p>
    </div>
  )
}

const AboutCardSecondary = () => {
    return (
        <div className='bg-[#f3f1ef] rounded-[12px]'>
            <div className=' bg-blue-600 w-48 items-center flex justify-between'>
                <div className="w-10 mx-5 h-10 bg-[#7b0076] rounded-[6px] grid place-items-center">
                    <div className="w-4 h-4 bg-white"></div>
                </div>
                <p className="text-[#302a3a] font-bold">Lorem ipsum</p>
            </div>
        </div>
    );
};

const AboutCardTertiary = ({ border }) => {
  return (
    <div className={`flex flex-row items-center mx-4 py-2 ${border ? "border-b-2" : ""} `}>
        <div className='w-6 h-6 rounded-full bg-[#f9cca7]'></div>
        <p className='text-[#78747d] text-sm ml-3'>Lorem ipsum</p>
    </div>
  )
}

const AboutCardQuaternary = () => {
    return (
        <div className='rounded-3xl bg-[#3e3847] px-5 py-3 flex flex-row justify-between items-center'>
            <div className='w-4 h-4 rounded-full bg-[#f9cca7]'></div>
            <p className='text-white text-sm'>Lorem ipsum</p>
            <div className='w-10'></div>
        </div>
    )
};

export { AboutCardMain, AboutCardSecondary, AboutCardTertiary, AboutCardQuaternary };