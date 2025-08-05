'use client';

import ActiveTraderProgram from '@/components/Account/type/metatrader/ActiveTraderProgram';
import FinancialStrengthSection from '@/components/Account/type/metatrader/FinancialStrengthSection';
import ForexMT5Experience from '@/components/Account/type/metatrader/ForexMT5Experience';
import ImpressiveFeatures from '@/components/Account/type/metatrader/ImpressiveFeatures';
import ManageMT5Platforms from '@/components/Account/type/metatrader/ManageMT5Platforms';
import MetaspreadsData from '@/components/Account/type/metatrader/MetaspreadsData';
import MT4ToolsSection from '@/components/Account/type/metatrader/MT4ToolsSection';
import MT5FAQs from '@/components/Account/type/metatrader/MT5FAQs';
import RawSpreadBanner from '@/components/Account/type/raw-spread/RawSpreadBanner';
import React from 'react';




const metatraderPage = () => (
  <main>
<RawSpreadBanner/>
<ForexMT5Experience/>
<ImpressiveFeatures/>
<ManageMT5Platforms/>
<MetaspreadsData/>
<ActiveTraderProgram/>
<FinancialStrengthSection/>
<MT4ToolsSection/>
<MT5FAQs/>

 </main>
);

export default metatraderPage;
