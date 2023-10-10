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
					<section id='projets' className='w-full h-screen pb-[-50px] bg-[url("/bg1.svg")] bg-cover bg-right lg:bg-center overflow-hidden'>
						<div className='max-w-screen-lg mx-auto flex flex-col'>
							<h3 className='font-montserrat text-3xl font-bold ml-4 my-10 text-center'>Projets</h3>
							<div className='w-full flex flex-row'>
								<div className='flex-1 flex justify-center items-center py-10 px-4'>
									<Image
										src={"/company-finder.png"}
										alt={"projet 1"}
										className="w-full rounded-lg"
										width={500}
										height={500}
										priority
									/>
								</div>
								<div className='flex-1'></div>
							</div>
						</div>
					</section>
				</Suspense>
				<Footer />
			</Suspense>
		</div>
	)
}
