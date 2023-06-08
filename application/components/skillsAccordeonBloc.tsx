import React, { useState, useEffect } from "react";
import { Loader } from "./loader";
import Accordeon from './skillsAccordeon'
import "./skillsAccordeonBloc.css";

type Props = {
    activeSection: number;
};

const SkillsAccordeon = ({ activeSection }: Props) => {

    // const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //   setTimeout(() => {
    //     setIsLoading(false);
    //   }, 1000);
    // }, []);

    // const [expanded, setExpanded] = useState<false | number>(0);
    // const [expanded2, setExpanded2] = useState<false | number>(0);

    // return <div className='w-full flex flex-col lg:flex-row flex-nowrap'>
    //   {isLoading ? (
    //     <Loader />
    //   ) : (
    //     <>
    //         <div className={activeSection === 1 ? ' hidden' : 'w-full flex justify-center'}>
    //             <div className="w-full flex flex-col mx-4">
    //                 {
    //                     accordionData1.map(accordion => <Accordeon id={accordion.id} title={accordion.title} categorie={accordion.categorie} imagePath={accordion.imagePath} content={accordion.content} expanded={expanded} setExpanded={setExpanded} />)
    //                 }
    //             </div>
    //         </div>
    //         <div className={activeSection === 1 ? ' hidden' : 'w-full flex justify-center'}>
    //             <div className="w-full flex flex-col mx-4">
    //                 {
    //                     accordionData2.map(accordion => <Accordeon id={accordion.id} title={accordion.title} categorie={accordion.categorie} imagePath={accordion.imagePath} content={accordion.content} expanded={expanded2} setExpanded={setExpanded2} />)
    //                 }
    //             </div>
    //         </div>
    //     </>
    //   )}
    // </div>
};

export default SkillsAccordeon;