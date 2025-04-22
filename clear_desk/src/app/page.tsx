"use client"
import { useAdminStore } from "@/Store/useAdminStore";
import { useEffect } from "react";
import Hero from "@/components/Landing/Hero";
import Features from "@/components/Landing/Features";

export default function Home() {
  const setIsSuperAdmin = useAdminStore((state) => state.setIsSuperAdmin)

  useEffect(() => {
    setIsSuperAdmin(true) 
  }, [setIsSuperAdmin])

  return (
    <main className="min-h-screen flex flex-col bg-background text-foreground">
      <Hero />
      <Features />
    </main>
  );
}
