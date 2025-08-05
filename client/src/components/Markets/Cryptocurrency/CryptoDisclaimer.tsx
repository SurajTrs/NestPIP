import React from 'react';

const CryptoDisclaimer = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        <div className="p-4 p-md-5 rounded-4 shadow-sm" style={{ backgroundColor: '#FFF3E0' }}>
          <h3 className="fw-bold mb-3" style={{ color: '#FF7A00' }}>
            Cryptocurrency Trading Disclaimer
          </h3>
          <p className="text-muted" style={{ fontSize: '0.95rem', lineHeight: '1.75' }}>
            Cryptocurrency CFDs are complex, extremely risky and usually highly speculative. Trading in
            Cryptocurrency CFDs involves a high risk of loss of funds over a short period of time due to
            high market volatility, execution issues and industry-specific disruptive events, including,
            but not limited to, discontinuation, regulatory bans and other malicious actors within
            cryptocurrency ecosystems.
          </p>
          <p className="text-muted" style={{ fontSize: '0.95rem', lineHeight: '1.75' }}>
            The pricing of Cryptocurrency CFDs might be derived from specific cryptocurrency exchanges,
            which means that the market depth is limited to what is available in the order books of such
            exchanges. These markets are relatively new and thus might be volatile and limited in terms
            of liquidity. The pricing engines of cryptocurrency exchanges may experience delays and/or
            interruptions which can be caused by numerous potential issues.
          </p>
          <p className="text-muted" style={{ fontSize: '0.95rem', lineHeight: '1.75' }}>
            Cryptocurrency CFD trading is not appropriate for all investors and therefore, any person
            wishing to trade in Cryptocurrency CFDs should have detailed and updated knowledge and
            expertise in these specific products. Clients should always be fully aware and understand the
            specific characteristics and risks related to these products as laid down in this section.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CryptoDisclaimer;
