'use client';

import BestCryptoPlatform from '@/components/Markets/market/Cryptocurrency/BestCryptoPlatform';
import CryptoBanner from '@/components/Markets/market/Cryptocurrency/CryptoBanner';
import CryptoCFDFeature from '@/components/Markets/market/Cryptocurrency/CryptoCFDFeature';
import CryptoDisclaimer from '@/components/Markets/market/Cryptocurrency/CryptoDisclaimer';
import CryptoExplained from '@/components/Markets/market/Cryptocurrency/CryptoExplained';
import CryptoNewsAndCalendar from '@/components/Markets/market/Cryptocurrency/CryptoNewsAndCalendar';
import CryptoPricingTable from '@/components/Markets/market/Cryptocurrency/CryptoPricingTable';
import CryptoRange from '@/components/Markets/market/Cryptocurrency/CryptoRange';
import CryptoTradingComparison from '@/components/Markets/market/Cryptocurrency/CryptoTradingComparison';
import CryptoTradingInfo from '@/components/Markets/market/Cryptocurrency/CryptoTradingInfo';
import CryptoTradingStrategies from '@/components/Markets/market/Cryptocurrency/CryptoTradingStrategies';
import StartCryptoSteps from '@/components/Markets/market/Cryptocurrency/StartCryptoSteps';
import WhatAreCryptoCurrency from '@/components/Markets/market/Cryptocurrency/WhatAreCryptoCurrency';
import React from 'react';




const cryptocurrencyPage = () => (
  <main>
   
 <CryptoBanner/>
  <CryptoCFDFeature/>

  <WhatAreCryptoCurrency/>
  <CryptoExplained/>
  <CryptoRange/>
    <CryptoTradingStrategies/>
  <BestCryptoPlatform/>
  <CryptoTradingInfo/>
  <CryptoTradingComparison/>
  <StartCryptoSteps/>
  
  <CryptoNewsAndCalendar/>
  <CryptoPricingTable/>
  <CryptoDisclaimer/>
  
  
  </main>
);

export default cryptocurrencyPage;
