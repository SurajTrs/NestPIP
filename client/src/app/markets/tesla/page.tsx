'use client';


import HowToGetStarted from '@/components/HowToGetStarted';
import StocksNewsAndCalendar from '@/components/Markets/market/Stocks/StocksNewsAndCalendar';
import TeslaBanner from '@/components/Markets/PopularStocks/tesla/TeslaBanner';
import TeslaChart from '@/components/Markets/PopularStocks/tesla/TeslaChart';
import TeslaInsights from '@/components/Markets/PopularStocks/tesla/TeslaInsights';

import React from 'react';




const commoditiesPage = () => (
  <main>
<TeslaBanner/>
  <TeslaChart/>
  <TeslaInsights/>
  <StocksNewsAndCalendar/>
  <HowToGetStarted/>
  </main>
);

export default commoditiesPage;
