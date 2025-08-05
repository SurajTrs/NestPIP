'use client';

import GoldXauUsdBanner from '@/components/Markets/popular-fx-markets/goldxauusd/GoldXauUsdBanner';
import XauUsdChart from '@/components/Markets/popular-fx-markets/goldxauusd/XauUsdChart';
import XAUUSDInsights from '@/components/Markets/popular-fx-markets/goldxauusd/XAUUSDInsights';
import XAUUSDNews from '@/components/popular-fx-markets/goldxauusd/XAUUSDNews';
import React from 'react';




const UsdJpyBannerPage = () => (
  <main>
   
    <GoldXauUsdBanner/>
     <XauUsdChart/>
    <XAUUSDInsights/>
    <XAUUSDNews/>
  </main>
  
);

export default UsdJpyBannerPage;
