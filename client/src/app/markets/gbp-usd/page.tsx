'use client';

import React from 'react';
import GbpUsdBanner from '@/components/Markets/popular-fx-markets/gbpusd/GbpUsdBanner';
import GbpUsdChart from '@/components/Markets/popular-fx-markets/gbpusd/GbpUsdChart';
import GbpUsdIntroSection from '@/components/Markets/popular-fx-markets/gbpusd/GbpUsdIntroSection';
import WhyTradeGbpUsdSection from '@/components/Markets/popular-fx-markets/gbpusd/WhyTradeGbpUsdSection';
import PivotTablePage from '@/components/Markets/popular-fx-markets/eurusd/PivotTable';
import GbpUsdMarketDriversSection from '@/components/Markets/popular-fx-markets/gbpusd/GbpUsdMarketDriversSection';
import GBPUSDBenefitsSection from '@/components/Markets/popular-fx-markets/gbpusd/GBPUSDBenefitsSection';
import GBPUSDStartBanner from '@/components/Markets/popular-fx-markets/gbpusd/GBPUSDStartBanner';


const EurUsdbannerPage = () => (
  <main>
    <GbpUsdBanner />
     <GbpUsdChart/>
     <GbpUsdIntroSection/>
     <WhyTradeGbpUsdSection/>
     <GbpUsdMarketDriversSection/>
     <GBPUSDBenefitsSection/>
     <GBPUSDStartBanner/>
     <PivotTablePage/>
  </main>
  
);

export default EurUsdbannerPage;
