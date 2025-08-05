import React from 'react';

const StockFeatures = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#f24521' }}>
      <div className="container">
        <div className="row text-center justify-content-center">
          {/* Feature 1 */}
          <div className="col-md-5 mb-4">
            <div
              className="p-4 h-100 rounded-4 shadow-sm"
              style={{ backgroundColor: '#fff' }}
            >
              <h5 className="fw-bold mb-2" style={{ color: '#f24521' }}>
                Wide Market Coverage
              </h5>
              <p className="text-muted mb-0" style={{ fontSize: '0.95rem' }}>
                ✔ Gain access to nearly 2,500 headline names from the US and UK
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="col-md-5 mb-4">
            <div
              className="p-4 h-100 rounded-4 shadow-sm"
              style={{ backgroundColor: '#fff' }}
            >
              <h5 className="fw-bold mb-2" style={{ color: '#f24521' }}>
                Fast Execution
              </h5>
              <p className="text-muted mb-0" style={{ fontSize: '0.95rem' }}>
                ✔ Benefit from our ultra-fast execution speeds for efficient trading
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StockFeatures;
