import React, { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const destinations = [
    { name: "Mumbai", image: "https://picsum.photos/seed/mumbai/300/200" },
    { name: "Bengaluru", image: "https://picsum.photos/seed/bengaluru/300/200" },
    { name: "New Delhi", image: "https://picsum.photos/seed/newdelhi/300/200" },
    { name: "Hyderabad", image: "https://picsum.photos/seed/hyderabad/300/200" },
    { name: "Chennai", image: "https://picsum.photos/seed/chennai/300/200" },
    { name: "Goa", image: "https://picsum.photos/seed/goa/300/200" },
    { name: "Kolkata", image: "https://picsum.photos/seed/kolkata/300/200" },
];

const DestinationSlider = () => {
    const sliderRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    // Drag scrolling (Mouse)
    const handleMouseDown = (e) => {
        setIsDragging(true);
        if (sliderRef.current) {
            setStartX(e.pageX - sliderRef.current.offsetLeft);
            setScrollLeft(sliderRef.current.scrollLeft);
        }
    };

    const handleMouseMove = (e) => {
        if (!isDragging || !sliderRef.current) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Adjust scroll speed
        sliderRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    // Navigation Buttons
    const scrollLeftBtn = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    const scrollRightBtn = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    return (
        <div className="w-full relative">
            {/* Desktop View (Hidden on Mobile) */}
            <div className="hidden md:block">
                {/* Left Button */}
                <button
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-75"
                    onClick={scrollLeftBtn}
                >
                    <FaChevronLeft size={24} />
                </button>

                {/* Slider */}
                <div
                    ref={sliderRef}
                    className={`flex space-x-4 p-4 overflow-hidden snap-x snap-mandatory select-none cursor-${
                        isDragging ? "grabbing" : "grab"
                    }`}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseUp}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                >
                    {destinations.map((destination, index) => (
                        <div
                            key={index}
                            className="relative w-52 h-32 rounded-lg overflow-hidden shadow-md shrink-0 snap-start"
                        >
                            <img
                                src={destination.image}
                                alt={destination.name}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white px-2 py-1 rounded">
                                {destination.name}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Button */}
                <button
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-75"
                    onClick={scrollRightBtn}
                >
                    <FaChevronRight size={24} />
                </button>
            </div>

            {/* Mobile View (Hidden on Desktop) */}
            <div className="md:hidden block p-4">
                <h2 className="text-white text-lg font-semibold mb-2">
                    Popular destinations from Kochi
                </h2>
                <div
                    ref={sliderRef}
                    className="flex space-x-4 overflow-hidden snap-x snap-mandatory cursor-grab select-none"
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseUp}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                >
                    {destinations.slice(0, 3).map((destination, index) => (
                        <div
                            key={index}
                            className="relative w-36 h-24 rounded-lg overflow-hidden shadow-md shrink-0 snap-start"
                        >
                            <img
                                src={destination.image}
                                alt={destination.name}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white px-2 py-1 rounded">
                                {destination.name}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DestinationSlider;
