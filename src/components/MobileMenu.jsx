import React from 'react'

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
    const handleCloseMenu = () => setMenuOpen(false)

    return (
        <div className={`fixed top-0 left-0 w-full bg-black/50 z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}`} onClick={handleCloseMenu}>
            <button onClick={handleCloseMenu} className='absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer' aria-label="Close menu">&times;</button>
            <a href='#home' onClick={handleCloseMenu} className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-"} `}>Home</a>
            <a href='#about' onClick={handleCloseMenu} className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"} `}>About</a>
            <a href='#projects' onClick={handleCloseMenu} className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"} `}>Projects</a>
            <a href='#contact' onClick={handleCloseMenu} className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"} `}>Contact</a>
        </div>
    );
}