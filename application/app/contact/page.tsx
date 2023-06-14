'use client'

import { Suspense } from 'react';
import NavigationBar from '../../components/navigationBar';
import { Loader } from '../../components/loader';
import Link from 'next/link';
import { FaArrowDown, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Footer from '@/components/footer';

export default function Contact() {
    return (
        <div className='w-full bg-dark relative'>
            <Suspense fallback={Loader()}>
                
                <Suspense fallback={Loader()}>
                    <NavigationBar />
                </Suspense>
                <Suspense fallback={Loader()}>
                    <section id='home' className='w-full h-screen pb-[-50px] bg-[url("/bg1.svg")] bg-cover bg-right lg:bg-center overflow-hidden'>
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
                        </motion.div>
                    </div>
                    </section>
                </Suspense>
            </Suspense>
            <Footer />
        </div>
    )
  }
  