"use client";

import Image from 'next/image';
import CustomButton  from './CustomButton';

const Hero = () => {
    const handleSwitch = () => {

    }

  return (
    <div className="hero">
        <div className="flex-1 pt-36 padding-x">
           <h1 className="hero__title">
            MY BULB
           </h1>

           <p className="hero__subtitle">Let there be light😂
           </p>

           <CustomButton 
           title="Switch"
           containerStyles="bg-primary-blue text-white rounded-full mt-10"
           handleClick={handleSwitch}
           />
        </div>
      AUDREY ©
      <div className="hero__image-container">
         <div className="hero__image">
            <Image src="/h3ro.png"  alt="hero" fill className="object-contain" />

         </div>
         <div className="hero__image-overlay" />
      </div>
    </div>
  )
}

export default Hero
