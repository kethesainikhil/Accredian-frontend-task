import React from 'react'
import { AccordionComponent } from './AccordionComponent'

const Frequently = () => {
  return (
    <div>
            <h1 className='sm:text-2xl font-bold text-center  text-lg '>Frequently Asked <span className='sm:text-2xl text-lg text-blue-500'>Questions</span></h1>
<div className='flex sm:flex-row flex-col items-center justify-center sm:gap-32 gap-10 '>

<div className='flex flex-col gap-4 '>
                <div className='px-4 text-center border-gray-500 w-52 py-3 hover:shadow-lg hover:border-white border-4 rounded-xl'>
                    Eligibility
                </div>
                <div className='px-4 text-center border-gray-500 w-52 py-3 hover:shadow-lg hover:border-white border-4 rounded-xl' >
                    How To Use?
                </div>
                <div className='px-4 w-52 border-gray-500 text-center py-3 hover:shadow-lg hover:border-white border-4 rounded-xl'>
                    Terms & Conditions
                </div>
            </div>
            <div className='w-3/4 col-span-2 my-auto '>
                
                          <AccordionComponent />  
                            
            </div>
</div>
            </div>
  )
}

export default Frequently