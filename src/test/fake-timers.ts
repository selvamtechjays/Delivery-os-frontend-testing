import { vi } from 'vitest';

/** Freeze time at a fixed instant; the global afterEach restores real timers. */
export function freezeTime(iso: string = '2026-01-12T08:00:00.000Z'): Date {
  vi.useFakeTimers();
  const now = new Date(iso);
  vi.setSystemTime(now);
  return now;
}
