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
    date: string,
    fullContent?: string
}

export const blogPostsData: BlogPostData[] = [
    {
        id: 1,
        imageAlt: "https://images.unsplash.com/photo-1629077007578-a36bb1056b3e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHBlcmZ1bWVzfGVufDB8fDB8fHww",
        title: "SCENT TRENDS 2026: THE EVOLUTION OF QUIET LUXURY",
        description: "Discover how 'skin scents' and refined gourmands are redefining personal identity through fragrance this year.",
        linkText: "Read the Full Guide",
        createdBy: "Lovence Scent",
        date: "January 07, 2026",
        fullContent: `The year 2026 marks a transformative era in perfumery, shifting away from loud, room-filling projections toward a more intimate, 'quiet luxury' approach. Fragrance is no longer just an accessory; it has become a deeply personal ritual used to anchor our moods and express our internal identity. 
    
### Key Trends Defining 2026:
* **Skin Scents & Intimate Musks**: The focus has shifted to fragrances that sit close to the skin, acting as a natural extension of your body chemistry rather than a loud announcement. Expect notes like clean musks, soft woods, and cashmere textures.
* **Gourmand 2.0**: The sugary sweetness of the past has evolved. Modern gourmands are now sophisticated and textural, featuring notes like pistachio, roasted coffee, and spiced saffron paired with warm resins for a refined finish.
* **Functional Wellness**: Neuroscience is meeting perfumery. More consumers are choosing scents specifically designed to influence their emotional state, seeking out calming lavender, energizing citrus, or grounding sandalwood for self-care rituals.
* **Gender-Free Expressions**: The boundaries between 'for him' and 'for her' continue to fade, with brands prioritizing universal signatures like airy oud and mineral aquatics that adapt uniquely to every wearer.

At Lovence Scent, we believe your fragrance should tell your story. Whether you are looking for a 'signature scent' for daily wear or a bold, unique blend for special occasions, the trends of 2026 offer a path toward intentional and meaningful discovery.`
    },
    {
        id: 2,
        imageAlt: "https://images.unsplash.com/photo-1593487568720-92097fb460fb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fHBlcmZ1bWVzfGVufDB8fDB8fHww",
        title: "THE SCIENCE OF SILENCE: WHY MINIMALIST BOTTLES ARE REIGNING SUPREME",
        description: "In a world of noise, the most powerful fragrances are speaking through minimalist design and clean aesthetics.",
        linkText: "Explore the Collection",
        createdBy: "Lovence Scent",
        date: "January 07, 2026",
        fullContent: `The visual landscape of perfumery is undergoing a radical shift. The ornate, heavy crystal flacons of the past are being replaced by sleek lines, transparent glass, and monochromatic labels. This movement, often called 'Visual Silence,' focuses on the liquid inside rather than the shell around it.
### Why Minimalist Design Matters:
* **Focus on Ingredients**: When the packaging is simple, the brand is making a statement: 'The quality of our oils speaks for itself.' It removes the distraction of marketing and focuses on the olfactory experience.
* **The Sustainable Edge**: Minimalist bottles often utilize modular designs, making them easier to refill or recycle. At Lovence Scent, we believe luxury shouldn't come at the cost of the planet.
* **Timeless Vanity Aesthetics**: A clean, uniform bottle design fits seamlessly into any modern home. It turns your fragrance shelf into a curated gallery rather than a cluttered cabinet.
* **The Psychology of 'Clean'**: There is a direct psychological link between a clean visual presentation and the perception of a 'fresh' or 'pure' scent profile.

### What to Look For in This Category:
If you are drawn to the aesthetic of the bottles in our featured image, you likely enjoy scents that are:
* **Linear**: Scents that stay consistent from the first spray to the dry down.
* **Transparent**: Notes like white tea, ISO E Super, and aldehydes.
* **Modern**: Unexpected combinations like sea salt and sage or cold pressed metal.

Discover how **Lovence Scent** is embracing the beauty of simplicity. Our latest collection is designed for those who appreciate that sometimes, the quietest bottle makes the loudest statement.`
    },
    {
        id: 3,
        imageAlt: "https://plus.unsplash.com/premium_photo-1670574873484-bf0923c33a24?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fHBlcmZ1bWVzfGVufDB8fDB8fHww",
        title: "THE LIQUID EMOTION: HOW FRAGRANCE ANCHORS YOUR MEMORIES",
        description: "Unlock the 'Proust Effect' and discover why certain scents have the power to transport you back in time instantly.",
        linkText: "Discover the Science",
        createdBy: "Lovence Scent",
        date: "January 07, 2026",
        fullContent: `Have you ever caught a whiff of a specific perfume on a crowded street and been instantly transported back to a childhood summer or a first date? This isn't just nostalgia—it’s biology. Because the olfactory bulb is directly connected to the amygdala and hippocampus (the brain's emotional and memory centers), scent is our most visceral link to the past.
### The Art of Scent Memories
At **Lovence Scent**, we don't just create fragrances; we curate 'vessels for memory.' When you choose a signature scent for a significant life event—like a wedding, a graduation, or a new job—you are essentially 'bookmarking' that moment in your brain.

*   **The Emotional Connection**: While sight and sound are processed through several filters, scent goes straight to the emotional core. This is why a fragrance can make you feel confident, relaxed, or energized in seconds.
*   **Creating a Scent Ritual**: To make a memory stick, apply your chosen fragrance during the peak of your experience. This anchors the scent to the positive emotions of the day.
*   **Complexity Matters**: Niche fragrances with multi-layered notes (like those in our premium collection) create more unique 'memory prints' than mass-market scents, making your personal history feel even more distinct.

### Tips for Finding Your 'Anchor' Scent:
1.  **Identify the Vibe**: Are you looking for the warmth of a fireplace (Amber & Oud) or the crispness of a new beginning (Bergamot & Neroli)?
2.  **Test Over Time**: Allow the fragrance to evolve on your skin for at least 4 hours to see how the 'base notes' resonate with your natural chemistry.
3.  **Rotate with Intention**: Use different scents for different chapters of your life to keep your mental 'memory library' organized and vivid.

Your life is a story. Make sure it smells unforgettable.
    `
    }

];

// Component for a single blog post card
const BlogPostCard: React.FC<{ post: BlogPostData }> = ({ post }) => {
    return (
        <div className="flex flex-col w-full">
            <div className=" h-64 mb-4 rounded-md flex items-center justify-center text-gray-500">
                <img
                    src={post.imageAlt}
                    alt={post.title}
                    className="w-full h-full object-cover" // object-contain ensures the bottle fits in the box
                />
            </div>

            <h3 className="text-lg font-semibold text-gray-400 mb-2 line-clamp-2">
                {post.title}
            </h3>

            <p className="text-gray-400 leading-normal font-light mb-4 line-clamp-3 flex items-center">
                by {post.createdBy} . {post.date}
            </p>

            <p className="text-muted leading-normal font-semibold mb-4 line-clamp-3">
                {post.description}
            </p>

            <a href={`/blogs/${post.id}`} className="text-gray-400 font-semibold text-sm border-2 rounded-sm border-gray-300 px-4 py-3 w-fit flex items-center space-x-2">
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
            <h2 className="text-center text-3xl font-bold uppercase mb-16 text-muted tracking-wider">BLOG POSTS</h2>

            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                {blogPostsData.map((post) => (
                    <BlogPostCard key={post.id} post={post} />
                ))}
            </div>
        </section>
    );
};
export default BlogPostsSection;
