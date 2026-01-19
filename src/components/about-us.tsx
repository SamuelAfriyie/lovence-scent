
const AboutUsSection = () => {
    return (
        // Section Container: light gray background, padding top/bottom, container for responsiveness
        <section className="bg-gray-100 py-6">
            <div className="container mx-auto px-4">
                {/* Grid Layout: 2 columns, one for the image/placeholder, one for the text */}
                <div className="flex flex-col md:flex-row items-center gap-8">

                    {/* Left Column: Image Area */}
                    <div className="md:w-1/2 w-full">
                        {/* The new image element using the provided URL */}
                        <img
                            src="https://images.unsplash.com/photo-1724157073080-fcffb8d6c956?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBlcmZ1bWVzfGVufDB8fDB8fHww"
                            alt="Perfumes in the about us section"
                            // h-80 gives it a fixed height, w-full makes it span the container width, object-cover ensures it fills the space nicely
                            className="h-96 w-full object-cover"
                        />
                    </div>

                    {/* Right Column: Text Content and Button */}
                    <div className="md:w-1/2 w-full">
                        {/* Section Title */}
                        <h2 className="text-gray-800 text-2xl font-bold uppercase mb-4">ABOUT US</h2>

                        {/* Subheading */}
                        <h3 className="text-gray-700 text-xl font-semibold mb-4">LOREM IPSUM IS SIMPLY DUMMY TEXT</h3>

                        {/* Body Paragraph */}
                        <p className="text-gray-600 leading-relaxed mb-6 font-light">
                            Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>

                        {/* Read More Button */}
                        <button className="bg-white text-gray-800 border border-gray-300 px-8 py-3 rounded shadow hover:bg-gray-200 transition duration-300 font-semibold uppercase text-sm">
                            READ MORE
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;
