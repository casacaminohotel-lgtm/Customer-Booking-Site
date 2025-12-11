# Deploy to Vercel

Your frontend-only hotel booking site is now ready to deploy!

## Quick Start - Deploy to Vercel (Recommended)

### Option 1: One-Click Deploy (Easiest)

1. Click the button below:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/mot)

2. Connect your GitHub account
3. Select the repository
4. Click "Deploy"
5. Done! Your site is live 🎉

### Option 2: Manual Deploy via Vercel Dashboard

1. Go to [Vercel.com](https://vercel.com)
2. Click "New Project"
3. Connect your GitHub account and select the `mot` repository
4. Click "Import"
5. Leave settings as default
6. Click "Deploy"

### Option 3: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
cd "/Users/abhishekreddy/Desktop/Casa Basic/mot"
vercel

# For production deployment
vercel --prod
```

## Configure Your Properties

Before deploying, update your properties in `src/lib/properties-data.ts`:

```typescript
export const properties: Property[] = [
  {
    id: "casa-camino",
    name: "Casa Camino Hotel",
    description: "A charming hotel with excellent amenities",
    location: "Los Angeles, CA",
    image: "/properties/casa-camino.jpg",
    bookingEngineUrl: "https://booking.hotelkeyapp.com/#/booking/select-rooms?...",
    amenities: ["WiFi", "Parking", "Pool"]
  },
  // Add more properties here
];
```

## Environment Variables

No environment variables are required! This is a fully static frontend.

## After Deployment

Your site will be available at a Vercel URL like:
- `https://your-project.vercel.app`
- Or your custom domain if configured

## Custom Domain (Optional)

1. In Vercel Dashboard, go to your project
2. Click "Settings" → "Domains"
3. Enter your custom domain
4. Follow DNS configuration instructions

## Updating Your Site

After deployment, any changes you push to your GitHub repository will automatically trigger a new deployment on Vercel.

To update:
1. Make changes locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update properties"
   git push origin main
   ```
3. Vercel automatically deploys the changes

## Build & Test Locally

Before deploying, test your build:

```bash
npm run build
npm start
```

Visit `http://localhost:3000` to verify everything works.

## Booking Integration

When users click "Book Now", they are redirected to your booking engine with:
- Check-in date
- Check-out date
- Number of guests
- Property ID

Make sure your booking engine URLs in `properties-data.ts` are correct!

## Troubleshooting

### Build Fails
- Ensure all dependencies are installed: `npm install`
- Check for TypeScript errors: `npm run build`

### Images Not Loading
- Place images in `/public/properties/` directory
- Update image paths in `properties-data.ts`

### Booking Not Working
- Verify booking engine URLs are complete and correct
- Test URLs manually in browser
- Check that placeholder variables match your booking engine

## Need Help?

- [Vercel Docs](https://vercel.com/docs)
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
