
'use client';


import StockBanner from '@/components/Markets/market/Stocks/StockBanner';
import StockCfdFaq from '@/components/Markets/market/Stocks/StockCfdFaq';
import StockCFDsExplained from '@/components/Markets/market/Stocks/StockCFDsExplained';
import StockCFDsInfo from '@/components/Markets/market/Stocks/StockCFDsInfo';
import StockFeatures from '@/components/Markets/market/Stocks/StockFeatures';
import StockPricingTable from '@/components/Markets/market/Stocks/StockPricingTable';
import StocksNewsAndCalendar from '@/components/Markets/market/Stocks/StocksNewsAndCalendar';
import WhyTradeStockCFDs from '@/components/Markets/market/Stocks/WhyTradeStockCFDs';
import React from 'react';




const IndicesPage = () => (
  <main>
  <StockBanner/>
  <StockFeatures/>
   <WhyTradeStockCFDs/>
   <StockCFDsExplained/>
   <StockCFDsInfo/>
   
   <StockPricingTable/>
   <StocksNewsAndCalendar/>
  
      <StockCfdFaq/>

  </main>
  
);

export default IndicesPage;
