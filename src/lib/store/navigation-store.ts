import { createStore } from 'zustand/vanilla';
import { useStore } from 'zustand';

export type NavigationStore = {
    isScrolled: boolean,
}

type NavigationStoreAction = {
    setIsScrolled: (height: boolean) => void,
}

type NavigationStoreListener = NavigationStore & NavigationStoreAction

const defaultInitState: NavigationStore = {
    isScrolled: false,
}

export const createNavigationStoreListener = (
    initState: NavigationStore = defaultInitState,
) => {
    return createStore<NavigationStoreListener>()((set) => ({
        ...initState,
        setIsScrolled: (isScrolled: boolean) => set(() => ({ isScrolled: isScrolled })),
    }))
}

const navigationStore = createNavigationStoreListener();

export const useNavigationStoreListener = () => useStore(navigationStore);