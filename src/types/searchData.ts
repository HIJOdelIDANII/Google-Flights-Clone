import { Dayjs } from "dayjs";

type FlightClass = "Economy" | "Premium economy" | "Business" | "First";
type TripType = "One-way" | "Round-trip" | "Multi-city";
interface PassengersData {
  adults: number;
  children: number;
  infants: number;
}

export interface SearchData {
  departureDate: Dayjs | null;
  returnDate: Dayjs | null;
  departureLocation: string | null;
  arrivationLocation: string | null;
  passengers: PassengersData;
  tripType: TripType;
  flightClass: FlightClass;
}
