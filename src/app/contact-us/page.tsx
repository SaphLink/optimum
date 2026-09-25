"use client";
import { useEffect, useState } from "react";
export default function ContactPage() {
  const [nextUrl, setNextUrl] = useState("https://optimumlaserhairremoval.com/thank-you?form=contact");
  useEffect(() => { setNextUrl(window.location.origin + "/thank-you?form=contact"); }, []);


  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!("IntersectionObserver" in window)) return;
    const elements = Array.from(document.querySelectorAll<HTMLElement>(
      "#contact-page .intro > *, #contact-page .formbox > h2, #contact-page .formbox > p, #contact-page fieldset, #contact-page form > details, #contact-page .marketing, #contact-page button[type=submit], #contact-page .direct, #contact-page footer > *"
    ));
    const seen = new WeakSet<Element>();
    const visible = new WeakSet<Element>();
    const animations = new Map<Element, Animation>();
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const wasVisible = visible.has(entry.target);
        const firstObservation = !seen.has(entry.target);
        seen.add(entry.target);
        if (!entry.isIntersecting) {
          visible.delete(entry.target);
          return;
        }
        visible.add(entry.target);
        // Render the first viewport immediately; animate only later scroll entries.
        if (firstObservation || wasVisible || motion.matches || entry.target.contains(document.activeElement)) return;
        animations.get(entry.target)?.cancel();
        // Opacity cannot move an observed element across its own visibility threshold.
        const animation = entry.target.animate([
          { opacity: 0.65 }, { opacity: 1 }
        ], { duration: 350, easing: "ease-out" });
        animations.set(entry.target, animation);
        animation.onfinish = () => animations.delete(entry.target);
      });
    }, { threshold: 0 });
    elements.forEach(element => observer.observe(element));
    const stopMotion = () => {
      if (motion.matches) animations.forEach(animation => animation.cancel());
    };
    motion.addEventListener("change", stopMotion);
    return () => {
      observer.disconnect();
      animations.forEach(animation => animation.cancel());
      motion.removeEventListener("change", stopMotion);
    };
  }, []);
;
