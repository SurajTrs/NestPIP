'use client';
import React from 'react';
import { Button } from 'react-bootstrap';
import { FaHeadset, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const CommoditiesConclusion: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Support Section */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="mb-3" style={{ color: '#f24521', fontWeight: '700' }}>
              Customer Support That Cares
            </h2>
            <p style={{ color: '#333', fontSize: '1rem' }}>
              Have questions? Our dedicated support team is available <strong>24/5</strong> via chat, email, and phone. Whether it is a technical query or a market-related doubt, we are here to help you every step of the way.
            </p>
            <ul className="list-unstyled mt-4" style={{ color: '#555', fontSize: '1rem' }}>
              <li className="mb-3 d-flex align-items-center" style={{ gap: '0.5rem' }}>
                <FaHeadset style={{ color: '#f24521', fontSize: '1.25rem' }} /> Live Chat Support
              </li>
              <li className="mb-3 d-flex align-items-center" style={{ gap: '0.5rem' }}>
                <FaEnvelope style={{ color: '#f24521', fontSize: '1.25rem' }} /> Email Assistance
              </li>
              <li className="mb-3 d-flex align-items-center" style={{ gap: '0.5rem' }}>
                <FaPhoneAlt style={{ color: '#f24521', fontSize: '1.25rem' }} /> Phone Support
              </li>
            </ul>
          </div>

          {/* Conclusion CTA Section */}
          <div className="col-lg-6">
            <h2 className="mb-3" style={{ color: '#f24521', fontWeight: '700' }}>
              Conclusion
            </h2>
            <p style={{ color: '#333', fontSize: '1rem' }}>
              Commodity trading offers exciting opportunities to <strong>diversify</strong>, <strong>hedge</strong>, and <strong>grow</strong> your portfolio. With <strong>NestPip</strong>, you gain access to global markets, advanced tools, expert insights, and reliable support.
            </p>
            <p style={{ color: '#333', fontSize: '1rem' }}>
              Join thousands of traders who trust us every day.
            </p>
            <Button
              href="/register"
              size="lg"
              style={{
                backgroundColor: '#f24521',
                borderColor: '#f24521',
                fontWeight: 600,
                borderRadius: '30px',
                padding: '0.75rem 2rem',
              }}
              className="mt-3"
            >
              Sign Up & Start Trading
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommoditiesConclusion;
