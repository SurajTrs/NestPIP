'use client';

import PlatformComparisonBanner from '@/components/platformstools/TradingPlatforms/PlatformComparison/PlatformComparisonBanner';
import ComparisonNESTPIP from '@/components/platformstools/TradingPlatforms/PlatformComparison/ComparisonNESTPIP';

import React from 'react';
import InterestedSection from '@/components/platformstools/TradingPlatforms/PlatformComparison/InterestedSection';
import HowToGetStarted from '@/components/HowToGetStarted';




const PlatformComparisonPage = () => (
  <main>
<PlatformComparisonBanner/>
<ComparisonNESTPIP/>
<InterestedSection/>
<HowToGetStarted/>

 </main>
);

export default PlatformComparisonPage;
