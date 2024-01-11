import React, { useState } from 'react';
import "./UiElements/settings.css"

const Settings = () => {
  const [randomRecommendations, setRandomRecommendations] = useState([]);

  const recommendationData = [
    'Try reducing shower time to save water.',
    'Consider installing a low-flow toilet for water conservation.',
    'Upgrade faucets to water-efficient models.',
    'Implement rainwater harvesting for non-potable uses.',
    'Conduct regular checks on faucets and fixtures to address any leaks promptly and prevent unnecessary water waste.',
    'Act promptly on any leakage alerts to minimize water wastage and prevent potential infrastructure damage.',
    'Consider upgrading to water-efficient appliances for tasks like laundry and dishwashing to reduce overall water consumption.',
    'Be mindful of high water usage during morning routines, adjusting activities for more efficient water management.',
    'Leverage rainwater harvesting systems, especially during the rainy season, to supplement water supply for non-potable uses.',
    'Explore the possibility of greywater recycling systems to treat and reuse water from activities like bathing and laundry, reducing overall water demand.',
    'Consider upgrading to water-efficient toilets that use less water per flush for sustained water savings.',
    'Promptly fix faucet drips to prevent water waste.',
    'Utilize the threshold-setting feature to establish personalized monthly water usage goals and monitor progress toward these targets.',
    'Educate household members about water conservation, encouraging the adoption of water-efficient practices.',
    'Recommend water-efficient showerheads for reduced water consumption.',
  ];

  const getRandomRecommendations = () => {
    const shuffledRecommendations = [...recommendationData].sort(() => Math.random() - 0.5);
    const selectedRecommendations = shuffledRecommendations.slice(0, 3);
    setRandomRecommendations(selectedRecommendations);
  };

  return (
    <div className="container">
      <div className="recommendations-container">
        <div className="recommendations-content">
          <h1>Water Saving Tips</h1>
          <button onClick={getRandomRecommendations}>Get Tips</button>
          {randomRecommendations.map((recommendation, index) => (
            <p key={index} className="tip-text">{recommendation}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Settings;
