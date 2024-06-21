import React from 'react'
import { motion } from 'framer-motion';
import Porto2 from '../assets/Porto2.png'
import Presensi from '../assets/Presensi.png'

const Projects = () => {

    const Datas = [
        {
            title: "First Portfolio (2021)",
            link:"#",
            image:"https://hrry6.github.io/new-design-portfolio/Gambar/portfolio2.png",
            description: "Merupakan Web Portofolio pertama yang saya buat saat kelas 10 dengan menggunakan framework Bootstrap dan AOS untuk animasi dan tampilan.",
            technologies: ["HTML","CSS-Bootstrap","Javascript-AOS"],
        },
        {
            title: "Second Portfolio (2022)",
            link:"https://hrry6.github.io/new-design-portfolio/",
            image:Porto2,
            description: "Merupakan Web Portfolio kedua saya yang saya buat untuk tugas kelas 11.",
            technologies: ["HTML","CSS","Javascript-AOS"],
        },
        {
            title: "Todo List",
            link:"https://hrry6.github.io/todo-list/",
            image:"https://hrry6.github.io/new-design-portfolio/Gambar/todo-list.png",
            description: "Project todo list sederhana dimana user dapat menambahkan, menghapus, dan mengedit list yang dibuat serta data tersimpan di local storage.",
            technologies: ["HTML","CSS","Javascript"],
        },
        {
            title: "Web Video Project",
            link:"https://hrry6.github.io/gif-project/",
            image:"https://hrry6.github.io/new-design-portfolio/Gambar/video-web.png",
            description: "Adalah sebuah projek dimana saya ingin membuat seperti video player menggunakan bahasa program agar dapat dibuka leawat link github, awalnya projek ini ditunjukkan untuk mencari topik dengan crush, namun berakhir NT 😅.",
            technologies: ["HTML","CSS","Javascript"],
        },
        {
            title: "Presensi Berbasis Foto",
            link:"https://github.com/hrry6/presensi-berbasis-foto",
            image:Presensi,
            description: (
                <>
                    Sebuah aplikasi presensi berbasis foto yang saya buat bersama teman saya{' '}
                    <a href='https://github.com/rukaachan' className='text-purple-800' target='blank'>Ruka</a>{' '}
                    di Kelas 12 untuk menyelesaikan ujian UKOM BNSP
                </>
            ),
            technologies: ["HTML","CSS","Javascript"],
        }
    ];

  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h1
        whileInView={{opacity:1, y:0}}
        animate={{opacity:0, y:-100}}
        transition={{duration:0.5}}
        className='my-20 text-center text-4xl'>Projects</motion.h1>

        {Datas.map((data, index) => (
            <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>        
                <motion.div
                whileInView={{opacity:1, x:0}}
                animate={{opacity:0, x:-100}}
                transition={{duration:0.5}}
                className="w-full lg:w-1/4">
                    <img src={data.image}
                    width={150}
                    height={150} alt="Gambar Project"
                    className='rounded mb-6' />
                </motion.div>
                <motion.div
                whileInView={{opacity:1, x:0}}
                animate={{opacity:0, x:100}}
                transition={{duration:0.5}}
                className='w-full max-w-xl lg:w-3/4'>
                    <a href={data.link} target='blank' className='mb-2 font-semibold text-lg text-purple-800'>{data.title}</a>
                    <p className='mb-2 text-neutral-400'>{data.description}</p>
                    {data.technologies.map((tech, index) => (
                        <span key={index} className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>{tech}</span>
                    ))}
                </motion.div>
            </div>
        ))}

    </div>
  )
}

export default Projects