import React from "react";

const Footer = () => {
    return (
        <footer className="bg-transparent text-gray-400 text-sm p-6 mt-8">
            <div className="container mx-auto text-center">
                <div className="flex flex-wrap justify-center gap-4 mb-4">
                    <button className="border border-gray-600 px-4 py-2 rounded-full hover:bg-transparent">
                        🌐 Language · English (United Kingdom)
                    </button>
                    <button className="border border-gray-600 px-4 py-2 rounded-full hover:bg-transparent">
                        📍 Location · India
                    </button>
                    <button className="border border-gray-600 px-4 py-2 rounded-full hover:bg-transparent">
                        💰 Currency · INR
                    </button>
                </div>
                <p className="mb-2">
                    Current language and currency options applied: English (United Kingdom) - India - INR
                </p>
                <p className="mb-4">
                    Displayed currencies may differ from the currencies used to purchase flights. 
                    <a href="#" className="text-blue-400 hover:underline">Learn more</a>
                </p>
                <div className="flex flex-wrap justify-center gap-6 mb-4">
                    <a href="#" className="hover:underline">About</a>
                    <a href="#" className="hover:underline">Privacy</a>
                    <a href="#" className="hover:underline">Terms</a>
                    <a href="#" className="hover:underline">Join user studies</a>
                    <a href="#" className="hover:underline">Feedback</a>
                    <a href="#" className="hover:underline">Help Centre</a>
                </div>
                <div className="flex flex-wrap justify-center gap-6">
                    <button className="hover:underline">International sites ▼</button>
                    <button className="hover:underline">Explore flights ▼</button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
