import React, { useEffect } from 'react'

export const Navbar = ({ menuOpen, setMenuOpen }) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen])
    return (
        <nav className='fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg'>
            <div className='max-w-5xl mx-auto px-4'>
                <div className='flex justify-between items-center h-16'>
                    <a href='#home' className='font-mono text-2xl font-bold text-white'>
                        {" "}
                        PORTFOLIO<span className='text-blur-500 text-cyan-400'> PORTAL</span>{" "}
                    </a>
                    <div className='w-7 h-5 relative cursor-pointer z-40 md:hidden' onClick={() => setMenuOpen(!menuOpen)}>
                        &#9776;
                    </div>
                    <div className={`hidden md:flex space-x-8 ${menuOpen ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"}`}>
                        <a href='#home' className='text-white hover:text-blur-500 transition-colors duration-300 ease-in-out'>Home</a>
                        <a href='#about' className='text-white hover:text-blur-500 transition-colors duration-300 ease-in-out'>About</a>
                        <a href='#projects' className='text-white hover:text-blur-500 transition-colors duration-300 ease-in-out'>Projects</a>
                        <a href='#contact' className='text-white hover:text-blur-500 transition-colors duration-300 ease-in-out'>Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
