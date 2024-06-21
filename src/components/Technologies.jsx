import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { FaNodeJs } from 'react-icons/fa'
import { FaPhp } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { RiFlutterFill } from "react-icons/ri";
import { motion } from 'framer-motion';


const iconWave = (duration) => ({
    initial: {y:-15},
    animate:{
        y:[15, -15],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse"
        },
    }

})

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h2
        whileInView={{opacity:1, y:0}}
        animate={{y:-100, opacity:0}}
        transition={{duration:1.5}}
        className='my-20 text-center text-4xl'>Technologies</motion.h2>
        <motion.div
        whileInView={{opacity:1, x:0}}
        animate={{x:-100, opacity:0}}
        transition={{duration:1.5}}
        className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div
            variants={iconWave(2.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-6xl text-cyan-400'/>
            </motion.div>
            <motion.div
            variants={iconWave(4)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiNextjsFill className='text-6xl'/>
            </motion.div>
            <motion.div
            variants={iconWave(2.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaNodeJs className='text-6xl text-emerald-500'/>
            </motion.div>
            <motion.div
            variants={iconWave(4)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiFlutterFill className='text-6xl text-cyan-400'/>
            </motion.div>
            <motion.div
            variants={iconWave(2.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaPhp className='text-6xl text-blue-600'/>
            </motion.div>
            <motion.div
            variants={iconWave(4)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaLaravel className='text-6xl text-red-600'/>
            </motion.div>
            <motion.div
            variants={iconWave(2.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiMysql className='text-6xl text-orange-500'/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies