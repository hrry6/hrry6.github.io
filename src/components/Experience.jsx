import React from 'react'
import {motion} from "framer-motion"

const Experience = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h1
        whileInView={{opacity:1, y:0}}
        animate={{opacity:0, y:-100}}
        transition={{duration:0.5}}
        className='my-20 text-center text-4xl'>Experience</motion.h1>
        <div className='mb-8 flex flex-wrap lg:justify-center'>
            <motion.div
            whileInView={{opacity:1, x:0}}
            animate={{opacity:0, x:-100}}
            transition={{duration:1}}
            className="w-full lg:w-1/4">
                <p className='mb-2 text-sm text-neutral-400'>January 2023 - June 2023</p>
            </motion.div>
            <motion.div
            whileInView={{opacity:1, x:0}}
            animate={{opacity:0, x:100}}
            transition={{duration:1}}
            className="w-full max-w-xl lg:w-3/4">
                <a href='https://loginusa.id/' target='blank' className=' hover:text-purple-600 mb-2 font-semibold'>Full Stack Developer {"-"} PT. Agriva Teknologi Nusantara</a>
                <p className='mb-4 text-neutral-400'>During my internship here, I gained valuable hands-on experience designing and building landing pages, managing databases, and exploring Android development.</p>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Node JS</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>React JS</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Flutter</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>MYSQL</span>
            </motion.div>
        </div>
        <div className='mb-8 flex flex-wrap lg:justify-center'>
          <motion.div
          whileInView={{opacity:1, x:0}}
          animate={{opacity:0, x:-100}}
          transition={{duration:1}}
          className="w-full lg:w-1/4">
              <p className='mb-2 text-sm text-neutral-400'>September 2025 - September 2026</p>
          </motion.div>
          <motion.div
          whileInView={{opacity:1, x:0}}
          animate={{opacity:0, x:100}}
          transition={{duration:1}}
          className="w-full max-w-xl lg:w-3/4">
              <a href='https://student.binus.ac.id/lab-assistant/' target='blank' className=' hover:text-purple-600 mb-2 font-semibold'>Part-Time Laboratory Assistant{"-"} Binus University</a>
              <p className='mb-4 text-neutral-400'>During my time as a Lab Assistant at BINUS University, I actively engaged in training and mentoring students, guiding them through hands-on technical practices, troubleshooting complex coding issues, and facilitating lab sessions to strengthen their core programming and development skills.</p>
              <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Python</span>
              <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Java</span>
              <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Selenium</span>
          </motion.div>
        </div>
    </div>
  )
}

export default Experience
