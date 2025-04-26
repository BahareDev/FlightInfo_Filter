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
    <div className="w-3xs">
      <div className="border-b-1 border-gray-200 font-bold pb-2">
        3 مورد پیدا شد
      </div>

      <section className="my-4">
        <h2 className="text-lg font-semibold mb-4 ">قیمت </h2>

        <select
          className="border border-gray-300 px-2 rounded-xl w-full "
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        >
          <option value="all">همه</option>
          <option value="100">300-400</option>
          <option value="300">450-600</option>
          <option value="400">700-800</option>
        </select>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-4">توقف ها</h2>
        <div className="flex items-center mb-2">
          <input
            type="checkbox"
            checked={stops}
            onChange={() => setStops((check) => !check)}
            className="accent-blue-600"
          />
          <label className="ml-2 text-sm p-1">بدون توقف</label>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-4">ایرلاین ها</h2>
        <div className="flex flex-col gap-2">
          <select
            value={airline}
            onChange={(e) => setairline(e.target.value)}
            className="border border-gray-300 px-2 rounded-xl w-full "
          >
            <option value="all">همه</option>
            {
              
            }
            <option value="Emirates">Emirates</option>
            <option value="Turkish Airlines">Turkish Airlines</option>
            <option value="Lufthansa">Lufthansa</option>
          </select>
        </div>
      </section>
    </div>
  );
}
