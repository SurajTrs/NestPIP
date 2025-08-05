'use client';

import MarginAndPipCalculatorBanner from '@/components/platformstools/Trading Tools/MarginAndPipCalculator/MarginAndPipCalculatorBanner';
import PipCalculator from '@/components/platformstools/Trading Tools/MarginAndPipCalculator/PipCalculator';
import PipCalculatorFAQ from '@/components/platformstools/Trading Tools/MarginAndPipCalculator/PipCalculatorFAQ';
import PipCalculatorSection from '@/components/platformstools/Trading Tools/MarginAndPipCalculator/PipCalculatorSection';
import PipsExplanation from '@/components/platformstools/Trading Tools/MarginAndPipCalculator/PipsExplanation';
import React from 'react';




const MarginAndPipCalculatorPage = () => (
  <main>
<MarginAndPipCalculatorBanner/>
<PipCalculator/>
<PipsExplanation/>
<PipCalculatorSection/>
<PipCalculatorFAQ/>
 </main>
);

export default MarginAndPipCalculatorPage;
