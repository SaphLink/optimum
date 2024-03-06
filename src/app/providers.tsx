'use client'
import StyledComponentsRegistry from "@/lib/styleregistry";


export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <StyledComponentsRegistry>
      {children}
    </StyledComponentsRegistry>
  )
}