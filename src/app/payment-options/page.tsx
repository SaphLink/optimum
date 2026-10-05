export const metadata = {
  title: "Payment Options with Cherry | Optimum Laser Manhasset",
  description: "Explore monthly payment options through Cherry for your personalized laser treatment package at Optimum Laser in Manhasset.",
};

export default function PaymentOptions() {
  return (
    <main id="cherry-payment-page" className="min-h-screen bg-[#fbf0df] px-5 pb-32 pt-40 text-[#35281e] sm:px-8 sm:pt-44" style={{ fontFamily: "Aptos, Segoe UI, sans-serif" }}>
      <section className="mx-auto max-w-4xl text-center">
        <p className="text-xs font-bold tracking-[0.26em] text-[#8a593d]">OPTIMUM LASER · PAYMENT OPTIONS</p>
        <h1 className="mt-4 text-4xl font-normal leading-tight tracking-[-0.04em] sm:text-6xl" style={{ fontFamily: "Georgia, Times New Roman, serif" }}>Your treatment.<br /><em className="text-[#ae7c50]">More ways to pay.</em></h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#5b4638]">Choose a laser package tailored to your goals, with the option to spread the cost through Cherry. Explore estimated payments below, then review the options available to you.</p>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#5b4638]">Financing is subject to approval. Rates and terms vary. The calculator starts with a $750 example; enter your quoted package price for a relevant estimate. This is not a package price or a guaranteed payment offer.</p>
        <a className="mt-5 inline-block font-bold underline underline-offset-4" href="/contact-us">Need a personalized treatment quote? Book a free consultation →</a>
      </section>
      <section aria-label="Cherry payment plans and calculator" className="mx-auto mt-10 max-w-6xl overflow-hidden rounded-[2rem] bg-[#fffdfb]">
        <div id="all" />
        <div id="hero" />
        <div id="calculator" />
        <div id="howitworks" />
        <div id="faq" />
      </section>
      <section className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-[#5b4638]">
        <h2 className="text-2xl font-normal text-[#35281e]" style={{ fontFamily: "Georgia, Times New Roman, serif" }}>A plan that starts with you.</h2>
        <p className="mt-3">We will help you choose treatment areas and a package that suit your goals. You can then compare paying in full with available financing, including the payment schedule, APR, amount due today, and total repayment.</p>
        <p className="mt-4">Questions about your treatment package? <a className="font-bold underline" href="tel:5164954908">Call 516-495-4908</a>.</p>
        <a className="mt-6 inline-block font-bold underline underline-offset-4" href="/">← Back to Optimum Laser</a>
      </section>
    </main>
  );
}
