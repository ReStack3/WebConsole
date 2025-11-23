"use client";

import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

interface KLineChartProps {
  dates: string[];
  data: number[][];
}

const KLineChart: React.FC<KLineChartProps> = ({ dates, data }) => {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstance = useRef<echarts.ECharts>();

  useEffect(() => {
    if (!chartRef.current) return;

    if (!chartInstance.current) {
      chartInstance.current = echarts.init(chartRef.current);
    }

    const option: echarts.EChartsOption = {
      title: { text: "时序 K 线图", left: 0 },
      tooltip: { trigger: "axis", axisPointer: { type: "cross" } },
      xAxis: {
        type: "category",
        data: dates,
        boundaryGap: true,
      },
      yAxis: {
        scale: true,
        splitArea: { show: true },
      },
      dataZoom: [
        { type: "inside", start: 50, end: 100 },
        { show: true, type: "slider", top: "90%", start: 50, end: 100 },
      ],
      series: [
        {
          name: "K线",
          type: "candlestick",
          data: data,
          itemStyle: {
            color: "#ec0000",
            color0: "#00da3c",
            borderColor: "#8A0000",
            borderColor0: "#008F28",
          },
        },
      ],
    };

    chartInstance.current.setOption(option);

    const handleResize = () => {
      chartInstance.current?.resize();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      chartInstance.current?.dispose();
    };
  }, [dates, data]);

  return <div ref={chartRef} style={{ width: "100%", height: "600px" }} />;
};

export default KLineChart;
