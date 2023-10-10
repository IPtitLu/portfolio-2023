'use client'

import { Suspense } from 'react';
import NavigationBar from '../../components/navigationBar';
import { Loader } from '../../components/loader';
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

					</section>
				</Suspense>
			</Suspense>
			<Footer />
		</div>
	)
}
