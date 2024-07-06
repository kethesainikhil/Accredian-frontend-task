import React from 'react'
import { Toggle } from './Toggle'

const TableTitle = () => {
  return (
    <div className='w-3/4'>
        <div >
            <h1 className='sm:text-2xl text-center  text-lg '>What Are The <span className='sm:text-2xl text-lg text-blue-500'>Referral Benefits?</span></h1>

        </div>
        <div className='flex justify-end'>
            
            <div>

            </div>
            <Toggle />
        </div>
    </div>
  )
}

export default TableTitle