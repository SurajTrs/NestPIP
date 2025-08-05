// components/ForexPlatforms.tsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaDesktop, FaApple, FaAndroid, FaChartLine } from 'react-icons/fa';

const ForexPlatforms = () => {
  return (
    <section style={{ backgroundColor: '#fff3e9', color: '#000', padding: '4rem 0' }}>
      <Container>
        <h2 style={{ color: '#f24521' }} className="mb-4 text-center">FOREX.com Platforms</h2>

        {/* Desktop Platform */}
        <Card className="mb-4 shadow-sm p-3" style={{ borderColor: '#f24521' }}>
          <Row className="align-items-center">
            <Col md={1}><FaDesktop size={30} color="#f24521" /></Col>
            <Col md={11}>
              <h5 style={{ color: '#f24521' }}>Desktop platform</h5>
              <p>NESTPIP.com Windows-based desktop trading platform designed to meet the needs of active currency traders.</p>
              <a href="#" style={{ color: '#f24521' }}>Download desktop platform</a>
            </Col>
          </Row>
        </Card>

        {/* Mobile Apps */}
        <Row className="mb-4">
          <Col md={6}>
            <Card className="shadow-sm p-3" style={{ borderColor: '#f24521' }}>
              <FaApple size={30} color="#f24521" />
              <h5 className="mt-2" style={{ color: '#f24521' }}>iPhone app</h5>
              <p>Trade on the go with advanced charts, and one-swipe trading.</p>
              <p><strong>Scan for app store</strong><br />[FOREXcom App Store QR Code]</p>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="shadow-sm p-3" style={{ borderColor: '#f24521' }}>
              <FaAndroid size={30} color="#f24521" />
              <h5 className="mt-2" style={{ color: '#f24521' }}>Android app</h5>
              <p>Never lose sight of the markets with real-time price and order alerts.</p>
              <p><strong>Scan for Google Play Store</strong><br />[FOREXcom Google Play QR Code]</p>
            </Card>
          </Col>
        </Row>

        {/* TradingView */}
        <h4 style={{ color: '#f24521' }} className="mb-3">TradingView: Available for FOREX.com accounts</h4>
        <Row className="mb-4">
          <Col md={6}>
            <Card className="shadow-sm p-3" style={{ borderColor: '#f24521' }}>
              <FaChartLine size={30} color="#f24521" />
              <h5 className="mt-2" style={{ color: '#f24521' }}>TradingView for Desktop</h5>
              <p>Get ideas and feedback on your strategies, follow your favourites, and join LiveStreams with the largest social community of traders.</p>
              <a href="#" style={{ color: '#f24521' }}>Download TradingView for desktop</a>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="shadow-sm p-3" style={{ borderColor: '#f24521' }}>
              <h6 style={{ color: '#f24521' }}>TradingView for iPhone</h6>
              <p>Scan all markets quickly and easily to identify opportunities.</p>
              <p>[App Store QR Code]</p>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="shadow-sm p-3" style={{ borderColor: '#f24521' }}>
              <h6 style={{ color: '#f24521' }}>TradingView for Android</h6>
              <p>Trade directly from the charts by dragging and dropping entry and exit points.</p>
              <p>[Google Play QR Code]</p>
            </Card>
          </Col>
        </Row>

        {/* MetaTrader 5 */}
        <h4 style={{ color: '#f24521' }} className="mb-3">MetaTrader 5</h4>
        <Card className="mb-4 shadow-sm p-3" style={{ borderColor: '#f24521' }}>
          <p>Trade stock CFDs, indices, FX and commodities on a fully featured MT5 platform compatible with all browsers and operating systems. No downloads or plug-ins required.</p>
          <a href="#" style={{ color: '#f24521' }}>Download MT5 for Windows</a><br />
          <a href="#" style={{ color: '#f24521' }}>Download MT5 for Mac</a>
        </Card>
        <Row className="mb-4">
          <Col md={6}>
            <Card className="shadow-sm p-3" style={{ borderColor: '#f24521' }}>
              <h6 style={{ color: '#f24521' }}>MT5 iPhone and iPad app</h6>
              <p>Create custom watchlists and rate alerts.</p>
              <p>[Apple App Store QR Code]</p>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="shadow-sm p-3" style={{ borderColor: '#f24521' }}>
              <h6 style={{ color: '#f24521' }}>MT5 Android app</h6>
              <p>Trade on the latest, most advanced version of MetaTrader - wherever you are.</p>
              <p>[Google Play QR Code]</p>
            </Card>
          </Col>
        </Row>

        {/* MetaTrader 4 */}
        <h4 style={{ color: '#f24521' }} className="mb-3">MetaTrader 4</h4>
        <Card className="mb-4 shadow-sm p-3" style={{ borderColor: '#f24521' }}>
          <p>Access Expert Advisors and a broad range of technical indicators.</p>
          <a href="#" style={{ color: '#f24521' }}>Download MT4 for Windows</a><br />
          <a href="#" style={{ color: '#f24521' }}>Download MT4 for Mac</a>
        </Card>
        <Row>
          <Col md={6}>
            <Card className="shadow-sm p-3" style={{ borderColor: '#f24521' }}>
              <h6 style={{ color: '#f24521' }}>MT4 iPhone and iPad app</h6>
              <p>Create custom watchlists and rate alerts.</p>
              <p>[Apple App Store QR Code]</p>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="shadow-sm p-3" style={{ borderColor: '#f24521' }}>
              <h6 style={{ color: '#f24521' }}>MT4 Android app</h6>
              <p>Get access to 30 technical indicators with live interactive charting.</p>
              <p>[Google Play QR Code]</p>
            </Card>
          </Col>
        </Row>

        (
    <div className="mt-5 p-4" style={{ backgroundColor: '#fff3e9', color: '#212529' }}>
      <h4 className="mb-4" style={{ color: '#f24521' }}>Frequently Asked Questions</h4>

      <div className="accordion" id="faqAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
              aria-expanded="true" aria-controls="collapseOne"
              style={{ backgroundColor: '#fff3e9', color: '#212529', fontWeight: '500' }}>
              How do I log into my account on TradingView?
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
            data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              You can log into your TradingView-linked account by clicking the log-in button on the TradingView platform and selecting FOREX.com as your broker.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"
              style={{ backgroundColor: '#fff3e9', color: '#212529', fontWeight: '500' }}>
              What browsers are supported?
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
            data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              FOREX.com platforms work best on Chrome, Firefox, Safari, and Microsoft Edge.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"
              style={{ backgroundColor: '#fff3e9', color: '#212529', fontWeight: '500' }}>
              What markets can I trade on the FOREX.com desktop app?
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
            data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              You can trade FX, indices, commodities, and cryptocurrencies depending on your account type.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour"
              style={{ backgroundColor: '#fff3e9', color: '#212529', fontWeight: '500' }}>
              What are the MetaTrader for desktop system requirements?
            </button>
          </h2>
          <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
            data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              MetaTrader requires a Windows or Mac OS system with at least 2GB RAM and a stable internet connection.
            </div>
          </div>
        </div>
      </div>

      <p className="mt-4">
        If you have more questions, visit the <a href="#" style={{ color: '#f24521', textDecoration: 'underline' }}>FAQ section</a> or start a chat with our support team.
      </p>
    </div>
      </Container>
    </section>
  );
};

export default ForexPlatforms;
