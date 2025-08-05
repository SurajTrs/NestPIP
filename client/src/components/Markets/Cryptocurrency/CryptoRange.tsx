import React from 'react';

const cryptocurrencies = [
  { name: 'Bitcoin', icon: '/icons/bitcoin.svg' },
  { name: 'Ethereum', icon: '/icons/ethereum.svg' },
  { name: 'Litecoin', icon: '/icons/litecoin.svg' },
  { name: 'Ripple', icon: '/icons/ripple.svg' },
];

const CryptoRange = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container text-center">
        <h2 className="fw-bold mb-4" style={{ color: '#FF7A00' }}>
          Our Range of Cryptocurrencies
        </h2>

        <div className="row justify-content-center g-4">
          {cryptocurrencies.map((crypto, index) => (
            <div className="col-6 col-md-3" key={index}>
              <div
                className="p-4 rounded-4 shadow-sm h-100 d-flex flex-column align-items-center"
                style={{ backgroundColor: '#fff' }}
              >
                <img
                  src={crypto.icon}
                  alt={crypto.name}
                  height={50}
                  className="mb-3"
                  style={{ backgroundColor: '#FFEBD9', borderRadius: '50%', padding: '0.75rem' }}
                />
                <h6 className="fw-semibold mb-0">{crypto.name}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CryptoRange;
