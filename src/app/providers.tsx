"use client";
import StyledComponentsRegistry from "@/lib/styleregistry";
import { useEffect } from "react";
import AOS from "aos";

export default function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({ duration: 800, once: false, easing: "ease-in-out" });
  }, []);

  useEffect(() => {
    const w = window as any;
    w.dataLayer = w.dataLayer || [];
    w.gtag = w.gtag || function gtag(){ w.dataLayer.push(arguments); };
    w.gtag("js", new Date());
    w.gtag("config", "AW-397121812");
    w.gtag("config", "AW-397121812/vA2dCNbkpOAcEJSyrr0B", { phone_conversion_number: "516-495-4908" });

    if (!document.querySelector("script[data-optimum-google-tag]")) {
      const tag = document.createElement("script");
      tag.async = true;
      tag.src = "https://www.googletagmanager.com/gtag/js?id=AW-397121812";
      tag.dataset.optimumGoogleTag = "true";
      document.head.appendChild(tag);
    }

    const live = /^(www\.)?optimumlaserhairremoval\.com$/.test(window.location.hostname);
    const onCallClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target.closest('a[href^="tel:"]') : null;
      if (target && live) w.gtag("event", "conversion", { send_to: "AW-397121812/MOdwCNec7P4BEJSyrr0B", transport_type: "beacon" });
    };
    const onFormSubmit = (event: Event) => {
      const form = event.target;
      if (!(form instanceof HTMLFormElement) || event.defaultPrevented || !form.checkValidity()) return;
      const endpoint = new URL(form.action, window.location.href);
      if (endpoint.hostname !== "formsubmit.co") return;
      const source = window.location.pathname === "/contact-us" ? "contact" : window.location.pathname === "/" ? "homepage" : "website";
      let next = form.querySelector('input[name="_next"]') as HTMLInputElement | null;
      if (!next) { next = document.createElement("input"); next.type = "hidden"; next.name = "_next"; form.appendChild(next); }
      const destination = new URL("/thank-you", window.location.origin);
      destination.searchParams.set("form", source);
      next.value = destination.href;
      try { sessionStorage.setItem("optimum_pending_lead", JSON.stringify({ id: crypto.randomUUID(), form: source, created: Date.now() })); } catch {}
      if (live) w.gtag("event", "form_submit_attempt", { send_to: "AW-397121812", form_name: source, transport_type: "beacon" });
    };

    document.addEventListener("click", onCallClick);
    document.addEventListener("submit", onFormSubmit);
    return () => {
      document.removeEventListener("click", onCallClick);
      document.removeEventListener("submit", onFormSubmit);
    };
  }, []);

  return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
}
