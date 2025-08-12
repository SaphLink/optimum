"use client";
import React from 'react';

interface MapWidgetProps {
  width?: string;
  height?: string;
  className?: string;
}

const MapWidget: React.FC<MapWidgetProps> = ({ 
  width = "200px", 
  height = "150px", 
  className = "" 
}) => {
  const address = "1180+Northern+Blvd,+Manhasset,+NY+11030";

  return (
    <div 
      style={{ 
        width, 
        height, 
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
        position: 'relative',
        cursor: 'pointer',
        background: 'linear-gradient(135deg, #f5e6d3 0%, #f8c8dc 50%, #f4d1ae 100%)',
        border: '2px solid rgba(255, 255, 255, 0.2)',
        transition: 'all 0.3s ease',
      }}
      className={className}
      onClick={() => window.open(`https://maps.google.com/maps?q=${address}`, '_blank')}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 12px 35px rgba(0, 0, 0, 0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
      }}
    >
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
          linear-gradient(45deg, transparent 40%, rgba(255, 255, 255, 0.05) 50%, transparent 60%)
        `,
        pointerEvents: 'none'
      }} />
      
      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '15px',
        color: '#000000',
        textAlign: 'center',
        fontFamily: 'Raleway, sans-serif'
      }}>
        {/* Map Pin Icon */}
        <div style={{
          fontSize: '32px',
          marginBottom: '12px',
          filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))',
          animation: 'pulse 2s infinite'
        }}>
          📍
        </div>
        
                 {/* Business Name */}
         <div style={{
           fontWeight: '900',
           fontSize: '16px',
           marginBottom: '8px',
           textShadow: '0 1px 2px rgba(255, 255, 255, 0.8)',
           letterSpacing: '0.5px'
         }}>
           Optimum Laser NY
         </div>
         
         {/* Address */}
         <div style={{
           fontSize: '13px',
           lineHeight: '1.4',
           fontWeight: '600',
           textShadow: '0 1px 2px rgba(255, 255, 255, 0.8)',
           marginBottom: '10px'
         }}>
           1180 Northern Blvd<br/>
           Manhasset, NY 11030
         </div>
         
         {/* Call to Action */}
         <div style={{
           fontSize: '12px',
           fontWeight: '700',
           textDecoration: 'underline',
           textShadow: '0 1px 2px rgba(255, 255, 255, 0.8)'
         }}>
           Click for directions →
         </div>
      </div>
      
      {/* Corner Decoration */}
      <div style={{
        position: 'absolute',
        top: '8px',
        right: '8px',
        width: '20px',
        height: '20px',
        border: '2px solid rgba(255, 255, 255, 0.3)',
        borderLeft: 'none',
        borderBottom: 'none',
        borderRadius: '0 8px 0 0',
        pointerEvents: 'none'
      }} />
      
      {/* Bottom Decoration */}
      <div style={{
        position: 'absolute',
        bottom: '0',
        left: '0',
        right: '0',
        height: '4px',
        background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.2) 100%)',
        pointerEvents: 'none'
      }} />
    </div>
  );
};

export default MapWidget; 