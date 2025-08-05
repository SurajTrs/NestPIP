'use client';

import APIFeatures from '@/components/platformstools/PremiumTradingTools/ApiTrading/APIFeatures';
import ApiTradingBanner from '@/components/platformstools/PremiumTradingTools/ApiTrading/ApiTradingBanner';
import ConnectToAPI from '@/components/platformstools/PremiumTradingTools/ApiTrading/ConnectToAPI';
import InstitutionalFixApiBanner from '@/components/platformstools/PremiumTradingTools/ApiTrading/InstitutionalFixApiBanner';
import WhyUseRestAPI from '@/components/platformstools/PremiumTradingTools/ApiTrading/WhyUseRestAPI';
import React from 'react';




const ApiTradingPage = () => (
  <main>
<ApiTradingBanner/>
<APIFeatures/>
<WhyUseRestAPI/>
<ConnectToAPI/>
<InstitutionalFixApiBanner/>
 </main>
);

export default ApiTradingPage;
