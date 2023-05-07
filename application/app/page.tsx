'use client'

import Image from 'next/image'
import { motion } from "framer-motion"
import { FaArrowDown } from 'react-icons/fa'
import Navbar1A from '../components/navigationBar'
import Navbar from '../components/navBar'
import WaveBottom from '../public/wave-2.svg'

export default function Home() {
  return (
    <div className='w-full bg-light-dark'>
      <Navbar />
      <div className='w-full h-full pb-[-50px] bg-[url("/bg1.svg")] bg-cover'>
        <div
          className='max-w-screen-lg mx-auto flex flex-col'
        >
          <div className='w-full flex flex-col px-10 xl:px-0 lg:flex-row py-50 justify-between'>
            <motion.div className='flex-1 flex flex-col items-center lg:items-start justify-center py-20 lg:py-56'
              initial={{ x: -1000 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 75, delay: 2 }}
            >
              <div className='w-max'>
                <h2 className='w-50 font-montserrat text-4xl font-bold mb-2 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5'>Developpeur Web</h2>
              </div>
              <h3 className='w-50 text-2xl mb-6 font-semibold'>Front & Backend</h3>
              <p className='text-lg w-50 mb-6 text-center lg:text-left'>Beautifully <span className='text-orange'>designed</span>, expertly crafted website templates
                built with modern <span className='text-orange'>technologies</span> like React and Next.js.</p>
              <div className='w-full flex justify-center lg:justify-start'>
                <a href='#contact' className='border-2 border-orange rounded-md py-2 px-4 hover:bg-orange hover:text-dark ease-in-out duration-300'><span className='text-2xl font-semibold'>Me contacter</span></a>
              </div>
            </motion.div>
            <motion.div className='flex-1 flex justify-center mb-20 lg:mb-0 lg:justify-end items-center'
              initial={{ x: 1000 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 75, delay: 1 }}
            >
              <Image
                src="/photo_lucas_perez.png"
                alt="Vercel Logo"
                className="w-32 h-auto"
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
            <a href='' className="animate-bounce flex justify-center">
              <div className=' hover:ring-4 hover:ring-orange rounded-full ease-out duration-200'>
                <FaArrowDown size={32} className='m-2' />
              </div>
            </a>
          </motion.div>
        </div>
        <Image src={WaveBottom} alt={""} className='w-full' />
      </div>
    </div >
  )
}
