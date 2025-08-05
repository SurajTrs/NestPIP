'use client';

import HowToGetStarted from '@/components/HowToGetStarted';
import IndicesNewsAndCalendar from '@/components/Markets/Indices/IndicesNewsAndCalendar';
import Germany40Banner from '@/components/Markets/PopularIndices/germany/Germany40Banner';
import Germany40Chart from '@/components/Markets/PopularIndices/germany/Germany40Chart';
import Germany40Insights from '@/components/Markets/PopularIndices/germany/Germany40Insights';
import React from 'react';




const commoditiesPage = () => (
  <main>
  <Germany40Banner/>
  <Germany40Chart/>
<Germany40Insights/>
  <IndicesNewsAndCalendar/>
  <HowToGetStarted/>
  </main>
);

export default commoditiesPage;
