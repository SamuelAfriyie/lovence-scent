import { useEffect } from "react";
import AboutUsSection from "../components/about-us";
import BlogPostsSection from "../components/blog-post";
import Footer from "../components/footer";
import Header from "../components/header";
import PopularProductsSection from "../components/popular-product-section";
import { useNavigationStoreListener } from "../lib/store/navigation-store";

const LandingPage = () => {
    const { isScrolled, setIsScrolled } = useNavigationStoreListener();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 550) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <main className="min-h-screen flex flex-col">
            <Header isScrolled={isScrolled} />
            <section className="grow pb-20 md:pb-0 bg-white">
                <AboutUsSection />
                <PopularProductsSection />
                <BlogPostsSection />
            </section>
            <footer>
                <Footer />
            </footer>
        </main>
    );
}

export default LandingPage;