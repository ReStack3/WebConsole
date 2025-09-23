"use client"; // 必须放在最顶部

import React, { useState } from "react";
import { Table, Dropdown, Checkbox, Button, Input, Space } from "antd";

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
      </div>
    </div>
  );
};

export default Home;
