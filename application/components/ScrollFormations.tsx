import { useRef, InputHTMLAttributes, forwardRef } from 'react'
import { motion, useScroll } from "framer-motion";
import { FaArrowRight } from 'react-icons/fa'
import "./scrollFormations.css";

interface props extends InputHTMLAttributes<HTMLInputElement> {
    active: boolean;
}

export type Ref = HTMLInputElement;

const ScrollFormations = forwardRef<Ref, props>(({ active = true }, Ref) => {
    const ref = useRef(null);
    const { scrollXProgress } = useScroll({ container: ref });

    return (
        <div className={!active ? ' hidden' : 'w-full flex justify-center'}>
            <ul className='tab-ul w-full' ref={ref}>
                <li className='tab-content text-white rounded-2xl flex items-start justify-between pt-10 px-4 flex-row'>
                    <div className='w-full lg:w-4/6 flex-col'>
                        <div className='w-fit'>
                            <h4 className='font-bold text-2xl pb-2 mb-6 border-b-2 border-orange'>2018-2019</h4>
                        </div>
                        <p className=''>Baccalauréat - option SIG ( Sciences de l'Information et de la Gestion ) Mention bien</p>
                    </div>
                    <div className='h-full'>
                        <FaArrowRight size={24} className='m-2' />
                    </div>
                </li>
                <li className='tab-content text-white rounded-2xl flex items-start justify-between pt-10 px-4 flex-row'>
                    <div className='w-full lg:w-4/6 flex-col'>
                        <div className='w-fit'>
                            <h4 className='font-bold text-2xl pb-2 mb-6 border-b-2 border-orange'>2019-2021</h4>
                        </div>
                        <p className=''>Brevet de Technicien Supérieur - option SIO ( Sciences de l'Informatique Organisationnelle )</p>
                    </div>
                    <div className='h-full'>
                        <FaArrowRight size={24} className='m-2' />
                    </div>
                </li>
                <li className='tab-content text-white rounded-2xl flex items-start justify-between pt-10 px-4 flex-row'>
                    <div className='w-full lg:w-4/6 flex-col'>
                        <div className='w-fit'>
                            <h4 className='font-bold text-2xl pb-2 mb-6 border-b-2 border-orange'>2021-2022</h4>
                        </div>
                        <p className=''>Bachelor Développeur Web</p>
                    </div>
                    <div className='h-full'>
                        <FaArrowRight size={24} className='m-2' />
                    </div>
                </li>
                <li className='tab-content text-white rounded-2xl flex items-start justify-between pt-10 px-4 flex-row'>
                    <div className='w-full lg:w-4/6 flex-col'>
                        <div className='w-fit'>
                            <h4 className='font-bold text-2xl pb-2 mb-6 border-b-2 border-orange'>2022-2023</h4>
                        </div>
                        <p className=''>Master Expert Développeur Web</p>
                    </div>
                </li>
            </ul>
        </div>
    );
})

export default ScrollFormations;