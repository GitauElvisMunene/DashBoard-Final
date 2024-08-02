import { useEffect, useState } from 'react';
import CardFour from '../../components/CardFour.tsx';
import CardOne from '../../components/CardOne.tsx';
import CardThree from '../../components/CardThree.tsx';
import CardTwo from '../../components/CardTwo.tsx';
import ChartOne from '../../components/ChartOne.tsx';
import ChartThree from '../../components/ChartThree.tsx';
import ChartTwo from '../../components/ChartTwo.tsx';
import ChatCard from '../../components/ChatCard.tsx';
import MapOne from '../../components/MapOne.tsx';
import TableOne from '../../components/TableOne.tsx';

const ECommerce: React.FC = () => {
  const [iotdata, setIotData] = useState([]);
  const [selectedDate, setSelectedDate] = useState<string>('');

  const fetchData = async (date: string) => {
    try {
      const response = await fetch(`https://watermeterbackend.onrender.com/data?date=${date}`);
      const result = await response.json();
      setIotData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    const defaultDate = '2024-01-08';
    const storedDate = localStorage.getItem('selectedDate');
    const initialDate = storedDate || defaultDate;
    setSelectedDate(initialDate);
    fetchData(initialDate);

    const intervalId = setInterval(() => fetchData(selectedDate), 500);
    
    return () => clearInterval(intervalId);
  }, [selectedDate]);

  const handleDateChange = (newDate: string) => {
    setSelectedDate(newDate);
    localStorage.setItem('selectedDate', newDate);
    fetchData(newDate);
  };

  return (
    <>
      <div style={{ color: '#80CAEE', fontWeight: 'bold' }}>
        <label>Select Date:</label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => handleDateChange(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardOne data={iotdata} />
        <CardTwo data={iotdata} />
        <CardThree data={iotdata} />
        <CardFour data={iotdata} />
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne data={iotdata} />
        <ChartThree />
      </div>
    </>
  );
};

export default ECommerce;
