import React from 'react'
import { RevealOnScroll } from '../RevealOnScroll';

export const Home = () => {
    return (
        <section id="home" className='min-h-screen flex items-center justify-center relative'>
            <RevealOnScroll>
                <div className='text-center z-10 px-4'>
                    <h1 className='text-5xl md:text-7xl font-bold mb-6 bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right'>Hi,I'm Nischal V U</h1>
                    <p className='text-gray-400 text-lg md-8 max-w-lg mx-auto'>
                        Developed scalable backend solutions using Core Python, enhancing web platform performance and increasing application
                        efficiency. Designed and optimized MySQL database schemas, reducing query execution time and improving dynamic
                        content delivery speed. Collaborated closely with frontend developers to integrate server-side logic with HTML5, CSS, and
                        JavaScript, elevating user interface responsiveness. Implemented security protocols that decreased potential vulnerabilities,
                        strengthening system reliability and user data protection.
                    </p>
                    <div className='flex justify-center space-x-4 mt-3'>
                        <a href='#projects' className='border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:bg-blue-500/50 hover:text-white hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]'>
                            View Projects
                        </a>
                        <a href='#projects' className='border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:bg-blue-500/50 hover:text-white hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]'>
                            Contact Me
                        </a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
