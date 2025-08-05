'use client';

import HowToGetStarted from '@/components/HowToGetStarted';
import Capitalise from '@/components/platformstools/Trading Tools/CapitaliseAi/Capitalise';
import CapitaliseAiBanner from '@/components/platformstools/Trading Tools/CapitaliseAi/CapitaliseAiBanner';
import CapitaliseAiDownloadBanner from '@/components/platformstools/Trading Tools/CapitaliseAi/CapitaliseAiDownloadBanner';
import CapitaliseAiSection from '@/components/platformstools/Trading Tools/CapitaliseAi/CapitaliseAiSection';
import CapitaliseDesktopSteps from '@/components/platformstools/Trading Tools/CapitaliseAi/CapitaliseDesktopSteps';
import CapitaliseFAQ from '@/components/platformstools/Trading Tools/CapitaliseAi/CapitaliseFAQ';
import React from 'react';




const CapitaliseAiPage = () => (
  <main>
<CapitaliseAiBanner/>
<CapitaliseAiSection/>
<CapitaliseDesktopSteps/>
<CapitaliseAiDownloadBanner/>
<Capitalise/>
<CapitaliseFAQ/>
<HowToGetStarted/>
 </main>
);

export default CapitaliseAiPage;
