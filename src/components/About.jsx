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
                    <p className='my-2 max-w-xl py-6 text-sm md:text-base'>Berawal pada masa kecil saya yang bercita-cita menjadi hacker karena terinspirasi dari tontonan film dan anime, menurut saya saat itu, menjadi hacker merupakan profesi yang teramat menarik dan sangat menantang. Menjadi seseorang yang dipekerjakan dan dipercaya oleh suatu organisasi atau perusahaan untuk mencoba menembus sistem jaringan adalah impian masa kecil saya. Seiring berjalannya waktu, saya menemukan dan mempelajari potensi lain dari minat dan kemampuan yang saya miliki dan menggunakannya untuk hal yang membangun.
                    <br /><br />
                    Pada Mei 2020, saat pandemi Covid-19 melanda Indonesia, saya duduk di kelas 8 SMP Strada Budi Luhur. Di tengah kondisi pembelajaran daring, secara teratur saya mengalokasikan waktu khusus untuk mempelajari hacking. Saya membaca sebuah artikel di internet yang menjelaskan bahwa untuk menjadi hacker, diperlukan keahlian khusus, seperti menguasai Linux dan beberapa bahasa pemrograman seperti Python, Ruby, PHP, dan lainnya.
                    <br /><br />
                    Tantangan tersebut tidak memadamkan niat saya. Pada saat kelas 9, saya berhasil menginstal Linux pertama saya yaitu Manjaro OS, dan membuat banyak proyek menyenangkan dengan bahasa Python, HTML, CSS, dan Javascript. Saya pun merasa tertarik mempelajari tentang coding, dan pada saat inilah saya memutuskan untuk menjadikan programmer sebagai cita-cita utama saya.
 
                    </p>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About