'use client';

import MetaTrader5Banner from '@/components/platformstools/TradingPlatforms/MetaTrader5/MetaTrader5Banner';
import MT4vsMT5Comparison from '@/components/platformstools/TradingPlatforms/MetaTrader5/MT4vsMT5Comparison';
import Mt5AccessSection from '@/components/platformstools/TradingPlatforms/MetaTrader5/Mt5AccessSection';
import MT5AccountDetails from '@/components/platformstools/TradingPlatforms/MetaTrader5/MT5AccountDetails';
import Mt5Faqs from '@/components/platformstools/TradingPlatforms/MetaTrader5/Mt5Faqs';
import Mt5FeaturesCards from '@/components/platformstools/TradingPlatforms/MetaTrader5/Mt5FeaturesCards';
import Mt5SetupSteps from '@/components/platformstools/TradingPlatforms/MetaTrader5/Mt5SetupSteps';
import Mt5TradingAccount from '@/components/platformstools/TradingPlatforms/MetaTrader5/Mt5TradingAccount';
import NestPipAdvantages from '@/components/platformstools/TradingPlatforms/MetaTrader5/NestPipAdvantages';
import NestPipMt5BrokerInfo from '@/components/platformstools/TradingPlatforms/MetaTrader5/NestPipMt5BrokerInfo';
import NestPipMt5Markets from '@/components/platformstools/TradingPlatforms/MetaTrader5/NestPipMt5Markets';
import PowerfulToolsCards from '@/components/platformstools/TradingPlatforms/MetaTrader5/PowerfulToolsCards';
import WhyUseNestpipMt5 from '@/components/platformstools/TradingPlatforms/MetaTrader5/WhyUseNestpipMt5';
import React from 'react';




const MetaTrader5Page = () => (
  <main>
<MetaTrader5Banner/>
<Mt5TradingAccount/>
<WhyUseNestpipMt5/>
<Mt5FeaturesCards/>
<MT5AccountDetails/>
<NestPipMt5BrokerInfo/>
<MT4vsMT5Comparison/>
<NestPipMt5Markets/>
<Mt5AccessSection/>
<NestPipAdvantages/>

<PowerfulToolsCards/>

<Mt5Faqs/>
<Mt5SetupSteps/>
 </main>
);

export default MetaTrader5Page;
