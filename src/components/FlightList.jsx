import React from "react";
// bg-white border  border-black rounded-lg flex flex-col gap-8 md:flex-row justify-between items-center p-4 shadow-sm
function FlightList({ flights }) {
  return (
    <div className=" w-full lg:w-3/4 mt-6 space-y-6">
      {flights.map((flight) => (
        <div
          key={flight.id}
          className="bg-white border rounded-lg p-4 flex flex-col md:flex-row items-center justify-between shadow-sm"
        >
          <div className="flex flex-col md:flex-row items-center w-full gap-6">
            <div className="flex flex-col items-center w-48">
              <img
                src="https://placehold.co/400"
                alt="Airline Logo"
                className="w-10 h-10 rounded-full"
              />
              <div className="  mt-4 text-sm font-medium truncate">
                {flight.airline}
              </div>
            </div>

            <div className="flex items-center w-40 justify-center text-gray-600 text-sm">
              <div>{flight.from}</div>
              <span className="mx-2">➔</span>
              <div>{flight.to}</div>
            </div>

            <div className="w-40 text-center text-gray-400 text-xs">
              {flight.departure} ➔ {flight.arrival} (
              {flight.stops === 0 ? "بدون توقف" : flight.stops})
            </div>

            <div className="flex flex-col items-center md:items-end w-40 gap-2">
              <div className="text-xl text-center font-bold text-blue-600">
                {flight.price} تومان
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition text-sm">
                جزئیات و خرید
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FlightList;
