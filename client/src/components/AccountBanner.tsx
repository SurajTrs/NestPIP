import React from 'react';
import { FaUserPlus, FaLock, FaChartBar } from 'react-icons/fa';

const AccountBanner = () => {
  return (
    <section style={{ backgroundColor: '#FF7A00', color: '#fff' }} className="py-5">
      <div className="container text-center">
        <div className="row mb-4">
          {/* Register */}
          <div className="col-md-4 mb-3">
            <div className="d-flex flex-column align-items-center">
              <FaUserPlus size={40} className="mb-2" />
              <h5 className="fw-bold">Register</h5>
              <p className="mb-0">to open an account</p>
            </div>
          </div>

          {/* Deposit */}
          <div className="col-md-4 mb-3">
            <div className="d-flex flex-column align-items-center">
              <FaLock size={40} className="mb-2" />
              <h5 className="fw-bold">Deposit</h5>
              <p className="mb-0">safely and securely</p>
            </div>
          </div>

          {/* Start Trading */}
          <div className="col-md-4 mb-3">
            <div className="d-flex flex-column align-items-center">
              <FaChartBar size={40} className="mb-2" />
              <h5 className="fw-bold">Start trading</h5>
              <p className="mb-0">on web, mobile & desktop</p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <a
            href="/register"
            className="btn btn-light fw-semibold px-4 py-2 rounded-pill"
          >
            Open an Account
          </a>
          <a
            href="/demo"
            className="btn btn-outline-light fw-semibold px-4 py-2 rounded-pill"
          >
            Try a Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default AccountBanner;
