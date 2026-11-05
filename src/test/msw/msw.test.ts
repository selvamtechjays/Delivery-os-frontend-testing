import { http, HttpResponse } from 'msw';
import { expect, it } from 'vitest';
import { API_BASE_URL } from '../../lib/config';
import { healthFixture } from './handlers';
import { server } from './server';

it('serves a default handler built from the contract schema', async () => {
  const response = await fetch(`${API_BASE_URL}/health`);

  expect(await response.json()).toEqual(healthFixture);
});

it('lets a test override a handler for one test only', async () => {
  server.use(
    http.get(`${API_BASE_URL}/health`, () =>
      HttpResponse.json({ status: 'ok', db: 'disconnected' }),
    ),
  );

  const response = await fetch(`${API_BASE_URL}/health`);

  expect(await response.json()).toEqual({ status: 'ok', db: 'disconnected' });
});

it('restores the default handler after the previous override', async () => {
  const response = await fetch(`${API_BASE_URL}/health`);

  expect(await response.json()).toEqual(healthFixture);
});

it('fails a request that has no handler instead of hitting the network', async () => {
  await expect(fetch(`${API_BASE_URL}/no-such-endpoint`)).rejects.toThrow();
});
