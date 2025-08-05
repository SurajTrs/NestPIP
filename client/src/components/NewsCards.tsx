import React, { useEffect, useRef } from 'react';
import { FaClock, FaArrowRight } from 'react-icons/fa';

interface NewsItem {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  link: string;
}

// Sample 10 news items (extend your original 3)
const newsData: NewsItem[] = [
  {
    title: 'EUR/USD hits 1.18 ahead of ECB comments',
    excerpt: 'The euro continues to rise ahead of the expected ECB announcement...',
    date: 'Jul 8, 2025',
    image: '/images/news/eurusd.jpg',
    link: '/news/eurusd-ecb-preview',
  },
  {
    title: 'Gold prices steady as USD weakens',
    excerpt: 'Gold finds support as dollar slips, investors eye inflation data...',
    date: 'Jul 7, 2025',
    image: '/images/news/gold.jpg',
    link: '/news/gold-prices-stabilize',
  },
  {
    title: 'Bitcoin climbs past $60k again',
    excerpt: 'Crypto markets rally as BTC breaks resistance above $60,000...',
    date: 'Jul 6, 2025',
    image: '/images/news/bitcoin.jpg',
    link: '/news/bitcoin-60000-breakout',
  },
  {
    title: 'Oil prices react to OPEC+ decisions',
    excerpt: 'Crude oil experiences volatility following OPEC+ production cuts announcement...',
    date: 'Jul 6, 2025',
    image: '/images/news/oil.jpg',
    link: '/news/oil-opec-update',
  },
  {
    title: 'S&P 500 closes at record high',
    excerpt: 'The S&P 500 surges driven by strong earnings reports from tech giants...',
    date: 'Jul 5, 2025',
    image: '/images/news/sp500.jpg',
    link: '/news/sp500-record-close',
  },
  {
    title: 'Ethereum hits new all-time high',
    excerpt: 'ETH rallies as decentralized finance continues its growth trajectory...',
    date: 'Jul 5, 2025',
    image: '/images/news/ethereum.jpg',
    link: '/news/ethereum-high',
  },
  {
    title: 'Federal Reserve signals possible rate hike',
    excerpt: 'Markets react cautiously to Fed’s hints on monetary policy adjustments...',
    date: 'Jul 4, 2025',
    image: '/images/news/fed.jpg',
    link: '/news/fed-rate-hike',
  },
  {
    title: 'USD/JPY volatility ahead of BoJ meeting',
    excerpt: 'Traders prepare for potential changes as Bank of Japan announces policy meeting...',
    date: 'Jul 4, 2025',
    image: '/images/news/usdjpy.jpg',
    link: '/news/usdjpy-boj',
  },
  {
    title: 'Cryptocurrency regulation updates worldwide',
    excerpt: 'New policies emerging globally could impact crypto markets significantly...',
    date: 'Jul 3, 2025',
    image: '/images/news/crypto-regulation.jpg',
    link: '/news/crypto-regulation',
  },
  {
    title: 'Tech stocks rally after earnings beat expectations',
    excerpt: 'Leading tech companies report better-than-expected profits, boosting indices...',
    date: 'Jul 3, 2025',
    image: '/images/news/tech-stocks.jpg',
    link: '/news/tech-earnings',
  },
];

const NewsCards: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const scrollStep = 1; // pixels per interval
    const scrollInterval = 20; // ms per interval

    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;

    const scrollFunc = () => {
      if (!container) return;
      scrollAmount += scrollStep;
      if (scrollAmount >= scrollWidth - clientWidth) {
        scrollAmount = 0; // Reset to start for infinite scroll effect
      }
      container.scrollLeft = scrollAmount;
    };

    const intervalId = setInterval(scrollFunc, scrollInterval);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        <h2
          className="text-center fw-bold mb-5"
          style={{ color: '#f24521', fontSize: '2.25rem' }}
        >
          Latest Market News
        </h2>

        <div
          ref={scrollRef}
          className="d-flex flex-row overflow-auto pb-3"
          style={{ gap: '1.5rem', scrollBehavior: 'smooth' }}
        >
          {newsData.map((news, index) => (
            <a
              key={index}
              href={news.link}
              className="card flex-shrink-0"
              style={{
                minWidth: '300px',
                maxWidth: '320px',
                cursor: 'pointer',
                borderRadius: '1rem',
                boxShadow: '0 2px 10px rgba(242, 69, 33, 0.2)',
                transition: 'box-shadow 0.3s ease',
              }}
              onMouseEnter={e =>
                (e.currentTarget.style.boxShadow = '0 6px 20px rgba(242, 69, 33, 0.35)')
              }
              onMouseLeave={e =>
                (e.currentTarget.style.boxShadow = '0 2px 10px rgba(242, 69, 33, 0.2)')
              }
              aria-label={`Read article: ${news.title}`}
            >
              <img
                src={news.image}
                alt={news.title}
                className="card-img-top"
                style={{
                  height: '180px',
                  objectFit: 'cover',
                  borderTopLeftRadius: '1rem',
                  borderTopRightRadius: '1rem',
                }}
                loading="lazy"
              />
              <div className="card-body d-flex flex-column">
                <h5
                  className="card-title text-truncate"
                  title={news.title}
                  style={{ color: '#f24521', fontWeight: '700' }}
                >
                  {news.title}
                </h5>
                <p
                  className="card-text text-muted flex-grow-1"
                  style={{ fontSize: '0.9rem' }}
                >
                  {news.excerpt}
                </p>
                <div
                  className="d-flex justify-content-between align-items-center text-muted small mt-3"
                  style={{ userSelect: 'none' }}
                >
                  <span className="d-flex align-items-center gap-1">
                    <FaClock /> {news.date}
                  </span>
                  <span
                    className="text-primary d-flex align-items-center gap-1 fw-semibold"
                    style={{ color: '#f24521' }}
                  >
                    Read <FaArrowRight />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsCards;
