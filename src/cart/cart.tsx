import NavBar from '@/components/nav-bar';
import { generateMultiProductWhatsAppLink } from '@/config/utils';
import { useCartStoreListener } from '@/lib/store/cart-store';
import { cn } from '@/lib/utils';
import { MdAdd, MdRemove, MdDeleteOutline, MdArrowBack } from 'react-icons/md';

const CartPage = () => {
    const { items, updateQty, removeItem } = useCartStoreListener();
    const navigate = useNavigate();
    const subtotal = items.reduce((acc, item) => acc + (item.price * item.qty), 0);
    const shipping = 50.00;


    const handleOrder = () => {
        const link = generateMultiProductWhatsAppLink(items);
        window.open(link, '_blank');
    }

    return (
        <div className="bg-gray-50 min-h-screen pb-20">
            <NavBar className={cn("w-full mt-7 fixed left-0 z-50")} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
                <div className="flex items-center gap-2 mb-8 cursor-pointer hover:text-primary transition-colors w-fit lg:mt-20" onClick={() => navigate(-1)}>
                    <MdArrowBack size={20} />
                    <span className="font-medium">Continue Shopping</span>
                </div>

                <h1 className="text-3xl font-black text-black mb-10 tracking-tight">Shopping Cart  <span className='text-base text-gray-500'>({items.length} items)</span></h1>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* 1. SHOPPING LIST (Left Side) */}
                    <div className="lg:col-span-8 space-y-4">
                        {items.map((item) => (
                            <div key={item.id} className="flex flex-row items-center bg-white p-4 rounded-xl ring-1 ring-inset ring-gray-200 transition-all overflow-x-scroll">
                                {/* Product Image */}
                                <div className="h-24 w-24 bg-gray-50 rounded-lg shrink-0 overflow-hidden">
                                    <img src={item.imageUrl} alt={item.name} className="w-full h-full object-contain p-2 mix-blend-multiply" />
                                </div>

                                {/* Product Info */}
                                <div className="ml-6 flex-1">
                                    <h3 className="font-bold text-lg text-gray-900">{item.name}</h3>
                                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">{item.brand}</p>

                                    <div className="flex items-center gap-4 mt-2">
                                        {/* Quantity Selector */}
                                        <div className="flex items-center ring-1 ring-inset ring-gray-200 rounded-full h-8 px-1">
                                            <button onClick={() => updateQty(item.id, -1)} className="p-1 hover:bg-gray-100 rounded-full"><MdRemove size={14} /></button>
                                            <span className="w-8 text-center text-sm font-bold">{item.qty}</span>
                                            <button onClick={() => updateQty(item.id, 1)} className="p-1 hover:bg-gray-100 rounded-full"><MdAdd size={14} /></button>
                                        </div>

                                        <button onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-red-500 flex items-center gap-1 text-xs font-medium transition-colors">
                                            <MdDeleteOutline size={18} /> REMOVE
                                        </button>
                                    </div>
                                </div>

                                {/* Price Display */}
                                <div className="text-right ml-4">
                                    <p className="text-lg font-black text-black">
                                        <span className="text-xs mr-1">GH₵</span>{(item.price * item.qty).toFixed(2)}
                                    </p>
                                    {item.qty > 1 && <p className="text-[10px] text-gray-400 italic">GH₵{item.price} each</p>}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* 2. ORDER SUMMARY (Right Side) */}
                    <div className="lg:col-span-4 self-start lg:sticky top-28">
                        <OrderSummary subtotal={subtotal} shipping={shipping} onOrder={handleOrder} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;

// import { useState } from 'react';
import { MdShield, MdArrowForward } from 'react-icons/md';
import { useNavigate } from 'react-router';

const OrderSummary = ({ subtotal, shipping, onOrder }: any) => {
    const total = subtotal + shipping;

    return (
        <div className="sticky top-10">
            <div className="bg-white rounded-[2rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)] ring-1 ring-inset ring-gray-100">
                <h2 className="text-2xl font-black text-gray-900 mb-8 tracking-tight">Summary</h2>

                {/* Cost Breakdown */}
                <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center">
                        <span className="text-gray-500 font-medium">Subtotal</span>
                        <span className="font-bold text-gray-900">GH₵{subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-500 font-medium">Shipping & Handling</span>
                        <span className="font-bold text-gray-900">GH₵{shipping.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-500 font-medium">Estimated Tax</span>
                        <span className="font-bold text-gray-900">—</span>
                    </div>
                </div>

                {/* Grand Total */}
                <div className="pt-6 border-t border-dashed border-gray-200 mb-8">
                    <div className="flex justify-between items-end">
                        <span className="text-sm font-bold text-gray-400 uppercase">Total</span>
                        <div className="text-right">
                            <p className="text-4xl font-black text-gray-900 tracking-tighter leading-none">
                                <span className="text-lg mr-1">GH₵</span>{total.toFixed(2)}
                            </p>
                            <p className="text-[10px] text-green-600 font-bold mt-1">VAT INCLUDED</p>
                        </div>
                    </div>
                </div>

                {/* Main CTA */}
                <button className="group w-full h-16 bg-muted hover:bg-primary text-white rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 shadow-xl hover:shadow-blue-200 ring-inset ring-2 ring-transparent hover:ring-primary/80 cursor-pointer" onClick={onOrder}>
                    <span className="font-black tracking-widest text-sm">Checkout via WhatsApp</span>
                    {/* <span className="font-black tracking-widest text-sm">PROCEED TO ORDER</span> */}
                    <MdArrowForward className="group-hover:translate-x-1 transition-transform" size={20} />
                </button>

                {/* Trust Badges */}
                <div className="mt-8 flex items-center justify-center gap-6 py-4 bg-gray-50 rounded-2xl">
                    <div className="flex items-center gap-2 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
                        <MdShield className="text-primary/80" size={18} />
                        <span className="text-[10px] font-black text-gray-600">SECURE PAYMENT</span>
                    </div>
                    <div className="h-4 w-px bg-gray-200" />
                    <div className="flex items-center gap-2">
                        <img src="https://techfocus24.com/wp-content/uploads/2023/03/2CAD7598-BBDB-4AE0-8A65-ECB4BFCBDF0C.jpeg" alt="Paypal" className="h-3 opacity-50" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXnXkBmw2uSAI7UPnfI8ZWleOP_9jguz46rQ&s" alt="Mastercard" className="h-4 opacity-50" />
                    </div>
                </div>
            </div>

            <p className="text-center mt-6 text-gray-400 text-xs font-medium">
                Need help? <span className="text-black underline cursor-pointer">Contact Support</span>
            </p>
        </div>
    );
};
