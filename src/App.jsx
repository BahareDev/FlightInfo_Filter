import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import FlightList from "./components/FlightList";
import { fetchFlights } from "./api/flights";
import FlightListFilter from "./components/FlightListFilter";

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
      <div>
        <h1 className="text-4xl font-bold m-4 ">اطلاعات پرواز</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-30  bg-gray-100">
        <aside className="w-full lg:w-1/4 border-b md:border-b-0 md:border-r border-gray-200 p-4 bg-gray-50 sticky top-0 h-auto md:h-screen">
          <FlightListFilter
            onChange={(filters) => {
              setAirline(filters.airline);
              setPrice(filters.price);
              setStops(filters.stops);
            }}
          />
        </aside>

        <main className="p-6 overflow-y-auto">
          {data && <FlightList flights={data} />}
          {isFetching && <p>loading...</p>}
        </main>
      </div>
    </div>
  );
}

export default App;
