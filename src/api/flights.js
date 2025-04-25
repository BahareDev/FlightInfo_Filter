import { flights } from "./data/flights";

export const fetchFlights = async (options = {}) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  let filteredFlights = flights;

  if (options?.airline) {
    filteredFlights = filteredFlights.filter((flight) => {
      return flight.airline === options.airline;
    });
  }

  if (typeof options?.price === "number") {
    filteredFlights = filteredFlights.filter((flight) => {
      return flight.price >= Number(options.price);
    });
  }

  if (options?.stops === tr) {
    filteredFlights = filteredFlights.filter((flight) => {
      return flight.stops === 0;
    });
  }


  return filteredFlights;
};
