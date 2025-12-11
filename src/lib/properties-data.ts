// Static properties data for frontend-only website
export interface Property {
  id: string;
  name: string;
  description: string;
  location: string;
  image: string;
  bookingEngineUrl: string;
  amenities: string[];
}

export const properties: Property[] = [
  {
    id: "casa-camino",
    name: "Casa Camino Hotel",
    description: "A charming and comfortable hotel with excellent amenities and warm hospitality",
    location: "Los Angeles, CA",
    image: "/properties/casa-camino.jpg",
    bookingEngineUrl: "https://booking.hotelkeyapp.com/#/booking/select-rooms?pc=0717&from={checkIn}&to={checkOut}&guests={guests}&skip_search=true&property_id=05ffa925-1976-43ba-b56b-148937916180&url=http%3A%2F%2Fwww.casacaminohotel.com%2F",
    amenities: ["WiFi", "Parking", "Room Service", "Pool", "Restaurant"]
  },
  // Add more properties here
  // {
  //   id: "property-2",
  //   name: "Property Name",
  //   description: "Description",
  //   location: "Location",
  //   image: "/properties/property-2.jpg",
  //   bookingEngineUrl: "https://booking.hotelkeyapp.com/#/booking/...",
  //   amenities: ["WiFi", "Parking"]
  // }
];

export const getPropertyById = (id: string): Property | undefined => {
  return properties.find(p => p.id === id);
};

export const getAllProperties = (): Property[] => {
  return properties;
};
