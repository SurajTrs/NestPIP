'use client';

import HowToGetStarted from '@/components/HowToGetStarted';
import StocksNewsAndCalendar from '@/components/Markets/market/Stocks/StocksNewsAndCalendar';
import NvidiaBanner from '@/components/Markets/PopularStocks/Nvidia/NvidiaBanner';
import NvidiaChart from '@/components/Markets/PopularStocks/Nvidia/NvidiaChart';
import NvidiaInsights from '@/components/Markets/PopularStocks/Nvidia/NvidiaInsights';
import React from 'react';




const NvidiaPage = () => (
  <main>
 
  <NvidiaBanner/>
  <NvidiaChart/>
  <NvidiaInsights/>
  <StocksNewsAndCalendar/>
  <HowToGetStarted/>
  </main>
);

export default NvidiaPage;
