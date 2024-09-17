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
            desc="A clone of the Apple site. Involves an iPhone using ThreeJS!"
            languages={['ReactJS', 'TailwindCSS', 'GSAP', 'ThreeJS']}
        />
        <Project 
            proj="disney"
            title="Disney+"
            desc="A clone of the Dinsey+ streaming service layout."
            languages={['Firebase', 'styled-components', 'Vite', 'React', 'JSON']}
        />
        <Project 
            proj="portfolio"
            title="This Portfolio"
            desc="The Portfolio you are looking at currently."
            languages={['ReactJS', 'TailwindCSS']}
        />

    </>
  )
}

export default Projects
