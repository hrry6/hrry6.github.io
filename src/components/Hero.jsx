import React from 'react'
import { motion } from 'framer-motion'
import photo from '../assets/Photo1.jpg'

const container = (delay, xValue, duration ) => ({
    hidden: {x:xValue, opacity:0},
    visible: {
        x:0, 
        opacity:1,
        transition:{duration:duration, delay:delay}
    }
})

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center lg:items-start'>
                    <motion.h1 
                    variants={container(0, -100, 0.5)}
                    initial="hidden"
                    animate="visible"
                    className='pb-16 text-5xl font-thin tracking-tighter lg:mt-15 lg:text-8xl'>Harry Siloam S</motion.h1>
                    <motion.span
                    variants={container(0.5, -100, 0.5)}
                    initial="hidden"
                    animate="visible" 
                    className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'>Full Stack Developer</motion.span>
                    <motion.p
                    variants={container(1, -100, 0.5)}
                    initial="hidden"
                    animate="visible" 
                    className='my-2 max-w-xl py-6 text-base font-light tracking-tighter'>Haii, perkenalkan saya Harry 😎. Saya adalah seorang Full Stack Developer lulusan SMKN 1 Kota Bekasi dengan jurusan Rekayasa Perangkat Lunak. Hobi saya adalah membuat website dengan Framewrok seperti React dan Laravel</motion.p>
                </div>
            </div>
            <div className='w-full lg:w-1/2 lg:pb-8'>
                <div className='flex justify-center '>
                    <motion.div
                    variants={container(1.2, 100, 1)}
                    initial="hidden"
                    animate="visible" 
                    className='rounded-xl border-[10px] border-white bg-white'>
                        <img
                        src={photo}
                        alt="Photo Profile" className='lg:h-[400px] lg:w-[270px] h-[300px] w-[250px] rounded-xl' />
                    </motion.div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero