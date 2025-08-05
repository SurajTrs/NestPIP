'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

const marketNavItems = [
  { icon: '/icons/Courses-icon.svg', label: 'Courses' },
  { icon: '/icons/Lessons-icon.svg', label: 'Lessons' },
  { icon: '/icons/LiveEvents-icon.svg', label: 'Live Virtual Events' },
  { icon: '/icons/Glossary-icon.svg', label: 'Glossary' },
  { icon: '/icons/Quiz-icon.svg', label: 'Quiz' },
];

const GlossaryBanner: React.FC = () => {
  const pathname = usePathname();
  const currentPage = pathname?.split('/').pop()?.replace(/-/g, '').toLowerCase();

  return (
    <section style={{ backgroundColor: '#f24521', color: '#fff', padding: '5rem 0' }}>
      <div className="container text-center">
        {/* Nav Icons */}
        <div className="d-flex justify-content-center gap-3 overflow-auto mb-4 pb-3" style={{ flexWrap: 'nowrap' }}>
          {marketNavItems.map(({ icon, label }, idx) => {
            const normalizedLabel = label.replace(/[()\/\s\.]/g, '').toLowerCase();
            const isActive = normalizedLabel === currentPage;

            return (
              <a
                key={idx}
                href={`/education/${label.toLowerCase().replace(/\s+/g, '-').replace(/\./g, '')}`}
                className={`btn d-flex flex-column align-items-center justify-content-center fw-semibold ${
                  isActive ? 'btn-light' : 'btn-outline-light'
                }`}
                style={{
                  width: '110px',
                  height: '110px',
                  borderRadius: '12px',
                  flexShrink: 0,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                  transition: 'background-color 0.3s ease',
                  backgroundColor: isActive ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.1)',
                  cursor: 'pointer',
                  color: isActive ? '#000' : '#fff',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = isActive
                    ? 'rgba(255,255,255,0.3)'
                    : 'rgba(255,255,255,0.1)')
                }
              >
                <img src={icon} alt={label} style={{ width: '40px', marginBottom: '0.6rem' }} />
                <span style={{ fontSize: '0.9rem' }}>{label}</span>
              </a>
            );
          })}
        </div>

        {/* Glossary Content */}
        <div className="row align-items-center text-md-start text-center mt-5">
          <div className="col-md-6">
            <h1 className="fw-bold mb-3" style={{ fontSize: '2.5rem' }}>
              Trading Glossary – Understand Every Term
            </h1>
            <p className="mb-4" style={{ fontSize: '1.2rem', maxWidth: '620px', margin: '0 auto' }}>
              Explore key financial and trading terms explained clearly, from A to Z.
            </p>
            <ul
              className="text-start"
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.6,
                maxWidth: '420px',
                margin: '0 auto',
              }}
            >
              <li>Over 150 trading and investing definitions</li>
              <li>Clear, concise, and beginner-friendly</li>
              <li>Search terms alphabetically or by category</li>
            </ul>

            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-md-start mt-4">
              <a
                href="/education/glossary"
                className="btn btn-primary fw-bold px-4 py-2"
                style={{ borderRadius: '12px', minWidth: '180px' }}
              >
                Browse Glossary
              </a>
              <a
                href="/education/quiz"
                className="btn btn-outline-light fw-bold px-4 py-2"
              >
                Test Your Knowledge
              </a>
            </div>
          </div>

          <div className="col-md-6 mt-4 mt-md-0 text-center">
            <img
              src="/assets/glossary-banner.png"
              alt="Glossary Banner"
              className="img-fluid rounded"
              style={{ maxHeight: '360px', borderRadius: '16px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlossaryBanner;
