import { z } from 'zod';

/** Response of `GET /health` (mirrors the backend contract, phase A). */
export const healthResponseSchema = z.object({
  status: z.literal('ok'),
  db: z.enum(['connected', 'disconnected']),
});

export type HealthResponse = z.infer<typeof healthResponseSchema>;
