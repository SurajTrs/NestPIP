'use client';

import ExecutionBanner from '@/components/Account/Features/Execution/ExecutionBanner';
import GetFilledFast from '@/components/Account/Features/Execution/GetFilledFast';
import ImprovePotential from '@/components/Account/Features/Execution/ImprovePotential';
import TradeExecutions from '@/components/Account/Features/Execution/TradeExecutions';
import HowToGetStarted from '@/components/HowToGetStarted';
import React from 'react';

const ExecutionPage = () => (
  <main>
<ExecutionBanner/>
<TradeExecutions/>
<ImprovePotential/>
<GetFilledFast/>
<HowToGetStarted/>
 </main>
);

export default ExecutionPage;
