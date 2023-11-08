import React from 'react';
import { FaCss3Alt, FaDocker, FaExternalLinkAlt, FaFigma, FaHtml5, FaJsSquare, FaNodeJs, FaPhp, FaReact, FaSymfony, FaTimes } from 'react-icons/fa'; // Assurez-vous d'importer FaTimes correctement
import Carousel from '../carousel';

// Ajoutez cette interface si vous ne l'avez pas déjà fait
interface ModalProps {
    projectName: string;
    onClose: () => void;
}

const ProjectModal: React.FC<ModalProps> = ({ projectName, onClose }) => {
    const stopPropagation = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
    };

    const projectImages: Record<string, string[]> = {
        'Walk of Art': ['projets/woa-2.png', 'projets/woa-3.png', 'projets/walk-of-art.png'],
        'Swoaper': ['projets/swoaper-2.png', 'projets/swoaper-3.png', 'projets/swoaper.png'],
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={onClose}>
            <div className="relative w-3/4 h-3/4 bg-light-dark rounded-2xl flex items-center justify-center flex-col lg:flex-row gap-1" onClick={stopPropagation}>
                <button
                    className="absolute top-5 right-5 rounded-full focus:outline-none"
                    onClick={onClose}
                >
                    <FaTimes className="w-6 h-auto m-2 hover:fill-orange cursor-pointer" />
                </button>
                <div className='w-4/5 lg:w-3/5 lg:pl-10 mt-4 lg:mt-0'>
                    <Carousel images={projectImages[projectName]} />
                </div>
                <div className='w-4/5 lg:w-2/5 flex items-start lg:pl-10 pr-2 flex-col overflow-y-scroll mt-4 lg:mt-0'>
                    <h2 className='mb-4 font-bold text-2xl mt-4 lg:mt-0 flex flex-row items-center'>
                        {projectName}
                        {projectName === "Swoaper" && (<a href='http://swoaper.com' className='ml-1'><FaExternalLinkAlt className="w-4 h-auto ml-1 my-1 hover:fill-orange" /></a>)}
                    </h2>
                    {projectName === "Walk of Art" ? (
                        <div className='flex flex-col'>
                            <div className='flex space-2 flex-row flex-wrap gap-2 mb-4'>
                                <span className="bg-orange text-light-dark text-xs font-extrabold mr-2 px-2.5 py-0.5 rounded flex flex-row items-center">
                                    Symfony
                                    <FaSymfony className="w-4 h-auto ml-1 my-1" />
                                </span>
                                <span className="bg-orange text-light-dark text-xs font-extrabold mr-2 px-2.5 py-0.5 rounded flex flex-row items-center">
                                    React
                                    <FaReact className="w-4 h-auto ml-1 my-1" />
                                </span>
                                <span className="bg-orange text-light-dark text-xs font-extrabold mr-2 px-2.5 py-0.5 rounded flex flex-row items-center">
                                    Docker
                                    <FaDocker className="w-4 h-auto ml-1 my-1" />
                                </span>
                            </div>
                            <ul className='text-sm pr-2 lg:pr-8'>
                                <li className='mb-2'>Walk of Art : Votre galerie virtuelle pour exposer et gérer des œuvres d'art en France.</li>
                                <li className='mb-2'>Une plateforme intuitive pour les artistes en quête de visibilité et de gestion simplifiée d'expositions.</li>
                                <li className='mb-2'>Un pas dans l'art, une grande enjambée pour la reconnaissance des talents créatifs nationaux.</li>
                            </ul>
                            <ul className='text-sm pr-2 lg:pr-8'>
                                <li className='mb-2'>Back-end Symfony : conception de l'API complète et de sa documentation via Swagger.</li>
                                <li className='mb-2'>Implémentation d'un système d'authentification robuste.</li>
                                <li className='mb-2'>Dockerisation de l'application pour une déploiement et une scalabilité optimisés.</li>
                            </ul>
                        </div>
                    ) : (
                        <div className='flex flex-col'>
                            <div className='flex space-2 flex-row flex-wrap gap-2 mb-4'>
                                <span className="bg-orange text-light-dark text-xs font-extrabold mr-2 px-2.5 py-0.5 rounded flex flex-row items-center">
                                    React
                                    <FaReact className="w-4 h-auto ml-1 my-1" />
                                </span>
                                <span className="bg-orange text-light-dark text-xs font-extrabold mr-2 px-2.5 py-0.5 rounded flex flex-row items-center">
                                    NodeJS
                                    <FaNodeJs className="w-4 h-auto ml-1 my-1" />
                                </span>
                                <span className="bg-orange text-light-dark text-xs font-extrabold mr-2 px-2.5 py-0.5 rounded flex flex-row items-center">
                                    Figma
                                    <FaFigma className="w-4 h-auto ml-1 my-1" />
                                </span>
                            </div>
                            <ul className='text-sm pr-2 lg:pr-8'>
                                <li className='mb-2'>Swoaper, la nouvelle référence en prestations de nettoyage et de dépôt-vente dédiée aux sneakers.</li>
                                <li className='mb-2'>Expertise en Node.js pour la construction d'une base back-end solide et efficace.</li>
                                <li className='mb-2'>Mise en place d'une authentification sécurisée avec JWT Tokens pour protéger les utilisateurs et leurs transactions.</li>
                            </ul>
                            <ul className='text-sm pr-2 lg:pr-8'>
                                <li className='mb-2'>Création et maintenance d'une documentation API détaillée et accessible via Swagger.</li>
                                <li className='mb-2'>Collaboration avec les équipes front, ux-ui, audio visuel et market/communication pour une synergie optimale, visant une expérience utilisateur fluide et sécurisée.</li>
                                <li className='mb-2'>Objectif : établir Swoaper comme la plateforme incontournable du service de sneakers, alliant qualité et technologie.</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
