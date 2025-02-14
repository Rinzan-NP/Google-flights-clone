import React, { useState } from "react";
import Button from "./Button";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-[#202124] text-white px-4 py-2 border-b-2 border-gray-600 ">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-400 hover:text-white focus:outline-none mr-2"
                    >
                        <svg
                            width="30px"
                            height="30px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="#ffffff"
                        >
                            <path
                                d="M4 6H20M4 12H20M4 18H20"
                                stroke="#ffffff"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                    <span className="text-xl font-semibold">Google</span>
                    <div className="hidden md:flex gap-3 ml-10">
                        <Button text="Travel" />
                        <Button text="Explore" />
                        <Button text="Flights" />
                        <Button text="Hotel" />
                        <Button text="Hotel Rentals" />
                    </div>
                </div>

                <div className="hidden md:flex items-center space-x-4">
                    <button className="text-gray-400 hover:text-white focus:outline-none">
                        <svg
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="#ffffff"
                        >
                            <path
                                d="M7.28451 10.3333C7.10026 10.8546 7 11.4156 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C11.4156 7 10.8546 7.10026 10.3333 7.28451"
                                stroke="#ffffff"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            ></path>
                        </svg>
                    </button>
                    <button className="text-gray-400 hover:text-white focus:outline-none">
                        <svg
                            className="h-6 w-6 fill-current"
                            viewBox="0 0 24 24"
                        >
                            <path d="M4 4h4v4H4V4zm6 0h4v4h-4V4zm6 0h4v4h-4V4zM4 10h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zM4 16h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z" />
                        </svg>
                    </button>
                    <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-500">
                        <img
                            src="https://th.bing.com/th/id/OIP.gqimwo2-nMorBg2hjiHvjwAAAA?rs=1&pid=ImgDetMain"
                            alt="Profile"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
            </div>

            {/* Sidebar for Mobile Menu */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-[#202124] shadow-lg border-r border-gray-700 transform ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-300 ease-in-out md:w-80 lg:w-96`}
            >
                <button
                    onClick={() => setIsOpen(false)}
                    className="text-white absolute top-4 right-4"
                >
                    ✕
                </button>
                <ul className="flex flex-col space-y-2 p-4 mt-10">
                    <li>
                        <a
                            href="#!"
                            className="block py-2 px-3 hover:bg-gray-800 rounded"
                        >
                            Travel
                        </a>
                    </li>
                    <li>
                        <a
                            href="#!"
                            className="block py-2 px-3 hover:bg-gray-800 rounded"
                        >
                            Explore
                        </a>
                    </li>
                    <li>
                        <a
                            href="#!"
                            className="block py-2 px-3 hover:bg-gray-800 rounded"
                        >
                            Flights
                        </a>
                    </li>
                    <li>
                        <a
                            href="#!"
                            className="block py-2 px-3 hover:bg-gray-800 rounded"
                        >
                            Hotels
                        </a>
                    </li>
                    <li>
                        <a
                            href="#!"
                            className="block py-2 px-3 hover:bg-gray-800 rounded"
                        >
                            Holiday rentals
                        </a>
                    </li>
                    <li className="border-t border-gray-700 pt-2">
                        <a
                            href="#!"
                            className="block py-2 px-3 hover:bg-gray-800 rounded"
                        >
                            Tracked flight prices
                        </a>
                    </li>
                    <li>
                        <a
                            href="#!"
                            className="block py-2 px-3 hover:bg-gray-800 rounded"
                        >
                            Change language
                        </a>
                    </li>
                    <li>
                        <a
                            href="#!"
                            className="block py-2 px-3 hover:bg-gray-800 rounded"
                        >
                            Change currency
                        </a>
                    </li>
                    <li>
                        <a
                            href="#!"
                            className="block py-2 px-3 hover:bg-gray-800 rounded"
                        >
                            Change location
                        </a>
                    </li>
                    <li className="border-t border-gray-700 pt-2">
                        <a
                            href="#!"
                            className="block py-2 px-3 hover:bg-gray-800 rounded"
                        >
                            Flights settings
                        </a>
                    </li>
                    <li>
                        <a
                            href="#!"
                            className="block py-2 px-3 hover:bg-gray-800 rounded"
                        >
                            Feedback
                        </a>
                    </li>
                    <li>
                        <a
                            href="#!"
                            className="block py-2 px-3 hover:bg-gray-800 rounded"
                        >
                            Help
                        </a>
                    </li>
                </ul>
            </div>

            {/* Background overlay when menu is open */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}
        </nav>
    );
};

export default Navbar;
