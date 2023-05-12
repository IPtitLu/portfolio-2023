'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { motion } from "framer-motion"
import { FaArrowDown, FaScroll, FaLaptop } from 'react-icons/fa'
import NavigationBar from '../components/navigationBar'
import ScrollFormations from '../components/ScrollFormations'

import WaveBottom from '../public/wave-2.svg'

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);

  return (
    <div className='w-full bg-dark relative'>
      <NavigationBar />
      <section id='home' className='w-full h-full pb-[-50px] bg-[url("/bg1.svg")] bg-cover bg-right lg:bg-center'>
        <div
          className='max-w-screen-lg mx-auto flex flex-col'
        >
          <div className='w-full flex flex-col px-10 xl:px-0 lg:flex-row py-50 justify-between'>
            <motion.div className='flex-1 flex flex-col items-center lg:items-start justify-center p-0 pt-20 lg:py-56'
              initial={{ x: -1000 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 75, delay: 1 }}
            >
              <div className='w-max'>
                <h2 className='w-50 font-montserrat text-4xl font-bold mb-2 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5'>Developpeur Web</h2>
              </div>
              <h3 className='w-50 text-2xl mb-6 font-semibold'>Front & Backend</h3>
              <p className='text-lg w-50 mb-6 text-center lg:text-left'>Je suis un développeur web
                passionné par l'innovation, capable de
                traduire les idées en <span className='text-orange'>réalité numérique</span> à
                travers une <span className='text-orange'>expertise</span> en front et back.</p>
              <div className='w-full flex justify-center lg:justify-start'>
                <a href='#contact' className='border-2 border-orange rounded-md py-2 px-4 hover:bg-orange hover:text-dark ease-in-out duration-300'><span className='text-2xl font-semibold'>Me contacter</span></a>
              </div>
            </motion.div>
            <motion.div className='flex-1 flex justify-center mb-20 lg:mb-0 lg:justify-end items-center'
              initial={{ x: 1000 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 75, delay: 2 }}
            >
              <Image
                src="/lucas-perez.png"
                alt="Vercel Logo"
                className="w-96 h-auto"
                width={500}
                height={500}
                priority
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 3 }}
          >
            <Link href='#about' className="animate-bounce flex justify-center">
              <div className=' hover:ring-4 hover:ring-orange rounded-full ease-out duration-200'>
                <FaArrowDown size={32} className='m-2' />
              </div>
            </Link>
          </motion.div>
        </div>
        <Image src={WaveBottom} alt={""} className='w-full' />
      </section>
      <section id='about' className='w-full h-full pb-[-50px] bg-dark'>
        <div
          className='max-w-screen-lg mx-auto flex flex-col mb-10 items-center'
        >
          <div className='w-fit flex flex-col lg:flex-row justify-center items-center mb-10 bg-light-dark rounded-xl py-2 px-2'>
            <h3
              className={`font-montserrat text-4xl font-bold mr-0 lg:mr-4 cursor-pointer inline-flex items-center justify-center py-2 px-2 w-fit rounded-xl ease-in-out duration-200
               ${activeSection === 0 ? "text-white bg-white/25" : "text-white/50"}`}
              onClick={() => setActiveSection(0)}
            >
              Compétences
            </h3>
            <h3
              className={`font-montserrat text-4xl font-bold ml-0 lg:ml-4 cursor-pointer inline-flex items-center justify-center text-center  py-2 px-2 w-fit rounded-xl ease-in-out duration-200
               ${activeSection === 1 ? "text-white bg-white/25" : "text-white/50"}`}
              onClick={() => setActiveSection(1)}
            >
              Formations & Expériences
            </h3>
          </div>
          <ScrollFormations active={activeSection == 1 ? true : false} />
        </div>
      </section>
    </div>
  )
}
