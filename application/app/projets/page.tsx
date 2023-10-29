'use client'

import { Suspense } from 'react';
import NavigationBar from '../../components/nav/navigationBar';
import { Loader } from '../../components/loader';
import Image from 'next/image';
import Footer from '@/components/footer';

export default function Projets() {
    return (
        <div className='w-full bg-dark relative'>
            <Suspense fallback={Loader()}>
                <Suspense fallback={Loader()}>
                    <NavigationBar />
                </Suspense>
                <Suspense fallback={Loader()}>
                    <section id='projets' className='w-full pb-[-50px] bg-[url("/bg1.svg")] bg-cover bg-right lg:bg-center overflow-hidden'>
                        <div className='max-w-screen-lg mx-auto flex flex-col'>
                            <h2 className='font-montserrat text-xl text-center mt-10'>Projets - Coming soon</h2>
                            <div className="grid grid-flow-row-dense grid-cols-1 lg:grid-cols-2 gap-4 my-10">
                                <div className="bg-[url('/projets/woa-1.png')] bg-cover h-[300px] bg-zinc-500 rounded-md p-2 relative lg:hover:scale-105 transition-transform ease-in-out duration-300 lg:mx-0 mx-4">
                                    <div className='absolute left-0 bottom-0 mb-4 ml-2 text-white font-bold bg-light-dark rounded-md p-2 mt-2'>Walk of Art</div>
                                </div>
                                <div className="bg-[url('/projets/swoaper.png')] bg-cover h-[300px] bg-zinc-500 rounded-md p-2 relative lg:hover:scale-105 transition-transform ease-in-out duration-300 lg:mx-0 mx-4">
                                    <div className='absolute left-0 bottom-0 mb-4 ml-2 text-white font-bold bg-light-dark rounded-md p-2 mt-2'>Swoaper</div>
                                </div>
                                <div className="bg-[url('/projets/portfolio-2023.png')] bg-cover h-[300px] bg-zinc-500 rounded-md p-2 relative lg:hover:scale-105 transition-transform ease-in-out duration-300 lg:mx-0 mx-4">
                                    <div className='absolute left-0 bottom-0 mb-4 ml-2 text-white font-bold bg-light-dark rounded-md p-2 mt-2'>Portfolio 2023</div>
                                </div>
                                <div className="bg-[url('/projets/company-finder.png')] bg-cover h-[300px] bg-zinc-500 rounded-md p-2 relative lg:hover:scale-105 transition-transform ease-in-out duration-300 lg:mx-0 mx-4">
                                    <div className='absolute left-0 bottom-0 mb-4 ml-2 text-white font-bold bg-light-dark rounded-md p-2 mt-2'>Company Finder</div>
                                </div>
                                <div className="bg-[url('/projets/carpool-1.png')] bg-cover h-[300px] bg-zinc-500 rounded-md p-2 relative lg:hover:scale-105 transition-transform ease-in-out duration-300 lg:mx-0 mx-4">
                                    <div className='absolute left-0 bottom-0 mb-4 ml-2 text-white font-bold bg-light-dark rounded-md p-2 mt-2'>Carpool</div>
                                </div>
                                <div className="bg-[url('/projets/outil-cr-vlabs.png')] bg-cover h-[300px] bg-zinc-500 rounded-md p-2 relative lg:hover:scale-105 transition-transform ease-in-out duration-300 lg:mx-0 mx-4">
                                    <div className='absolute left-0 bottom-0 mb-4 ml-2 text-white font-bold bg-light-dark rounded-md p-2 mt-2'>Outil de compte rendu</div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Suspense>
                <Footer />
            </Suspense>
        </div>
    )
}
