import  { useEffect, useState } from 'react';
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




const ECommerce:React.FC = () => {

  const [iotdata, setIotData] = useState([]);
  const [selectedDate, setSelectedDate] = useState<string>('');
  console.log(selectedDate) 
  console.log(iotdata)

  const fetchData = async (date: string) => {
    try {
      const response = await fetch(`https://swms-7p8s.onrender.com/api/data?date=${date}`);
      const result = await response.json();
      setIotData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDateChange = (newDate: string) => {
    setSelectedDate(newDate);
  };

  const handleFetchData = () => {
    fetchData(selectedDate);
  };

  useEffect(() => {
    // Set a default date when the component mounts
    const defaultDate = '2022-01-01'; // Replace with your desired default date
    setSelectedDate(defaultDate);

    // Initial fetch with the default date
    fetchData(defaultDate);

    // Set up interval to fetch data every, for example, 5 minutes (300,000 milliseconds)
    const intervalId = setInterval(() => fetchData(selectedDate), 300000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <>

<div style={{ color: '#80CAEE', fontWeight: 'bold' }}>
<label>Select Date:</label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => handleDateChange(e.target.value)}
        />
        <button onClick={handleFetchData}>Fetch Data</button>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardOne data={iotdata}/>
        <CardTwo data={iotdata}/>
        <CardThree data={iotdata}/>
        <CardFour data={iotdata}/>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne data={iotdata}/>
        {/* <ChartTwo /> */}
        <ChartThree />
        {/* <MapOne /> */}
        {/* <div className="col-span-12 xl:col-span-8">
          <TableOne />
        </div>
        <ChatCard /> */}
      </div>
    </>
  );
};

export default ECommerce;
