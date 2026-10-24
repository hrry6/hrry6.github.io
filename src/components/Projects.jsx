import React from 'react'
import { motion } from 'framer-motion';
import Porto2 from '../assets/Porto2.png'
import Presensi from '../assets/Presensi.png'
import Edupose from "../assets/Edupose.png"
import BlockChat from "../assets/BlockChat.png"
import TransTrack from "../assets/TransTrack.png"
import JobMatchAI from "../assets/JobMatchAI.png"
import Veritas from "../assets/Veritas.png"

const Projects = () => {

    const Datas = [
        {
            title: "Edupose",
            link:"https://github.com/hrry6/EduPose",
            image: Edupose,
            description: (
                <>
                  An AI-powered classroom monitoring system deployed on Raspberry Pi edge devices using RTSP video streaming. It leverages YOLO pose estimation, custom keypoint feature engineering, and ensemble machine learning classifiers to analyze student behavior and classroom engagement in real time.
                  Built in collaboration with {' '}
                  <a href='https://github.com/Elmer015' className='text-purple-800' target='blank'>Owen</a>{'.'}
                </>
            ),
            technologies: ["React","FastAPI","PostgreSQL", "Docker", "Raspberry Pi"],
        },
        {
            title: "BlockChat (BlockChain Chat)",
            link:"https://crypto-chat-app.vercel.app/",
            image: BlockChat,
            description: (
                <>
                  A real-time chat application built with WebSocket architecture, featuring JWT authentication, smart contract verification, and decentralized storage via IPFS alongside a relational database for persistent messaging.
                  Built in collaboration with {' '}
                  <a href='https://github.com/Elmer015' className='text-purple-800' target='blank'>Owen</a>{', '}
                  <a href='https://github.com/ClarissaLinoh' className='text-purple-800' target='blank'>Clarissa</a>{', '}
                  <a href='https://github.com/ykarinw' className='text-purple-800' target='blank'>Karin</a>{'.'}
                </>
            ),
            technologies: ["React","Springboot","PostgreSQL", "Docker", "Pinata", "Polygon Amoy"],
        },
        {
            title: "TransTrack",
            link:"https://trans-track.vercel.app/",
            image: TransTrack,
            description: (
                <>
                  A transparent, immutable transaction tracking web application integrated with Solidity smart contracts on the Polygon Amoy testnet, using IPFS (via Pinata) for decentralized file storage and PostgreSQL for rapid data retrieval.
                  Built in collaboration with {' '}
                  <a href='https://github.com/Elmer015' className='text-purple-800' target='blank'>Owen</a>{', '}
                  <a href='https://github.com/ClarissaLinoh' className='text-purple-800' target='blank'>Clarissa</a>{', '}
                  <a href='https://github.com/ykarinw' className='text-purple-800' target='blank'>Karin</a>{'.'}
                </>
            ),
            technologies: ["React","Express JS","PostgreSQL", "Docker", "Pinata", "Polygon Amoy"],
        },
        {
            title: "JobMatch AI",
            link:"https://job-seeker-ml.vercel.app/",
            image:JobMatchAI,
            description: (
                <>
                  An intelligent job discovery platform that uses machine learning and natural language processing to analyze short candidate descriptions and match them with relevant career opportunities
                  Built in collaboration with {' '}
                  <a href='https://github.com/aulliyaaa' className='text-purple-800' target='blank'>Aulia</a>{' & '}
                  <a href='https://github.com/EllaUktolseja' className='text-purple-800' target='blank'>Gabriela</a>{'.'}
                </>
            ),
            technologies: ["Python","FastAPI", "Docker"],
        },
        {
            title: "Veritas",
            link:"https://job-seeker-ml.vercel.app/",
            image: Veritas,
            description: (
                <>
                  An AI-driven credibility analysis platform that detects fake news by leveraging PyTorch BERT transformers and TF-IDF Logistic Regression classifiers to evaluate text authenticity.
                  Built in collaboration with {' '}
                  <a href='https://github.com/EllaUktolseja' className='text-purple-800' target='blank'>Gabriela</a>{'.'}
                </>
            ),
            technologies: ["Python","FastAPI","Docker"],
        },
        {
            title: "First Portfolio (2021)",
            link:"https://hrry6.github.io/first-portfolio/",
            image:"https://hrry6.github.io/new-design-portfolio/Gambar/portfolio2.png",
            description: "My first portfolio website, built during the 10th grade using Bootstrap and AOS (Animate On Scroll) for styling and animations.",
            technologies: ["HTML","CSS-Bootstrap","Javascript-AOS"],
        },
        {
            title: "Second Portfolio (2022)",
            link:"https://hrry6.github.io/new-design-portfolio/",
            image:Porto2,
            description: "My second portfolio website, created as a dedicated project for an 11th-grade coursework assignment.",
            technologies: ["HTML","CSS","Javascript-AOS"],
        },
        {
            title: "Todo List",
            link:"https://hrry6.github.io/todo-list/",
            image:"https://hrry6.github.io/new-design-portfolio/Gambar/todo-list.png",
            description: "A simple todo-list application featuring full CRUD capabilities (create, read, update, delete) with persistent storage powered by browser local storage.",
            technologies: ["HTML","CSS","Javascript"],
        },
        {
            title: "Web Video Project",
            link:"https://hrry6.github.io/gif-project/",
            image:"https://hrry6.github.io/new-design-portfolio/Gambar/video-web.png",
            description: "A programmatic video player project developed entirely through code, designed to be easily accessed and executed via a GitHub repository link.",
            technologies: ["HTML","CSS","Javascript"],
        },
        {
            title: "Presensi Berbasis Foto",
            link:"https://github.com/hrry6/presensi-berbasis-foto",
            image:Presensi,
            description: (
                <>
                  A photo-based attendance web application built in collaboration with my friend {' '}
                  <a href='https://github.com/rukaachan' className='text-purple-800' target='blank'>Ruka</a>{' '}
                  during the 12th grade as our BNSP competency certification practical exam (UKOM) project.
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
                    width={200}
                    height={200} alt="Gambar Project"
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
