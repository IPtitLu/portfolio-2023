import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./portfolioImageBloc.css";
import FilterButtons from "./filterButton";
import data from "./dataPortfolio.json";
import Image from 'next/image';
import { Loader } from "./loader";

export default function PortfolioImageBloc() {
  const [displayData, setDisplayData] = useState(data);
  const [active, setActive] = useState("Tous");
  const [isLoading, setIsLoading] = useState(true);

  const handlecategorieClick = (categorie: string) => {
    if (categorie === active) return;
    setActive(categorie);
    setDisplayData([]);

    if (categorie === "Tous") {
      setDisplayData(data);
      return;
    }

    const filteredData = data.filter(
      (item) => item.categorie === categorie
    );
      setDisplayData(filteredData);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    
    <div className="w-full py-10">
      {isLoading ? (
        <Loader />
      ) : (
        <>
        <div className='flex flex-col lg:flex-row mb-10 bg-light-dark rounded-xl py-2 px-2'>
            <FilterButtons active={active} handleClick={handlecategorieClick} />
        </div>
        <div className="grid grid-col-3 gap-2">
            <AnimatePresence>
            {displayData.map(({ imagePath }, i) => (
                    <motion.div
                        style={{ overflow: "hidden" }}
                        key={i}
                        layout
                        initial={{ transform: "scale(0)" }}
                        animate={{ transform: "scale(1)" }}
                        exit={{ transform: "scale(0)" }}
                        className="cursor-pointer rounded-lg"
                    >
                    <Image
                        src={imagePath}
                        alt={imagePath}
                        className="w-full"
                        width={500}
                        height={500}
                        priority
                    />
                    </motion.div>
            ))}
            </AnimatePresence>
        </div>
        </>
      )}
    </div>
  );
}
