'use client';

import ForexRolloverRates from '@/components/Account/Features/RolloverRates/ForexRolloverRates';
import RolloverBenefits from '@/components/Account/Features/RolloverRates/RolloverBenefits';
import RolloverFAQ from '@/components/Account/Features/RolloverRates/RolloverFAQ';
import RolloverRatesBanner from '@/components/Account/Features/RolloverRates/RolloverRatesBanner';
import WhatIsRollover from '@/components/Account/Features/RolloverRates/WhatIsRollover';
import React from 'react';

const RolloverRatesPage = () => (
  <main>
<RolloverRatesBanner/>
<RolloverBenefits/>
<ForexRolloverRates/>
<WhatIsRollover/>
<RolloverFAQ/>
 </main>
);

export default RolloverRatesPage;
