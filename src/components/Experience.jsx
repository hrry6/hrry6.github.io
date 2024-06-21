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
                <a href='https://g.co/kgs/SSW9LuC' target='blank' className=' hover:text-purple-600 mb-2 font-semibold'>Full Stack Developer {"-"} PT. Agriva Teknologi Nusantara</a>
                <p className='mb-4 text-neutral-400'>Selama PKL disini saya banyak mendapat pengalaman berharga seperti mendesign & membuat Landing Page, mengelola database, dan mempelajari Android Development .</p>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Node JS</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>React JS</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Flutter</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>MYSQL</span>
            </motion.div>
        </div>
    </div>
  )
}

export default Experience