// src/api/whales.ts
import { request } from './client';
import { WhaleTransactionCore } from '@/types/whaletable';

const whalesFlowMonite = async (): Promise<WhaleTransactionCore[]> => {
  return request<WhaleTransactionCore[]>('/api/whalesflow'); // 浏览器可以使用相对路径
};

export default whalesFlowMonite;
