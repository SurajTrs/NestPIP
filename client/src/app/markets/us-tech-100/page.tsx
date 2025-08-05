'use client';



import UsTech100Banner from '@/components/Markets/PopularIndices/ustech/UsTech100Banner';
import React from 'react';


import SPS500Chart from '@/components/Markets/PopularIndices/ussp/SPS500Chart';
import USSP500Insights from '@/components/Markets/PopularIndices/ussp/USSP500Insights';
import IndicesNewsAndCalendar from '@/components/Markets/PopularIndices/ussp/IndicesNewsAndCalendar';
import HowToGetStarted from '@/components/HowToGetStarted';


const commoditiesPage = () => (
  <main>
<UsTech100Banner/>
  <SPS500Chart/>
<USSP500Insights/>
  <IndicesNewsAndCalendar/>
  <HowToGetStarted/>
  </main>
);

export default commoditiesPage;
