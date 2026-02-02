import { useNavigate, useParams } from 'react-router-dom';
import { blogPostsData } from '@/components/blog-post';
import Markdown from 'react-markdown';
import { ChevronLeft } from 'lucide-react';
import Footer from '@/components/footer';

export const BlogPost = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const post = blogPostsData.find((item: any) => item.id === parseInt(`${id}`));

    if (!post) return <div>Post not found!</div>;

    return (

        <div className="w-full">
            <header className="sticky top-8 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">

                        {/* Back Button */}
                        <button
                            onClick={() => navigate(-1)} // Takes user back to the previous page
                            className="group flex items-center text-sm font-medium text-gray-500 hover:text-black transition-colors"
                        >
                            <ChevronLeft className="w-5 h-5 mr-1 group-hover:-translate-x-1 transition-transform" />
                            Back to Feed
                        </button>

                        {/* Logo / Branding */}
                        <div className="shrink-0">
                            <span className="text-xl font-serif tracking-widest uppercase italic">
                                Lovence Scent
                            </span>
                        </div>

                        {/* Empty div to keep logo centered */}
                        <div className="w-24 hidden md:block" />
                    </div>
                </div>
            </header>
            <div className="max-w-4xl mx-auto p-6">
                <img src={post.imageAlt} alt={post.title} className="w-full h-64 object-cover my-4" />
                <h1 className="text-4xl font-bold my-4">{post.title}</h1>
                <div className="text-gray-500 mb-6">By {post.createdBy} on {post.date}</div>

                {/* Rendering the content we generated earlier */}
                <div className="prose lg:prose-xl">
                    <Markdown>{post.fullContent}</Markdown>
                </div>
            </div>
            <Footer />
        </div>
    );
};
