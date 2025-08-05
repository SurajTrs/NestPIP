import React from 'react';

const IndicesFeatures = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        <div className="row text-center justify-content-center">
          {/* Feature 1 */}
          <div className="col-md-4 mb-4">
            <div className="p-4 h-100 rounded-4 shadow-sm" style={{ backgroundColor: '#fff' }}>
              <h5 className="fw-bold mb-2" style={{ color: '#f24521' }}>
                Global Index Access
              </h5>
              <p className="text-muted mb-0" style={{ fontSize: '0.95rem' }}>
                ✔ Access over 15 of the most popular global indices
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="col-md-4 mb-4">
            <div className="p-4 h-100 rounded-4 shadow-sm" style={{ backgroundColor: '#fff' }}>
              <h5 className="fw-bold mb-2" style={{ color: '#f24521' }}>
                Fixed Spreads
              </h5>
              <p className="text-muted mb-0" style={{ fontSize: '0.95rem' }}>
                ✔ Benefit from fixed spreads during market hours
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="col-md-4 mb-4">
            <div className="p-4 h-100 rounded-4 shadow-sm" style={{ backgroundColor: '#fff' }}>
              <h5 className="fw-bold mb-2" style={{ color: '#f24521' }}>
                Small Contract Sizes
              </h5>
              <p className="text-muted mb-0" style={{ fontSize: '0.95rem' }}>
                ✔ Fractional contract sizes available, as small as 0.1
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndicesFeatures;
