'use client';

import MobileAppBanner from '@/components/platformstools/TradingPlatforms/MobileApp/MobileAppBanner';
import MobileAtAGlance from '@/components/platformstools/TradingPlatforms/MobileApp/MobileAtAGlance';
import Mobilefaqs from '@/components/platformstools/TradingPlatforms/MobileApp/Mobilefaqs';
import MobilePlatformTutorials from '@/components/platformstools/TradingPlatforms/MobileApp/MobilePlatformTutorials';
import MobileTools from '@/components/platformstools/TradingPlatforms/MobileApp/MobileTools';
import SeizeMarketsSection from '@/components/platformstools/TradingPlatforms/MobileApp/SeizeMarketsSection';
import TradingAppPage from '@/components/platformstools/TradingPlatforms/MobileApp/TradingAppPage';
import TrustedFXApp from '@/components/platformstools/TradingPlatforms/MobileApp/TrustedFXApp';
import React from 'react';




const MobileAppPage = () => (
  <main>
<MobileAppBanner/>
<TradingAppPage/>
<MobileAtAGlance/>
<MobileTools/>
<TrustedFXApp/>
<SeizeMarketsSection/>
<MobilePlatformTutorials/>
<Mobilefaqs/>
 </main>
);

export default MobileAppPage;
