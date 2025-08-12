import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import MapWidget from './MapWidget';

const InteractiveMapWidget = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapType, setMapType] = useState<'google' | 'fallback'>('google');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [timeoutReached, setTimeoutReached] = useState(false);

  useEffect(() => {
    // Set a 20-minute timeout
    const timeoutId = setTimeout(() => {
      console.log('⏰ 20-minute timeout reached, falling back to OSM widget');
      setTimeoutReached(true);
      setMapType('fallback');
      setIsLoading(false);
    }, 20 * 60 * 1000); // 20 minutes

    const initGoogleMap = async () => {
      try {
        console.log('🔍 Starting Google Maps initialization...');
        
        // Check if API key is available
        const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
        if (!apiKey) {
          console.log('❌ No API key found, falling back to OSM widget');
          setMapType('fallback');
          setIsLoading(false);
          return;
        }

        console.log('✅ API Key available:', !!apiKey);

        // Create loader with simpler configuration
        const loader = new Loader({
          apiKey: apiKey,
          version: 'weekly',
          libraries: ['places']
        });

        // Load Google Maps
        const google = await loader.load();
        console.log('✅ Google Maps loaded successfully!');

        if (!mapRef.current) {
          console.log('❌ Map container not found');
          setMapType('fallback');
          setIsLoading(false);
          return;
        }

        // Create map with simpler options
        const location = { lat: 40.7974, lng: -73.6997 }; // Optimum Laser NY coordinates
        
        const mapOptions = {
          center: location,
          zoom: 15,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: false,
          zoomControl: true
        };

        const map = new google.maps.Map(mapRef.current, mapOptions);
        
        // Add marker
        new google.maps.Marker({
          position: location,
          map: map,
          title: 'Optimum Laser NY'
        });

        console.log('🗺️ Google Map created successfully!');
        setMapType('google');
        setIsLoading(false);
        
      } catch (error) {
        console.error('❌ Error loading Google Maps:', error);
        setError(error instanceof Error ? error.message : 'Unknown error');
        setMapType('fallback');
        setIsLoading(false);
      }
    };

    if (mapType === 'google' && !timeoutReached) {
      initGoogleMap();
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [mapType, timeoutReached]);

  // If Google Maps failed or timeout reached, show fallback
  if (mapType === 'fallback' || timeoutReached) {
    return <MapWidget width="220px" height="180px" />;
  }

  // Show loading state
  if (isLoading) {
    return (
      <div
        style={{
          width: '220px',
          height: '180px',
          borderRadius: '12px',
          background: 'linear-gradient(135deg, #f5e6d3 0%, #f8c8dc 50%, #f4d1ae 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#000000',
          fontFamily: 'Raleway, sans-serif',
          fontSize: '14px',
          fontWeight: '600',
          textAlign: 'center',
          border: '2px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)'
        }}
      >
        <div>
          <div style={{ marginBottom: '10px' }}>🗺️</div>
          <div>Loading Google Maps...</div>
          {error && <div style={{ fontSize: '12px', marginTop: '5px', color: '#d32f2f' }}>Error: {error}</div>}
        </div>
      </div>
    );
  }

  // Show Google Map
  return (
    <div
      ref={mapRef}
      style={{
        width: '220px',
        height: '180px',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
        border: '2px solid rgba(255, 255, 255, 0.2)'
      }}
    />
  );
};

export default InteractiveMapWidget; 