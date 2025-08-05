import React from 'react';

const economicData = [
  {
    date: 'Jun 29 (Sun)',
    country: 'CL',
    event: 'Saint Peter and Saint Paul',
    actual: 'Public Holiday',
    consensus: null,
    previous: null,
    colspan: 3,
  },
  {
    date: 'Jun 30 (Mon)',
    country: 'CO',
    event: 'Sacred Heart',
    actual: 'Public Holiday',
    consensus: null,
    previous: null,
    colspan: 3,
  },
  {
    date: 'Jun 30 (Mon) 12:00',
    country: 'DE',
    event: 'Harmonized Index of Consumer Prices (YoY) (Jun)',
    actual: '2.0%',
    consensus: '2.2%',
    previous: '2.1%',
  },
  {
    date: 'Jun 30 (Mon) 12:00',
    country: 'DE',
    event: 'Consumer Price Index (MoM) (Jun)',
    actual: '0.0%',
    consensus: '0.2%',
    previous: '0.1%',
  },
];

const EconomicCalendar: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        <h2 className="fw-bold text-center mb-5" style={{ color: '#f24521' }}>
          Economic Calendar
        </h2>

        <div className="table-responsive">
          <table className="table table-bordered bg-white rounded-4 shadow-sm">
            <thead className="table-light">
              <tr>
                <th>Date & Time</th>
                <th>Country</th>
                <th>Event</th>
                <th>Actual</th>
                <th>Consensus</th>
                <th>Previous</th>
              </tr>
            </thead>
            <tbody>
              {economicData.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.date}</td>
                  <td>{item.country}</td>
                  <td>{item.event}</td>
                  {item.colspan ? (
                    <td colSpan={item.colspan}>{item.actual}</td>
                  ) : (
                    <>
                      <td>{item.actual}</td>
                      <td>{item.consensus}</td>
                      <td>{item.previous}</td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default EconomicCalendar;
