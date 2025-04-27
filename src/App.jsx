import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import FlightList from "./components/FlightList";
import { fetchFlights } from "./api/flights";
import FlightListFilter from "./components/FlightListFilter";
import Header from "./components/Header";

function App() {
  const [airline, setAirline] = useState("airline");
  const [price, setPrice] = useState("price");
  const [stops, setStops] = useState("stops");

  const { data, isFetching } = useQuery({
    queryKey: ["flights", { airline, price, stops }],
    queryFn: () => fetchFlights({ airline, price, stops }),
  });

  return (
    <div className="w-full">
      <Header />

      <div className="flex flex-col lg:flex-row gap-30 bg-gray-100 ">
        <FlightListFilter
          onChange={(filters) => {
            setAirline(filters.airline);
            setPrice(filters.price);
            setStops(filters.stops);
          }}
        />

        <main className="p-6 overflow-y-auto">
          {data && <FlightList flights={data} />}
          {isFetching && <p>loading...</p>}
        </main>
      </div>
    </div>
  );
}

export default App;
