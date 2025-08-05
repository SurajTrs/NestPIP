'use client';

import HowToStartUsingNestpip from '@/components/Markets/popular-fx-markets/usdjpy/HowToStartUsingNestpip';
import UsdJpyBanner from '@/components/Markets/popular-fx-markets/usdjpy/UsdJpyBanner';
import UsdJpyBestTimeBanner from '@/components/Markets/popular-fx-markets/usdjpy/UsdJpyBestTimeBanner';
import UsdJpyChart from '@/components/Markets/popular-fx-markets/usdjpy/UsdJpyChart';
import UsdJpyFaq from '@/components/Markets/popular-fx-markets/usdjpy/UsdJpyFaq';
import UsdJpyIntroSection from '@/components/Markets/popular-fx-markets/usdjpy/UsdJpyIntroSection';
import UsdJpyMobileTradingSection from '@/components/Markets/popular-fx-markets/usdjpy/UsdJpyMobileTradingSection';
import UsdJpyMoversSection from '@/components/Markets/popular-fx-markets/usdjpy/UsdJpyMoversSection';
import UsdJpySafetySection from '@/components/Markets/popular-fx-markets/usdjpy/UsdJpySafetySection';
import UsdJpyStrategiesSection from '@/components/Markets/popular-fx-markets/usdjpy/UsdJpyStrategiesSection';
import UsdJpyWhyChooseSection from '@/components/Markets/popular-fx-markets/usdjpy/UsdJpyWhyChooseSection';
import UsdJpyWhyTradeSection from '@/components/Markets/popular-fx-markets/usdjpy/UsdJpyWhyTradeSection';
import React from 'react';




const UsdJpyBannerPage = () => (
  <main>
   
    <UsdJpyBanner/>
    <UsdJpyChart/>
    <UsdJpyIntroSection/>
    <UsdJpyWhyChooseSection/>
    <UsdJpyMoversSection/>
    <UsdJpyStrategiesSection/>
    <UsdJpyBestTimeBanner/>
    <UsdJpyWhyTradeSection/>
    <UsdJpySafetySection/>
    <UsdJpyMobileTradingSection/>
    <UsdJpyFaq/>
    <HowToStartUsingNestpip/>
    
  </main>
  
);

export default UsdJpyBannerPage;
