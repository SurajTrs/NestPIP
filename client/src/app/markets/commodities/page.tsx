'use client';


import CommoditiesBanner from '@/components/Markets/market/Commodities/CommoditiesBanner';
import CommoditiesConclusion from '@/components/Markets/market/Commodities/CommoditiesConclusion';
import CommoditiesFAQ from '@/components/Markets/market/Commodities/CommoditiesFAQ';
import CommoditiesFeatures from '@/components/Markets/market/Commodities/CommoditiesFeatures';
import CommoditiesIntro from '@/components/Markets/market/Commodities/CommoditiesIntro';
import CommoditiesNewsAndCalendar from '@/components/Markets/market/Commodities/CommoditiesNewsAndCalendar';
import CommoditiesPricingTable from '@/components/Markets/market/Commodities/CommoditiesPricingTable';
import CommodityEducationSection from '@/components/Markets/market/Commodities/CommodityEducationSection';
import CommodityStartBanner from '@/components/Markets/market/Commodities/CommodityStartBanner';
import PopularCommodities from '@/components/Markets/market/Commodities/PopularCommodities';
import RiskManagementBanner from '@/components/Markets/market/Commodities/RiskManagementBanner';
import SecurityMobile from '@/components/Markets/market/Commodities/SecurityMobile';
import WhyCommodities from '@/components/Markets/market/Commodities/WhyCommodities';
import WhyTradeCommodities from '@/components/Markets/market/Commodities/WhyTradeCommodities';
import React from 'react';




const commoditiesPage = () => (
  <main>
  <CommoditiesBanner/>
   <CommoditiesFeatures/>
 <CommoditiesIntro/>
<WhyTradeCommodities/>
<WhyCommodities/>
<CommodityEducationSection/>

<RiskManagementBanner/>
<PopularCommodities/>
<CommodityStartBanner/>
 <CommoditiesNewsAndCalendar/>
 <SecurityMobile/>
 <CommoditiesPricingTable/>
 <CommoditiesConclusion/>
 <CommoditiesFAQ/>
  
  </main>
);

export default commoditiesPage;
