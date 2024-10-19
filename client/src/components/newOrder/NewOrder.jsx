import React from 'react';
import './NewOrder.css'; // Import the new CSS file

const NewOrder = () => {
  return (
    <section className="neworder-section">
      <div className="neworder-container">
        <h1 className="neworder-title">New Order</h1>
        <p className="neworder-description">Specify an amount to on-ramp</p>
        <input
          type="text"
          placeholder="Amount in USDC to request"
          className="neworder-input"
        />
        <button className="neworder-button">
          Submit
        </button>
      </div>
    </section>
  );
}

export default NewOrder;
