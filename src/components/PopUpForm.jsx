import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import wrong from "../wrong.png"
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';
const schema = z.object({
  referrerEmail: z.string().email('Invalid email address'),
  referrerName: z.string().min(2, 'Full name should be at least 2 characters long'),
  referrerPhoneNo: z.string().regex(/^\d+$/, 'Phone number should contain only numbers').min(10, 'Phone number should be at least 10 digits long').max(15, 'Phone number should be no more than 15 digits'),
  refereeEmail: z.string().email('Invalid email address'),
  refereeName: z.string().min(2, 'Full name should be at least 2 characters long'),
  refereePhoneNo: z.string().regex(/^\d+$/, 'Phone number should contain only numbers').min(10, 'Phone number should be at least 10 digits long').max(15, 'Phone number should be no more than 15 digits'),
});

const PopUpForm = ({ onClose }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  });

  const handleFormSubmit = async (data) => {
    if(data.refereeEmail == data.referrerEmail){
      toast.error("Same Emails won't be Added to the refer List")
    }
    else{
      const{refereeEmail,refereeName,refereePhoneNo,referrerEmail,referrerName,referrerPhoneNo} = data
try{
  const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/insertRefer`,{
    refereeEmail,refereeName,refereePhoneNo,referrerEmail,referrerName,referrerPhoneNo
  })
  toast.success(res.data.message)
}
catch(e){
  toast.error(e.response.data.message)
}
      // setTimeout(() => {
      //   onClose();
      // }, 2000);
    }

   
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <Toaster />
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
     <div className='flex my-4 justify-between items-center'>
     <h2 className="text-lg font-medium ">Refer Someone to Join</h2>
     <button onClick={onClose} className="  text-gray-500">
        <img src={wrong}  className='h-4 hover:cursor-pointer' alt="wrong" />
     </button>
     </div> 

        <form onSubmit={handleSubmit((data)=>handleFormSubmit(data))}>
          <h2 className="text-lg font-medium mb-4">Referrer Details</h2>
          
          <div className="relative z-0 w-full mb-5 group">
            <input {...register("referrerEmail")} type="email" id="referrerEmail" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label htmlFor="referrerEmail" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Referrer Email address</label>
            {errors.referrerEmail && <p className="text-red-500 text-xs mt-2">{errors.referrerEmail.message}</p>}
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input {...register("referrerName")} type="text" id="referrerName" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label htmlFor="referrerName" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Referrer Full Name</label>
            {errors.referrerName && <p className="text-red-500 text-xs mt-2">{errors.referrerName.message}</p>}
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input {...register("referrerPhoneNo")} type="number" id="referrerPhoneNo"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label htmlFor="referrerPhoneNo" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Referrer Phone Number</label>
            {errors.referrerPhoneNo && <p className="text-red-500 text-xs mt-2">{errors.referrerPhoneNo.message}</p>}
          </div>
          
          <h2 className="text-lg font-medium mb-4">Referee Details</h2>
          
          <div className="relative z-0 w-full mb-5 group">
            <input {...register("refereeEmail")} type="email" id="refereeEmail" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label htmlFor="refereeEmail" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Referee Email address</label>
            {errors.refereeEmail && <p className="text-red-500 text-xs mt-2">{errors.refereeEmail.message}</p>}
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input {...register("refereeName")} type="text" id="refereeName" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label htmlFor="refereeName" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Referee Full Name</label>
            {errors.refereeName && <p className="text-red-500 text-xs mt-2">{errors.refereeName.message}</p>}
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input {...register("refereePhoneNo")} type="number" id="refereePhoneNo"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label htmlFor="refereePhoneNo" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Referee Phone Number</label>
            {errors.refereePhoneNo && <p className="text-red-500 text-xs mt-2">{errors.refereePhoneNo.message}</p>}
          </div>

          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
        </form>
      </div>
    </div>
  );
};

export const ReferButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="App">
      <button onClick={openModal} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 w-44 py-2.5 text-center">Refer Now</button>
      {isModalOpen && <PopUpForm onClose={closeModal} />}
    </div>
  );
};
