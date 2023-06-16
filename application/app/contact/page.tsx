'use client'

import Footer from '@/components/footer';
import { Loader } from '@/components/loader';
import NavigationBar from '@/components/navigationBar';
import { motion } from 'framer-motion';
import { Suspense, useEffect, useState } from 'react';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isStylesLoaded, setIsStylesLoaded] = useState(false);

    useEffect(() => {
        // Marquer les styles comme chargés après un court délai
        const timeout = setTimeout(() => {
        setIsStylesLoaded(true);
        }, 100);

        // Nettoyer le délai d'attente lorsque le composant est démonté
        return () => clearTimeout(timeout);
    }, []);


    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
  
        if (!validateForm()) {
        return;
        }
    
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                body: JSON.stringify({ email, content }),
            });
        
            if (response.ok) {
                console.log('Message envoyé avec succès !');
                setEmail('');
                setContent('');
            } else if (response.status === 429) {
                console.error('Too many requests from this IP, please try again later.');
                setErrorMessage('Vous avez envoyé trop de messages, ressayez plus tard.');
            } else {
                console.log(response);
                console.error('Error sending email:', response.statusText);
                setErrorMessage("Un problème technique est survenu lors de l'envoi du message. Contactez moi directement via cet email : lucasperez.dev.pro@gmail.com");
            }
        } catch (error) {
        console.error('Error sending email:', error);
        setErrorMessage("Un problème technique est survenu lors de l'envoi du message. Contactez moi directement via cet email : lucasperez.dev.pro@gmail.com.");
        }
    };

    const validateForm = () => {
        if (!email || !content) {
        setErrorMessage('Remplissez tout le formulaire.');
        return false;
        }
    
        if (!isValidEmail(email)) {
        setErrorMessage('Renseignez une adresse email valide.');
        return false;
        }
    
        if (content.length > 500) {
        setErrorMessage('Le contenu ne doit pas excéder 500 caractères.');
        return false;
        }
    
        setErrorMessage('');
        return true;
    };
  
    const isValidEmail = (email: string): boolean => {
        // Utilisez une expression régulière pour vérifier si l'e-mail est valide
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <div className='w-full bg-dark relative'>
                    <NavigationBar />
                    <section id='projets' className='w-full pb-[-50px] bg-[url("/bg1.svg")] bg-cover bg-right lg:bg-center overflow-hidden'>
                        <motion.div 
                            className='max-w-screen-lg my-32 mx-auto flex flex-col justify-center items-center'
                            initial={{ x: -2000 }}
                            animate={{ x: 0 }}
                            transition={{ type: "spring", stiffness: 60, delay: (1) }}
                        >
                            {isStylesLoaded ? ( // Afficher le formulaire une fois les styles chargés
                                <form onSubmit={handleSubmit} className='lg:w-1/2 w-full px-10 py-10 bg-light-dark shadow-xl lg:rounded-lg rounded-none'>
                                    <div className='mb-10'>
                                        <label htmlFor="email" className='mb-10 font-montserrat text-xl'>Email</label>
                                        <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={handleEmailChange}  placeholder='email@example.com'
                                        className='appearance-none block w-full bg-light-dark/50 text-white border-2 border-gray-500 rounded py-3 px-4 mb-3 mt-4 leading-tight focus:outline-none  focus:border-orange focus:bg-light-dark/20'
                                        />
                                    </div>
                                    <div className='mb-4'>
                                        <label htmlFor="content" className='mb-4 font-montserrat text-xl'>Contenu</label>
                                        <textarea id="content" value={content} onChange={handleContentChange} placeholder='Votre projet en quelques mots.. '
                                        className='no-resize appearance-none block w-full bg-light-dark/50 text-white border-2 border-gray-500 rounded py-3 px-4 mb-3 mt-4 leading-tight focus:outline-none  focus:border-orange focus:bg-light-dark/20 h-48 resize-none'/>
                                    </div>
                                    {errorMessage && <div className='mb-4 text-orange'>{errorMessage}</div>}
                                    <button 
                                        type="submit" 
                                        className='border-2 border-orange rounded-md py-2 px-4 hover:bg-orange hover:text-dark ease-in-out duration-300'
                                    >
                                        <span className='text-2xl font-semibold'>Envoyer</span>
                                    </button>
                                </form>
                            ) : (
                                <Loader />
                            )}
                            
                        </motion.div>
                    </section>
                <Footer />
        </div>
    );
    };

export default ContactForm;