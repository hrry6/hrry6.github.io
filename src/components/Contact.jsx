import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <motion.h1
        whileInView={{opacity:1, y:0}}
        animate={{opacity:0, y:-100}}
        transition={{duration:0.5}}
        className='my-10 text-center text-4xl'>Get in Touch</motion.h1>
        <div className='text-center tracking-tighter'>
            <motion.p
            whileInView={{opacity:1, x:0}}
            animate={{opacity:0, x:-100}}
            transition={{duration:1}}
            className='my-4'>Jl. Bima Citra 11 No.22, Lambangsari, Kec. Tambun Sel., Kabupaten Bekasi, Jawa Barat 17510</motion.p>
            <motion.p
            whileInView={{opacity:1, x:0}}
            animate={{opacity:0, x:100}}
            transition={{duration:1}}
            className='my-4'>+62 812 9127 0005</motion.p>
            <a href="#" className='border-b'>harrysiloam06@gmail.com</a>
        </div>
    </div>
  )
}

export default Contact