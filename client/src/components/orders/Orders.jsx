import React from 'react';
import './Orders.css'; // Import the new CSS file

const Orders = () => {
  // Sample data for mapping
  const ordersData = [
    { creator: 'John Doe', amount: '$1000', status: 'open' },
    { creator: 'Jane Smith', amount: '$750', status: 'filled' },
    { creator: 'Alice Johnson', amount: '$500', status: 'open' },
    { creator: 'Bob Brown', amount: '$1250', status: 'filled' }
  ];

  return (
    <section className="orders-section">
      <div className="orders-container">
        <h1 className="orders-title">Orders</h1>
        
        <table className="orders-table">
          <thead>
            <tr className="orders-header">
              <th className="orders-th">Creators</th>
              <th className="orders-th">Requested Amount</th>
              <th className="orders-th">Status</th>
            </tr>
          </thead>
          <tbody>
            {ordersData.map((order, index) => (
              <tr key={index} className={`orders-row ${index % 2 === 0 ? 'orders-even' : 'orders-odd'}`}>
                <td className="orders-td">{order.creator}</td>
                <td className="orders-td">{order.amount}</td>
                <td className="orders-td">{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Orders;
