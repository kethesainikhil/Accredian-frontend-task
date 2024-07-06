import React from 'react'
import hero from "../hero.png"
import { ReferButton } from './PopUpForm'
const HeroSection = () => {
  return (
    <div className='flex  bg-green-100 sm:w-fit w-full sm:mx-auto sm:px-20 text-center py-5 my-4 rounded-xl shadow-2xl   sm:flex-row flex-col sm:gap-32 gap-10 justify-center items-center'>
        <div className='flex  text-start flex-col items-center sm:items-start  sm:justify-center sm:gap-10 gap-4'>
            <h1 className='font-bold text-start  text-gray-900 sm:text-6xl text-2xl  '> 
                Let's Learn <br className='hidden sm:block' /> & Earn
            </h1 >
            <h1 className='  font-medium text-start text-gray-800 leading-5 sm:text-3xl text-xl '>Get a Chance to win <br className=' hidden sm:block' /> <span>upto <span className='sm:text-4xl text-xl text-blue-500 '>Rs.15000</span> </span></h1>
            <div className='mx-auto sm:mx-0'>
                <ReferButton />
            </div>
        </div>
        <div className=''>
            <img src={hero} className='sm:h-96  w-full'  alt="" />
        </div>
    </div> 
  )
}

export default HeroSection