import { healthResponseSchema, type HealthResponse } from '../../lib/contract';

/** Canonical valid /health payload, validated by the contract schema. Shared by MSW (unit/integration) and Playwright (e2e). */
export const healthFixture: HealthResponse = healthResponseSchema.parse({
  status: 'ok',
  db: 'connected',
});
