"use client"

import { usePathname } from "next/navigation"
import Header from "./Header"

export default function ConditionalHeader() {
  const pathname = usePathname()
  
  // Don't show header on projects page
  if (pathname === "/projects") {
    return null
  }
  
  return <Header />
}
