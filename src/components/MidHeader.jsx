import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const MidHeader = () => {
    const[click,setClick] = useState(false);
    const handleCick = () =>{
        setClick(!click)
    }
  return (
    <div className='flex  sm:justify-center justify-between px-6  sm:items-center sm:gap-14 bg-green-100  sm:w-fit sm:mx-auto sm:px-14 sm:py-4 py-2 rounded-3xl'>
        <div className={`hover:text-blue-400 text-blue-500   relative`} onClick={handleCick}>
  <Link to="/">Refer</Link>
  </div>


        <div className='hover:text-blue-400 ' >
            <Link to="/"> Benefits
            </Link>
        </div>
        <div className='hover:text-blue-400 '>
            <Link to="/">FAQ</Link>
        </div>
        <div className='hover:text-blue-400 '>
            <Link to="">Support</Link>
        </div>
    </div>
  )
}

export default MidHeader