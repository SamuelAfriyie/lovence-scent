import { ArrowRightCircle } from 'lucide-react';
import React from 'react';

// Define the structure for a blog post
interface BlogPostData {
    id: number;
    imageAlt: string; // Placeholder for actual image source/alt text
    title: string;
    description: string;
    linkText: string;
    createdBy: string;
    date: string
}

const blogPostsData: BlogPostData[] = [
    {
        id: 1,
        imageAlt: "https://images.unsplash.com/photo-1629077007578-a36bb1056b3e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHBlcmZ1bWVzfGVufDB8fDB8fHww",
        title: "LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING",
        description: "Lorem Ipsum is simply dummy text of printing & typesetting industry.",
        linkText: "hellooooo!",
        createdBy: "Lovence Scent",
        date: "January 07, 2026"
    },
    {
        id: 2,
        imageAlt: "https://images.unsplash.com/photo-1593487568720-92097fb460fb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fHBlcmZ1bWVzfGVufDB8fDB8fHww",
        title: "LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING",
        description: "Lorem Ipsum is simply dummy text of printing & typesetting industry.",
        linkText: "hellooooo!",
        createdBy: "Lovence Scent",
        date: "January 07, 2026"
    },
    {
        id: 3,
        imageAlt: "https://plus.unsplash.com/premium_photo-1670574873484-bf0923c33a24?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fHBlcmZ1bWVzfGVufDB8fDB8fHww",
        title: "LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING",
        description: "Lorem Ipsum is simply dummy text of printing & typesetting industry.",
        linkText: "hellooooo!",
        createdBy: "Lovence Scent",
        date: "January 07, 2026"
    },
];

// Component for a single blog post card
const BlogPostCard: React.FC<{ post: BlogPostData }> = ({ post }) => {
    return (
        // Card Container: flex column layout, white background, shadow, rounded corners, padding, width constraints
        <div className="flex flex-col w-full">
            <div className=" h-64 mb-4 rounded-md flex items-center justify-center text-gray-500">
                <img
                    src={post.imageAlt}
                    alt={post.title}
                    className="w-full h-full object-cover" // object-contain ensures the bottle fits in the box
                />
            </div>

            {/* Title: font size, weight, color, margin, truncated to 2 lines for visual consistency */}
            <h3 className="text-lg font-semibold text-gray-400 mb-2 line-clamp-2">
                {post.title}
            </h3>

            {/* Description: text color, leading (line height), font weight, margin, truncated to 3 lines */}
            <p className="text-gray-400 leading-normal font-light mb-4 line-clamp-3 flex items-center">
                by {post.createdBy} . {post.date}
            </p>

            {/* Description: text color, leading (line height), font weight, margin, truncated to 3 lines */}
            <p className="text-muted leading-normal font-semibold mb-4 line-clamp-3">
                {post.description}
            </p>

            {/* Link: text color, font weight, hover underline effect */}
            <a href="#" className="text-gray-400 font-semibold text-sm border-2 rounded-sm border-gray-300 px-4 py-3 w-fit flex items-center space-x-2">
                <p> VIEW FULL ARTICLE </p><div><ArrowRightCircle size={18} /></div>
            </a>

        </div>
    );
};

// Main Blog Posts Section Component
const BlogPostsSection: React.FC = () => {
    return (
        // Section Container: padding top/bottom
        <section className="py-12 bg-gray-50">
            {/* Section Title: center aligned, uppercase, bold, font size, bottom margin */}
            <h2 className="text-center text-3xl font-bold uppercase mb-16 text-muted tracking-wider">BLOG POSTS</h2>

            {/* Posts Container: responsive grid (1 col default, 3 cols on medium screens and up), with gaps */}
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                {blogPostsData.map((post) => (
                    <BlogPostCard key={post.id} post={post} />
                ))}
            </div>
        </section>
    );
};
export default BlogPostsSection;
