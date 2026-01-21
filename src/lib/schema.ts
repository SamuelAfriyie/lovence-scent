export type ProductSchema = {
    id: string | number,
    name: string,
    price: number,
    imageUrl: string,
    brand: string,
    type: string,
    gender: "unisex" | "men" | 'women'
}

export type CartItem = ProductSchema & {
    qty: number;
};