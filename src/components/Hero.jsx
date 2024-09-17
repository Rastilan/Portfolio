import { useState } from 'react'
import '../CustomCSS/chroma-effect.css'
const Hero = () => {
    const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-black h-[95vh] w-screen flex flex-col items-center justify-center">
        <div className="text-center">
            <h2 className="text-white md:text-6xl text-3xl font-bold text-center">
                Hello, I&apos;m <span className='text-blue-500'>Christopher Hall</span>.
            </h2>
            <h2 className="text-white md:text-6xl text-3xl font-bold text-center">
                I&apos;m a web developer.
            </h2>
        </div>
        <button 
        onMouseEnter={() => {setIsHovered(true)}}
        onMouseLeave={() => {setIsHovered(false)}}
            className='bg-transparent border border-blue-500  my-4 px-4 py-2 rounded chroma-effect'>
                <a href="#projects-section" className='text-white'>
                Checkout my Projects <span className={`inline-block transform transition-transform duration-300 ${isHovered ? "rotate-90" : "rotate-0"}`}>➔</span>
                </a>
        </button>
    </div>
  )
}

export default Hero
