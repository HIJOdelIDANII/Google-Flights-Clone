import { Dayjs } from "dayjs";

export type FlightClass = "Economy" | "Premium economy" | "Business" | "First";
export type TripType = "One-way" | "Round-trip" | "Multi-city";
export interface PassengersDataInterface {
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
