import { Table } from "antd";

export enum TransactionType {
  Transfer = "Transfer",
  Swap = "Swap",
  Deposit = "Deposit",
  Withdraw = "Withdraw",
  ContractCall = "Contract Call",
}

export enum TransactionDirection {
  In = "in",
  Out = "out",
  Swap = "swap",
}


/** 核心交易信息表 */
export interface WhaleTransactionCore {
  /** 交易时间（区块时间或 UTC） */
  time: string;
  /** 巨鲸地址（可跳转 Etherscan） */
  address: string;
  /** 行为类型：Transfer / Swap / Deposit / Withdraw / Contract Call */
  type: TransactionType;
  /** 输入代币 */
  tokenIn: string;
  /** 输出代币 */
  tokenOut?: string;
  /** 代币数量（原始数量） */
  amountIn: number;
  /** 输出代币数量（如果有） */
  amountOut?: number;
  /** 交易方向：入金 / 出金 / 兑换 */
  direction: TransactionDirection;
  /** 交易哈希（可跳转 Etherscan） */
  txHash: string;
  /** 所属 DEX 或 CEX（普通转账可为空） */
  exchange?: string;
  /** 接收方地址（普通转账或转给其他地址时使用） */
  to?: string;
}


/** 新项目标识表（可单独展示） */
export interface WhaleProjectInfo {
  /** 合约类型：普通地址 / 已知合约 / 新部署合约 */
  contractType: 'EOA' | 'KnownContract' | 'NewContract';
  /** 合约年龄（部署区块或首次交易时间，可用于判断新项目） */
  contractAge?: number; // 天数或区块高度
  /** 是否为新项目 */
  isNewProject: boolean;
  /** 关联交易哈希，方便前端匹配 */
  txHash: string;
}

// 从后端获取的以太坊巨鲸地址信息
export interface WhaleAddress {
  /** 巨鲸地址 */
  address: string;

  /** 首次发现时间（ISO 格式字符串或 UTC 时间戳） */
  firstSeen: string;

  /** 当前余额，单位可以是 ETH 或 Wei，根据后端返回决定 */
  balance: string;

  /** 交易次数 */
  txCount: number;

  /** 备注或标签，例如“交易所地址”、“DeFi 协议”等，可选 */
  label?: string;

  /** 最近一次交易时间 */
  lastTxTime?: string;
}

export interface WhaleTransactionTableProps {
  data: WhaleTransactionCore[];
}

export interface WhaleProjectInfoProps{
   data:WhaleProjectInfo[]
}

export interface WhaleAddressProps{
  data:WhaleProjectInfo[]
}