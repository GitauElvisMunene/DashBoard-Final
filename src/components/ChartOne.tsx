import { useEffect, useState } from 'react';
import { ApexOptions } from 'apexcharts';
import ReactApexChart from 'react-apexcharts';

interface DataPoint {
  _id: string;
  flowVolume: number;
  flowPulse: number;
  waterDetected: string;
  OutputLiquidQuantity: number;
  site: number;
  room: number;
  timestamp: string;
}

interface ChartOneProps {
  data: DataPoint[];
}

interface ChartOneState {
  series: {
    name: string;
    data: number[];
  }[];
}

const ChartOne: React.FC<ChartOneProps> = ({ data }) => {

  
  
  const [state, setState] = useState<ChartOneState>({
    series: [
      {
        name: 'Flow Volume',
        data: [],
      },
      {
        name: 'Flow Pulse',
        data: [],
      },
    ],
  });

  const options: ApexOptions = {
    legend: {
      show: false,
      position: 'top',
      horizontalAlign: 'left',
    },
    colors: ['#80CAEE', '#3C50E0'],
    chart: {
      fontFamily: 'Satoshi, sans-serif',
      height: 335,
      type: 'area',
      dropShadow: {
        enabled: true,
        color: '#623CEA14',
        top: 10,
        blur: 4,
        left: 0,
        opacity: 0.1,
      },
      toolbar: {
        show: false,
      },
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          chart: {
            height: 300,
          },
        },
      },
      {
        breakpoint: 1366,
        options: {
          chart: {
            height: 350,
          },
        },
      },
    ],
    stroke: {
      width: [2, 2],
      curve: 'straight',
    },
    grid: {
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 4,
      colors: '#fff',
      strokeColors: ['#3056D3', '#80CAEE'],
      strokeWidth: 3,
      strokeOpacity: 0.9,
      strokeDashArray: 0,
      fillOpacity: 1,
      discrete: [],
      hover: {
        size: undefined,
        sizeOffset: 5,
      },
    },
    xaxis: {
      type: 'datetime',
      categories: data
        .sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime())
        .map(dataPoint => new Date(dataPoint.timestamp).toISOString()),
      labels: {
        format: 'HH:mm:ss',
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      title: {
        text: 'Time',
        style: {
          fontSize: '14px',
        },
      },
    },
    yaxis: {
      title: {
        text: 'Water Consumption (Ltrs)',
        style: {
          fontSize: '14px',
        },
      },
      min: 0,
      reversed: false,
    },
    series: state.series,
  };

  useEffect(() => {
    if (data) {
      const updatedSeries: ChartOneState['series'] = [
        {
          name: 'Water Usage (Ltrs)',
          data: data.map(dataPoint => dataPoint.OutputLiquidQuantity || 0),
        }
      ];

      setState({
        series: updatedSeries,
      });
    }
  }, [data]);

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5">
          <div className="flex min-w-47.5">
            <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-primary">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-primary"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-primary">Site: {data[0]?.site}</p>
            </div>
          </div>
          <div className="flex min-w-47.5">
            <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-primary">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-primary"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-primary">Room: {data[0]?.room}</p>
            </div>
          </div>
          <div className="flex min-w-47.5">
            <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-secondary">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-secondary"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-secondary">Output Liquid Quantity</p>
            </div>
          </div>
        </div>
        <div className="flex w-full max-w-45 justify-end">
          <div className="inline-flex items-center rounded-md bg-whiter p-1.5 dark:bg-meta-4">
            <button className="rounded bg-white py-1 px-3 text-xs font-medium text-black shadow-card hover:bg-white hover:shadow-card dark:bg-boxdark dark:text-white dark:hover:bg-boxdark">
              Day
            </button>
          </div>
        </div>
      </div>
      <div>
        <div id="chartOne" className="-ml-5">
          <ReactApexChart
            options={options}
            series={state.series}
            type="area"
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartOne;
