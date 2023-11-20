import React, { useState } from 'react';
import "./UiElements/settings.css"



const Settings = () => {
  const [randomRecommendation, setRandomRecommendation] = useState('');

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

  const getRandomRecommendation = () => {
    const randomIndex = Math.floor(Math.random() * recommendationData.length);
    setRandomRecommendation(recommendationData[randomIndex]);
  };


  return (
    <>
    <div className="container">
     <div className="recommendations-container">
      <div className="recommendations-content">
        <h1>Water Saving Tips</h1>
        <button onClick={getRandomRecommendation}>Get Tip</button>
        {randomRecommendation && <p className="tip-text">{randomRecommendation}</p>}
      </div>
    </div>
    </div>
          </>
  );
};

export default Settings;
