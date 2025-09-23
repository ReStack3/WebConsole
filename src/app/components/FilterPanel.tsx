"use client";
import React, { useState } from "react";
import { Table, Dropdown, Checkbox, Button, Input, Space } from "antd";

interface FilterPanelProps {
    onSearch: (filters: string[], searchText: string) => void;
    filterOptions: string[];
}


const FilterPanel: React.FC<FilterPanelProps>=({ onSearch, filterOptions })=>{
    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
    const [searchText, setSearchText] = useState<string>("");
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
                    onClick={() => setDropdownVisible(false)}>
                        保存
                </Button>

            </div>


        </div>
    )

    return(
        <Space style={{ marginBottom: 16 }}>
            <Dropdown
                onOpenChange={setDropdownVisible}
                trigger={["click"]}
                visible={dropdownVisible}
                overlay={filterMenu}
            >
                <Button type={selectedFilters.length ? "primary" : "default"}>
                {selectedFilters.length ? `${selectedFilters.length} 已选` : "筛选类型"}
                </Button>
            </Dropdown>

            <Input
                placeholder="搜索"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                style={{ width: 200 }}
            />

            <Button type="primary" onClick={handleQuery}>
                    查询
            </Button>
        </Space>
    )
    
}