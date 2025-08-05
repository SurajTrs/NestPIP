import React from "react";
import { Accordion } from "react-bootstrap";

const RolloverFAQ = () => {
  return (
    <section style={{ backgroundColor: "#fff3ea", padding: "4rem 0" }}>
      <div className="container">
        <h2 className="mb-4 fw-bold" style={{ color: "#f24521" }}>
          Frequently Asked Questions
        </h2>
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>When is rollover applied?</Accordion.Header>
            <Accordion.Body>
              At FOREX.com, rollovers are processed daily at <strong>5:00pm ET</strong>, at which time any open positions will be
              rolled and a debit or credit applied to your account. We do not charge rollover on intraday trades.
              <br />
              <br />
              Visit our <a href="#">market trading hours</a> page for the latest trading hours on every market that may be affected by public holidays.
              <br />
              <span className="mt-3 d-inline-block">Was this answer helpful? <span style={{ color: "#f24521", cursor: "pointer" }}>Yes</span> / <span style={{ color: "#f24521", cursor: "pointer" }}>No</span></span>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Can I avoid paying rollover?</Accordion.Header>
            <Accordion.Body>
              At FOREX.com, rollovers are not applied to intraday trades. No interest is paid or received if you open and close a position within the same trading day after 5pm ET and before 5pm ET the following day.
              <br />
              <br />
              Other brokers may apply rollovers on a continuous, second-by-second basis. This policy may ultimately raise your total trading costs.
              <br />
              <br />
              To read more about charges applicable to different accounts, follow through to our <a href="#">trading costs</a>.
              <br />
              <span className="mt-3 d-inline-block">Was this answer helpful? <span style={{ color: "#f24521", cursor: "pointer" }}>Yes</span> / <span style={{ color: "#f24521", cursor: "pointer" }}>No</span></span>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>How are rollovers determined?</Accordion.Header>
            <Accordion.Body>
              Rollover rates are based on the interest rate differential of the two currencies and the spot price. However, rollover rates can be impacted by market conditions, especially at the end of a quarter or year.
              <br />
              <br />
              We periodically review our rollover rates and adjust them based on current market and industry conditions.
              <br />
              <br />
              To learn more, read our <a href="#">Key factors that affect the forex markets</a> page.
              <br />
              <span className="mt-3 d-inline-block">Was this answer helpful? <span style={{ color: "#f24521", cursor: "pointer" }}>Yes</span> / <span style={{ color: "#f24521", cursor: "pointer" }}>No</span></span>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>What is rollover?</Accordion.Header>
            <Accordion.Body>
              A rollover (also known as a financing charge or swap rate) is the simultaneous closing of an open position for today value date and the opening of the same position for the next day value date at a price reflecting the interest rate differential between the two currencies.
              <br />
              <br />
              To find more information on rollovers, follow the link to our <a href="#">rollover FAQs</a> page.
              <br />
              <span className="mt-3 d-inline-block">Was this answer helpful? <span style={{ color: "#f24521", cursor: "pointer" }}>Yes</span> / <span style={{ color: "#f24521", cursor: "pointer" }}>No</span></span>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </section>
  );
};

export default RolloverFAQ;
