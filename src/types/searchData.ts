import { Dayjs } from "dayjs";

export type FlightClass = "economy" | "premium_economy" | "business" | "first";
export type TripType = "One-way" | "Round-trip";
export interface PassengersDataInterface {
  adults: number;
  children: number;
  infants: number;
}

export interface SearchDataInterface {
  tripType: TripType;
  departureLocation: string | null;
  arrivationLocation: string | null;
  departureDate: Date | null;
  returnDate: Date | null;
  passengers: PassengersDataInterface;
  flightClass: FlightClass;
  departureAirportData?: any;
  arrivalAirportData?: any;
}
