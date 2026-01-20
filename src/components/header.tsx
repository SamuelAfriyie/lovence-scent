import { cn } from '../lib/utils';
import HeroCarousel from './hero-carousel';
import NavBar from './nav-bar';

interface HeaderProps {
    isScrolled: boolean
}

const Header = ({ isScrolled }: HeaderProps) => {
    return (
        <header>
            <NavBar variant='outline' className={cn('bg-transparent border-transparent fixed top-7 w-full text-white z-50 shadow-none', isScrolled && "hidden")} />
            <HeroCarousel />
            <NavBar className={cn("w-full", isScrolled && 'fixed top-7 left-0 right-0 mb-20 z-50')} />
        </header>
    );
};

export default Header;
