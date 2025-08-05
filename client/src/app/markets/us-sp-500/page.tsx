'use client';


import SPS500Chart from '@/components/Markets/PopularIndices/ussp/SPS500Chart';
import UsSp500Banner from '@/components/Markets/PopularIndices/ussp/UsSp500Banner';
import USSP500Insights from '@/components/Markets/PopularIndices/ussp/USSP500Insights';
import IndicesNewsAndCalendar from '@/components/Markets/PopularIndices/ussp/IndicesNewsAndCalendar';
import React from 'react';
import HowToGetStarted from '@/components/HowToGetStarted';




const commoditiesPage = () => (
  <main>
  <UsSp500Banner/>
<SPS500Chart/>
<USSP500Insights/>
  <IndicesNewsAndCalendar/>
  <HowToGetStarted/>
  </main>
);

export default commoditiesPage;
