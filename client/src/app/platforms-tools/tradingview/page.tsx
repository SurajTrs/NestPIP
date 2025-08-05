'use client';


import FAQSection from '@/components/Account/Features/TradePrices/TradeFAQSection';
import TradingCostsBanner from '@/components/Account/Features/TradingCosts/TradingCostsBanner';
import TradingStepsDisclaimer from '@/components/Account/type/Standard/TradingStep';
import TradingPlatformsSection from '@/components/Markets/market/Forex/FxTradingApps';
import TradingPartner from '@/components/Markets/market/Forex/TradingPartner';
import TradingViewExtraFeatures from '@/components/overview/TradingViewExtraFeatures';
import TradingViewMarketInfo from '@/components/overview/TradingViewMarketInfo';
import TradingViewBanner from '@/components/platformstools/TradingPlatforms/TradingView/TradingViewBanner';
import React from 'react';




const TradingViewPage = () => (
  <main>
<TradingViewBanner/>
<TradingPlatformsSection/>
<TradingPartner/>
<TradingViewExtraFeatures/>
<TradingStepsDisclaimer/>
<TradingViewMarketInfo/>
<TradingCostsBanner/>
<FAQSection/>


 </main>
);

export default TradingViewPage;
