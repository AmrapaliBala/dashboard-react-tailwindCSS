import { useEffect, useRef } from "react";
const ProjectStatistics = () => {
  const options = {
    series: [
      {
        name: "Developer Edition",
        data: [1500, 1418, 1456, 1526, 1356, 1256],
        color: "#3b82f6",
      },
      {
        name: "Designer Edition",
        data: [643, 413, 765, 412, 1423, 1731],
        color: "#10b981",
      },
    ],
    chart: {
      height: "100%",
      maxWidth: "100%",
      type: "area",
      fontFamily: "Inter, sans-serif",
      dropShadow: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    tooltip: {
      enabled: true,
      x: {
        show: false,
      },
    },
    legend: {
      show: false
    },
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
        shade: "#1447E6",
        gradientToColors: ["#1447E6"],
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 6,
    },
    grid: {
      show: false,
      strokeDashArray: 4,
      padding: {
        left: 2,
        right: 2,
        top: 0
      },
    },
    xaxis: {
      categories: ['01 February', '02 February', '03 February', '04 February', '05 February', '06 February', '07 February'],
      labels: {
        show:false,
      },
      axisBorder: {
        show: true,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show:false,
      labels: {
        formatter: function (value) {
          return '$' + value;
        }
      }
    },
  }
  const chartRef = useRef(null);

  useEffect(() => {
    if (!chartRef.current || typeof ApexCharts === "undefined") return;
    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, [options]);
  return (
    <div>

      <div className="w-full bg-[#1e293b] text-white border border-slate-700 shadow-lg shadow-black/20 rounded-xl  p-4 md:p-6">
        <div className="flex justify-between">
          <div>
            <h5 className="text-2xl text-indigo-500 font-bold text-heading">Growth Statistics</h5>
          </div>
          <div className="flex items-center px-2.5 py-0.5 font-medium text-fg-success text-center text-green-400">
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v13m0-13 4 4m-4-4-4 4" /></svg>
            12%
          </div>
        </div>
        <div  ref={chartRef} id="data-series-chart"  className="w-full h-[250px]"></div>
      </div>

    </div>
  )
}

export default ProjectStatistics