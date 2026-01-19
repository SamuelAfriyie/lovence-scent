import { Outlet } from 'react-router-dom';
import BottomNavigationBar from './components/bottom-nav-bar';
import NavBar from './components/nav-bar';
import { useNavigationStoreListener } from './lib/store/navigation-store';
import { cn } from './lib/utils';

function AppLayout() {
    const { isScrolled } = useNavigationStoreListener();
    return (
        <div className="min-h-screen">
            <div className='flex w-full justify-end lg:px-26 text-xs font-bold py-2 fixed top-0 z-50 bg-black'><span className='pr-2'>CALL US TODAY! (+233) 059-198-3224</span></div> {/* banner */}
            <NavBar variant='outline' className={cn('bg-transparent border-transparent fixed top-7 w-full text-white z-50 shadow-none', isScrolled && "hidden")} />
            <Outlet />
            {/* The bottom navigation bar */}
            <BottomNavigationBar className={cn(isScrolled && 'hidden')}/>
        </div>
    );
}

export default AppLayout;
