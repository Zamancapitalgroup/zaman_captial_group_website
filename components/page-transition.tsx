"use client"

import type { ReactNode } from "react"

interface PageTransitionProps {
  children: ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <div className="animate-fadeIn" style={{ animation: "fadeIn 0.6s ease-out" }}>
      {children}
    </div>
  )
}
