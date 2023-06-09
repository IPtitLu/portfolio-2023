'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion } from "framer-motion";

const navigation = [
    { name: 'A propos', href: '#about', class: 'ml-4 mr-2 text-xl hover:text-orange hover:border-b-2 border-0 border-orange', activeClass: 'ml-4 mr-2 text-xl border-b-2 border-orange hover:text-orange' },
    { name: 'Portfolio', href: '/projets', class: 'ml-2 mr-4 text-xl hover:text-orange hover:border-b-2 border-0 border-orange', activeClass: 'ml-4 mr-2 text-xl border-b-2 border-orange hover:text-orange' },
    { name: 'Contact', href: '/contact', class: 'text-xl hover:text-orange hover:border-b-2 border-0 border-orange', activeClass: 'ml-4 mr-2 text-xl border-b-2 border-orange hover:text-orange' },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function navigationBar() {
    const pathname = usePathname();

    return (
        <Disclosure as="nav" className="sticky top-0 z-50 w-full bg-dark/25 shadow-lg hover:bg-dark ease-in-out duration-300">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 lg:px-6 lg:px-8">
                        <motion.div className='relative max-w-screen-lg flex flex-col lg:flex-row mx-auto py-4 justify-center lg:justify-between px-10 xl:px-0'
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-orange hover:text-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-8 w-8" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center lg:items-stretch lg:justify-between">
                                <Link
                                    href="/"
                                >
                                    <h1 className="text-4xl font-montserrat text-right lg:text-center lg:mb-0">Lucas <span className="text-orange font-montserrat">Perez</span></h1>
                                </Link>
                                <ul className="hidden lg:flex lg-flex flex-row items-center">
                                    <li>
                                        <Link
                                            href="#about"
                                            className={pathname === '/' ? "ml-4 mr-2 text-xl border-b-2 border-orange hover:text-orange" : "ml-4 mr-2 text-xl hover:text-orange hover:border-b-2 border-0 border-orange"}
                                        >
                                            A propos
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="projets"
                                            className={pathname === '/projets' ? "ml-4 mr-2 text-xl border-b-2 border-orange hover:text-orange" : "ml-2 mr-4 text-xl hover:text-orange hover:border-b-2 border-0 border-orange"}
                                        >
                                            Portfolio
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="contact"
                                            className={pathname === '/contact' ? "ml-4 mr-2 text-xl border-b-2 border-orange hover:text-orange" : "text-xl hover:text-orange hover:border-b-2 border-0 border-orange"}
                                        >
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>

                    <Disclosure.Panel className="lg:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2 flex flex-col">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames('text-xl bg-light-dark mx-10 px-4 py-2 rounded-lg')}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
