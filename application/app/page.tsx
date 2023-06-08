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

import dataExperiences from '../data/dataExperiences.json';
import dataStudies from '../data/dataStudies.json';

interface props {
  id: number;
  date: number;
  title: string;
  localisation: string;
  content: string;
}

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);

  const [sectionAboutRef, sectionAboutInView] = useInView();
  const [sectionFormationsRef, sectionFormationsInView] = useInView();

  const [sectionAboutLoaded, setSectionAboutLoaded] = useState(false);
  const [sectionFormationsLoaded, setSectionFormationsLoaded] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  
  useEffect(() => {
    if (sectionAboutInView && !sectionAboutLoaded) {
        setSectionAboutLoaded(true)
    }
  }, [sectionAboutInView, sectionAboutLoaded]);

  useEffect(() => {
    if (sectionFormationsInView && !sectionFormationsLoaded) {
      setSectionFormationsLoaded(true)
    }
  }, [sectionFormationsInView, sectionFormationsLoaded]);

  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

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
                  transition={{ type: "spring", stiffness: 75, delay: 0.7 }}
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
                  transition={{ type: "spring", stiffness: 75, delay: 1 }}
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
      <section id='formations' className='w-full h-full pb-[-50px] bg-dark' ref={sectionFormationsRef}>
          {sectionFormationsLoaded ? (
            <motion.div 
              className='max-w-screen-lg mx-auto flex flex-col mb-10 items-center'
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div
                className='w-full mx-auto flex flex-col mb-10 items-center'
              >
                <div className='w-fit flex flex-col lg:flex-row justify-center items-center mb-20 bg-light-dark rounded-xl py-2 px-2'>
                  <h3
                    className={`font-montserrat text-4xl font-bold mr-0 lg:mr-4 cursor-pointer inline-flex items-center justify-center py-2 px-2 w-fit rounded-xl ease-in-out duration-200
                    ${activeSection === 0 ? "text-white bg-white/25" : "text-white/50"}`}
                    onClick={() => setActiveSection(0)}
                  >
                    Expériences
                  </h3>
                  <h3
                    className={`font-montserrat text-4xl font-bold ml-0 lg:ml-4 cursor-pointer inline-flex items-center justify-center text-center  py-2 px-2 w-fit rounded-xl ease-in-out duration-200
                    ${activeSection === 1 ? "text-white bg-white/25" : "text-white/50"}`}
                    onClick={() => setActiveSection(1)}
                  >
                    Formations
                  </h3>
                </div>
                <div className={activeSection === 1 ? ' hidden' : 'w-full flex justify-center'}>
                    <ul className='w-full flex flex-col justify-center items-center'>
                        {dataExperiences.map((item: props, index) => (
                          <motion.li 
                            key={item.id} 
                            className='w-4/5 flex flex-row mb-6'
                            initial={{ x: -2000 }}
                            animate={{ x: 0 }}
                            transition={{ type: "spring", stiffness: 60, delay: (index * 0.10) }}
                          >
                            <span className='text-xl font-montserrat'>{item.date}</span>
                            <div className='h-full flex flex-col mx-4'>
                                <div className='w-full flex justify-center items-center'>
                                  <div className='h-6 w-6 rounded-full bg-orange' />
                                </div>
                                <div className='h-full flex justify-center pt-2'>
                                  <div className='w-1 h-full bg-white rounded-b-lg' />
                                </div>
                            </div>
                            <div className='flex-1'>
                              <h3 className='flex-1'>{item.title}</h3>
                              <h4 className='flex-1'>{item.localisation}</h4>
                              <p className='flex-1'>{item.content}</p>
                            </div>
                          </motion.li>
                        ))}
                    </ul>
                    {!showMore && (
                      <button onClick={toggleShowMore}>
                        Afficher plus
                      </button>
                    )}
                    {showMore && (
                      <button onClick={toggleShowMore}>
                        Cacher
                      </button>
                    )}
                </div>
                <div className={!activeSection ? ' hidden' : 'w-full flex justify-center'}>
                    <ul className='w-full flex flex-col justify-center items-center'>
                      {dataExperiences.map((item: props, index) => (
                          <motion.li 
                            key={item.id} 
                            className='w-4/5 flex flex-row mb-6'
                            initial={{ x: -2000 }}
                            animate={{ x: 0 }}
                            transition={{ type: "spring", stiffness: 60, delay: (index * 0.10) }}
                          >
                            <span className='text-xl font-montserrat'>{item.date}</span>
                            <div className='h-full flex flex-col mx-4'>
                                <div className='w-full flex justify-center items-center'>
                                  <div className='h-6 w-6 rounded-full bg-orange' />
                                </div>
                                <div className='h-full flex justify-center pt-2'>
                                  <div className='w-1 h-full bg-white rounded-b-lg' />
                                </div>
                            </div>
                            <div className='flex-1'>
                              <h3 className='flex-1'>{item.title}</h3>
                              <h4 className='flex-1'>{item.localisation}</h4>
                              <p className='flex-1'>{item.content}</p>
                            </div>
                          </motion.li>
                        ))}
                    </ul>
                </div>
              </div>
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
