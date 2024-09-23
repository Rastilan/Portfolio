import Project from './Project'

//<Expandingslides project="portfolio"/>
const Projects = () => {

    
  return (
    <>
        <div id="projects-section" className='px-4 md:container flex justify-center m-auto'>
            <p className='text-white'><span>My recent projects {' '}</span> and what the future holds... ↓</p>
        </div>
        <Project 
            proj="apple"
            title="Apple Site Clone"
            desc="A clone of the Apple site. Involves an iPhone using ThreeJS! This was created following a tutorial to duplicate the site. This was used to increase my understanding of GSAP and ThreeJS. This project is still a work in progress at the moment."
            languages={['ReactJS', 'TailwindCSS', 'GSAP', 'ThreeJS']}
        />
        <Project 
            proj="disney"
            title="Disney+"
            desc="A clone of the Dinsey+ streaming service layout. This was creating following a tutorial to learn styled-components and various ways to improve site layouts."
            languages={['Firebase', 'styled-components', 'Vite', 'React', 'JSON']}
        />
        <Project 
            proj="portfolio"
            title="This Portfolio"
            desc="The Portfolio you are looking at currently. Its always a work in progress and is a short look into my work!"
            languages={['ReactJS', 'TailwindCSS']}
        />

    </>
  )
}

export default Projects
