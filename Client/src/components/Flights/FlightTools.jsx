import React from "react";

const FlightTools = () => {
  return (
    <div className="bg-transparent text-white p-6">
      <h2 className="text-xl font-bold mb-4">Useful tools to help you find the best deals</h2>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex flex-col gap-4 lg:w-1/3">
          <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <span role="img" aria-label="calendar">📅</span> Find the cheapest days to fly
            </h3>
            <p className="text-sm text-gray-400">
              The date grid and price graph make it easy to see the best flight deals.
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <span role="img" aria-label="graph">📈</span> See the whole picture with price insights
            </h3>
            <p className="text-sm text-gray-400">
              Price history and trend data show you when to book to get the best price on your flight.
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <span role="img" aria-label="bell">🔔</span> Track prices for a trip
            </h3>
            <p className="text-sm text-gray-400">
              Not ready to book yet? Observe price changes for a route or flight and get notified when prices drop.
            </p>
          </div>
        </div>
        <div className="lg:w-2/3">
          <h3 className="text-lg font-semibold">Insightful tools help you choose your trip dates</h3>
          <p className="text-sm text-gray-400 mb-4">
            If your travel plans are flexible, use the form above to start searching for a specific trip.
            Then, play around with the <strong>Date grid</strong> and <strong>Price graph</strong> options on the search page to
            find the cheapest days to get to your destination – and back again for round trips.
          </p>
          <div className="bg-transparent p-6 rounded-lg border border-gray-700 flex justify-center">
            <div className="grid grid-cols-5 grid-rows-3 gap-2">
              <div className="w-8 h-8 bg-red-500 flex items-center justify-center rounded">❌</div>
              <div className="w-8 h-8 bg-red-500 flex items-center justify-center rounded">❌</div>
              <div className="w-8 h-8 bg-green-500 flex items-center justify-center rounded">⭐</div>
              <div className="w-8 h-8 bg-transparent"></div>
              <div className="w-8 h-8 bg-green-500 flex items-center justify-center rounded">⭐</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightTools;
