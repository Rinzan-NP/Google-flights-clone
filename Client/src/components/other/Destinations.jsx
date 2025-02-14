import React from "react";

const destinations = [
  {
    image: "https://static.vecteezy.com/system/resources/previews/016/916/479/original/placeholder-icon-design-free-vector.jpg", // Replace with actual image URL
    name: "London",
    price: "₹54,866",
    dateRange: "20 Mar – 27 Mar",
    details: "2 stops - 20 hrs 50 min",
  },
  {
    image: "https://static.vecteezy.com/system/resources/previews/016/916/479/original/placeholder-icon-design-free-vector.jpg",
    name: "New Delhi",
    dateRange: "11 Jul – 20 Jul",
  },
  {
    image: "https://static.vecteezy.com/system/resources/previews/016/916/479/original/placeholder-icon-design-free-vector.jpg",
    name: "Singapore",
    dateRange: "27 Feb – 5 Mar",
  },
  {
    image: "https://static.vecteezy.com/system/resources/previews/016/916/479/original/placeholder-icon-design-free-vector.jpg",
    name: "Sydney",
    dateRange: "13 Mar – 19 Mar",
  },
];

const TravelCard = () => {
  return (
    <div className="bg-transparent p-4 rounded-lg">
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {destinations.map((destination, index) => (
          <div
            key={index}
            className="bg-transparent rounded-lg overflow-hidden shadow-md p-3"
          >
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-32 object-cover rounded-md"
            />
            <div className="mt-2 text-white">
              <h3 className="font-semibold">{destination.name}</h3>
              {destination.price && (
                <p className="text-gray-300 font-bold">{destination.price}</p>
              )}
              <p className="text-gray-400">{destination.dateRange}</p>
              {destination.details && (
                <p className="text-gray-500 text-sm">{destination.details}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelCard;
