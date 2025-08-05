import React from "react";

const WhatIsRollover = () => {
  return (
    <section style={{ backgroundColor: "#fff3ea", padding: "4rem 0" }}>
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-md-6">
            <h2 style={{ color: "#f24521" }} className="fw-bold mb-3">
              What is Rollover?
            </h2>
            <p style={{ fontSize: "1.05rem", color: "#333" }}>
              When trading a currency, you are borrowing one currency to purchase another. The rollover rate is typically
              the interest charged or earned for holding positions overnight. A rollover interest fee is calculated based
              on the difference between the two interest rates of the traded currencies.
            </p>
            <div
              className="mt-4 px-4 py-2 d-inline-block"
              style={{
                backgroundColor: "#f24521",
                color: "white",
                borderRadius: "6px",
                fontWeight: "500",
              }}
            >
              ROLLOVER DEFINITION
            </div>
          </div>
          <div className="col-md-6 text-center">
            <img
              alt="What is Rollover"
              className="img-fluid rounded shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsRollover;
