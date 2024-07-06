import React from "react";

import { Counter } from "./features/counter/Counter";
import "./App.css";
import HeroSection from "./components/HeroSection";
import ProgressDots from "./components/ProgressDots";
import MidSection from "./components/MidSection";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";
import { ReferButton } from "./components/PopUpForm";
function App() {
  return (
    <div className="">
      <HeroSection />
     <MidSection />

<div className='px-10  sm:mb-10 mx-auto mt-44 flex   justify-center items-center py-2  rounded-lg'>
  <ReferButton />
</div>
<MainSection />
    <div className="mt-10">
      <Footer />
    </div>
    </div>
  )
}

export default App;
