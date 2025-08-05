'use client';

import HowToGetStarted from '@/components/HowToGetStarted';
import AdvancedChartsBanner from '@/components/platformstools/TradingPlatforms/AdvancedCharts/AdvancedChartsBanner';
import ChooseChartType from '@/components/platformstools/TradingPlatforms/AdvancedCharts/ChooseChartType';
import FAQsDesktopPlatform from '@/components/platformstools/TradingPlatforms/AdvancedCharts/FAQsDesktopPlatform';
import IdentifyTrends from '@/components/platformstools/TradingPlatforms/AdvancedCharts/IdentifyTrends';
import TradeLikePro from '@/components/platformstools/TradingPlatforms/AdvancedCharts/TradeLikePro';
import React from 'react';




const AdvancedChartsPage = () => (
  <main>
<AdvancedChartsBanner/>
<IdentifyTrends/>
<ChooseChartType/>
<TradeLikePro/>
<FAQsDesktopPlatform/>
<HowToGetStarted/>
 </main>
);

export default AdvancedChartsPage;
