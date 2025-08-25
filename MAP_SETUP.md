# Google Maps Integration Setup Guide

## Overview
The Optimum Laser website now includes an interactive map widget with Google Maps integration and OpenStreetMap fallback. The map widget automatically tries Google Maps first, and if it fails, falls back to OpenStreetMap.

## Features
- **Google Maps Integration**: Interactive map with marker for Optimum Laser NY location
- **OpenStreetMap Fallback**: Automatic fallback if Google Maps fails to load
- **Manual Toggle**: Users can switch between Google Maps and OpenStreetMap
- **Loading States**: Visual feedback during map loading
- **Error Handling**: Graceful error handling with user-friendly messages

## Setup Instructions

### 1. Google Maps API Key Setup

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the following APIs:
   - Maps JavaScript API
   - Places API
4. Create credentials:
   - Go to "Credentials" in the left sidebar
   - Click "Create Credentials" → "API Key"
   - Copy the generated API key

### 2. Environment Configuration

Create a `.env.local` file in the `optimum` directory with the following content:

```env
# Google Maps API Key
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_actual_api_key_here

# Email for contact forms (if not already set)
NEXT_PUBLIC_EMAIL=your_email_here
```

### 3. API Key Restrictions (Recommended)

For security, restrict your API key:
1. In Google Cloud Console, go to "Credentials"
2. Click on your API key
3. Under "Application restrictions", select "HTTP referrers"
4. Add your domain(s):
   - `localhost:3000/*` (for development)
   - `yourdomain.com/*` (for production)
5. Under "API restrictions", select "Restrict key"
6. Select only the APIs you need (Maps JavaScript API, Places API)

## How It Works

### Automatic Fallback System
1. **Google Maps First**: The widget attempts to load Google Maps
2. **API Key Check**: If no API key is provided, shows fallback widget
3. **Error Handling**: If Google Maps fails to load, automatically switches to OpenStreetMap
4. **User Control**: Users can manually toggle between map types using the button

### Map Types

#### Google Maps
- Interactive map with custom styling
- Marker showing Optimum Laser NY location
- Zoom controls and gesture handling
- Professional appearance

#### OpenStreetMap
- Free, open-source map service
- No API key required
- Embedded iframe with location marker
- Reliable fallback option

#### Fallback Widget
- Static design with location information
- Click to open Google Maps in new tab
- Shows when no map services are available

## Troubleshooting

### Common Issues

1. **"Google Maps failed to load" error**
   - Check if API key is correctly set in `.env.local`
   - Verify API key has proper restrictions
   - Ensure Maps JavaScript API is enabled

2. **Map not showing**
   - Check browser console for errors
   - Verify network connectivity
   - Try refreshing the page

3. **API key restrictions too strict**
   - Temporarily remove restrictions for testing
   - Add `localhost:3000/*` to allowed referrers

### Development vs Production

- **Development**: Use `localhost:3000/*` in API key restrictions
- **Production**: Use your actual domain in API key restrictions
- **Testing**: The fallback system ensures the site works even without Google Maps

## File Structure

```
optimum/
├── src/
│   ├── components/
│   │   └── InteractiveMapWidget.tsx  # Main map component
│   └── app/
│       └── services/
│           └── laser-service/
│               └── page.tsx          # Uses map in FlowerSection
└── .env.local                        # Environment variables
```

## Usage

The map widget is automatically included in pages that use `FlowerSection` with `showMap={true}`:

```tsx
<FlowerSection showMap={true}>
  {/* Your content */}
</FlowerSection>
```

The widget will appear on the right side of the section, next to the Google Reviews logo.

## Performance Considerations

- Google Maps loads asynchronously to avoid blocking page rendering
- OpenStreetMap fallback ensures the site remains functional
- Loading states provide user feedback
- Map is only loaded when the component is visible

## Security Notes

- API key is exposed to the client (required for Google Maps)
- Use proper API key restrictions to prevent abuse
- Consider implementing usage quotas in Google Cloud Console
- Monitor API usage regularly 