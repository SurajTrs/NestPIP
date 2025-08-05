'use client';



import BestWallStreetPlatform from '@/components/Markets/PopularIndices/wallstreet/BestWallStreetPlatform';
import WallStreetBanner from '@/components/Markets/PopularIndices/wallstreet/WallStreetBanner';
import WallStreetChart from '@/components/Markets/PopularIndices/wallstreet/WallStreetChart';
import WallStreetExplained from '@/components/Markets/PopularIndices/wallstreet/WallStreetExplained';
import WallStreetInsights from '@/components/Markets/PopularIndices/wallstreet/WallStreetInsights';
import WallStreetNews from '@/components/Markets/PopularIndices/wallstreet/WallStreetNews';
import WhyTradeWallStreetIndex from '@/components/Markets/PopularIndices/wallstreet/WhyTradeWallStreetIndex';
import WallStreetMobileTrading from '@/components/Markets/PopularIndices/wallstreet/WallStreetMobileTrading';
import React from 'react';
import HowWallBanner from '@/components/Markets/PopularIndices/wallstreet/HowWallBanner';




const commoditiesPage = () => (
  <main>
  <WallStreetBanner/>
 <WallStreetChart/>
 <WallStreetExplained/>
 <WhyTradeWallStreetIndex/>
 <WallStreetMobileTrading/>
 <BestWallStreetPlatform/>

 <WallStreetInsights/>
 <WallStreetNews/>
 <HowWallBanner/>
 



  </main>
);

export default commoditiesPage;
