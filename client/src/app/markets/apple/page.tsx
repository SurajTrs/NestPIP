'use client';



import HowToGetStarted from '@/components/HowToGetStarted';
import StocksNewsAndCalendar from '@/components/Markets/market/Stocks/StocksNewsAndCalendar';
import AppleBanner from '@/components/Markets/PopularStocks/Apple/AppleBanner';
import AppleChart from '@/components/Markets/PopularStocks/Apple/AppleChart';
import AppleInsights from '@/components/Markets/PopularStocks/Apple/AppleInsights';
import React from 'react';




const ApplePage = () => (
  <main>
 <AppleBanner/>
 <AppleChart/>
 <AppleInsights/>
 <StocksNewsAndCalendar/>
 <HowToGetStarted/>
  
  </main>
);

export default ApplePage;
