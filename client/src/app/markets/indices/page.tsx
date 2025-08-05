
'use client';

import IndicesBanner from '@/components/Markets/market/Indices/IndicesBanner';
import IndicesExplained from '@/components/Markets/market/Indices/IndicesExplained';
import IndicesFAQ from '@/components/Markets/market/Indices/IndicesFAQ';
import IndicesFeatures from '@/components/Markets/market/Indices/IndicesFeatures';
import IndicesPricingTable from '@/components/Markets/market/Indices/IndicesPricingTable';
import IndicesTradingInfo from '@/components/Markets/market/Indices/IndicesTradingInfo';
import React from 'react';




const IndicesPage = () => (
  <main>
   <IndicesBanner/>
      <IndicesFeatures/>

   <IndicesExplained/>

   <IndicesPricingTable/>
   <IndicesTradingInfo/>
    <IndicesFAQ/>
  </main>
  
);

export default IndicesPage;
