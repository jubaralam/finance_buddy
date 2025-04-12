import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import RealTimeProjection from "../components/RealTimeProjection";
import { AnnualFinancialOverviewChart } from "../components/AnnualFinancialOverviewChart";
import { financialProjectionData } from "../data";

const Home = () => {
  
  return (
    <div className="bg-color h-screen">
      <Navbar />
      <HeroSection />
      <RealTimeProjection />
      <AnnualFinancialOverviewChart data={financialProjectionData} />
    </div>
  );
};

export default Home;
