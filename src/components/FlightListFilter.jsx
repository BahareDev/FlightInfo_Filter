import React, { useEffect, useState } from "react";
import FilterDropDown from "./FilterDropDown";
import { airlineOptions } from "../api/flights";

export default function FlightListFilter({ onChange }) {
  const [airline, setairline] = useState("");
  const [stops, setStops] = useState(false);
  const [price, setPrice] = useState("");

  const priceOptions = [
    { value: "0-300", label: "۰ تا ۳۰۰ دلار" },
    { value: "301-600", label: "۳۰۰ تا ۶۰۰ دلار" },
    { value: "601-900", label: "۶۰۰ تا ۹۰۰ دلار" },
    { value: "901-1200", label: "۹۰۰ تا ۱۲۰۰ دلار" },
  ];

  useEffect(() => {
    const filters = {};
    if (airline && airline !== "all") filters.airline = airline;
    if (stops) filters.stops = true;
    if (price && price !== "all") filters.price = price;

    onChange(filters);
  }, [airline, stops, price, onChange]);

  return (
    <aside className="w-full lg:w-1/4 border-b md:border-b-0 md:border-r border-gray-200 p-4 bg-gray-50 sticky top-0 h-auto md:h-screen">
      <div className="border-b-1 border-gray-200 font-bold pb-2">
        {}
      </div>

      <section className="my-4">
        <FilterDropDown
          options={priceOptions}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          title={"قیمت ها"}
        />
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

      <section className="flex flex-col gap-2">
        <FilterDropDown
          options={airlineOptions.map((airline) => ({
            value: airline,
            label: airline,
          }))}
          value={airline}
          onChange={(e) => setairline(e.target.value)}
          title={"ایرلاین ها"}
        />
      </section>
    </aside>
  );
}
