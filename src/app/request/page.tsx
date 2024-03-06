"use client";
import React from "react";

const page = () => {
  return (
    <>
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `daysmart_acc = "dc3faad1-130b-4594-9fd0-27c386264ba3"; daysmart_iframe_width = 700; daysmart_iframe_height = 0; daysmart_website_root = "https://plugin.myonlineappointment.com"; load_in_iframe = "false"; `,
        }}
      ></script>
      <script type="text/javascript" src="https://plugin.myonlineappointment.com/Scripts/external/bookingplugin.js"></script>
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
          function adjustMarginTop() {
            const fr = document.querySelector('#externalBookingPluginContainer');
            const minWidthForMobile = 768; // Width in pixels to define mobile devices
        
            if (window.innerWidth < minWidthForMobile) {
              fr.style.marginTop = '100px'; // Margin top for mobile devices
            } else {
              fr.style.marginTop = '170px'; // Margin top for non-mobile devices
            }
          }
        
          window.addEventListener('resize', adjustMarginTop);
          adjustMarginTop(); // Initial call to set the margin
        
          const fr = document.querySelector('#externalBookingPluginContainer');
          fr.style.maxWidth = '100%';
          document.querySelector('#externalBookingPlugin').style.minHeight = 'calc(100vh - 170px)';
        `,
        }}
      >
      </script>
    </>
  );
};

export default page;
