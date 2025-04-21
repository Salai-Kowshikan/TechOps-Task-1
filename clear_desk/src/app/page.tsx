import Hero from "@/components/Landing/Hero";
import Features from "@/components/Landing/Features";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background text-foreground">
      <Hero />
      <Features />
    </main>
  );
}