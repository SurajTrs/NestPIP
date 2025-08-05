'use client';

import AccountRawSpread from '@/components/Account/type/raw-spread/AccountRawSpread';
import BestReasonRawSpread from '@/components/Account/type/raw-spread/BestReasonRawSpread';
import RawAccountOpening from '@/components/Account/type/raw-spread/RawAccountOpening';
import RawFaqSection from '@/components/Account/type/raw-spread/RawFaqSection';
import RawSpreadBanner from '@/components/Account/type/raw-spread/RawSpreadBanner';
import RawTestimonialsSection from '@/components/Account/type/raw-spread/RawTestimonialsSection';
import RawVsStandardTable from '@/components/Account/type/raw-spread/RawVsStandardTable';
import WhatIsRawSpreadAccount from '@/components/Account/type/raw-spread/WhatIsRawSpreadAccount';
import WhoShouldHaveRawSpreadAccount from '@/components/Account/type/raw-spread/WhoShouldHaveRawSpreadAccount';
import WhyPickRawSpread from '@/components/Account/type/raw-spread/WhyPickRawSpread';
import React from 'react';




const RawSpreadPage = () => (
  <main>
<RawSpreadBanner/>
<AccountRawSpread/>
<WhyPickRawSpread/>
<WhoShouldHaveRawSpreadAccount/>

<WhatIsRawSpreadAccount/>
<RawVsStandardTable/>
<BestReasonRawSpread/>
<RawAccountOpening/>
<RawTestimonialsSection/>
<RawFaqSection/>
 </main>
);

export default RawSpreadPage;
