'use client';

import AccountOpeningBanner from '@/components/Account/type/Standard/AccountOpeningBannernew';
import CommoditiesTicker from '@/components/Markets/market/CrudeOil/CommoditiesTicker';
import CrudeFeature from '@/components/Markets/market/CrudeOil/CrudeFeature';
import CrudeOilBanner from '@/components/Markets/market/CrudeOil/CrudeOilBanner';
import CrudeOilChart from '@/components/Markets/market/CrudeOil/CrudeOilChart';
import CrudeOilNews from '@/components/Markets/market/CrudeOil/CrudeOilNews';
import CrudeOilPivotPointsInsight from '@/components/Markets/market/CrudeOil/CrudeOilPivotPointsInsight';
import React from 'react';




const commoditiesPage = () => (
  <main>
<CrudeOilBanner/>
<CrudeFeature/>
<CrudeOilChart/>
<CrudeOilPivotPointsInsight/>
  <CrudeOilNews/>
  <CommoditiesTicker/>
  <AccountOpeningBanner/>
  </main>
);

export default commoditiesPage;
