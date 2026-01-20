import { Outlet } from 'react-router-dom';
import BottomNavigationBar from './components/bottom-nav-bar';

import { useState, useEffect } from 'react';
import { MdArrowUpward } from 'react-icons/md';
import { cn } from './lib/utils';

function AppLayout() {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down 400px
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className="min-h-screen relative">
            <div className='flex w-full justify-end lg:px-26 text-xs font-bold py-2 fixed top-0 z-50 bg-black'>
                <span className='pr-2 text-white font-mono uppercase tracking-tighter'>
                    CALL US TODAY! (+233) 059-198-3224
                </span>
            </div>

            <Outlet />

            {/* Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                className={cn(
                    "fixed right-6 bottom-20 z-40 p-3 rounded-full bg-accent text-white shadow-2xl transition-all duration-300 ring-inset ring-2 ring-transparent hover:ring-white",
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
                )}
            >
                <MdArrowUpward size={24} />
            </button>

            <BottomNavigationBar />
        </div>
    );
}

export default AppLayout; 