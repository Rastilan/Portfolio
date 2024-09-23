/* eslint-disable react/no-unescaped-entities */
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

export default function AboutSection() {
  const sectionRef = useRef(null)
  const skillsRef = useRef(null)

  const skills = [
    "JavaScript", "React", "Node.js", "SQL", "HTML5", "CSS3", "Tailwind CSS", "Git", "PHP"
  ]

  useEffect(() => {
    const section = sectionRef.current
    const skillElements = skillsRef.current.children

    // Create a GSAP context
    const ctx = gsap.context(() => {
      // Animate the section
      gsap.fromTo(section, 
        {
          opacity: 0,
          xPercent: 100
        },
        {
          opacity: 1,
          xPercent: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Animate the skill elements
      gsap.fromTo(skillElements, 
        {
          opacity: 0,
          y: 20
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }, sectionRef) // Scope the context to the section

    // Cleanup function
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-12 px-4 max-w-6xl mx-auto relative">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">About Me</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-6 rounded-lg shadow-md border-2">
          <h3 className="text-xl font-semibold mb-4 flex items-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="white">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            A Bit About Me
          </h3>
          <p className="text-white mb-4">
            Hello! I'm a web developer who is always interested in creating something new and exciting.
          </p>
          <p className="text-white ">
            I love solving complex problems! Breaking down issues into smaller problems to build full featured applications is as fun as it is rewarding.
          </p>
        </div>

        <div className="p-6 rounded-lg shadow-md border-2">
          <h3 className="text-xl font-semibold mb-4 flex items-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="white">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            Technical Skills
          </h3>
          <p className="text-white mb-4">
            I specialize in JavaScript-based web development, with expertise in 
            modern frameworks and tools. Here are some of the key technologies 
            I work with:
          </p>
          <div ref={skillsRef} className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill} className="text-white px-3 py-1 rounded-full text-sm">
                {skill} 
              </span>
            ))}
          </div>
        </div>
      </div>   
       
      </section>
    
  )
}