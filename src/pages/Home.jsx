import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import RealTimeProjection from "../components/RealTimeProjection";
import { AnnualFinancialOverviewChart } from "../components/AnnualFinancialOverviewChart";
import { financialProjectionData } from "../data";
import Footer from "../components/Footer";
import SmartGoalSuggestion from "../components/SmartGoalSuggestion";

const Home = () => {
  return (
    <div className="bg-color h-screen">
      <header>
        <Navbar />
        <HeroSection />
      </header>
      <main>
        <RealTimeProjection />
        <AnnualFinancialOverviewChart data={financialProjectionData} />
        <SmartGoalSuggestion />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
