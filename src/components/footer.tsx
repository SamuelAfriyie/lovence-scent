import * as lucideReact from 'lucide-react'; // Using lucide-react for diverse icons
import logo from "../assets/logo.jpg";

const Footer = () => {
    const quickLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/#about' },
        { name: 'Shop Online', path: '/shopping' },
        { name: 'Blog', path: '/#blog-post' },
        { name: 'Contact Us', path: '/#contact-us' },
    ];

    const socialLinks = [
        { icon: lucideReact.Facebook, name: 'Facebook', href: '#' },
        { icon: lucideReact.Twitter, name: 'Twitter', href: '#' },
        { icon: lucideReact.Instagram, name: 'Instagram', href: '#' },
        { icon: lucideReact.Linkedin, name: 'LinkedIn', href: '#' },
        { icon: lucideReact.Rss, name: 'RSS Feed', href: '#' },
    ];

    return (
        <footer className="bg-muted text-white pt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Column 1: About Us */}
                    <div>
                        <h4 className="text-xl font-semibold mb-4">ABOUT US</h4>
                        <img src={logo} sizes='12' className='size-14 rounded-full mb-3' />
                        <p className="text-gray-400 text-sm mb-4">
                            Born from a vision to create fragrances as unique as the individuals who wear them, we blend timeless elegance with modern sensibility. We invite you to discover a signature scent that resonates with your inner self and transforms ordinary days into extraordinary experiences.
                        </p>
                        <a href="#" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                            LEARN MORE
                        </a>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-xl font-semibold mb-4">QUICK LINKS</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a href={link.path} className="text-gray-400 hover:text-white text-sm transition duration-200">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Find Us On */}
                    <div>
                        <h4 className="text-xl font-semibold mb-4">FIND US ON</h4>
                        <div className="flex space-x-4">
                            {socialLinks.map((link) => (
                                <a key={link.name} href={link.href} className="text-gray-400 hover:text-white transition duration-200">
                                    <link.icon className="h-6 w-6" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 4: News & Updates */}
                    <div>
                        <h4 className="text-xl font-semibold mb-4">NEWS & UPDATES</h4>
                        <p className="text-gray-400 text-sm mb-4">
                            Subscribe to our newsletter for the latest news and promotions.
                        </p>
                        <form>
                            <input
                                type="email"
                                placeholder="Enter Email Address"
                                className="w-full p-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
                            />
                            <button
                                // type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-md transition duration-200"
                            >
                                SUBSCRIBE
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Copyright Bar */}
            <div className="bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <p className="text-center text-gray-500 text-sm">
                        © Copyright 2024 Your Brand. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
