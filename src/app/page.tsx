"use client"

import AboutUsSection from "../components/AboutUsSection";
import DishesSection from "../components/DishesSection";
import ExpertiseSection from "../components/ExpertiseSection";
import Hero from "../components/hero";
import MissionSection from "../components/MissionSection";
import QuoteSection from "../components/QuoteSection";

export default function Home() {
  return (
    <main>
      <Hero/>
      <DishesSection/>
      <AboutUsSection/>
      <MissionSection/>
      <ExpertiseSection/>
      <QuoteSection/>
    </main>
  );
}
