export const dynamic = 'force-dynamic';
//@ts-nocheck
import Navbar from "@/components/navbar";
import Script from "next/script";
import "@/styles/globals.css";
import Providers from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <Script strategy="beforeInteractive" id="google-ads-config" dangerouslySetInnerHTML={{ __html: "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} window.gtag = gtag; gtag('js', new Date()); gtag('config', 'AW-397121812'); gtag('config', 'AW-397121812/vA2dCNbkpOAcEJSyrr0B', { phone_conversion_number: '516-495-4908' });" }} />
        <Script strategy="afterInteractive" id="google-ads-library" src="https://www.googletagmanager.com/gtag/js?id=AW-397121812" />
        <Script strategy="beforeInteractive" id="optimum-lead-tracking" dangerouslySetInnerHTML={{ __html: "(function(){\n  if(window.__optimumLeadTracking) return;\n  window.__optimumLeadTracking=true;\n  var live=/^(www\\.)?optimumlaserhairremoval\\.com$/.test(location.hostname);\n  document.addEventListener('click',function(event){\n    var target=event.target instanceof Element ? event.target.closest('a[href^=\"tel:\"]') : null;\n    if(!target || !live) return;\n    window.gtag('event','conversion',{send_to:'AW-397121812/MOdwCNec7P4BEJSyrr0B',transport_type:'beacon'});\n  });\n  document.addEventListener('submit',function(event){\n    var form=event.target;\n    if(!(form instanceof HTMLFormElement) || event.defaultPrevented || !form.checkValidity()) return;\n    var endpoint=new URL(form.action,location.href);\n    if(endpoint.hostname !== 'formsubmit.co') return;\n    var source=location.pathname === '/contact-us' ? 'contact' : location.pathname === '/' ? 'homepage' : 'website';\n    var next=form.querySelector('input[name=\"_next\"]');\n    if(!next){next=document.createElement('input');next.type='hidden';next.name='_next';form.appendChild(next);}\n    var destination=new URL('/thank-you',location.origin);\n    destination.searchParams.set('form',source);\n    next.value=destination.href;\n    try {sessionStorage.setItem('optimum_pending_lead',JSON.stringify({id:crypto.randomUUID(),form:source,created:Date.now()}));}catch(error){}\n    if(live) window.gtag('event','form_submit_attempt',{send_to:'AW-397121812',form_name:source,transport_type:'beacon'});\n  });\n})();" }} />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap" />
      <link rel="icon" href="/images/thumbnail/favicon.ico" sizes="any" />
        <script id="pixel-chaty" async src="https://cdn.chaty.app/pixel.js?id=Xl7k5eSq"></script>
        <meta name="google-site-verification" content="I1WodR0PL81EiXRAlt1tpNNWDf-qYnswyX0jr9hd1FY" />
      </head>
      <body>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-TG7MTK4H');`}
        </Script>

        <Navbar />
        <Providers>{children}</Providers>
        <div id="floatingEstimator" />
        <Script id="optimum-cherry-widgets" strategy="afterInteractive">{"(function(w,d){\n  if(d.getElementById('_hw')) return;\n  w._hw=w._hw||function(){(w._hw.q=w._hw.q||[]).push(arguments);};\n  var js=d.createElement('script');js.id='_hw';js.src='https://files.withcherry.com/widgets/widget.js';js.async=true;\n  d.head.appendChild(js);\n  w._hw('init',{\n    debug:false,\n    variables:{slug:'optimum-laser-ny',name:'Optimum Laser NY',images:[26],customLogo:'',defaultPurchaseAmount:750,customImage:'',imageCategory:'medspa',language:'en'},\n    styles:{primaryColor:'#7a6f9b',secondaryColor:'#7a6f9b10',fontFamily:'Montserrat',headerFontFamily:'Montserrat',floatingEstimator:{position:'bottom-right',offset:{x:'16px',y:'100px'},zIndex:450,ctaFontFamily:'Montserrat',bodyFontFamily:'Montserrat',ctaColor:'#7a6f9b',ctaTextColor:'#FFFFFF'}}\n  },d.getElementById('cherry-payment-page')?['hero','calculator','howitworks','faq','floatingEstimator']:['floatingEstimator']);\n})(window,document);"}</Script>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TG7MTK4H" height="0" width="0" style={{display: "none", visibility: "hidden"}}></iframe></noscript>
      </body>
    </html>
  );
}

export const metadata = {
  title: "Laser Hair Removal in Manhasset - Optimum Laser",
  description: "Optimum Laser",
};
