export const mockFlightResults = {
  flights: [
    {
      id: "flight-1",
      carriers: [
        {
          name: "Air France",
          alternateId: "AF",
          logoUrl: "https://logos.skyscnr.com/images/airlines/favicon/AF.png",
        },
      ],
      departure: {
        time: "2024-07-25T14:45:00",
        airport: "JFK",
      },
      arrival: {
        time: "2024-07-26T08:25:00",
        airport: "CDG",
      },
      duration: 460,
      stops: 0,
      price: {
        formatted: "$621",
        amount: 621,
      },
    },
    {
      id: "flight-2",
      carriers: [
        {
          name: "Delta Air Lines",
          alternateId: "DL",
          logoUrl: "https://logos.skyscnr.com/images/airlines/favicon/DL.png",
        },
      ],
      departure: {
        time: "2024-07-25T18:30:00",
        airport: "JFK",
      },
      arrival: {
        time: "2024-07-26T12:15:00",
        airport: "CDG",
      },
      duration: 485,
      stops: 1,
      price: {
        formatted: "$549",
        amount: 549,
      },
    },
    {
      id: "flight-3",
      carriers: [
        {
          name: "British Airways",
          alternateId: "BA",
          logoUrl: "https://logos.skyscnr.com/images/airlines/favicon/BA.png",
        },
      ],
      departure: {
        time: "2024-07-25T22:15:00",
        airport: "JFK",
      },
      arrival: {
        time: "2024-07-26T16:45:00",
        airport: "CDG",
      },
      duration: 510,
      stops: 1,
      price: {
        formatted: "$495",
        amount: 495,
      },
    },
    {
      id: "flight-4",
      carriers: [
        {
          name: "American Airlines",
          alternateId: "AA",
          logoUrl: "https://logos.skyscnr.com/images/airlines/favicon/AA.png",
        },
      ],
      departure: {
        time: "2024-07-25T11:20:00",
        airport: "JFK",
      },
      arrival: {
        time: "2024-07-26T05:55:00",
        airport: "CDG",
      },
      duration: 455,
      stops: 0,
      price: {
        formatted: "$689",
        amount: 689,
      },
    },
    {
      id: "flight-5",
      carriers: [
        {
          name: "United Airlines",
          alternateId: "UA",
          logoUrl: "https://logos.skyscnr.com/images/airlines/favicon/UA.png",
        },
      ],
      departure: {
        time: "2024-07-25T16:40:00",
        airport: "JFK",
      },
      arrival: {
        time: "2024-07-26T14:25:00",
        airport: "CDG",
      },
      duration: 525,
      stops: 2,
      price: {
        formatted: "$425",
        amount: 425,
      },
    },
    {
      id: "flight-6",
      carriers: [
        {
          name: "Lufthansa",
          alternateId: "LH",
          logoUrl: "https://logos.skyscnr.com/images/airlines/favicon/LH.png",
        },
      ],
      departure: {
        time: "2024-07-25T20:10:00",
        airport: "JFK",
      },
      arrival: {
        time: "2024-07-26T13:35:00",
        airport: "CDG",
      },
      duration: 495,
      stops: 1,
      price: {
        formatted: "$567",
        amount: 567,
      },
    },
  ],
  filterStats: {
    stopPrices: {
      direct: { formattedPrice: "$621" },
      one: { formattedPrice: "$495" },
      twoOrMore: { formattedPrice: "$425" },
    },
    carriers: [
      {
        id: 1,
        name: "Air France",
        alternateId: "AF",
        logoUrl: "https://logos.skyscnr.com/images/airlines/favicon/AF.png",
        minPrice: "$621",
      },
      {
        id: 2,
        name: "Delta Air Lines",
        alternateId: "DL",
        logoUrl: "https://logos.skyscnr.com/images/airlines/favicon/DL.png",
        minPrice: "$549",
      },
      {
        id: 3,
        name: "British Airways",
        alternateId: "BA",
        logoUrl: "https://logos.skyscnr.com/images/airlines/favicon/BA.png",
        minPrice: "$495",
      },
      {
        id: 4,
        name: "American Airlines",
        alternateId: "AA",
        logoUrl: "https://logos.skyscnr.com/images/airlines/favicon/AA.png",
        minPrice: "$689",
      },
      {
        id: 5,
        name: "United Airlines",
        alternateId: "UA",
        logoUrl: "https://logos.skyscnr.com/images/airlines/favicon/UA.png",
        minPrice: "$425",
      },
      {
        id: 6,
        name: "Lufthansa",
        alternateId: "LH",
        logoUrl: "https://logos.skyscnr.com/images/airlines/favicon/LH.png",
        minPrice: "$567",
      },
    ],
    duration: {
      min: 455,
      max: 525,
    },
  },
  totalResults: 156,
};

export const mockLocationResults = [
  {
    skyId: "JFK",
    entityId: 27537542,
    localizedName: "John F. Kennedy International",
    label: "New York JFK",
  },
  {
    skyId: "LGA",
    entityId: 27537543,
    localizedName: "LaGuardia",
    label: "New York LGA",
  },
  {
    skyId: "EWR",
    entityId: 27537544,
    localizedName: "Newark Liberty International",
    label: "Newark EWR",
  },
  {
    skyId: "CDG",
    entityId: 27539793,
    localizedName: "Charles de Gaulle",
    label: "Paris CDG",
  },
  {
    skyId: "ORY",
    entityId: 27539794,
    localizedName: "Orly",
    label: "Paris ORY",
  },
  {
    skyId: "LHR",
    entityId: 27544008,
    localizedName: "Heathrow",
    label: "London LHR",
  },
  {
    skyId: "LGW",
    entityId: 27544009,
    localizedName: "Gatwick",
    label: "London LGW",
  },
  {
    skyId: "LAX",
    entityId: 27536654,
    localizedName: "Los Angeles International",
    label: "Los Angeles LAX",
  },
  {
    skyId: "SFO",
    entityId: 27536655,
    localizedName: "San Francisco International",
    label: "San Francisco SFO",
  },
  {
    skyId: "DXB",
    entityId: 27540982,
    localizedName: "Dubai International",
    label: "Dubai DXB",
  },
  {
    skyId: "NRT",
    entityId: 27542923,
    localizedName: "Narita International",
    label: "Tokyo NRT",
  },
  {
    skyId: "HND",
    entityId: 27542924,
    localizedName: "Haneda",
    label: "Tokyo HND",
  },
  {
    skyId: "FRA",
    entityId: 27544722,
    localizedName: "Frankfurt am Main",
    label: "Frankfurt FRA",
  },
  {
    skyId: "AMS",
    entityId: 27543729,
    localizedName: "Amsterdam Schiphol",
    label: "Amsterdam AMS",
  },
  {
    skyId: "SIN",
    entityId: 27546850,
    localizedName: "Singapore Changi",
    label: "Singapore SIN",
  },
];

// Helper function to search mock location data
export const searchMockLocations = (query: string) => {
  if (!query || query.length < 2) return [];

  const lowerQuery = query.toLowerCase();
  return mockLocationResults.filter(
    (location) =>
      location.localizedName.toLowerCase().includes(lowerQuery) ||
      location.label.toLowerCase().includes(lowerQuery) ||
      location.skyId.toLowerCase().includes(lowerQuery)
  );
};
