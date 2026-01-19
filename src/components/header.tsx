import { cn } from '../lib/utils';
import HeroCarousel from './hero-carousel';
import NavBar from './nav-bar';

interface HeaderProps {
    isScrolled: boolean
}

const Header = ({ isScrolled }: HeaderProps) => {
    return (
        <header>
            <HeroCarousel />
            <NavBar className={cn(isScrolled && 'fixed top-7 left-0 right-0 w-full mb-20')} />
        </header>
    );
};

export default Header;
