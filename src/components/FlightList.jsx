import React from "react";

function FlightList({ flights }) {
  return (
    <div>
      {flights.map((flight) => (
        <div
          key={flight.id}
          className=" border-2 m-8 border-black rounded-xl flex justify-between items-center p-4"
        >
          <div className="bg-red-200 p-4">{flight.airline}</div>
          <div className="bg-green-300 p-4">
            <div>info - {flight.stops}</div>
            <div>details</div>
          </div>

          <div className="bg-yellow-100">{flight.price}</div>
        </div>
      ))}
    </div>
  );
}

export default FlightList;
