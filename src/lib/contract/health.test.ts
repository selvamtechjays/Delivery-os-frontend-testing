import { http, HttpResponse } from 'msw';
import { expect, it } from 'vitest';
import { server } from '../../test/msw/server';
import { apiGet } from '../api';
import { API_BASE_URL } from '../config';
import { healthResponseSchema } from './index';

it('parses the default MSW /health response (mock and validator agree)', async () => {
  await expect(apiGet('/health', healthResponseSchema)).resolves.toEqual({
    status: 'ok',
    db: 'connected',
  });
});

it('rejects an off-shape response at the API boundary', async () => {
  server.use(
    http.get(`${API_BASE_URL}/health`, () =>
      HttpResponse.json({ status: 'degraded' }),
    ),
  );

  await expect(apiGet('/health', healthResponseSchema)).rejects.toThrow();
});

it('rejects a non-2xx response before parsing', async () => {
  server.use(
    http.get(`${API_BASE_URL}/health`, () =>
      HttpResponse.json({}, { status: 503 }),
    ),
  );

  await expect(apiGet('/health', healthResponseSchema)).rejects.toThrow(
    /status 503/,
  );
});
