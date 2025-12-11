# Hotel Booking Frontend

A minimal, frontend-only hotel booking website built with Next.js. Users can browse static properties and book them through an external booking engine.

## Features

- **Frontend Only** - No database required
- **Static Properties** - Easily manage properties through TypeScript config
- **Booking Redirect** - Seamless redirect to external booking engine with dates and guest count
- **Responsive Design** - Mobile and desktop friendly
- **Fast Deploy** - Ready for Vercel deployment

## Project Structure

```
src/
├── app/
│   ├── page.tsx           # Home page
│   ├── properties/        # Properties listing
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   └── layout.tsx         # Main layout
├── components/
│   ├── Navigation.tsx     # Navigation bar
│   └── ui/                # UI components
├── lib/
│   ├── properties-data.ts # Static properties config
│   └── booking-redirect.ts # Booking redirect utilities
└── types/
    └── env.d.ts          # Environment types
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Visit `http://localhost:3000` to see your site.

## Configuration

### Adding Properties

Edit `src/lib/properties-data.ts` to add your properties:

```typescript
export const properties: Property[] = [
  {
    id: "property-1",
    name: "Property Name",
    description: "Property description",
    location: "City, State",
    image: "/properties/image.jpg",
    bookingEngineUrl: "https://booking.engine.com/#/booking/...",
    amenities: ["WiFi", "Parking", "Pool"]
  },
  // Add more properties...
];
```

### Booking Engine URL Format

The booking engine URL should include placeholders for dynamic values:

```
https://booking.hotelkeyapp.com/#/booking/select-rooms?
  pc=0717&
  from={checkIn}&
  to={checkOut}&
  guests={guests}&
  skip_search=true&
  property_id=YOUR_PROPERTY_ID&
  url=YOUR_WEBSITE_URL
```

Placeholders will be replaced with actual values:
- `{checkIn}` - Check-in date (YYYY-MM-DD)
- `{checkOut}` - Check-out date (YYYY-MM-DD)
- `{guests}` - Number of guests

## Building for Production

```bash
# Build the site
npm run build

# Start production server
npm start
```

## Deployment to Vercel

### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/hotel-booking)

### Manual Deploy

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Select your repository
5. Click "Deploy"

That's it! Your site will be live on a Vercel URL.

## Environment Variables

No environment variables required for basic functionality. The site is completely static.

## Customization

### Update Brand Name

Edit `src/components/Navigation.tsx` and `src/app/page.tsx` to change brand references.

### Add Static Pages

Create new files in `src/app/`:

```bash
# Create a new page
mkdir -p src/app/faq
touch src/app/faq/page.tsx
```

### Styling

The project uses Tailwind CSS for styling. Customize in `tailwind.config.js`.

## License

MIT

## Support

For issues and questions, please open an issue on GitHub.
