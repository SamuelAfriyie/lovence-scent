import React, { useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

// Define the type for our slides
interface SlideData {
    id: number;
    title: string;
    subtitle: string;
    imageUrl: string;
}

const slidesData: SlideData[] = [
    {
        id: 101,
        title: "SUMMER ESSENTIALS",
        subtitle: "Lighten up your fragrance collection for the season",
        imageUrl: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 102,
        title: "LUXURY COLLECTION",
        subtitle: "Exquisite scents for discerning tastes",
        imageUrl: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyZnVtZXN8ZW58MHx8MHx8fDA%3D",
    },
    {
        id: 103,
        title: "LIMITED EDITION RELEASE",
        subtitle: "Get it before it's gone forever",
        imageUrl: "https://images.unsplash.com/photo-1718466044521-d38654f3ba0a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVyZnVtZXN8ZW58MHx8MHx8fDA%3D",
    },
    {
        id: 104,
        title: "ABOUT OUR INGREDIENTS",
        subtitle: "Sourced globally for the best quality",
        imageUrl: "https://images.unsplash.com/photo-1672848700906-2b8ca62639e4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcmZ1bWVzfGVufDB8fDB8fHww",
    },

];

const HeroCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    // Optional: Add styling for dots based on active slide
    const onSelect = useCallback((emblaApi: any) => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, []);

    React.useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on('select', onSelect);
        onSelect(emblaApi);
    }, [emblaApi, onSelect]);


    return (
        <div className="relative overflow-hidden">
            {/* Embla Viewport */}
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {slidesData.map((slide) => (
                        <div className="shrink-0 w-full" key={slide.id}>
                            {/* Slide Content (styled to match the image design) */}
                            <div
                                className="relative bg-cover bg-center h-80 md:h-150 flex items-center justify-start p-8 md:px-36"
                                style={{ backgroundImage: `url(${slide.imageUrl})` }}
                            >
                                {/* Dark overlay */}
                                <div className="absolute inset-0 bg-black opacity-40"></div>

                                {/* Text and Button Container */}
                                <div className="relative text-white z-10 max-w-lg">
                                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                                        {slide.title}
                                    </h1>
                                    <p className="text-xl md:text-2xl mb-6">
                                        {slide.subtitle}
                                    </p>
                                    <button className="border-white border text-white hover:text-primary px-8 py-3 rounded shadow hover:bg-gray-100 transition duration-300 font-semibold uppercase cursor-pointer">
                                        LEARN MORE
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Buttons (Prev/Next) */}
            <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg opacity-70 hover:opacity-100 transition duration-300 z-20"
                onClick={scrollPrev}
            >
                <ChevronLeftIcon className="h-6 w-6 text-gray-800" />
            </button>
            <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg opacity-70 hover:opacity-100 transition duration-300 z-20"
                onClick={scrollNext}
            >
                <ChevronRightIcon className="h-6 w-6 text-gray-800" />
            </button>

            {/* Optional: Dot indicators */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20">
                {slidesData.map((_, index) => (
                    <button
                        key={index}
                        className={`h-3 w-3 rounded-full transition-colors ${index === selectedIndex ? 'bg-white' : 'bg-gray-400 opacity-70'
                            }`}
                        onClick={() => emblaApi?.scrollTo(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroCarousel;
