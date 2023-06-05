'use client'

import { Suspense, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion";
import { FaArrowDown } from 'react-icons/fa';
import { useInView } from "react-intersection-observer";
import NavigationBar from '../components/navigationBar';
import Footer from '../components/footer';
import { Loader } from '../components/loader';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import WaveBottom from '../public/wave-2.svg';

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);

  const [sectionAboutRef, sectionAboutInView] = useInView();
  const [sectionPortfolioRef, sectionPortfolioInView] = useInView();
  const [sectionContactRef, sectionContactInView] = useInView();

  const [sectionAboutLoaded, setSectionAboutLoaded] = useState(false);
  const [sectionPortfolioLoaded, setSectionPortfolioLoaded] = useState(false);
  const [sectionContactLoaded, setSectionContactLoaded] = useState(false);
  
  useEffect(() => {
    if (sectionAboutInView && !sectionAboutLoaded) {
        setSectionAboutLoaded(true)
    }
  }, [sectionAboutInView, sectionAboutLoaded]);

  return (
    <div className='w-full bg-dark relative'>
      <Suspense fallback={Loader()}>
        
        <Suspense fallback={Loader()}>
          <NavigationBar />
        </Suspense>
        <Suspense fallback={Loader()}>
            <section id='home' className='w-full h-full pb-[-50px] bg-[url("/bg1.svg")] bg-cover bg-right lg:bg-center overflow-hidden'>
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
                  <div className='w-full flex justify-center items-center lg:justify-start'>
                    <Link
                      href="contact"
                      className={"border-2 border-orange rounded-md py-2 px-4 hover:bg-orange hover:text-dark ease-in-out duration-300"}
                    >
                      <span className='text-2xl font-semibold'>Me contacter</span>
                    </Link>
                    <Link href="https://github.com/IPtitLu">
                      <FaGithub
                          className="w-10 h-auto mx-6 hover:fill-orange"
                      />
                    </Link>
                    <Link href="https://www.linkedin.com/in/lucas-perez-71994b17a/">
                      <FaLinkedinIn
                            className="w-10 h-auto hover:fill-orange"
                        />
                    </Link>
                  </div>
                </motion.div>
                <motion.div className='flex-1 flex justify-center mb-20 lg:mb-0 lg:justify-end items-center'
                  initial={{ x: 1000 }}
                  animate={{ x: 0 }}
                  transition={{ type: "spring", stiffness: 75, delay: 2 }}
                >
                  <Image
                    src="/lucas-perez.png"
                    alt="Lucas Perez"
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
        </Suspense>
      </Suspense>
      <section id='about' className='w-full h-full pb-[-50px] bg-dark' ref={sectionAboutRef}>
          {sectionAboutLoaded ? (
            <motion.div 
              className='max-w-screen-lg mx-auto flex flex-col mb-10 items-center'
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div>Hello</div>
            </motion.div>
          ) : (
            <div className='h-screen'>
              <Loader />
            </div>
          )}
        </section>
        <Footer />
    </div>
  )
}
