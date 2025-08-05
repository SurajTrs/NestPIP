"use client";

import React from "react";

const sections = [
  { title: "FX Products", id: "fx" },
  { title: "Commodities", id: "commodities" },
  { title: "Indices", id: "indices" },
  { title: "Metals", id: "metals" },
];

const MarginRequirements = () => {
  return (
    <div className="w-100 py-5" style={{ backgroundColor: "#fff3ea" }}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="fw-bold mb-2" style={{ color: "#f24521" }}>
            Margin Requirements by Market
          </h1>
          <p className="text-muted fs-5">
            Understand the margin requirements for different account types & instruments at NestPip.
          </p>
        </div>

        {/* Sections */}
        <div className="row">
          {sections.map(({ title, id }) => (
            <div className="col-md-6 mb-4" key={id}>
              <div className="card border-1 shadow-sm h-100" style={{ borderColor: "#f24521" }}>
                <div className="card-body">
                  <h5 className="card-title" style={{ color: "#f24521" }}>{title}</h5>
                  <p className="card-text text-muted small mb-3">
                    These are the Margin Maintenance Requirements (MMR) for each instrument:
                  </p>

                  <div className="table-responsive">
                    <table className="table table-bordered table-sm mb-0">
                      <thead style={{ backgroundColor: "#ffe0d1", color: "#f24521" }}>
                        <tr>
                          <th>Instrument</th>
                          <th>MMR</th>
                        </tr>
                      </thead>
                      <tbody className="text-dark">
                        <tr>
                          <td>AUD/CAD</td>
                          <td>0.5%</td>
                        </tr>
                        <tr>
                          <td>EUR/USD</td>
                          <td>0.5%</td>
                        </tr>
                        <tr>
                          <td>Gold</td>
                          <td>0.5%</td>
                        </tr>
                        <tr>
                          <td>Germany 40</td>
                          <td>0.5%</td>
                        </tr>
                        <tr>
                          <td>US Crude Oil</td>
                          <td>1%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-5 p-4 rounded" style={{ backgroundColor: "#ffe0d1", border: "1px solid #f24521" }}>
          <h5 className="fw-semibold mb-3" style={{ color: "#f24521" }}>Important Notes</h5>
          <ul className="small text-muted ps-3">
            <li>Margin may increase for large trade sizes or MetaTrader platforms.</li>
            <li>Liquidation follows different procedures across proprietary and MT4/MT5 platforms.</li>
            <li>Alerts can notify you when your available margin drops below 120%.</li>
            <li>Always manage leverage responsibly to avoid significant losses.</li>
            <li>Margin requirements can change at NestPIP discretion without prior notice.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MarginRequirements;
