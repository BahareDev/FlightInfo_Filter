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
    <>
      <div>
        <h1 className="text-4xl font-bold">Airlines Info</h1>
      </div>
      <div>
        <FlightListFilter
          onChange={(filters) => {
            setAirline(filters.airline);
            setPrice(filters.price);
            setStops(filters.stops);
          }}
        />
      </div>
      <div>
        {data && <FlightList flights={data} />}
        {isFetching && <p>loading...</p>}
      </div>
    </>
  );
}

export default App;
