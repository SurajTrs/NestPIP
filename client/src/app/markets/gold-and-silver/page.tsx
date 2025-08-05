'use client';



import GoldSilverBanner from '@/components/Markets/market/GoldandSilver/GoldSilverBanner';
import GoldSilverExplained from '@/components/Markets/market/GoldandSilver/GoldSilverExplained';
import GoldSilverIntro from '@/components/Markets/market/GoldandSilver/GoldSilverIntro';
import GoldSilverNewsAndCalendar from '@/components/Markets/market/GoldandSilver/GoldSilverNewsAndCalendar';
import MetalsFAQ from '@/components/Markets/market/GoldandSilver/MetalsFAQ';
import MetalsPriceTable from '@/components/Markets/market/GoldandSilver/MetalsPriceTable';
import PreciousMetalsFeatures from '@/components/Markets/market/GoldandSilver/PreciousMetalsFeatures';
import React from 'react';




const commoditiesPage = () => (
  <main>
<GoldSilverBanner/>
<PreciousMetalsFeatures/>
<GoldSilverExplained/>
  <GoldSilverIntro/>
  <GoldSilverNewsAndCalendar/>
 
 <MetalsPriceTable/>
  <MetalsFAQ/>

  </main>
);

export default commoditiesPage;
