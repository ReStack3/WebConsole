"use client"; // 必须放在最顶部

import { Table, Dropdown, Checkbox, Button, Input, Space } from "antd";
import React, { useState,useRef, useEffect } from "react";


import * as echarts from "echarts";


interface KLineChartProps {
  data: [string, number, number, number, number][];
}

const KLineChart: React.FC<KLineChartProps> = ({ data }) => {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstance = useRef<echarts.ECharts>();

  useEffect(() => {
    if (chartRef.current) {
      if (!chartInstance.current) {
        chartInstance.current = echarts.init(chartRef.current);
      }

      const option: echarts.EChartsOption = {
        tooltip: {
          trigger: "axis",
        },
        xAxis: {
          type: "time", // ✅ 时间轴
          axisLabel: {
            formatter: (value: number) =>
              new Date(value).toLocaleTimeString("zh-CN", { hour12: false }),
          },
        },
        yAxis: {
          scale: true,
        },
        series: [
          {
            type: "candlestick",
            data: data.map(([time, open, close, low, high]) => [
              time, open, close, low, high,
            ]),
          },
        ],
      };

      chartInstance.current.setOption(option);
    }

    return () => {
      chartInstance.current?.dispose();
      chartInstance.current = undefined;
    };
  }, [data]);

  return <div ref={chartRef} style={{ width: "100%", height: 400 }} />;
};



// -------------------- FilterPanel 组件 --------------------
interface FilterPanelProps {
  onSearch: (filters: string[], searchText: string) => void;
  filterOptions: string[];
}

const FilterPanel: React.FC<FilterPanelProps> = ({ onSearch, filterOptions }) => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [searchText, setSearchText] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleQuery = () => {
    onSearch(selectedFilters, searchText);
  };

  const filterMenu = (
    <div style={{ padding: 8, background: "#fff", borderRadius: 4 }}>
      <Checkbox.Group
        options={filterOptions}
        value={selectedFilters}
        onChange={setSelectedFilters}
      />
      <div style={{ marginTop: 8, textAlign: "right" }}>
        <Button
          type="primary"
          size="small"
          onClick={() => setDropdownVisible(false)}
        >
          保存
        </Button>
      </div>
    </div>
  );

  return (
    <Space style={{ marginBottom: 16 }}>
      <Dropdown
        overlay={filterMenu}
        trigger={["click"]}
        visible={dropdownVisible}
        onVisibleChange={setDropdownVisible}
      >
        <Button type={selectedFilters.length ? "primary" : "default"}>
          {selectedFilters.length ? `${selectedFilters.length} 已选` : "筛选类型"}
        </Button>
      </Dropdown>

      <Input
        placeholder="搜索..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        style={{ width: 200 }}
      />

      <Button type="primary" onClick={handleQuery}>
        查询
      </Button>
    </Space>
  );
};

// -------------------- TableDisplay 组件 --------------------
interface TableDisplayProps {
  columns: any[];
  data: any[];
}

const TableDisplay: React.FC<TableDisplayProps> = ({ columns, data }) => {
  return <Table columns={columns} dataSource={data} rowKey="id" />;
};

// -------------------- Home 页面 --------------------
const Home = () => {
  const [tableData, setTableData] = useState<any[]>([]);

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Type", dataIndex: "type", key: "type" },
    { title: "Score", dataIndex: "score", key: "score" },
  ];

  // 搜索函数，接收 FilterPanel 的选项和搜索文本
  const handleSearch = async (filters: string[], searchText: string) => {
    const params = { filters, search: searchText };
    // TODO: 替换为你的实际接口
    const response = await fetch("/api/query", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params),
    });
    const result = await response.json();
    setTableData(result.data);
  };

    const dates = [
    "2025-09-01","2025-09-02","2025-09-03","2025-09-04",
    "2025-09-05","2025-09-06","2025-09-07","2025-09-08"
  ];

    const data = [
      ["2025-09-23 12:00:01", 2320.26, 2320.26, 2287.3, 2362.94],
      ["2025-09-23 12:00:02", 2300, 2291.3, 2288.26, 2308.38],
      ["2025-09-23 12:00:03", 2295.35, 2346.5, 2295.35, 2346.92],
      ["2025-09-23 12:00:04", 2347.22, 2358.98, 2337.35, 2363.8],
      ["2025-09-23 12:00:05", 2360.75, 2382.48, 2347.89, 2383.76],
    ];




  return (
    <div className="flex">
      <div className="flex-1 ml-16 p-8">
        <h1 className="text-3xl font-bold">欢迎来到首页</h1>
        <p>这里是主内容区域</p>

        {/* 筛选组件 */}
        <FilterPanel
          onSearch={handleSearch}
          filterOptions={["Type1", "Type2", "Type3"]}
        />

        {/* 表格组件 */}
        <TableDisplay columns={columns} data={tableData} />

        <KLineChart data={data} />
      </div>
    </div>
  );
};

export default Home;
