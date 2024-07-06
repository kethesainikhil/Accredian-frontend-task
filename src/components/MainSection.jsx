import React from 'react'
import TableDetails from './Table'
import SingleTable from './SingleTable'
import { Toggle } from './Toggle'
import TableTitle from './TableTitle'
import { DropDown } from './DropDown'
import Frequently from './Frequently'
import { ReferButton } from './PopUpForm'


const MainSection = () => {
  return (
    <div className='flex gap-4  flex-col items-center justify-center '>
        <TableTitle />
        <div className='sm:grid sm:gap-10 gap-10 sm:grid-cols-4 flex flex-col'>
        <div className=''>
        <SingleTable />

        </div>
        <div className='col-span-3'>
        <TableDetails />
        </div>

        </div>
        <div className='flex justify-end items-end w-3/4'>
            <DropDown />
        </div>
        <div className=''>
            <ReferButton />
        </div>

        <div>
            <Frequently />
        </div>
    </div>
  )
}

export default MainSection