import React from 'react';
import './ClaimOrder.css'; // Importing the CSS file for styles

const ClaimOrder = () => {
  return (
    <section className="claim-order-section">
      <div className="claim-order-container">
        <h1 className="claim-order-title">Claim Order</h1>

        {/* Input fields */}
        <input
          type="text"
          placeholder="Order Creator"
          className="claim-order-input"
        />
        <input
          type="text"
          placeholder="Requested USDC Amount"
          className="claim-order-input"
        />
        <input
          type="text"
          placeholder="PhonePay ID"
          className="claim-order-input"
        />
        <input
          type="text"
          placeholder="USD Amount to Request"
          className="claim-order-input"
        />

        {/* Claim Order Button */}
        <button className="claim-order-button">
          Claim Order
        </button>
      </div>
    </section>
  );
}

export default ClaimOrder;
