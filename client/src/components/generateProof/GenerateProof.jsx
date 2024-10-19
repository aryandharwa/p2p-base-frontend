import React from 'react';
import './GenerateProof.css'; // Importing the CSS file for styles

const GenerateProof = () => {
  return (
    <section className="generate-proof-section">
      <div className="generate-proof-container">
        <h1 className="generate-proof-title">Generate Proof</h1>

        {/* Input field */}
        <input
          type="text"
          placeholder="Paste Email"
          className="generate-proof-input"
        />

        {/* Generate Proof Button */}
        <button className="generate-proof-button">
          Generate Proof
        </button>
      </div>
    </section>
  );
}

export default GenerateProof;
