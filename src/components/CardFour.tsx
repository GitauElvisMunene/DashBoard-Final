import React from 'react';

interface DataPoint {
  date: string;
  time: string;
  device_data: {
    flowVolume: number;
    flowPulse: number;
    room: string;
    site: string;
    waterDetected: boolean;
  };
  flowPulse: number;
  room: string;
  site: string;
  waterDetected: boolean;
}

interface ChartFourProps {
  data: DataPoint[];
}

const CardFour: React.FC<ChartFourProps> = ({ data }) => {
  // Log the data for debugging
  

  // Check if data is undefined or empty
  if (!data || data.length === 0) {
    return (
      <div className="rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark">
        <p>Data not available.</p>
      </div>
    );
  }

  const latestData = data[0]; // Assuming data is sorted chronologically

  return (
    <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      {latestData && (
        <div className="mt-4 flex items-end justify-between">
          <div>
            <h4 className="text-title-md font-bold text-black dark:text-white">
            {latestData.device_data.flowVolume} Litres
            </h4>
            <span className="text-sm font-medium">Liquid Output</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardFour;
