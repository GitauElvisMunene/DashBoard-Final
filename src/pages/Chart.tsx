// src/Chart.tsx

import React, { useState } from 'react';
import ThresholdCard from './UiElements/ThresholdCard';
interface Thresholds {
  flowVolume: number;
  flowPulse: number;
  outputLiquidQuantity: number;
}

const Chart: React.FC = () => {
  const [thresholds, setThresholds] = useState<Thresholds>({
    flowVolume: 0,
    flowPulse: 0,
    outputLiquidQuantity: 0,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, parameter: keyof Thresholds) => {
    setThresholds({ ...thresholds, [parameter]: parseFloat(event.target.value) || 0 });
  };

  const containerStyle: React.CSSProperties = {
    margin: 0,
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50vh',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    backgroundImage: `url('../../images/icon/new-x.jpg')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  };

  const thresholdsContainerStyle: React.CSSProperties = {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    maxWidth: '400px',
  };

  const contentStyle: React.CSSProperties = {
    color: 'whitesmoke',
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '8px',
    marginBottom: '15px',
    boxSizing: 'border-box',
    color: 'blue', // Set the text color for the input fields
  };

  const buttonStyle: React.CSSProperties = {
    padding: '10px',
    backgroundColor: '#4caf50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const buttonHoverStyle: React.CSSProperties = {
    backgroundColor: '#45a049',
  };

  const tipTextStyle: React.CSSProperties = {
    marginTop: '15px',
    fontStyle: 'italic',
    fontSize: '18px',
  };

  return (
    <>  {/* Display threshold values in cards */}
    <h1 style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', color: "blue",fontWeight: 'bold' }}>Monitor and set thresholds for your water usage.</h1>
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <ThresholdCard label="Flow Volume" value={thresholds.flowVolume} />
      <ThresholdCard label="Flow Pulse" value={thresholds.flowPulse} />
      <ThresholdCard label="Output Liquid Quantity" value={thresholds.outputLiquidQuantity} />
    </div>
    <div style={containerStyle}>
      <div style={thresholdsContainerStyle}>
        <h1>Leakage Detection Thresholds</h1>
        <div style={contentStyle}>
          <label>
            Flow Volume Threshold:
            <input
              type="number"
              value={thresholds.flowVolume}
              onChange={(e) => handleInputChange(e, 'flowVolume')}
              style={inputStyle}
            />
          </label>
          <label>
            Flow Pulse Threshold:
            <input
              type="number"
              value={thresholds.flowPulse}
              onChange={(e) => handleInputChange(e, 'flowPulse')}
              style={inputStyle}
            />
          </label>
          <label>
            Output Liquid Quantity Threshold:
            <input
              type="number"
              value={thresholds.outputLiquidQuantity}
              onChange={(e) => handleInputChange(e, 'outputLiquidQuantity')}
              style={inputStyle}
            />
          </label>
          <button
            onClick={() => console.log('Save Thresholds', thresholds)}
            style={{ ...buttonStyle, ...buttonHoverStyle }}
          >
            Save Thresholds
          </button>
        </div>
      </div>
    </div>
    </>
  );
  
};

export default Chart;
