'use client';

import React, {useState} from 'react';
import Link from 'next/link';
import {Menu, X} from 'lucide-react';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false); // Menu Closed by default

    const toggleMenu = () => setIsOpen(!isOpen); // Sets isOpen to its opposite

    return (
        <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/20 text-white px-6 py-6 shadow-md">
            <div className="flex justify-between items-center">

                <div className="text-xl font-bold">
                    <Link href="/">Pacific Design</Link>
                </div>

                {/* Desktop */}
                <div className="hidden md:flex space-x-6">
                    <Link href="#about" className='hover:underline'>About</Link>
                    <Link href="#services" className='hover:underline'>Services</Link>
                    <Link href="#reviews" className='hover:underline'>Reviews</Link>
                    <Link href="#contact" className='hover:underline'>Contact</Link>
                </div>

                {/* Mobile */}
                <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none">
                    {isOpen ? <X size={24} /> : <Menu size={24}/>}
                </button>
            </div>

            {/* Mobile Droopdown */}
            {isOpen && (
                <div className="md:hidden mt-4 flex flex-col space-y-4">
                    <Link href="#about" className='hover:underline'>About</Link>
                    <Link href="#services" className='hover:underline'>Services</Link>
                    <Link href="#reviews" className='hover:underline'>Reviews</Link>
                    <Link href="#contact" className='hover:underline'>Contact</Link>
                </div>
            )}
        </nav>
    );
}

export default Navbar;