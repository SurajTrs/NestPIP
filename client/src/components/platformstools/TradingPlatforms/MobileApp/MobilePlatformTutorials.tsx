import React from 'react';
import { Container, Card,} from 'react-bootstrap';
import { PlayCircle } from 'lucide-react'; // Optional icon (Lucide)

const videos = [
  {
    title: 'Mobile app walkthrough - Market search',
    time: '02:22',
    thumbnail: '/videos/thumb-market.png', // Replace with your thumbnail
  },
  {
    title: 'Mobile app walkthrough - Funding',
    time: '03:01',
    thumbnail: '/videos/thumb-funding.png',
  },
  {
    title: 'Mobile app walkthrough - Placing trades',
    time: '03:08',
    thumbnail: '/videos/thumb-trades.png',
  },
];

const MobilePlatformTutorials = () => {
  return (
    <section style={{ background: '#fff4e5', padding: '4rem 0' }}>
      <Container>
        <h2 className="text-center mb-4" style={{ color: '#f24521', fontWeight: 700 }}>
          FOREX.com Mobile Platform tutorials
        </h2>
        <p className="text-center mb-5" style={{ fontSize: '1.1rem' }}>
          Find out how our mobile platform works with these short and informative video guides.
        </p>

        {videos.map((video, idx) => (
          <Card
            key={idx}
            className="mb-3 shadow-sm p-3 d-flex flex-row align-items-center"
            style={{
              borderLeft: '4px solid #f24521',
              borderRadius: '12px',
              background: '#fff',
            }}
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              style={{
                width: '100px',
                height: '60px',
                objectFit: 'cover',
                borderRadius: '8px',
                marginRight: '1rem',
              }}
            />
            <div className="flex-grow-1">
              <h6 className="mb-1" style={{ color: '#f24521', fontWeight: '600' }}>
                {video.title}
              </h6>
              <small className="text-muted">Duration: {video.time}</small>
            </div>
            <PlayCircle size={24} style={{ color: '#f24521' }} />
          </Card>
        ))}
      </Container>
    </section>
  );
};

export default MobilePlatformTutorials;
