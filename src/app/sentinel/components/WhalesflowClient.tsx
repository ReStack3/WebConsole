// WhalesflowClient.tsx
'use client';
import { useEffect, useState } from 'react';
import whalesFlowMonite from '@/api/whales';
import { WhaleTransactionTable } from '../components/whaleflowtable';
import { WhaleTransactionCore } from '@/types/whaletable';

export default function WhalesflowClient() {
  const [data, setData] = useState<WhaleTransactionCore[]>([]);

  useEffect(() => {
    const startWorkerAndFetch = async () => {

      if (process.env.NEXT_PUBLIC_USE_MOCK === 'true' && typeof window !== 'undefined') {
        const { worker } = await import('@/mocks/browser'); // 动态导入
        await worker.start({ onUnhandledRequest: 'bypass' });
      }

      const res = await whalesFlowMonite();
      setData(res);
      
    };
    startWorkerAndFetch();
  }, []);

  return (
    
  <WhaleTransactionTable data={data} />
);
}
