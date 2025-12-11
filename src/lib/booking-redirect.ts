// Utility functions for booking engine redirects

export interface BookingParams {
  propertyId: string;
  checkIn: string; // Format: YYYY-MM-DD
  checkOut: string; // Format: YYYY-MM-DD
  guests: number;
}

export const generateBookingUrl = (
  baseUrl: string,
  params: BookingParams
): string => {
  return baseUrl
    .replace("{checkIn}", params.checkIn)
    .replace("{checkOut}", params.checkOut)
    .replace("{guests}", params.guests.toString());
};

export const redirectToBookingEngine = (url: string): void => {
  if (typeof window !== "undefined") {
    window.location.href = url;
  }
};

// Format date for booking URL (YYYY-MM-DD)
export const formatDateForBooking = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};
