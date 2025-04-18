import React, { useState, useEffect } from 'react'
import GithubIconLight from '../img/github-mark-white.svg'
import GithubIconDark from '../img/github-mark.svg'
import LinkedInIconLight from '../img/linkedin.svg'

const Footer = () => {
    const [currentTheme, setCurrentTheme] = useState(localStorage.getItem('theme') || 'dark')
    
    // Listen for storage events (when localStorage changes in other components)
    useEffect(() => {
        const handleStorageChange = () => {
            setCurrentTheme(localStorage.getItem('theme') || 'dark')
        }
        
        window.addEventListener('storage', handleStorageChange)
        
        // Also check periodically (as a fallback)
        const interval = setInterval(() => {
            const theme = localStorage.getItem('theme') || 'dark'
            if (theme !== currentTheme) {
                setCurrentTheme(theme)
            }
        }, 500)
        
        return () => {
            window.removeEventListener('storage', handleStorageChange)
            clearInterval(interval)
        }
    }, [currentTheme])
    
    const githubIcon = currentTheme === 'dark' ?  GithubIconLight : GithubIconDark
    
    return (
        <footer className="footer" theme-data={currentTheme}>
            <a href="https://www.linkedin.com/in/tommy-dahlin-5171a72aa/" theme-data={currentTheme}>
                <img src={LinkedInIconLight} className='linkedin-icon' alt="LinkedIn icon" theme-data={currentTheme} />
            </a>
            <a href="https://github.com/TommyDahlin">
            <img src={githubIcon} alt="Github icon"/>
                 </a>
        </footer>
    )
}

export default Footer