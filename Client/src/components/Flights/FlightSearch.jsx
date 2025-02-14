import React from "react";
import { FaExchangeAlt, FaUser, FaSearch } from "react-icons/fa";
import { MdOutlineCalendarToday } from "react-icons/md";

const FlightSearch = () => {
    return (
        <div className="bg-[#36373A] p-4 rounded-lg shadow-md mt-6">
            {/* Top Controls: Trip Type, Passengers, Class */}
            <div className="flex flex-wrap justify-between items-center gap-2 text-gray-300 text-sm pb-2">
                <button className="flex items-center gap-1 hover:text-white">
                    <FaExchangeAlt />
                    Round trip ▾
                </button>
                <button className="flex items-center gap-1 hover:text-white">
                    <FaUser /> 1 ▾
                </button>
                <button className="hover:text-white">Economy ▾</button>
            </div>

            {/* Main Search Box */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 bg-[#36373A] p-4 rounded-lg">
                {/* From - To */}
                <div className="flex items-center justify-between border border-gray-600 rounded-lg p-3">
                    <div className="flex items-center gap-2">
                        <input
                            type="radio"
                            checked
                            readOnly
                            className="text-blue-500"
                        />
                        <span className="text-white">Kochi</span>
                    </div>
                    <button className="text-gray-400 hover:text-white">
                        <FaExchangeAlt />
                    </button>
                    <div className="flex items-center gap-2 text-gray-400">
                        <FaSearch />
                        <span>Where to?</span>
                    </div>
                </div>

                {/* Departure - Return */}
                <div className="flex items-center justify-between border border-gray-600 rounded-lg p-3">
                    <div className="flex items-center gap-2 text-gray-400">
                        <MdOutlineCalendarToday />
                        <span>Departure</span>
                    </div>
                    <div className="border-l border-gray-600 h-5 mx-2"></div>
                    <span className="text-gray-400">Return</span>
                </div>
            </div>

            {/* Search Button */}
            <div className="flex justify-center mt-4">
                <button className="flex items-center gap-2 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition shadow-lg">
                    <FaSearch />
                    Explore
                </button>
            </div>
        </div>
    );
};

export default FlightSearch;
