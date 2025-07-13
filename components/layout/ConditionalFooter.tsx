"use client"

import { usePathname } from "next/navigation"
import Footer from "./Footer"

export default function ConditionalFooter() {
  const pathname = usePathname()
  
  // Don't show footer on projects page
  if (pathname === "/projects") {
    return null
  }
  
  return <Footer />
}
