export default function BookingPage() {
  return (
    <>
      <main className="min-h-screen bg-[#fbf6ef] px-5 py-20 text-center text-[#35281e]">
        <p className="text-sm font-semibold tracking-[0.18em]">OPTIMUM LASER</p>
        <h1 className="mt-4 font-serif text-4xl">Opening secure online booking…</h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-[#5b4638]">
          Please wait while DaySmart opens your free consultation booking page.
        </p>
      </main>
      <script
        dangerouslySetInnerHTML={{
          __html:             'var daysmart_acc = "dc3faad1-130b-4594-9fd0-27c386264ba3"; daysmart_iframe_width = 700; daysmart_iframe_height = 0; daysmart_website_root = "https://plugin.myonlineappointment.com"; load_in_iframe = "false";',
        }}
      />
      <script
        type="text/javascript"
        src="https://plugin.myonlineappointment.com/Scripts/external/bookingplugin.js"
      />
    </>
  );
}
