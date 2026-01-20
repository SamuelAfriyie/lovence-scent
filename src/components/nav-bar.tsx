import { NavLink, Link } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { cn } from '../lib/utils';
import { useCartStoreListener } from '@/lib/store/cart-store';
import logo from "../assets/logo.jpg";

interface NavBarProps {
    className?: string,
    variant?: 'outline' | "primary"
}

const NavBar = ({ className, variant = "primary" }: NavBarProps) => {
    const { count } = useCartStoreListener();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Shop Online', path: '/shopping' },
        // { name: 'Products', path: '/products' },
        { name: 'Blog', path: '/blogs' },
        { name: 'Contact Us', path: '/contact' },
    ];

    return (
        // < nav className="bg-white shadow-md border-b border-gray-200" >
        < nav className={cn("bg-white shadow-sm border-b border-gray-200 transition duration-300 hidden lg:inline-block", className)}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Logo/Brand Area */}
                    <div className="shrink-0 flex items-center "> 
                            <img src={logo} sizes='12' className='size-14 rounded-full'/> 
                    </div>

                    {/* Navigation Links (Desktop/Tablet view) */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    className={({ isActive }) =>
                                        cn("px-3 py-2 rounded-md text-sm font-bold transition-colors ", isActive
                                            ? variant === "outline" ? 'text-shadow-white' : 'text-primary'
                                            : variant === "outline" ? 'text-white hover:text-white' : 'text-muted hover:text-primary')
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            ))}

                            {/* Cart Link/Icon */}
                            <Link
                                to="/cart"
                                className="relative text-gray-500 hover:text-gray-900 px-3 py-2 flex items-center bg-gray-100 rounded-sm transition-all"
                            >
                                {/* The Icon */}
                                <div className="relative">
                                    <ShoppingCartIcon className='h-6 w-6 text-primary' />

                                    {/* The Badge */}
                                    {count > 0 && (
                                        <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-white ring-2 ring-inset ring-white">
                                            {count}
                                        </span>
                                    )}
                                </div>

                                <span className={cn('ml-3 text-sm font-medium text-primary')}>CART</span>
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