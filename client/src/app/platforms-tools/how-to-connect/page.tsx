'use client';

import HowToGetStarted from '@/components/HowToGetStarted';
import ConnectTradingViewOptions from '@/components/platformstools/TradingPlatforms/HowToConnect/ConnectTradingViewOptions';
import HowToConnectBanner from '@/components/platformstools/TradingPlatforms/HowToConnect/HowToConnectBanner';
import StartTradingSteps from '@/components/platformstools/TradingPlatforms/HowToConnect/StartTradingSteps';
import React from 'react';




const HowToConnectPage = () => (
  <main>
<HowToConnectBanner/>
<StartTradingSteps/>
<ConnectTradingViewOptions/>
<HowToGetStarted/>
 </main>
);

export default HowToConnectPage;
