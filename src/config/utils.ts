import type { ProductSchema } from "@/lib/schema";

const baseUrl = import.meta.env.VITE_PUBLIC_URL;
const phoneNumber = import.meta.env.VITE_PUBLIC_PHONE;

export const generateWhatsAppLink = (product: ProductSchema) => {

    const cleanBaseUrl = baseUrl.replace(/^https?:\/\//, '');

    // 2. Use standard emojis and a cleaner template
    const message =
        `*Product Inquiry*

I am interested in purchasing this item:

Product: ${product.name}
Price: GH₵ ${Number(product.price).toFixed(2)}
Brand: ${product.brand}

View Product:
https://${cleanBaseUrl}${product.imageUrl}

--------------------------
Please let me know the availability and delivery options!`;

    // 3. encodeURIComponent is essential to fix the "" symbols
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
};


export const generateMultiProductWhatsAppLink = (selectedProducts: any[]) => {
    // 1. Calculate total considering quantity
    const total = selectedProducts.reduce((sum, item) => sum + (item.price * (item.qty || 1)), 0);

    // 2. Format each item line: "• 2x Product Name - GH₵ 100.00"
    const productList = selectedProducts
        .map(item => {
            const qty = item.qty || 1;
            const itemTotal = (item.price * qty).toFixed(2);
            return `• *${qty}x* ${item.name} \n  Price: GH₵ ${itemTotal}\n  View: https://${baseUrl}${item.imageUrl}`;
        })
        .join('\n\n'); // Double spacing for readability

    const message =
        `*NEW ORDER REQUEST*
--------------------------
${productList}

--------------------------
*Total Amount: GH₵ ${total.toFixed(2)}*
--------------------------

Please let me know the availability and delivery options!`;

    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};

export const getIntouchWhatsappMsg = (data: any) => {
        const cleanBaseUrl = baseUrl.replace(/^https?:\/\//, '');

    const whatsappMessage = `*NEW FRAGRANCE INQUIRY*

*Name:* ${data.name}
*Email:* ${data.email}

*Message:*
"${data.description}"

---
_Sent via Lovence Sent Website_
https://${cleanBaseUrl}
`;

    const encodedMessage = encodeURIComponent(whatsappMessage);

    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}