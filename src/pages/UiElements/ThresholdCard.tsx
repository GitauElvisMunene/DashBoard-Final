// src/ThresholdCard.tsx
import React from 'react';

interface ThresholdCardProps {
  label: string;
  value: number;
}

const ThresholdCard: React.FC<ThresholdCardProps> = ({ label, value }) => {
  return (
    <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark" style={{ margin: '10px' }}>
      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            {value}
          </h4>
          <span className="text-sm font-medium">{label}</span>
        </div>

        {/* Assuming you want to display the percentage, replace 'flowPulse' with 'value' */}
        <span className="flex items-center gap-1 text-sm font-medium text-meta-3">
          {/* {value}% */}
          <svg
            className="fill-meta-3"
            width="10"
            height="11"
            viewBox="0 0 10 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.35716 2.47737L0.908974 5.82987L5.0443e-07 4.94612L5 0.0848689L10 4.94612L9.09103 5.82987L5.64284 2.47737L5.64284 10.0849L4.35716 10.0849L4.35716 2.47737Z"
              fill=""
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default ThresholdCard;
