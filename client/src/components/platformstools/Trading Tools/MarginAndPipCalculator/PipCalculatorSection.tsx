import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

const PipCalculatorSection = () => {
  return (
    <div className="py-5 bg text-dark" style={{color:'#f24521'}}>
      <div className="container">
        <Row className="align-items-center">
          {/* Text Left */}
          <Col lg={7} className="mb-4 mb-lg-0">
            <h2 className="text fw-bold mb-3"style={{color:'#f24521'}}>How Does the Forex Pip Calculator Work?</h2>
            <p >
              The forex pip calculator works by multiplying the size of your position by the value of a single pip, then converting that figure into your chosen base currency.
            </p>
            <p>
              It also calculates your total required margin by dividing the total size of your position by your chosen market’s margin factor.
            </p>
            <p>
              Use the pip calculator to know exactly how much you’ll make or lose for each point of movement in your market – and how much margin you will need to open a trade.
            </p>
            <Button variant="outline-danger" className="mt-3">
              Learn More About Margin
            </Button>
          </Col>

          {/* Right Card */}
          <Col lg={5}>
            <Card className="text-dark shadow-lg border-0" style={{ backgroundColor: "#f24521" }}>
              <Card.Body>
                <h4 className="fw-bold mb-3">Quick Pip Calculator</h4>
                <p className="mb-1">
                  Input your position size and instrument to calculate potential profit/loss.
                </p>
                <Button variant="dark" className="mt-3 w-100">
                  Launch Calculator
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default PipCalculatorSection;
