import React from 'react'
import { motion } from 'framer-motion'
import photo from '../assets/Photo2.jpg'

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h1 className='my-20 text-center text-4xl'>About Me</h1>
        <div className='flex flex-wrap'>
            <motion.div
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:0.5}}
            className="w-full lg:w-1/2 lg:p-8">
                <div className='flex items-center justify-center'>
                    <img src={photo} alt="about" className='lg:h-[400px] lg:w-[270px] md:h-[300px] md:w-[200px] h-[200px] w-[150px] rounded-xl'/>
                </div>
            </motion.div>

            <motion.div
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:100}}
            transition={{duration:0.5}}
            className='w-full lg:w-1/2'>
                <div className='flex justify-center lg:justify-start'>
                    <p className='my-2 max-w-xl py-6 text-sm md:text-base'>It all started in childhood, inspired by movies and anime to become a professional hacker breaking into network systems. That initial curiosity naturally evolved into a passion for building constructive solutions. During the COVID-19 pandemic in the 8th grade at SMP Strada Budi Luhur, I independently taught myself Linux Manjaro and core programming languages like Python and HTML/CSS/JS, which ultimately shaped my ambition to pursue a career as a programmer.                    <br /><br />
That journey continued during my vocational high school years at SMKN 1 Kota Bekasi majoring in Software Engineering, where I built a solid foundation in software development. Moving from early web projects using Laravel and React, my technical expertise rapidly expanded into modern frameworks, system-level design, and robust backend engineering.
                    <br /><br />
Today, I am a Computer Science student in Software Engineering at BINUS University. My current focus centers on high-performance backend development with Golang and Java Spring Boot, containerized microservices using Docker, and edge AI engineering—such as developing Edupose, an AI-powered classroom monitoring system—while continually exploring deeper layers of system architecture and infrastructure security.
 
                    </p>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About
