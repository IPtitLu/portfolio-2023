'use client'

import { Suspense, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion";
import { FaAngleDown, FaAngleLeft, FaAngleRight, FaAngleUp, FaArrowDown, FaCss3Alt, FaDocker, FaFigma, FaHtml5, FaJava, FaJsSquare, FaReact, FaSymfony } from 'react-icons/fa';
import { useInView } from "react-intersection-observer";
import NavigationBar from '../components/navigationBar';
import Footer from '../components/footer';
import { Loader } from '../components/loader';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoSchool } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";

import WaveBottom from '../public/wave-2.svg';

import dataExperiences from '../data/dataExperiences.json';
import dataStudies from '../data/dataStudies.json';

interface props {
  id: number;
  date: number;
  title: string;
  localisation: string;
  structure: string;
  competences: string[];
}

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);

  const [sectionAboutRef, sectionAboutInView] = useInView();
  const [sectionFormationsRef, sectionFormationsInView] = useInView();

  const [sectionAboutLoaded, setSectionAboutLoaded] = useState(false);
  const [sectionFormationsLoaded, setSectionFormationsLoaded] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const visibleItems = showAll ? dataExperiences : dataExperiences.slice(0, 2);
  const visibleItems2 = showAll ? dataStudies : dataStudies.slice(0, 2);

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

  const [currentSet, setCurrentSet] = useState(0);
  const skills = [
    [
      { icon: <FaSymfony className="w-8 h-auto fill-white" />, percent: 170, color: "text-white" },
      { icon: <FaReact className="w-8 h-auto fill-blue-300" />, percent: 150, color: "text-blue-300" },
      { icon: <FaJava className="w-8 h-auto fill-red-600" />, percent: 100, color: "text-red-600" },
      { icon: <FaFigma className="w-8 h-auto fill-pink-400" />, percent: 120, color: "text-pink-400" },
      { icon: <FaDocker className="w-8 h-auto fill-blue-400" />, percent: 100, color: "text-blue-400" },
    ],
    [
      { icon: <FaHtml5 className="w-8 h-auto fill-orange" />, percent: 180, color: "text-orange" },
      { icon: <FaCss3Alt className="w-8 h-auto fill-blue-600" />, percent: 180, color: "text-blue-600" },
      { icon: <FaJsSquare className="w-8 h-auto fill-yellow-400" />, percent: 160, color: "text-yellow-400" },
      { icon: <SiTailwindcss className="w-8 h-auto fill-blue-400" />, percent: 180, color: "text-blue-400" },
      { icon: <FaGithub className="w-8 h-auto fill-white" />, percent: 150, color: "text-gray-200" },
    ],
  ];

  const handleNext = () => {
    setCurrentSet((prevSet) => (prevSet + 1) % skills.length);
  };

  const handlePrevious = () => {
    setCurrentSet((prevSet) => (prevSet - 1 + skills.length) % skills.length);
  };

  const currentSkills = skills[currentSet];

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const [isLeftHovered, setIsLeftHovered] = useState(false);
  const [isRightHovered, setIsRightHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false)

  const [progress, setProgress] = useState(75);
  const circumference = 2 * Math.PI * 120;
  const dashOffset = circumference - (progress / 100) * circumference;

  return (
    <div className='w-full bg-dark relative color-white'>
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
                <Link href='#formations' className="animate-bounce flex justify-center">
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

      <section id='about' className='w-full h-full bg-dark bg-cover bg-center overflow-hidden' ref={sectionFormationsRef}>
        <div className='max-w-screen-lg mx-auto flex flex-col justify-center items-center lg:mb-20 mb-0'>
          <div className='flex flex-row lg:nowrap wrap  w-full justify-center items-center px-10'>
            <div className='md:flex hidden'>
              <div
                className='w-16 h-16 rounded-full bg-light-dark flex justify-center items-center mx-6 hover:bg-white hover:bg-opacity-10 cursor-pointer'
                onMouseEnter={() => setIsLeftHovered(true)}
                onMouseLeave={() => setIsLeftHovered(false)}
              >
                {isLeftHovered ? (
                  <FaAngleLeft className="w-8 h-auto fill-orange" onClick={handlePrevious} />
                ) : (
                  <FaAngleLeft className="w-8 h-auto fill-white" onClick={handlePrevious} />
                )}
              </div>
            </div>
            <div className='hidden md:flex'>
              {currentSkills.map((skill, index) => (
                <div key={index} className="h-16 flex justify-center items-center relative lg:mb-0 mb-4">
                  <svg className="transform -rotate-90 w-28 h-28 z-10" viewBox="0 0 130 128">
                    <circle
                      cx="64"
                      cy="64"
                      r="35"
                      stroke="currentColor"
                      strokeWidth="5"
                      fill="transparent"
                      strokeDasharray={skill.percent}
                      className={skill.color}
                    />
                  </svg>
                  <span className="absolute text-5xl w-16 h-16 rounded-full bg-light-dark z-0">
                    <div className="flex items-center justify-center h-full">
                      <div>
                        <span className="text-4xl rounded-full bg-light-dark w-10">{skill.icon}</span>
                      </div>
                    </div>
                  </span>
                </div>
              ))}
            </div>

            <div className='flex md:hidden flex-row'>
              <div className='flex flex-col'>
                {skills[0].map((skill, index) => (
                  <div key={index} className="h-16 flex justify-center items-center relative lg:mb-0 mb-4">
                    <svg className="transform -rotate-90 w-28 h-28 z-10" viewBox="0 0 130 128">
                      <circle
                        cx="64"
                        cy="64"
                        r="35"
                        stroke="currentColor"
                        strokeWidth="5"
                        fill="transparent"
                        strokeDasharray={skill.percent}
                        className={skill.color}
                      />
                    </svg>
                    <span className="absolute text-5xl w-16 h-16 rounded-full bg-light-dark z-0">
                      <div className="flex items-center justify-center h-full">
                        <div>
                          <span className="text-4xl rounded-full bg-light-dark w-10">{skill.icon}</span>
                        </div>
                      </div>
                    </span>
                  </div>
                ))}
              </div>
              <div className='flex md:hidden flex-col'>
                {skills[1].map((skill, index) => (
                  <div key={index} className="h-16 flex justify-center items-center relative lg:mb-0 mb-4">
                    <svg className="transform -rotate-90 w-28 h-28 z-10" viewBox="0 0 130 128">
                      <circle
                        cx="64"
                        cy="64"
                        r="35"
                        stroke="currentColor"
                        strokeWidth="5"
                        fill="transparent"
                        strokeDasharray={skill.percent}
                        className={skill.color}
                      />
                    </svg>
                    <span className="absolute text-5xl w-16 h-16 rounded-full bg-light-dark z-0">
                      <div className="flex items-center justify-center h-full">
                        <div>
                          <span className="text-4xl rounded-full bg-light-dark w-10">{skill.icon}</span>
                        </div>
                      </div>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/*
            <div className="flex items-center justify-center">
              <svg className="transform -rotate-90 w-72 h-72">
                <circle
                  cx="145"
                  cy="145"
                  r="120"
                  stroke="currentColor"
                  strokeWidth="30"
                  fill="transparent"
                  strokeDasharray={circumference}
                  strokeDashoffset={dashOffset}
                  className="text-blue-500"
                />
              </svg>
              <span className="absolute text-5xl">{`${progress}%`}</span>
            </div>
            */}

            <div className='md:flex hidden'>
              <div
                className='w-16 h-16 rounded-full bg-light-dark flex justify-center items-center mx-6 hover:bg-white hover:bg-opacity-10 cursor-pointer'
                onMouseEnter={() => setIsRightHovered(true)}
                onMouseLeave={() => setIsRightHovered(false)}
              >
                {isRightHovered ? (
                  <FaAngleRight className="w-8 h-auto fill-orange" onClick={handleNext} />
                ) : (
                  <FaAngleRight className="w-8 h-auto fill-white" onClick={handleNext} />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='formations' className='w-full h-full bg-dark lg:bg-[url("/bg2.png")] bg-cover bg-center overflow-hidden' ref={sectionFormationsRef}>
        {sectionFormationsLoaded ? (
          <motion.div
            className='max-w-screen-lg mx-auto flex flex-col mb-10 items-center lg:mt-0 mt-10'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className='w-full mx-auto flex flex-col mb-10 items-center'
            >
              <div className='w-fit flex flex-col lg:flex-row justify-center items-center mb-20 bg-light-dark rounded-xl py-2 px-2'>
                <h3
                  className={`font-montserrat text-4xl font-bold mr-0 lg:mr-4 cursor-pointer inline-flex items-center justify-center hover:bg-white/25 py-2 px-2 w-fit rounded-xl ease-in-out duration-200 flex-1
                    ${activeSection === 0 ? "text-white bg-white/25" : "text-white/50"}`}
                  onClick={() => setActiveSection(0)}
                >
                  Expériences
                </h3>
                <h3
                  className={`font-montserrat text-4xl font-bold ml-0 lg:ml-4 cursor-pointer inline-flex items-center justify-center text-center hover:bg-white/25 py-2 px-2 w-fit rounded-xl ease-in-out duration-200 flex-1
                    ${activeSection === 1 ? "text-white bg-white/25" : "text-white/50"}`}
                  onClick={() => setActiveSection(1)}
                >
                  Formations
                </h3>
              </div>
              <div className={activeSection === 1 ? ' hidden' : 'w-full flex justify-center'}>
                <ul className='w-full flex flex-col justify-center items-center mb-6'>
                  {visibleItems2.map((item: props, index) => (
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
                        <h3 className='flex-1 text-2xl font-montserrat'>{item.title}</h3>
                        <h4 className='flex-1 mt-4 mb-6 flex flex-row text-orange font-bold'>
                          <IoSchool
                            className="w-4 h-auto fill-white mr-2"
                          />
                          {item.structure}
                          <span className='mx-2 text-white'> - </span>
                          {item.localisation}
                        </h4>
                        <p className='flex-1'>
                          <ul>
                            {item.competences.map((item: string, index) => (
                              <li key={index} className='flex flex-row mb-2'>
                                <div
                                  className="w-2 h-auto mr-2 ">-
                                </div> {item}
                              </li>
                            ))}
                          </ul>
                        </p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className={!activeSection ? ' hidden' : 'w-full flex justify-center'}>
                <ul className='w-full flex flex-col justify-center items-center mb-6'>
                  {visibleItems.map((item: props, index) => (
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
                        <h3 className='flex-1 text-2xl font-montserrat'>{item.title}</h3>
                        <h4 className='flex-1 mt-4 mb-6 flex flex-row text-orange font-bold'>
                          <IoSchool
                            className="w-4 h-auto fill-white mr-2"
                          />
                          {item.structure}
                          <span className='mx-2 text-white'> - </span>
                          {item.localisation}
                        </h4>
                        <p className='flex-1'>
                          <ul>
                            {item.competences.map((item: string, index) => (
                              <li key={index} className='flex flex-row mb-2'>
                                <div
                                  className="w-2 h-auto mr-2 ">-
                                </div> {item}
                              </li>
                            ))}
                          </ul>
                        </p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className='flex justify-center items-center'>
                {!showAll && dataExperiences.length > 3 && (
                  <button className="text-white flex flex-row justify-center items-center px-4 py-2 rounded-lg hover:bg-white hover:bg-opacity-10" onClick={toggleShowAll}>
                    <span className='mr-2'>Afficher plus</span>
                    <div className='flex justify-center items-center'>
                      <FaAngleDown className="w-4 h-auto fill-white" />
                    </div>
                  </button>
                )}
                {showAll && (
                  <button className="text-white flex flex-row justify-center items-center px-4 py-2 rounded-lg hover:bg-white hover:bg-opacity-10" onClick={toggleShowAll}>
                    <span className='mr-2'>Masquer</span>
                    <div className='flex justify-center items-center'>
                      <FaAngleUp className="w-4 h-auto fill-white" />
                    </div>
                  </button>
                )}
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