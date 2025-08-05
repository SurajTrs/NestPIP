'use client';

import HowToGetStarted from '@/components/HowToGetStarted';
import PerformanceAnalytics from '@/components/platformstools/Trading Tools/PerformanceAnalytics/PerformanceAnalytics';
import PerformanceAnalyticsBanner from '@/components/platformstools/Trading Tools/PerformanceAnalytics/PerformanceAnalyticsBanner';
import PerformanceAnalyticsFAQ from '@/components/platformstools/Trading Tools/PerformanceAnalytics/PerformanceAnalyticsFAQ';
import PerformanceHighlights from '@/components/platformstools/Trading Tools/PerformanceAnalytics/PerformanceHighlights';
import PerformanceRealtimeStats from '@/components/platformstools/Trading Tools/PerformanceAnalytics/PerformanceRealtimeStats';
import PerformanceSelfReflection from '@/components/platformstools/Trading Tools/PerformanceAnalytics/PerformanceSelfReflection';
import TradingEdges from '@/components/platformstools/Trading Tools/PerformanceAnalytics/TradingEdges';
import React from 'react';




const PerformanceAnalyticsPage = () => (
  <main>
<PerformanceAnalyticsBanner/>
<PerformanceAnalytics/>
<PerformanceSelfReflection/>
<PerformanceRealtimeStats/>
<PerformanceHighlights/>
<TradingEdges/>
<PerformanceAnalyticsFAQ/>
<HowToGetStarted/>
 </main>
);

export default PerformanceAnalyticsPage;
