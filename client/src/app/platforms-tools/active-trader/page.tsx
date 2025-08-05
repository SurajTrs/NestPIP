'use client';

import ActiveTraderBanner from '@/components/platformstools/PremiumTradingTools/ActiveTrader/ActiveTraderBanner';
import ActiveTrader from '@/components/platformstools/PremiumTradingTools/ActiveTrader/ActiveTrader';
import React from 'react';
import ActiveTradersec from '@/components/platformstools/PremiumTradingTools/ActiveTrader/ActiveTradersec';
import TradeYourWaySection from '@/components/platformstools/PremiumTradingTools/ActiveTrader/TradeYourWaySection';
import WhyActiveTrader from '@/components/platformstools/PremiumTradingTools/ActiveTrader/WhyActiveTrader';
import CashRebateTiers from '@/components/platformstools/PremiumTradingTools/ActiveTrader/CashRebateTiers';
import HowToBecomeActiveTrader from '@/components/platformstools/PremiumTradingTools/ActiveTrader/HowToBecomeActiveTrader';
import WhyForexActive from '@/components/platformstools/PremiumTradingTools/ActiveTrader/WhyForexActive';
import BottomBanner from '@/components/Account/CompareTransparency/compareAccount/BottomBanner';




const ActiveTraderPage = () => (
  <main>
<ActiveTraderBanner/>
<ActiveTrader/>
<ActiveTradersec/>
<TradeYourWaySection/>
<WhyActiveTrader/>
<CashRebateTiers/>
<HowToBecomeActiveTrader/>
<WhyForexActive/>
<BottomBanner/>
 </main>
);

export default ActiveTraderPage;
