'use client';



import HowToGetStarted from '@/components/HowToGetStarted';
import StocksNewsAndCalendar from '@/components/Markets/market/Stocks/StocksNewsAndCalendar';
import AmazonBanner from '@/components/Markets/PopularStocks/Amazon/AmazonBanner';
import AmazonChart from '@/components/Markets/PopularStocks/Amazon/AmazonChart';
import AmazonPivot from '@/components/Markets/PopularStocks/Amazon/AmazonPivot';
import React from 'react';




const AmazonPage = () => (
  <main>
<AmazonBanner/>
<AmazonChart/>
<AmazonPivot/>
<StocksNewsAndCalendar/>
<HowToGetStarted/>
 </main>
);

export default AmazonPage;
