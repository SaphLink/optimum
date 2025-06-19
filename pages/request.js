import React, { useEffect, useRef } from "react";

const Request = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    // Create the iframe for the booking widget
    const iframe = document.createElement('iframe');
    iframe.src = 'https://plugin.myonlineappointment.com/booking/dc3faad1-130b-4594-9fd0-27c386264ba3';
    iframe.style.width = '100%';
    iframe.style.height = 'calc(100vh - 170px)';
    iframe.style.border = 'none';
    iframe.style.marginTop = '170px';
    iframe.style.maxWidth = '100%';
    
    // Add responsive margin for mobile
    const adjustMargin = () => {
      if (window.innerWidth < 768) {
        iframe.style.marginTop = '100px';
      } else {
        iframe.style.marginTop = '170px';
      }
    };
    
    adjustMargin();
    window.addEventListener('resize', adjustMargin);
    
    // Append iframe to the container
    if (iframeRef.current) {
      iframeRef.current.appendChild(iframe);
    }
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', adjustMargin);
      if (iframeRef.current && iframe.parentNode) {
        iframe.parentNode.removeChild(iframe);
      }
    };
  }, []);

  return (
    <div ref={iframeRef} style={{ width: '100%', minHeight: 'calc(100vh - 170px)' }}>
      {/* The iframe will be injected here */}
    </div>
  );
};

export default Request; 