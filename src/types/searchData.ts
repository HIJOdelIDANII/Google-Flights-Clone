import { Dayjs } from "dayjs";

type FlightClass = "Economy" | "Premium economy" | "Business" | "First";
type TripType = "One-way" | "Round-trip" | "Multi-city";
interface PassengersDataInterface {
  adults: number;
  children: number;
  infants: number;
}

export interface SearchDataInterface {
  departureDate: Dayjs | null;
  returnDate: Dayjs | null;
  departureLocation: string | null;
  arrivationLocation: string | null;
  passengers: PassengersDataInterface;
  tripType: TripType;
  flightClass: FlightClass;
}
