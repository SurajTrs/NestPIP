'use client';

import HowToGetStarted from '@/components/HowToGetStarted';
import CurrencyConverter from '@/components/platformstools/Trading Tools/CurrencyConverter/CurrencyConverter';
import CurrencyConverterBanner from '@/components/platformstools/Trading Tools/CurrencyConverter/CurrencyConverterBanner';
import DemoBanner from '@/components/platformstools/Trading Tools/CurrencyConverter/DemoBanner';
import ForexEducation from '@/components/platformstools/Trading Tools/CurrencyConverter/ForexEducation';
import WhyForexSection from '@/components/WhyForexSection';
import React from 'react';




const CurrencyConverterPage = () => (
  <main>
<CurrencyConverterBanner/>
<CurrencyConverter/>
<DemoBanner/>
<ForexEducation/>
<WhyForexSection/>
<HowToGetStarted/>
 </main>
);

export default CurrencyConverterPage;
