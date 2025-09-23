import { rest } from 'msw';
import { TransactionDirection, TransactionType } from '@/types/whaletable';

export const handlers = [
  rest.get('/api/whalesflow', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          time: '2025-09-03 12:00:00',
          address: '0x123abc',
          type: TransactionType.Swap,
          tokenIn: 'ETH',
          tokenOut: 'USDT',
          amountIn: 10,
          direction: TransactionDirection.In,
          txHash: '0xaaa111',
          exchange: 'Uniswap',
          to: '0x33',
        },
        {
          time: '2025-09-03 12:05:00',
          address: '0x456def',
          type: TransactionType.Swap,
          tokenIn: 'USDT',
          tokenOut: 'ETH',
          amountIn: 5,
          direction: TransactionDirection.Out,
          txHash: '0xbbb222',
          exchange: 'SushiSwap',
          to: '0x111',
        },
      ])
    );
  }),
];
