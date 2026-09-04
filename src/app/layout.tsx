export const dynamic = 'force-dynamic';
//@ts-nocheck
import Navbar from "@/components/navbar";
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
      <link rel="icon" href="/images/thumbnail/favicon.ico" sizes="any" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-TG7MTK4H');`,
          }}
        ></script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-397121812"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-397121812');`,
          }}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `gtag('config', 'AW-397121812/vA2dCNbkpOAcEJSyrr0B', { phone_conversion_number: '516-495-4908' });`,
          }}
        ></script>
        <script
          id="pixel-chaty"
          async
          src="https://cdn.chaty.app/pixel.js?id=Xl7k5eSq"
        ></script>
        <meta
          name="google-site-verification"
          content="I1WodR0PL81EiXRAlt1tpNNWDf-qYnswyX0jr9hd1FY"
        />
      </head>
      <body>
        <Navbar />
        <Providers>{children}</Providers>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TG7MTK4H"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          ></iframe>
        </noscript>
      </body>
    </html>
  );
}

export const metadata = {
  title: "Laser Hair Removal in Manhasset - Optimum Laser",
  description: "Optimum Laser",
};
