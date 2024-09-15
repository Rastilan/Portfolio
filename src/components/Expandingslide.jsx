import React, { useState, useEffect } from 'react'
import disneyGithub from '../assets/disneyplus-clone-github.jpg'
import disneySite from '../assets/disneyplus-clone-site.jpg'
//import portfolioSite from '../assets/portfolio-site.jpg'
import portfolioGithub from '../assets/portfolio-github.jpg'
import appleGithub from '../assets/apple-github.jpg'
import appleSite from '../assets/apple-site.jpg'
import Github from './SVGs/Github'
import Webpage from './SVGs/Webpage'
function Expandingslide({ project }) {
  const [isLeftExpanded, setIsLeftExpanded] = useState(false);
  const [isRightExpanded, setIsRightExpanded] = useState(false);
  const [siteAlt, setSiteAlt] = useState(null);
  const [siteImg, setSiteImg] = useState(null);
  const [siteURL, setSiteURL] = useState(null);
  const [githubAlt, setGithubAlt] = useState(null);
  const [githubImg, setGithubImg] = useState(null);
  const [githubURL, setGithubURL] = useState(null);
  

    // Set project details based on the passed project prop
    useEffect(() => {
        switch (project) {
            case 'github':
            setSiteAlt("Disney Clone");
            setSiteImg(disneySite);
            setSiteURL("https://disneyplus-clone-630c7.firebaseapp.com/home");
            setGithubAlt("Disney Clone Github");
            setGithubImg(disneyGithub);
            setGithubURL("https://github.com/Rastilan/Disneyplus-Clone");
            break;
            case 'portfolio':
            setSiteAlt("This Portfolio");
            setSiteImg(portfolioGithub);
            setSiteURL("https://disneyplus-clone-630c7.firebaseapp.com/home");
            setGithubAlt("This Portfolio Github");
            setGithubImg(portfolioGithub);
            setGithubURL("https://github.com/Rastilan/Portfolio");
            break;
            case 'apple':
                setSiteAlt("Apple Site Clone");
                setSiteImg(appleSite);
                setSiteURL("https://disneyplus-clone-630c7.firebaseapp.com/home");
                setGithubAlt("Apple Site Clone Github");
                setGithubImg(appleGithub);
                setGithubURL("https://github.com/Rastilan/Apple_Style_Site");
                break;
            default:
            setSiteAlt(null);
            setSiteImg(null);
            setGithubAlt(null);
            setGithubImg(null);
            break;
        }
    }, [project]);

  return (
    <div className="w-full h-[400px] flex overflow-hidden">
        
            <div
                className={`relative transition-all duration-500 ease-in-out ${
                isLeftExpanded ? 'w-3/4' : isRightExpanded ? 'w-1/4' : 'w-1/2'
                }`}
                onMouseEnter={() => setIsLeftExpanded(true)}
                onMouseLeave={() => setIsLeftExpanded(false)}
            >
                <a href={siteURL}>
                    <img
                    src={siteImg}
                    alt={siteAlt}
                    className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold bg-black bg-opacity-50">
                    {siteAlt}
                    </div>
                </a>
            </div>
        
            <div
                className={`relative transition-all duration-500 ease-in-out ${
                isRightExpanded ? 'w-3/4' : isLeftExpanded ? 'w-1/4' : 'w-1/2'
                }`}
                onMouseEnter={() => setIsRightExpanded(true)}
                onMouseLeave={() => setIsRightExpanded(false)}
            >
            <a href={githubURL}>
            <img
            src={githubImg}
            alt={githubAlt}
            className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold bg-black bg-opacity-50">
            {githubAlt}
            </div>
            </a>
        </div>
        </div>
    );
}

export default Expandingslide;
