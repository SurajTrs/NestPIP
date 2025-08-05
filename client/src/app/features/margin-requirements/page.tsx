'use client';

import ForexMargin from '@/components/Account/Features/MarginRequirements/ForexMargin';
import MarginRequirements from '@/components/Account/Features/MarginRequirements/MarginRequirements';
import MarginRequirementsBanner from '@/components/Account/Features/MarginRequirements/MarginRequirementsBanner';
import HowToGetStarted from '@/components/HowToGetStarted';
import React from 'react';

const MarginRequirementsPage = () => (
  <main>
<MarginRequirementsBanner/>
<ForexMargin/>
<MarginRequirements/>
<HowToGetStarted/>
 </main>
);

export default MarginRequirementsPage;
