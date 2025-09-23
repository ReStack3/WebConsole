"use client";
import { Table} from "antd";
import type { ColumnType } from "antd/es/table";

interface TableDisplayProps<T> {
    columns: ColumnType<T>[];
    data: T[];
    rowKey?: Extract<keyof T, string | number>;
}

const TableDisplay = <T,>({ columns, data, rowKey }: TableDisplayProps<T>) => {
    return <Table columns={columns} dataSource={data} rowKey={rowKey as string} />;
};