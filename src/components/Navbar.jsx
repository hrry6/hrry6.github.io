import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className='md:mb-20 mb-6 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <h1 className='text-white text-3xl font-bold'>Hrry6</h1>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a target='blank' href="https://www.linkedin.com/in/harry-siloam-b57639249/">
              <FaLinkedin/>
            </a>
            <a target='blank' href="https://github.com/hrry6/">
              <FaGithub/>
            </a>
            <a target='blank' href="https://www.instagram.com/harry.siloam/">
              <FaInstagram/>
            </a>
        </div>
    </nav>
  )
}

export default Navbar