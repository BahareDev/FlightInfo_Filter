import { flights } from "./data/flights";

export const fetchFlights = async (options = {}) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  let filteredFlights = flights;

  if (options?.airline) {
    filteredFlights = filteredFlights.filter((flight) => {
      return flight.airline === options.airline;
    });
  }

  if (typeof options?.price === "string" && options.price !== "all") {
    const [min, max] = options.price.split("-").map(Number);

    filteredFlights = filteredFlights.filter((flight) => {
      return flight.price >= min && flight.price <= max;
    });
  }

  if (options?.stops === true) {
    filteredFlights = filteredFlights.filter((flight) => {
      return flight.stops === 0;
    });
  }

  return filteredFlights;
};
export const airlineOptions = [
  ...new Set(flights.map((flight) => flight.airline)),
];

// export const priceOptions = [
//   ...new Set(flights.map((flight) => flight.airline)),
// ];
