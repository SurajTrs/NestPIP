'use client';

import AccountHelpSection from '@/components/Account/CompareTransparency/compareAccount/AccountHelpSection';
import AccountCompareBanner from '@/components/Account/CompareTransparency/compareAccount/compareBanner';
import RawSpreadComparison from '@/components/Account/CompareTransparency/compareAccount/RawSpreadComparison';
import AccountComparison from '@/components/Account/type/Standard/AccountComparison';
import BottomBanner from '@/components/Account/CompareTransparency/compareAccount/BottomBanner';
import React from 'react';




const comparePage = () => (
  <main>
<AccountCompareBanner/>
<AccountComparison/>
 <RawSpreadComparison />
 <AccountHelpSection/>
 <BottomBanner/>

 </main>
);

export default comparePage;
