import { createStore } from 'zustand/vanilla';
import { useStore } from 'zustand';
import type { CartItem } from '../schema';
import { persist } from 'zustand/middleware';

export type CartStore = {
    items: CartItem[],
    count: number
}

type CartStoreAction = {
    setItem: (item: CartItem) => void,
    updateQty: (id: any, delta: any) => void,
    removeItem: (id: any) => void,
}

type CartStoreListener = CartStore & CartStoreAction

const defaultInitState: CartStore = {
    items: [],
    count: 0
}

export const createCartStoreListener = (
    initState: CartStore = defaultInitState,
) => {
    return createStore<CartStoreListener>()(
        persist(
            (set, get) => ({
                ...initState,
                setItem: (product: CartItem) => {
                    const isFound = get().items?.find((item) => item.id === product.id);
                    if (isFound) {
                        get().updateQty(product.id, 1);
                        return;
                    }

                    set((prev) =>
                        ({ items: [...prev.items, { ...product, qty: 1 }], count: (prev.count + 1) })
                    );
                },
                updateQty: (id: any, delta: any) => set((prev) => ({
                    items: prev.items.map((item) =>
                        item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
                    ),
                    count: Math.max(1, prev.count + delta)
                })),
                removeItem: (id: number) => set((prev) => ({
                    items: prev.items.filter(item => item.id !== id),
                    count: Math.abs((prev.count - (prev.items?.find((item) => item.id === id)?.qty ?? 0)))
                }))
            }),
            {
                name: 'cart-items'
            }
        )
    )
}

const CartStore = createCartStoreListener();

export const useCartStoreListener = () => useStore(CartStore);