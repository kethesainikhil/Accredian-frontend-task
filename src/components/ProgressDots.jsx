import { useState, useEffect, useRef } from 'react';

const ProgressDots = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressBarRef = useRef(null);
  const details = [
    {
        "title": "Click",
        "Info":"Click on the Refer Now button present in the Hero Section",
        "color":"cyan"
    },
    {
        "title": "Form",
        "Info":"Submit referrals easily via our website’s referral section.",

        "color":"red"
    },
    {
        "title": "Sit and Relax",
        "Info":"Earn rewards once your referral joins an Accredian program.",
        "color":"yellow"
    },
    {
        "title": "Completed",
        "Info":"Both parties receive a bonus 30 days after program enrollment.",
        "color":"green"
    },
  ]
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, // Change this value based on your preference
      }
    );

    if (progressBarRef.current) {
      observer.observe(progressBarRef.current);
    }

    return () => {
      if (progressBarRef.current) {
        observer.unobserve(progressBarRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setProgress(prevProgress => (prevProgress + 25) % 100); // Increase progress by 25% each time, reset to 0 after reaching 100%
      }, 2000); // Change every 2 seconds

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <div className="progress-bar absolute   mx-auto" ref={progressBarRef}>
      <div className="segment  " style={{ width: `${progress}%`, animation: isVisible ? 'progressBarAnimation 8s infinite' : 'none' }}>
      </div>
      <div className="text w-1/4 h-36 hidden border-4 border-gray-900  rounded-md sm:flex sm:flex-col absolute mt-2 text-gray-400  items-center text-center px-4 py-2  " style={
        { left: `${progress}%` 
        
        }
        }>
        <h1 className={`text-lg text-black font-bold `}>Step {progress / 25 + 1}</h1>
        <p className='text-xl text-pink-500 font-bold  '>{details[progress / 25].title}</p>
        <p className='text-black'>{details[progress / 25].Info}</p>
      
      </div>
      <div className=" h-32 px-2 mx-2  sm:hidden md:hidden lg:hidden xl:hidden rounded-md  flex flex-col border-2 border-gray-500  mt-2   absolute  text-center  " >
        <h1 className={`text-lg  font-bold `}>Step {progress / 25 + 1}</h1>
        <p className='text-lg font-bold text-pink-500 '>{details[progress / 25].title}</p>
        <p>{details[progress / 25].Info}</p>
      
      </div>
      

    </div>
  );
};

export default ProgressDots;