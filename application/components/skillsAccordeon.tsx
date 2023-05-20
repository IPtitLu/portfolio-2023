import React, { useEffect } from "react"; 
import { motion, AnimatePresence } from "framer-motion";
import SkillsContent from "./skillsContent";
import { SetStateAction, Dispatch } from 'react';
import Image from 'next/image';

type Props = {
    id: number,
    title: string,
    categorie: string,
    imagePath: string,
    content: string,
    expanded: boolean | number,
    setExpanded: Dispatch<SetStateAction<false | number>>
};


const Accordeon = (props: Props) => {
    const isOpen = props.id === props.expanded;

    useEffect(() => {
        console.log("id : ", props.id)
    }, []);

    return (
        <motion.div 
            key={String(props.id)}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <motion.header
                initial={false}
                className="px-4 py-8 drop-shadow-xl hover:ring hover:ring-orange ease-out duration-200"
                animate={{ backgroundColor: isOpen ? "#FFFFFF50" : "#FFFFFF20", marginBottom: isOpen ? " margin-bottom: 0px" : "margin-bottom: 4px" }}
                onClick={() => props.setExpanded(isOpen ? false : props.id)}
            >
                <div className="w-full h-full flex flex-row justify-around items-center">
                    <div className="w-4/5 flex items-center justify-start">
                        <h4 className="text-xl mr-4">{props.title}</h4>
                        <div className="bg-orange/50 py-1 px-1 rounded-lg text-sm">{props.categorie}</div>
                    </div>
                    <Image
                        src={props.imagePath}
                        alt={props.title}
                        className="w-20 h-auto"
                        width={500}
                        height={500}
                        priority
                    />
                </div>
            </motion.header >
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.section
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "auto" },
                            collapsed: { opacity: 0, height: 0 }
                        }}
                        transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                        <SkillsContent content={props.content} />
                    </motion.section>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Accordeon;