import { HomeIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { BookCheck } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { cn } from '../lib/utils';
import { useCartStoreListener } from '@/lib/store/cart-store';

const BottomNavigationBar = ({ className }: { className?: string }) => {
    // Get total items from Zustand store
    const { count } = useCartStoreListener()

    const navItems = [
        { name: 'Home', icon: HomeIcon, path: '/' },
        { name: 'Search', icon: MagnifyingGlassIcon, path: '/shopping' },
        { name: 'Cart', icon: ShoppingCartIcon, path: '/cart' },
        { name: 'Blog', icon: BookCheck, path: '/#blog-post' },
    ];

    return (
        <nav className={cn("fixed bottom-0 left-0 right-0 w-full h-16 bg-white border-t border-gray-100 md:hidden z-50", className)}>
            <div className="flex justify-around items-center h-full">
                {navItems.map((item) => (
                    <NavLink
                        key={item.name}
                        to={item.path}
                        className={({ isActive }) =>
                            `relative flex flex-col items-center justify-center w-full h-full transition-colors duration-200 ${isActive
                                ? (item.name === 'Blog' ? 'text-gray-400 hover:text-muted' : 'text-muted')
                                : 'text-gray-400 hover:text-muted'
                            }`
                        }
                    >
                        {({ isActive }) => (
                            <>
                                {/* Wrapper for the Icon and Badge */}
                                <div className="relative">
                                    <item.icon className="h-6 w-6" />

                                    {/* Render badge only if item is 'Cart' and count > 0 */}
                                    {item.name === 'Cart' && count > 0 && (
                                        <span className="absolute -top-1.5 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[9px] font-black text-white ring-2 ring-white">
                                            {count}
                                        </span>
                                    )}
                                </div>

                                <span className="text-[10px] font-bold mt-1 uppercase tracking-tight">{item.name}</span>


                                {/* Optional: Indicator bar for active state instead of border-t to avoid layout shift */}
                                <div className={
                                    cn("absolute top-0 h-0.5 w-8 bg-muted transition-opacity", isActive ?
                                        (item.name === 'Blog' ? "opacity-0" : "opacity-100") : "opacity-0")
                                } />
                            </>
                        )}
                    </NavLink>
                ))}
            </div>
        </nav>
    );
};

export default BottomNavigationBar;
