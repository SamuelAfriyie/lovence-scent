import { HomeIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { BookCheck } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { cn } from '../lib/utils';

const BottomNavigationBar = ({ className }: { className?: string }) => {
    const navItems = [
        { name: 'Home', icon: HomeIcon, path: '/' },
        { name: 'Search', icon: MagnifyingGlassIcon, path: '/search' },
        { name: 'Cart', icon: ShoppingCartIcon, path: '/cart' },
        { name: 'Blog', icon: BookCheck, path: '/blog' },
    ];

    return (
        <nav className={cn("fixed bottom-0 left-0 right-0 w-full h-16 bg-white shadow-lg md:hidden", className)}>
            <div className="flex justify-around items-center h-full">
                {navItems.map((item) => (
                    <NavLink
                        key={item.name}
                        to={item.path}
                        className={({ isActive }) =>
                            `flex flex-col items-center justify-center p-2 transition-colors duration-200 ${isActive
                                ? 'text-blue-600 border-t-2 border-blue-600' // Active state styling
                                : 'text-gray-500 hover:text-blue-600' // Inactive state styling
                            }`
                        }
                    >
                        <item.icon className="h-6 w-6" />
                        <span className="text-xs mt-1">{item.name}</span>
                    </NavLink>
                ))}
            </div>
        </nav>
    );
};

export default BottomNavigationBar;
