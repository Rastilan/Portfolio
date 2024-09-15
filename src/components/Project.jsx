import Expandingslide from './Expandingslide'
import PropTypes from 'prop-types'

const Project = ({ proj, title, desc, languages }) => {
  return (
    <>
    <div className='flex w-[70vw] m-auto'>
        <div className='flex flex-col items-center w-full'>
            {/* Pass project prop to Expandingslide */}
            <Expandingslide project={proj} />
        </div>
        <div className='relative w-full pl-14 pr-4 m-auto'>
            <h1 className='pb-10 text-2xl font-bold'>{title}</h1>
            {/* Displaying languages with some spacing and custom styles */}
            <div className="tools flex flex-row gap-3 justify-start pb-5">
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
            <div className='text-left'>{desc}</div>
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
