import type { ReactNode } from 'react';

/**
 * Providers every integration test needs. The app has no router, theme, auth
 * or query providers yet; add them here (once) as they are introduced so all
 * tests pick them up.
 */
export function Providers({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
