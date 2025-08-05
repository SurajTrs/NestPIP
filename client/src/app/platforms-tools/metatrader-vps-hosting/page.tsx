'use client';

import BottomBanner from '@/components/Account/CompareTransparency/compareAccount/BottomBanner';
import MetaTraderVPSHostingBanner from '@/components/platformstools/PremiumTradingTools/MetaTraderVPSHosting/MetaTraderVPSHostingBanner';
import MetaVps from '@/components/platformstools/PremiumTradingTools/MetaTraderVPSHosting/MetaVps';
import React from 'react';




const MetaTraderVPSHostingPage = () => (
  <main>
<MetaTraderVPSHostingBanner/>
<MetaVps/>
<BottomBanner/>
 </main>
);

export default MetaTraderVPSHostingPage;
