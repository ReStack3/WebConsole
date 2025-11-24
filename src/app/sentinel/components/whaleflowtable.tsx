import { Table } from "antd";
import {WhaleTransactionTableProps } from '@/types/whaletable'


import React from "react";

export interface WhaleTransaction {
  time: string;
  address: string;
  type: string;
  tokenIn: string;
  tokenOut: string;
  amountIn: string;
  direction: string;
  txHash: string;
  exchange: string;
  to: string;
}

interface WhaleTransactionTableProps {
  data: WhaleTransaction[];
  title?: string; // 可选标题
}

export function WhaleTransactionTable({ data, title = "巨鲸交易记录" }: WhaleTransactionTableProps) {
  return (
    <div className="card h-100  border border-primary rounded">
      {/* 卡片头部：标题 + 按钮 */}
      <div className="card-header d-flex justify-content-between align-items-center">
        <h2 className="card-header-title">{title}</h2>
        <div>
          <button className="btn btn-sm btn-primary me-2">刷新</button>
          <button className="btn btn-sm btn-secondary">导出</button>
        </div>
      </div>

      {/* 卡片主体：表格 */}
      <div className="card-body overflow-auto" style={{ maxHeight: "30rem" }}>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>时间</th>
              <th>地址</th>
              <th>类型</th>
              <th>输入代币</th>
              <th>输出代币</th>
              <th>数量</th>
              <th>方向</th>
              <th>交易哈希</th>
              <th>交易所</th>
              <th>目的地</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.txHash}>
                <td>{item.time}</td>
                <td>{item.address}</td>
                <td>{item.type}</td>
                <td>{item.tokenIn}</td>
                <td>{item.tokenOut}</td>
                <td>{item.amountIn}</td>
                <td>{item.direction}</td>
                <td>{item.txHash}</td>
                <td>{item.exchange}</td>
                <td>{item.to}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 卡片底部：分页或链接 */}
      <div className="card-footer text-center">
        <button className="btn btn-sm btn-outline-primary me-2">上一页</button>
        <button className="btn btn-sm btn-outline-primary">下一页</button>
      </div>
    </div>
  );
}

