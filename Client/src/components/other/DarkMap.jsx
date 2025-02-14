import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const locations = [
    { lat: 51.5074, lng: -0.1278, name: "London, UK" },
    { lat: 35.6895, lng: 139.6917, name: "Tokyo, Japan" },
    { lat: -33.8688, lng: 151.2093, name: "Sydney, Australia" },
    { lat: 28.6139, lng: 77.209, name: "New Delhi, India" },
];

const DarkMap = () => {
    return (
        <div className="relative w-full h-[300px] sm:h-[250px] md:h-[200px] lg:h-[180px] xl:h-[160px] mt-3">
            <MapContainer center={[20, 0]} zoom={2} className="h-full w-full">
                <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
                {locations.map((loc, index) => (
                    <Marker key={index} position={[loc.lat, loc.lng]}>
                        <Popup>{loc.name}</Popup>
                    </Marker>
                ))}
            </MapContainer>
            <div className="absolute inset-0 flex justify-center items-center">
                <button className="bg-black text-white py-2 px-4 rounded-lg shadow-lg">
                    Explore destinations
                </button>
            </div>
        </div>
    );
};

export default DarkMap;
