'use client'

import { useState } from "react";
import { motion } from "framer-motion";

const navigation = [
    { name: 'Moi', href: '#', current: true },
    { name: 'kills', href: '#', current: false },
    { name: 'Portfolio', href: '#', current: false },
    { name: 'Expériences', href: '#', current: false },
]

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return <div className="w-full bg-dark shadow-lg ">
        <motion.div className='max-w-screen-lg flex flex-col lg:flex-row mx-auto py-4 justify-center lg:justify-between px-10 xl:px-0'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="text-4xl font-montserrat text-center mb-4 lg:mb-0">Lucas <span className="text-orange font-montserrat">Perez</span></h1>
            <ul className="hidden lg:flex lg-flex flex-row items-center">
                <li className="text-lg hover:text-orange hover:border-b-2 border-0 border-orange">Moi</li>
                <li className="ml-4 mr-2 text-lg hover:text-orange hover:border-b-2 border-0 border-orange">Skills</li>
                <li className="ml-2 mr-4 text-lg hover:text-orange hover:border-b-2 border-0 border-orange">Portfolio</li>
                <li className="text-lg hover:text-orange hover:border-b-2 border-0 border-orange">Expériences</li>
            </ul>
            <motion.ul
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full flex lg:hidden flex-row justify-center flex-wrap"
            >
                <motion.li className="w-1/2 text-right pr-4 py-1 text-xl">Moi</motion.li>
                <motion.li className="w-1/2 pl-4 py-1 text-xl">Skills</motion.li>
                <motion.li className="w-1/2 text-right pr-4 py-1 text-xl">Portfolio</motion.li>
                <motion.li className="w-1/2 pl-4 py-1 text-xl">Expériences</motion.li>
            </motion.ul>
        </motion.div>
    </div >;
}

export default Navbar;