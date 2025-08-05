
'use client';

import BottomBanner from '@/components/Account/CompareTransparency/compareAccount/BottomBanner';
import LiveVirtualEventsBanner from '@/components/Education/LiveVirtualEvents/LiveVirtualEventsBanner';
import TradingEventsPage from '@/components/Education/LiveVirtualEvents/TradingEventsPage';
import React from 'react';

const LiveVirtualEventsPage = () => (
  <main>
<LiveVirtualEventsBanner/>
<TradingEventsPage/>
<BottomBanner/>
 </main>
);

export default LiveVirtualEventsPage;
