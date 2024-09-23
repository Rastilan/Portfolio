import gsap from 'gsap'
import Expandingslide from './Expandingslide'
import PropTypes from 'prop-types'
import { useEffect, useRef } from 'react'


const Project = ({ proj, title, desc, languages }) => {
    const pagesRef = useRef(null);
    const descriptionRef = useRef(null);

    useEffect(() => {
        const pages = pagesRef.current
        const description = descriptionRef.current
    
        // Create a GSAP context
        const ctx = gsap.context(() => {
          // Animate the section
          gsap.fromTo(pages, 
            {
              opacity: 0,
              xPercent: -100,
              
            },
            {
              opacity: 1,
              xPercent: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: pages,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
              }
            }
          )
    
          // Animate the skill elements
          gsap.fromTo(description, 
            {
              opacity: 0,
              xPercent: 100,
            },
            {
              opacity: 1,
              xPercent: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: description,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
              }
            }
          )
        }, pagesRef) // Scope the context to the section
    
        // Cleanup function
        return () => ctx.revert()
      }, [])


  return (
    <>
    <div  className='flex md:w-[70vw] w-[100vw] m-auto text-white md:flex-row flex-col-reverse bg-black'>
        <div ref={pagesRef} className='flex flex-col items-center w-full'>
            {/* Pass project prop to Expandingslide */}
            <Expandingslide project={proj} />
        </div>
        <div ref={descriptionRef} className='relative w-full md:pl-10 md:pr-4 m-auto flex flex-col'>

            {/* The Title in for the projects*/}
            <h1 className='p-10 text-2xl font-bold'>{title}</h1>
            {/* Displaying languages with some spacing and custom styles */}
            <div className="tools flex flex-row gap-3 md:justify-start justify-center pb-5 flex-wrap">
                {/* Prints out all of the languages for the project */}
                {languages.map((language, index) => (
                    <span 
                        key={index} 
                        className='px-3 py-1 bg-black text-white rounded border-b-4 border-blue-600'
                    >
                        {language}
                    </span>
                ))}
            </div>
            {/* Project description */}
            <div className='md:text-left text-center px-4'>{desc}</div>
        </div>
    </div>
    </>
  )
}

Project.propTypes = {
    proj: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    languages: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

export default Project
