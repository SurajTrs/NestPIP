// components/VideoGallery.tsx
import React, { useState } from 'react';
import styles from './VideoGallery.module.css';

type Video = {
  title: string;
  url: string;
};

const videoData: { [key: string]: Video[] } = {
  'MetaTrader': [
    { title: 'Market Manager', url: 'https://www.youtube.com/embed/sample1' },
    { title: 'Charting tips for beginners', url: 'https://www.youtube.com/embed/sample2' },
    { title: 'Indicators and templates', url: 'https://www.youtube.com/embed/sample3' },
    { title: 'Correlation Matrix', url: 'https://www.youtube.com/embed/sample4' },
    { title: 'Correlation Trader', url: 'https://www.youtube.com/embed/sample5' },
    { title: 'Charting and drawing tools', url: 'https://www.youtube.com/embed/sample6' },
    { title: 'Market Manager', url: 'https://www.youtube.com/embed/sample1' },
    { title: 'Charting tips for beginners', url: 'https://www.youtube.com/embed/sample2' },
    { title: 'Indicators and templates', url: 'https://www.youtube.com/embed/sample3' },
    { title: 'Correlation Matrix', url: 'https://www.youtube.com/embed/sample4' },
   
  ],
  'Mobile Apps': [
    { title: 'Placing trades', url: 'https://www.youtube.com/embed/sample7' },
    { title: 'Market search', url: 'https://www.youtube.com/embed/sample8' },
    { title: 'Viewing positions', url: 'https://www.youtube.com/embed/sample9' },
     { title: 'Placing trades', url: 'https://www.youtube.com/embed/sample7' },
    { title: 'Market search', url: 'https://www.youtube.com/embed/sample8' },
    { title: 'Viewing positions', url: 'https://www.youtube.com/embed/sample9' },
     { title: 'Placing trades', url: 'https://www.youtube.com/embed/sample7' },
    { title: 'Market search', url: 'https://www.youtube.com/embed/sample8' },
    { title: 'Viewing positions', url: 'https://www.youtube.com/embed/sample9' },
     { title: 'Placing trades', url: 'https://www.youtube.com/embed/sample7' },
    { title: 'Market search', url: 'https://www.youtube.com/embed/sample8' },
  

  ],
  'Web Trader': [
    { title: 'Introducing technical analysis', url: 'https://www.youtube.com/embed/sample10' },
    { title: 'Web trading overview', url: 'https://www.youtube.com/embed/sample11' },
    { title: 'Introduction to web trading', url: 'https://www.youtube.com/embed/sample12' },
     { title: 'Introducing technical analysis', url: 'https://www.youtube.com/embed/sample10' },
    { title: 'Web trading overview', url: 'https://www.youtube.com/embed/sample11' },
    { title: 'Introduction to web trading', url: 'https://www.youtube.com/embed/sample12' }, 
    { title: 'Introducing technical analysis', url: 'https://www.youtube.com/embed/sample10' },
    { title: 'Web trading overview', url: 'https://www.youtube.com/embed/sample11' },
    { title: 'Introduction to web trading', url: 'https://www.youtube.com/embed/sample12' }, 
    { title: 'Introducing technical analysis', url: 'https://www.youtube.com/embed/sample10' },
    { title: 'Web trading overview', url: 'https://www.youtube.com/embed/sample11' },
    { title: 'Introduction to web trading', url: 'https://www.youtube.com/embed/sample12' }, 
    { title: 'Introducing technical analysis', url: 'https://www.youtube.com/embed/sample10' },
    { title: 'Web trading overview', url: 'https://www.youtube.com/embed/sample11' },
   
  ]
};

const VideoGallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('ALL PLATFORMS');

  const allVideos = Object.values(videoData).flat();

  const getCurrentVideos = () => {
    if (activeTab === 'ALL PLATFORMS') return allVideos;
    return videoData[activeTab] || [];
  };

  const tabs = ['ALL PLATFORMS', 'MetaTrader', 'Mobile Apps', 'Web Trader'];

  return (
    <section className={`py-5 ${styles.gallerySection}`}>
      <div className="container">
        {/* Tab Buttons */}
        <ul className="nav nav-tabs mb-4">
          {tabs.map((tab) => (
            <li key={tab} className="nav-item">
              <button
                className={`nav-link ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>

        {/* Video Grid */}
        <div className="row">
          {getCurrentVideos().map((video, index) => (
            <div key={index} className="col-md-6 col-lg-4 mb-4">
              <div className="ratio ratio-16x9">
                <iframe
                  src={video.url}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="mt-2 text-dark">{video.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
