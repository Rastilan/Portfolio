import Expandingslide from './Expandingslide'
import PropTypes from 'prop-types'

const Project = ({ proj, title, desc, languages }) => {
  return (
    <>
    <div className='flex md:w-[70vw] w-[100vw] m-auto text-white md:flex-row flex-col-reverse chroma-effect'>
        <div className='flex flex-col items-center w-full'>
            {/* Pass project prop to Expandingslide */}
            <Expandingslide project={proj} />
        </div>
        <div className='relative w-full md:pl-10 md:pr-4 m-auto flex flex-col'>

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
