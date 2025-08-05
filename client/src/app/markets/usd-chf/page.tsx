
'use client';

import IntermediateUsdChfStrategies from '@/components/Markets/popular-fx-markets/usdchf/IntermediateUsdChfStrategies';
import TradeAnytimeAnywhere from '@/components/Markets/popular-fx-markets/usdchf/TradeAnytimeAnywhere';
import UsdChfBanner from '@/components/Markets/popular-fx-markets/usdchf/UsdChfBanner';
import UsdChfChart from '@/components/Markets/popular-fx-markets/usdchf/UsdChfChart';
import UsdChfExplanation from '@/components/Markets/popular-fx-markets/usdchf/UsdChfExplanation';
import UsdChfPriceFactors from '@/components/Markets/popular-fx-markets/usdchf/UsdChfPriceFactors';
import UsdChfStartBanner from '@/components/Markets/popular-fx-markets/usdchf/UsdChfStartBanner';
import UsdChfTechnicalIndicators from '@/components/Markets/popular-fx-markets/usdchf/UsdChfTechnicalIndicators';
import WhenToTradeUsdChfBanner from '@/components/Markets/popular-fx-markets/usdchf/WhenToTradeUsdChfBanner';
import WhyNestpipUsdChf from '@/components/Markets/popular-fx-markets/usdchf/WhyNestpipUsdChf';
import WhyTradeUsdChf from '@/components/Markets/popular-fx-markets/usdchf/WhyTradeUsdChf';
import React from 'react';




const UsdJpyBannerPage = () => (
  <main>
   
    <UsdChfBanner/>

    <UsdChfChart/>
    <UsdChfExplanation/>
    <WhyTradeUsdChf/>
    <UsdChfPriceFactors/>
    <WhyNestpipUsdChf/>
    <WhenToTradeUsdChfBanner/>
    <IntermediateUsdChfStrategies/>
    <TradeAnytimeAnywhere/>
    <UsdChfTechnicalIndicators/>
    <UsdChfStartBanner/>
  </main>
  
);

export default UsdJpyBannerPage;
