import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const destinations = [
  { name: "London", image: "https://static.vecteezy.com/system/resources/previews/016/916/479/original/placeholder-icon-design-free-vector.jpg" },
  { name: "Ahmedabad", image: "ahmedabad.jpg" },
  { name: "Dubai", image: "dubai.jpg" },
  { name: "Pune", image: "pune.jpg" },
  { name: "Jaipur", image: "jaipur.jpg" },
  { name: "Lucknow", image: "lucknow.jpg" },
  { name: "Singapore", image: "singapore.jpg" }
];

const DestinationSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-900 text-white p-6">
      <h2 className="text-2xl font-bold mb-6">Popular destinations from Kochi</h2>
      <Slider {...settings} className="w-full">
        {destinations.map((destination, index) => (
          <div key={index} className="px-2">
            <div className="rounded-xl overflow-hidden shadow-lg relative group">
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-3 left-3 bg-black bg-opacity-50 px-3 py-1 rounded-md">
                <p className="text-white font-semibold text-lg">{destination.name}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DestinationSlider;
