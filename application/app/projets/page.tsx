'use client'

import { Suspense } from 'react';
import NavigationBar from '../../components/navigationBar';
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
                            <div className="grid grid-flow-row-dense grid-cols-3 gap-4 my-10">
                                <div className="col-span-2 h-[200px] bg-zinc-500 rounded-md p-2">01</div>
                                <div className="h-[200px] bg-zinc-500 rounded-md p-2">02</div>
                                <div className="h-[200px] bg-zinc-500 rounded-md p-2">03</div>
                                <div className="col-span-2 h-[200px] bg-zinc-500 rounded-md p-2">04</div>
                                <div className="h-[200px] bg-zinc-500 rounded-md p-2">05</div>
                                <div className="h-[200px] bg-zinc-500 rounded-md p-2">06</div>
                                <div className="h-[200px] bg-zinc-500 rounded-md p-2">07</div>
                            </div>
                        </div>
                    </section>
                </Suspense>
                <Footer />
            </Suspense>
        </div>
    )
  }
  