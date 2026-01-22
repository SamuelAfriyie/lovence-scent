import { getIntouchWhatsappMsg } from '@/config/utils';
import { MdEmail, MdPhone, MdLocationOn, MdSend } from 'react-icons/md';

const ContactSection = () => {
    function handleSubmit(e: any): void {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        const link = getIntouchWhatsappMsg(data);
        window.open(link, '_blank');
        form.reset();
    }

    return (
        <section className="bg-neutral md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden" id="contact">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* 1. Contact Information Area */}
                <div className="space-y-10">
                    <div>
                        <h2 className="text-4xl font-black text-navy uppercase tracking-tighter mb-4">
                            Get in Touch
                        </h2>
                        <p className="text-navy/70 text-lg leading-relaxed max-w-md">
                            Have a question about a scent or an order? Our fragrance experts are here to assist you.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 group cursor-pointer">
                            <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center ring-1 ring-inset ring-gray-200 group-hover:ring-navy transition-all shadow-sm">
                                <MdEmail className="text-navy" size={20} />
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Email Us</p>
                                <p className="text-navy font-bold">support@lovencesent.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 group cursor-pointer">
                            <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center ring-1 ring-inset ring-gray-200 group-hover:ring-navy transition-all shadow-sm">
                                <MdPhone className="text-navy" size={20} />
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Call Us</p>
                                <p className="text-navy font-bold">(+233) 053-994-3305</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center ring-1 ring-inset ring-gray-200 shadow-sm">
                                <MdLocationOn className="text-navy" size={20} />
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Visit Studio</p>
                                <p className="text-navy font-bold">East Legon, Accra - Ghana</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. Minimalist Contact Form */}
                <div className="bg-white p-8 sm:p-12 rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.03)] ring-1 ring-inset ring-gray-100">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">Full Name</label>
                                <input name='name' type="text" className="w-full bg-gray-50 h-14 px-5 rounded-2xl ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-navy outline-none transition-all" placeholder="John Doe" required={true} />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">Email Address</label>
                                <input name='email' type="email" className="w-full bg-gray-50 h-14 px-5 rounded-2xl ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-navy outline-none transition-all" placeholder="john@example.com" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">How can we help?</label>
                            <textarea name='description' rows={4} className="w-full bg-gray-50 p-5 rounded-2xl ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-navy outline-none transition-all resize-none" placeholder="Write your message here..." required={true}></textarea>
                        </div>

                        <button type="submit" className="group w-full h-16 text-primary hover:text-white rounded-2xl flex items-center justify-center gap-3 hover:bg-primary transition-all shadow-lg shadow-navy/20 bg-gray-50">
                            <span className="font-black text-sm tracking-widest">SEND MESSAGE</span>
                            <MdSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
};

export default ContactSection;