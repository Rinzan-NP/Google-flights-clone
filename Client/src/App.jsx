import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Images from "./components/Image";
import FlightSearch from "./components/Flights/FlightSearch";
import { CiCircleInfo } from "react-icons/ci";
import Button from "./components/other/Button";
import DarkMap from "./components/other/DarkMap";
import Destination from "./components/other/Destinations";
import FlightTools from "./components/Flights/FlightTools";
import DestinationSlider from "./components/other/DestinationSlider";

function App() {
    return (
        <div className="bg-[#202124]">
            <Navbar />
            {/* Your page content */}
            <main className="lg:px-52 text-gray-300 bg-[#202124] px-3">
                <div className="flex justify-center">
                    <Images />
                </div>
                <div className="">
                    <FlightSearch />
                </div>
                <div className="mt-5 flex items-center gap-3 w-full">
                    <p className="font-semibold text-xl flex items-center gap-1">
                        Find cheap flights from Kochi to anywhere
                        <CiCircleInfo className="text-xl flex-shrink-0" />
                    </p>
                </div>

                <div className="flex gap-2 mt-4 overflow-x-auto whitespace-nowrap flex-nowrap">
                    <Button text="Kochi" />
                    <Button text="Kozhikode" />
                    <Button text="Coimbatore" />
                    <Button text="Thiruvananthapuram" />
                </div>

                <div className="mb-4">
                    <DarkMap />
                </div>
                <div>
                  <Destination/>
                  
                  <FlightTools/>

                  <DestinationSlider/>
                </div>
            </main>
        </div>
    );
}

export default App;
