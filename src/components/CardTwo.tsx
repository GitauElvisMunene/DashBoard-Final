import React from 'react';

interface DataPoint {
  date: string;
  time: string;
  flowVolume: number;
  flowPulse: number;
  room: string;
  site: string;
  waterDetected: boolean;
  OutputLiquidQuantity: number;
}

interface ChartTwoProps {
  data: DataPoint[];
}

const CardTwo: React.FC<ChartTwoProps> = ({ data }) => {
  const latestData = data[data.length - 1]; // Assuming data is sorted chronologically

  return (
    <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      {latestData && (
        <div className="mt-4 flex items-end justify-between">
          <div>
            <h4 className="text-title-md font-bold text-black dark:text-white">
              {latestData.flowPulse} flowPulse
            </h4>
            <span className="text-sm font-medium">Flow Pulse</span>
          </div>

          <span className="flex items-center gap-1 text-sm font-medium text-meta-3">
            {latestData.flowPulse}%
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
      )}
    </div>
  );
};

export default CardTwo;
