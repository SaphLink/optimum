"use client";
import StyledComponentsRegistry from "@/lib/styleregistry";
import { useEffect } from "react";
import AOS from "aos";

export default function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
}
