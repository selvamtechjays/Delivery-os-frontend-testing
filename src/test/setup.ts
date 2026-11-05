import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterAll, afterEach, beforeAll, expect, vi } from 'vitest';
import * as axeMatchers from 'vitest-axe/matchers';
import { server } from './msw/server';

expect.extend(axeMatchers);

// Any request without a handler fails the test (no accidental real network).
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

// Single global reset: do not add per-file resets.
afterEach(() => {
  cleanup();
  server.resetHandlers();
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
  vi.useRealTimers();
  localStorage.clear();
  sessionStorage.clear();
  document.cookie.split(';').forEach((cookie) => {
    const name = cookie.split('=')[0]?.trim();
    if (name) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    }
  });
});

afterAll(() => server.close());
