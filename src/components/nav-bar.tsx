import { NavLink, Link } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { cn } from '../lib/utils';

interface NavBarProps {
    className?: string,
    variant?: 'outline' | "primary"
}

const NavBar = ({ className, variant = "primary" }: NavBarProps) => {
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Shop Online', path: '/shop' },
        { name: 'Products', path: '/products' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact Us', path: '/contact' },
    ];

    return (
        // < nav className="bg-white shadow-md border-b border-gray-200" >
        < nav className={cn("bg-white shadow-md border-b border-gray-200 transition duration-300 hidden lg:inline-block", className)}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Logo/Brand Area */}
                    <div className="shrink-0 flex items-center">
                        <span className="text-2xl font-bold text-gray-800">Your Logo</span>
                    </div>

                    {/* Navigation Links (Desktop/Tablet view) */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    className={({ isActive }) =>
                                        cn("px-3 py-2 rounded-md text-sm font-bold transition-colors", isActive
                                            ? variant === "outline"? 'text-shadow-white' : 'text-gray-900'
                                            : variant === "outline" ? 'text-white hover:text-white' : 'text-gray-500 hover:text-gray-900')
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            ))}

                            {/* Cart Link/Icon */}
                            <Link to="/cart" className="text-gray-500 hover:text-gray-900 px-3 py-2 flex items-center bg-gray-100 rounded-sm">
                                <ShoppingCartIcon className='h-6 w-6' />
                                <span className={cn('ml-1 text-sm font-medium')}>CART</span>
                            </Link>
                        </div>
                    </div>

                    {/* Note: A mobile hamburger menu would typically go here for screens < md */}
                </div>
            </div>
        </nav >
    )
}

export default NavBar;