'use client';

import AccountSolutions from '@/components/Account/Features/TradingCosts/AccountSolutions';
import DirectCharges from '@/components/Account/Features/TradingCosts/DirectCharges';
import TradingCostsBanner from '@/components/Account/Features/TradingCosts/TradingCostsBanner';
import TradeExecution from '@/components/Account/Features/TradingCosts/TradeExecution';
import RolloverRates from '@/components/Account/Features/TradePrices/RolloverRatesSection';
import React from 'react';
import FAQAccordion from '@/components/Account/Features/TradingCosts/FAQAccordion';

const TradeCostsPage = () => (
  <main>
<TradingCostsBanner/>
<AccountSolutions/>
<RolloverRates/>
<DirectCharges/>
<TradeExecution/>
<FAQAccordion/>
 </main>
);

export default TradeCostsPage;
