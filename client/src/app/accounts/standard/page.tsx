'use client';

import AccountComparison from '@/components/Account/type/Standard/AccountComparison';
import AccountOpeningBannernew from '@/components/Account/type/Standard/AccountOpeningBannernew';
import CommissionFreeTradingSection from '@/components/Account/type/Standard/CommissionFreeTradingSection';
import StandardAccountFAQ from '@/components/Account/type/Standard/StandardAccountFAQ';
import StandardAccountFeatures from '@/components/Account/type/Standard/StandardAccountFeatures';
import StandardAccountSection from '@/components/Account/type/Standard/StandardAccountSection';
import StandardBanner from '@/components/Account/type/Standard/StandardBanner';
import StandardMarketPricingTable from '@/components/Account/type/Standard/StandardMarketPricingTable';
import StandardOverview from '@/components/Account/type/Standard/StandardOverview';
import StandardTradingAccount from '@/components/Account/type/Standard/StandardTradingAccount';
import TradingPlatformsSection from '@/components/Account/type/Standard/TradingPlatformsSection';
import TradingSteps from '@/components/Account/type/Standard/TradingStep';
import UltraLowSpreadsSection from '@/components/Account/type/Standard/UltraLowSpreadsSection';
import WhyChooseStandardAccount from '@/components/Account/type/Standard/WhyChooseStandardAccount';
import React from 'react';




const StandardPage = () => (
  <main>

<StandardBanner/>
<StandardTradingAccount/>
<WhyChooseStandardAccount/>
<TradingSteps/>
<StandardAccountSection/>

<StandardOverview/>

<StandardAccountFeatures/>
<CommissionFreeTradingSection/>
<UltraLowSpreadsSection/>
<TradingPlatformsSection/>
<StandardMarketPricingTable/>


<AccountComparison/>
<AccountOpeningBannernew/>
<StandardAccountFAQ/>
 </main>
);

export default StandardPage;
