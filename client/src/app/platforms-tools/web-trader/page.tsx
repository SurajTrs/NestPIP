'use client';

import TradingPlatformFeatures from '@/components/platformstools/TradingPlatforms/WebTrader/TradingPlatformFeatures';
import WebAppTools from '@/components/platformstools/TradingPlatforms/WebTrader/WebAppTools';
import WebSeizeMarketsSection from '@/components/platformstools/TradingPlatforms/WebTrader/WebSeizeMarketsSection';
import WebTraderBanner from '@/components/platformstools/TradingPlatforms/WebTrader/WebTraderBanner';
import WebTradingApps from '@/components/platformstools/TradingPlatforms/WebTrader/WebTradingApps';
import WebTradingGuides from '@/components/platformstools/TradingPlatforms/WebTrader/WebTradingGuides';
import WebTradingTutorials from '@/components/platformstools/TradingPlatforms/WebTrader/WebTradingTutorials';
import FAQWebTrader from '@/components/platformstools/TradingPlatforms/WebTrader/FAQWebTrader';
import React from 'react';




const MobileAppPage = () => (
  <main>
<WebTraderBanner/>

<TradingPlatformFeatures/>
<WebAppTools/>
<WebTradingGuides/>
<WebTradingApps/>
<WebSeizeMarketsSection/>
<WebTradingTutorials/>
<FAQWebTrader/>
 </main>
);

export default MobileAppPage;
