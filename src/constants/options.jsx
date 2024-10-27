export const SelectTravelList = [
  {
    id: 1,
    title: "Solo Adventure",
    desc: "Embark on a journey of self-discovery",
    icon: "🎒",
    people: "1 person",
  },
  {
    id: 2,
    title: "Romantic Getaway",
    desc: "Experience the world together",
    icon: "💑",
    people: "2 people",
  },
  {
    id: 3,
    title: "Family Fun",
    desc: "Create unforgettable memories with loved ones",
    icon: "🏠",
    people: "3 to 4 people",
  },
  {
    id: 4,
    title: "Friends' Escapade",
    desc: "Thrilling adventures with your best pals",
    icon: "🧑‍🤝‍🧑",
    people: "5 to 10 people",
  },
  {
    id: 5,
    title: "Invisible Friends",
    desc: "Experience a spine-chilling Halloween adventure",
    icon: "🎃",
    people: "Any group size",
  },
];

export const SelectBudgetOptions = [
  {
    id: 1,
    title: "Budget-Friendly",
    desc: "Travel smart, spend less",
    icon: "💸",
  },
  {
    id: 2,
    title: "Moderate",
    desc: "Balance comfort and cost",
    icon: "💵",
  },
  {
    id: 3,
    title: "Luxury",
    desc: "Indulge in lavish experiences",
    icon: "💎",
  },
];

export const AI_PROMPT = `
  Generate a travel plan for the destination: {location} for {totalDays} days. 
  Traveler type: {traveler}, with a {budget} budget. 
  Provide a list of hotel options including the name, address, and the most recent image URL (ensure the URL is working), geo coordinates, rating, and descriptions. 
  Suggest a daily itinerary with place names, details, image URLs, geo coordinates, ticket pricing, ratings, and travel time for each location for {totalDays} days, including the best time to visit. 
  Output in JSON format.
`;
export const HALLOWEEN_PROMPT = `
  Generate a Halloween-themed travel plan for the destination: {location} for {totalDays} days. 
  Traveler type: {traveler}, with a {budget} budget.
  Focus on haunted hotels, ghost tours, spooky attractions, and Halloween events that capture the spirit of Halloween.
  Provide haunted hotel options with eerie descriptions, including name, address, the most recent image URL (ensure the URL is working), geo coordinates, rating, and details on any ghostly legends.
  Suggest a daily itinerary featuring haunted locations, ghostly activities, Halloween-themed events, and thrill-seeking attractions with place names, details, image URLs, geo coordinates, ticket pricing, ratings, and travel time for each location.
  Include the best times to visit each spot for an optimal spooky experience.
  Output in JSON format.
`;

export const PHOTO_REF_URL =
  "https://places.googleapis.com/v1/{NAME}/media?maxHeightPx=600&maxWidthPx=600&key=" +
  import.meta.env.VITE_GOOGLE_PLACE_API_KEY;
