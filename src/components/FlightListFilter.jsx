import React, { useEffect, useState } from "react";

export default function FlightListFilter({ onChange }) {
  const [airline, setairline] = useState("");
  const [stops, setStops] = useState(false);
  const [price, setPrice] = useState("");

  useEffect(() => {
    const filters = {};
    if (airline && airline !== "all") filters.airline = airline;
    if (stops) filters.stops = true;
    if (price && price !== "all") filters.price = price;

    onChange(filters);
  }, [airline, stops, price, onChange]);

  return (
    <div className="flex space-x-16 bg-amber-300 my-4 px-8 py-4">
      <div className="border">
        <select value={airline} onChange={(e) => setairline(e.target.value)}>
          <option value="all">all</option>
          <option value="Emirates">Emirates</option>
          <option value="Turkish Airlines">Turkish Airlines</option>
          <option value="Lufthansa">Lufthansa</option>
        </select>
      </div>

      <div className="border">
        <label>
          <input
            type="checkbox"
            checked={stops}
            onChange={() => setStops((check) => !check)}
          />
          Non Stops
        </label>
      </div>

      <div className="border">
        <select value={price} onChange={(e) => setPrice(e.target.value)}>
          <option value="all">all</option>
          <option value="100">300-400</option>
          <option value="300">450-600</option>
          <option value="400">700-800</option>
        </select>
      </div>
    </div>
  );
}
