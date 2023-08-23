import Image from 'next/image';
import CustomButton  from './CustomButton';

const Hero = () => {
  return (
    <div className="hero">
        <div className="flex-1 pt-36 padding-x">
           <h1 className="hero__title">
            MY BULB
           </h1>

           <p className="hero__subtitle">Turn on and off
           </p>

           <CustomButton />
        </div>
      Hero
    </div>
  )
}

export default Hero
