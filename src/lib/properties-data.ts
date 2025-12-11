// Static properties data for frontend-only website
export interface Property {
  id: string;
  name: string;
  description: string;
  location: string;
  image: string;
  // Optional Cloudinary collection or gallery link for property images
  galleryCollection?: string;
  // Optional array of photos for carousels / galleries
  photos?: {
    id: string;
    url: string;
    isMain?: boolean;
  }[];
  bookingEngineUrl: string;
  amenities: string[];
}

export const properties: Property[] = [
  {
    id: "casa-camino",
    name: "Casa Camino Hotel",
    description: "A charming and comfortable hotel with excellent amenities and warm hospitality",
    location: "Los Angeles, CA",
    image: "https://res.cloudinary.com/dyskxbejq/image/upload/v1765485235/1_sbuakk.jpg",
    galleryCollection: "https://collection.cloudinary.com/dyskxbejq/71046c512c2ca17979f217c6356e1664",
    photos: [
      {
        id: "1",
        url: "https://res.cloudinary.com/dyskxbejq/image/upload/v1765485235/1_sbuakk.jpg",
        isMain: true
      }
      ,
      {
        id: "2",
        url: "https://res.cloudinary.com/dyskxbejq/image/upload/v1765485236/2_o8vbns.jpg",
        isMain: false
      }
    ],
    // Additional photos will be appended here
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
