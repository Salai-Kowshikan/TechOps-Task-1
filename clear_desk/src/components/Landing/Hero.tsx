"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-24 px-4">
      <motion.h1 
        className="text-4xl md:text-6xl font-bold max-w-3xl leading-tight"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        Handle Complaints Smarter, Not Harder.
      </motion.h1>
      <p className="mt-6 text-muted-foreground max-w-md">
        It's Complaint Time. We are here to handle you and your complaints buddy!! Shout it out!
      </p>
      <Button className="mt-8 text-lg px-6 py-4 rounded-2xl shadow-md">
        Get Started
      </Button>
    </section>
  );
}
