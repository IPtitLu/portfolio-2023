'use client'

import { Suspense, useState } from 'react';
import NavigationBar from '../../components/nav/navigationBar';
import { Loader } from '../../components/loader';
import Footer from '@/components/footer';
import Link from 'next/link';
import Modal from '../../components/modal/projectModal';

const projectNames = [
    'Walk of Art', 'Swoaper'
    //, 'Portfolio 2023', 'Kropeo', 'Carpool', 'Outil de compte rendu'
];

export default function Projets() {
    const [selectedProject, setSelectedProject] = useState<string | null>(null);

    return (
        <div className='w-full bg-dark relative'>
            <Suspense fallback={Loader()}>
                <Suspense fallback={Loader()}>
                    <NavigationBar />
                </Suspense>
                <Suspense fallback={Loader()}>
                    <section id='projets' className='w-full pb-[-50px] bg-[url("/bg1.svg")] bg-cover bg-right lg:bg-center overflow-hidden'>
                        {selectedProject && <Modal projectName={selectedProject} onClose={() => setSelectedProject(null)} />}
                        <div className='max-w-screen-lg mx-auto flex flex-col'>
                            <h2 className='font-montserrat text-xl text-center mt-10'>Projets réalisés</h2>
                            <div className="grid grid-flow-row-dense grid-cols-1 lg:grid-cols-2 gap-8 my-10">
                                {projectNames.map(project => (
                                    <div
                                        key={project}
                                        className={`h-[300px] bg-zinc-500 rounded-md p-2 relative lg:hover:scale-105 transition-transform ease-in-out duration-300 lg:mx-0 mx-4 cursor-pointer`}
                                        style={{ backgroundImage: `url('/projets/${project.toLowerCase().replace(/ /g, '-')}.png')`, backgroundSize: 'cover' }}
                                        onClick={() => setSelectedProject(project)}
                                    >
                                        <div className='absolute left-0 bottom-0 mb-4 ml-2 text-white font-bold bg-light-dark rounded-md p-2 mt-2'>{project}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </Suspense>
                <Footer />
            </Suspense>
        </div>
    )
}
