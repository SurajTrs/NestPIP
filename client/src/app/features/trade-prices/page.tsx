'use client';

import SpreadsExecution from '@/components/Account/CompareTransparency/SpreadsExecution';
import FlexibleAccountTypes from '@/components/Account/Features/TradePrices/FlexibleAccountTypes';
import StandardSpreadPricing from '@/components/Account/Features/TradePrices/StandardSpreadPricing';
import TradePricesBanner from '@/components/Account/Features/TradePrices/TradePricesBanner';
import TradeExecution from '@/components/Account/Features/TradePrices/TradeExecution';
import React from 'react';
import RolloverRatesSection from '@/components/Account/Features/TradePrices/RolloverRatesSection';
import RolloverAndPriceImprovement from '@/components/Account/Features/TradePrices/RolloverAndPriceImprovement';
import MetaTraderPricing from '@/components/Account/Features/TradePrices/MetaTraderPricing';
import TradeFAQSection from '@/components/Account/Features/TradePrices/TradeFAQSection';

const TradePricesPage = () => (
  <main>
<TradePricesBanner/>
<FlexibleAccountTypes/>
<StandardSpreadPricing/>
<SpreadsExecution/>
<TradeExecution/>
<RolloverRatesSection/>
<RolloverAndPriceImprovement/>
<MetaTraderPricing/>
<TradeFAQSection/>
 </main>
);

export default TradePricesPage;
