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

  useEffect(() => {
    // Function to fetch data from the server
    const fetchData = async () => {
      try {
        const response = await fetch('https://swms-7p8s.onrender.com/api/data');
        const result = await response.json();
        setIotData(result);
        // Store data in local storage
        localStorage.setItem('iotData', JSON.stringify(result));
      } catch (error) {
        // Handle error
      }
    };

    // Function to fetch data at regular intervals
    const fetchDataInterval = () => {
      fetchData();
    };

    // Initial fetch when component mounts
    fetchData();

    // Set up interval to fetch data every, for example, 5 minutes (300,000 milliseconds)
    const intervalId = setInterval(fetchDataInterval, 300000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  

  return (
    <>
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
