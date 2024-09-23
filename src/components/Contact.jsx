import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

function Contact() {
  const sectionRef = useRef(null)
  const contactInfoRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const contactInfo = contactInfoRef.current

    // Create a GSAP context
    const ctx = gsap.context(() => {
      // Animate the section
      gsap.fromTo(section, 
        {
          opacity: 0,
          x: 450
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 100%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Animate contact info
      gsap.fromTo(contactInfo,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contactInfo,
            start: "top 100%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }, sectionRef) // Scope the context to the section

    // Cleanup function
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
        <div ref={contactInfoRef} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Get in Touch
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            I&aposm always looking for new ways to grow and be involved in more things. Feel free to reach out to me and lets get coding!
          </p>
          <ul className="space-y-2 flex flex-col">
            <li className="flex items-center text-center text-gray-600 dark:text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <a href="www.linkedin.com/in/christopher-b-hall">
              christopherbhall@live.com
              </a>
            </li>
            <li className="flex items-center text-gray-600 dark:text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z" clipRule="evenodd" />
              </svg>
              <a href="www.linkedin.com/in/christopher-b-hall">
              www.linkedin.com/in/christopher-b-hall
              </a>
            </li>
            <li className="flex items-center text-gray-600 dark:text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
              <a href="www.linkedin.com/in/christopher-b-hall">
              https://github.com/Rastilan
              </a>
            </li>
          </ul>
        </div>
    </section>
  )
}

export default Contact