// pages/index.tsx (or wherever your HomePage is)
import React from 'react';
import Head from 'next/head';
import TopNavBar from './TopNavBar';
import MainNavbar from './MainNavbar';
import HeroSection from '../components/HeroSection';
import MarketTypes from '../components/MarketTypes';
import WhyForex from '../components/WhyForex';
import PushingForward from '../components/PushingForward';
import ActiveTrader from '../components/platformstools/PremiumTradingTools/ActiveTrader/ActiveTrader';

import HowToGetStarted from '../components/HowToGetStarted';
import WhatIsTradingView from '../components/WhatIsTradingView';

import BenefitsSection from '../components/BenefitsSection';
import SpreadsTable from '../components/Markets/overview/SpreadsTable';
import NewsCards from '../components/NewsCards';
import TradeItBanner from '../components/TradeItBanner';
import Footer from './Footer';
import TradingViewFeaturesWithImage from '@/components/overview/TradingViewFeatures';
import TradingViewExtraFeatures from '@/components/overview/TradingViewExtraFeatures';
import TradingViewConnectBanner from '@/components/overview/TradingViewConnectBanner';
import TradingViewMarketInfo from '@/components/overview/TradingViewMarketInfo';
import TradingViewHero from '@/components/overview/TradingViewHero';
import TradePlatforms from '@/components/overview/TradePlatforms';

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>NestPip | More Markets, Better Terms</title>
        <meta name="description" content="Trade smarter with NestPip – low spreads, top platforms, and global markets at your fingertips." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <TopNavBar />
      <MainNavbar />
      <HeroSection />
    
      <MarketTypes />
       <WhatIsTradingView />
  
      <TradePlatforms />
      <TradingViewHero />
     <PushingForward />
     
      <TradingViewFeaturesWithImage />
      <TradingViewExtraFeatures />
      <TradingViewMarketInfo />
      <WhyForex />
      <TradingViewConnectBanner />
        <BenefitsSection />
      <HowToGetStarted />
     
      <SpreadsTable />
          <ActiveTrader />
      <NewsCards />
      <TradeItBanner />
      <Footer />
    </>
  );
};

export default HomePage;
