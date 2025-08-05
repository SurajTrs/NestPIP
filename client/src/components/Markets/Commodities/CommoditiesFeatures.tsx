import React from 'react';

const CommoditiesFeatures = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        <div className="row text-center justify-content-center">
          {/* Feature 1 */}
          <div className="col-md-4 mb-4">
            <div className="p-4 h-100 rounded-4 shadow-sm" style={{ backgroundColor: '#fff' }}>
              <h5 className="fw-bold mb-2" style={{ color: '#FF7A00' }}>
                Wide Range of Commodities
              </h5>
              <p className="text-muted mb-0" style={{ fontSize: '0.95rem' }}>
                ✔ Trade on energy, agriculture, and precious metals like gold and oil
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="col-md-4 mb-4">
            <div className="p-4 h-100 rounded-4 shadow-sm" style={{ backgroundColor: '#fff' }}>
              <h5 className="fw-bold mb-2" style={{ color: '#FF7A00' }}>
                Competitive Spreads
              </h5>
              <p className="text-muted mb-0" style={{ fontSize: '0.95rem' }}>
                ✔ Benefit from tight spreads and fast execution on popular commodities
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="col-md-4 mb-4">
            <div className="p-4 h-100 rounded-4 shadow-sm" style={{ backgroundColor: '#fff' }}>
              <h5 className="fw-bold mb-2" style={{ color: '#FF7A00' }}>
                Flexible Contract Sizes
              </h5>
              <p className="text-muted mb-0" style={{ fontSize: '0.95rem' }}>
                ✔ Trade large or small contracts to match your risk appetite
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommoditiesFeatures;
