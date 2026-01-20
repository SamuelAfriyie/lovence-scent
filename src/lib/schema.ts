export type ProductSchema = {
    id: string | number,
    name: string,
    brand: string,
    price: number,
    imageUrl: string
}

export type CartItem = ProductSchema & {
    qty: number;
};