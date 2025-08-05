'use client';

import React from 'react';
import EurUsdbanner from '@/components/Markets/popular-fx-markets/eurusd/EurUsdbanner';
import EURUSDNews from '@/components/Markets/popular-fx-markets/eurusd/EURUSDNews';
import PivotTablePage from '@/components/Markets/popular-fx-markets/eurusd/PivotTable';
import EurUsdChart from '@/components/Markets/popular-fx-markets/eurusd/EurUsdChart';
import WhatIsForex from '@/components/Markets/popular-fx-markets/eurusd/WhatIsForex';
import WhyTradeEURUSD from '@/components/Markets/popular-fx-markets/eurusd/WhyTradeEURUSD';
import EURUSDBenefits from '@/components/Markets/popular-fx-markets/eurusd/EURUSDBenefits';
import HowToTradeEURUSD from '@/components/Markets/popular-fx-markets/eurusd/HowToTradeEURUSD';
import TradingToolsAndTips from '@/components/Markets/popular-fx-markets/eurusd/TradingToolsAndTips';
import RiskManagementTips from '@/components/Markets/popular-fx-markets/eurusd/RiskManagementTips';
import EURUSDCTA from '@/components/Markets/popular-fx-markets/eurusd/EURUSDCTA';


const EurUsdbannerPage = () => (
  <main>
    <EurUsdbanner />
     <EurUsdChart/>
     <WhatIsForex />
     <WhyTradeEURUSD/>
          <TradingToolsAndTips/>
<RiskManagementTips/>
     <EURUSDBenefits />
     
     <PivotTablePage/>
     <HowToTradeEURUSD />
     <EURUSDNews/>
     
     <EURUSDCTA/>
     
    
  </main>
  
);

export default EurUsdbannerPage;
