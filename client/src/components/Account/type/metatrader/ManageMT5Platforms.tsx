import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ManageMT5Platforms = () => {
  return (
    <section style={{ backgroundColor: '#fff', padding: '4rem 0' }}>
      <Container>
        <Row className="align-items-center">
          {/* Left Text */}
          <Col md={6}>
            <h2 style={{ color: '#f24521', fontWeight: 'bold' }}>
              Manage your MetaTrader account your way
            </h2>
            <p className="mt-3">
              Access your upgraded MT5 experience from your desktop or mobile.
            </p>

            <div className="mt-4">
              <h5 style={{ color: '#f24521', fontWeight: '600' }}>MT5 on desktop</h5>
              <p>
                Download MetaTrader directly or trade on the fully featured, browser-based
                application of the platform with no additional downloads or plugins.
              </p>

              <h5 style={{ color: '#f24521', fontWeight: '600' }} className="mt-3">
                MT5 on mobile
              </h5>
              <p>
                Trade on the go with a full range of MT5 mobile trading apps, available across
                iPhone, iPad and Android.
              </p>

              <h5 style={{ color: '#f24521', fontWeight: '600' }} className="mt-3">
                MT5 web
              </h5>
              <p>
                Trade on the fully featured, browser-based application of the platform with no
                additional downloads or plugins.
              </p>
            </div>

            {/* CTA Button */}
            <Button
              variant="primary"
              style={{
                backgroundColor: '#f24521',
                borderColor: '#f24521',
                padding: '0.75rem 1.5rem',
                fontWeight: 'bold',
                marginTop: '1rem',
              }}
            >
              SEE ALL PLATFORMS
            </Button>
          </Col>

          {/* Right Side Images */}
          <Col md={6} className="text-center">
            <Image
              src="/images/mt5-desktop-mobile-group.png"
              alt="MT5 Desktop Mobile"
              fluid
              className="mb-4"
            />

            <div className="d-flex justify-content-center gap-3">
              <Image
                src="/images/qr-apple.png"
                alt="MT5 Apple App Store QR"
                width={100}
                height={100}
              />
              <Image
                src="/images/qr-google.png"
                alt="MT5 Google Playstore QR"
                width={100}
                height={100}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ManageMT5Platforms;
