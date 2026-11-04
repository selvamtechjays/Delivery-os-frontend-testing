import { afterEach, expect, it, vi } from 'vitest';
import { apiGet } from './api';

afterEach(() => {
  vi.unstubAllGlobals();
});

it('requests the path against the configured base URL', async () => {
  const fetchMock = vi.fn().mockResolvedValue({
    ok: true,
    json: () => Promise.resolve({ status: 'ok' }),
  });
  vi.stubGlobal('fetch', fetchMock);

  await expect(apiGet<{ status: string }>('/health')).resolves.toEqual({
    status: 'ok',
  });
  expect(fetchMock).toHaveBeenCalledWith(expect.stringMatching(/\/health$/));
});
