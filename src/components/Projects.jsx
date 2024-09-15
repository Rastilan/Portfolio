import React from 'react'
import Project from './Project'

//<Expandingslides project="portfolio"/>
const Projects = () => {
  return (
    <>
        <div id="projects-section" className='px-4 md:container flex justify-center m-auto'>
            <p><span>My recent projects {' '}</span> and what the future holds... ↓</p>
        </div>
        <Project 
            proj="github"
            title="Disney+"
            desc="A fullstack flashcards web app that I maintain as a valuable learning resource for both myself and the developer community. By open-sourcing this project, I aim to share knowledge and provide a practical tool for others to learn and grow in their development journey."
            languages={['JavaScript', 'ReactJS', 'TailwindCSS']}
        />
        <Project 
            proj="portfolio"
            title="This Portfolio"
            desc="A fullstack flashcards web app that I maintain as a valuable learning resource for both myself and the developer community. By open-sourcing this project, I aim to share knowledge and provide a practical tool for others to learn and grow in their development journey."
            languages={['JavaScript', 'ReactJS', 'TailwindCSS']}
        />
        <Project 
            proj="apple"
            title="Apple Site Clone"
            desc="A fullstack flashcards web app that I maintain as a valuable learning resource for both myself and the developer community. By open-sourcing this project, I aim to share knowledge and provide a practical tool for others to learn and grow in their development journey."
            languages={['JavaScript', 'ReactJS', 'TailwindCSS']}
        />
    </>
  )
}

export default Projects
