import React from "react";
import { FaClock, FaDollarSign, FaQuestionCircle } from "react-icons/fa";

const RolloverBenefits = () => {
  return (
    <section style={{ backgroundColor: "#fff3ea", padding: "4rem 0" }}>
      <div className="container">
        <h2 className="text-center fw-bold mb-4" style={{ color: "#f24521" }}>
          Key Benefits of Rollover Rates
        </h2>

        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="p-4 rounded-4 shadow-sm" style={{ backgroundColor: "#ffe0d1" }}>
              <FaDollarSign size={40} style={{ color: "#f24521" }} className="mb-3" />
              <h5 className="fw-bold mb-2">Earn or Pay on Rollovers</h5>
              <p className="text-muted mb-0">
                You can earn or pay when a rollover is applied to your position.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="p-4 rounded-4 shadow-sm" style={{ backgroundColor: "#ffe0d1" }}>
              <FaClock size={40} style={{ color: "#f24521" }} className="mb-3" />
              <h5 className="fw-bold mb-2">Forex Never Sleeps</h5>
              <p className="text-muted mb-0">
                Rollovers are only applied to open trades at 5 PM ET.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="p-4 rounded-4 shadow-sm" style={{ backgroundColor: "#ffe0d1" }}>
              <FaQuestionCircle size={40} style={{ color: "#f24521" }} className="mb-3" />
              <h5 className="fw-bold mb-2">Be Aware of Broker Differences</h5>
              <p className="text-muted mb-0">
                Other brokers may calculate rolls continuously, raising your trading costs.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <a
            href="#"
            className="btn px-4 py-2 fw-bold"
            style={{
              backgroundColor: "#f24521",
              color: "#fff",
              borderRadius: "50px",
            }}
          >
            Read Rollover FAQs
          </a>
        </div>
      </div>
    </section>
  );
};

export default RolloverBenefits;
