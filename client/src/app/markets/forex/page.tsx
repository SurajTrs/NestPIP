
'use client';

import AccountOpeningBanner from '@/components/Markets/market/Forex/AccountOpeningBanner';
import DepositWithdrawalSection from '@/components/Markets/market/Forex/DepositWithdrawalSection';
import FaqSection from '@/components/Markets/market/Forex/FaqSection';
import ForexBanner from '@/components/Markets/market/Forex/ForexBanner';
import ForexExplained from '@/components/Markets/market/Forex/ForexExplained';
import ForexFeatures from '@/components/Markets/market/Forex/ForexFeatures';
import ForexTradingInfo from '@/components/Markets/market/Forex/ForexTradingInfo';
import ForexTradingTools from '@/components/Markets/market/Forex/ForexTradingTools';
import FxPricingTable from '@/components/Markets/market/Forex/FxPricingTable';
import FxTradingApps from '@/components/Markets/market/Forex/FxTradingApps';
import ReadyToStartBanner from '@/components/Markets/market/Forex/ReadyToStartBanner';
import RecognitionSection from '@/components/Markets/market/Forex/RecognitionSection';
import TradingPartner from '@/components/Markets/market/Forex/TradingPartner';
import WhyForexMatters from '@/components/Markets/market/Forex/WhyForexMatters';
import WhyForex from '@/components/WhyForex';

import React from 'react';




const ForexBannerPage = () => (
  <main>
   
    <ForexBanner/>
    <ForexFeatures/>
    <WhyForexMatters/>
     <FxTradingApps/>
    <ForexExplained/>
     <ForexTradingInfo/>
     <TradingPartner/>
    <WhyForex/>
    <ForexTradingTools/>
    <DepositWithdrawalSection/>
    <RecognitionSection/>
     <AccountOpeningBanner/>
    <FxPricingTable/>
    <ReadyToStartBanner/>
    <FaqSection/>
   
  </main>
  
);

export default ForexBannerPage;
