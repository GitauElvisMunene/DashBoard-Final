import React, { useState } from 'react';
import "./UiElements/settings.css"

const Settings = () => {
  const [randomRecommendations, setRandomRecommendations] = useState([]);

  const recommendationData = [
    'Try reducing shower time to save water.',
    'Consider installing a low-flow toilet for water conservation.',
    'Upgrade faucets to water-efficient models.',
    'Implement rainwater harvesting for non-potable uses.',
    'Regularly check for and fix leaks to prevent water wastage.',
    'Use mulch around plants to retain soil moisture.',
    'Run dishwashers and washing machines with full loads.',
    'Invest in smart irrigation controllers for efficient watering.',
    'Maintain shorter grass to reduce lawn irrigation needs.',
    'Capture and reuse graywater for non-potable purposes.',
    'Install dual flush toilets to save water with each use.',
    'Promptly fix faucet drips to prevent water waste.',
    'Water outdoor plants during early morning or late evening.',
    'Inform users about local water conservation rebates.',
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
