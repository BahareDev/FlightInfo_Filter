import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import FlightList from "./components/FlightList";
import { fetchFlights } from "./api/flights";

function App() {
  // const [airline, setAirline] = useState("airline");
  // const [price, setPrice] = useState("price");
  // const [stops, setStops] = useState("stops");

  const { data, isFetching } = useQuery({
    queryKey: ["flights"],
    queryFn: () => fetchFlights(),
  });

  return (
    <>
      <div>
        <h1 className="text-4xl font-bold">Airlines Info</h1>
      </div>
      <div>
        {data && <FlightList flights={data} />}
        {isFetching && <p>loading...</p>}
      </div>
    </>
  );
}

export default App;
