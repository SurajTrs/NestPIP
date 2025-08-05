
'use client';


import CommoditiesOverviewSection from '@/components/Markets/overview/CommoditiesOverviewSection';
import CryptoOverviewSection from '@/components/Markets/overview/CryptoOverviewSection';
import IndicesOverviewSection from '@/components/Markets/overview/IndicesOverviewSection';
import OverviewBanner from '@/components/Markets/overview/OverviewBanner';
import OverviewFaqsSection from '@/components/Markets/overview/OverviewFaqsSection';
import OverviewGetStarted from '@/components/Markets/overview/OverviewGetStarted';
import OverViewSection from '@/components/Markets/overview/OverViewSection';
import SpreadsTable from '@/components/Markets/overview/SpreadsTable';
import StocksOverviewSection from '@/components/Markets/overview/StocksOverviewSection';
import WhyChooseNestpip from '@/components/Markets/overview/WhyChooseNestpip';
import TradePlatforms from '@/components/overview/TradePlatforms';
import React from 'react';




const IndicesPage = () => (
   <main>
  <OverviewBanner/>
  <OverViewSection/>
  <IndicesOverviewSection/>
  <CryptoOverviewSection/>
  <CommoditiesOverviewSection/>
  <StocksOverviewSection/>
  <TradePlatforms/>
  <SpreadsTable/>
  <WhyChooseNestpip/>
  <OverviewGetStarted/>
  <OverviewFaqsSection/>
 
  </main>
  
);

export default IndicesPage;
