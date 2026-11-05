import { screen } from '@testing-library/react';
import { http, HttpResponse } from 'msw';
import { useState, type FormEvent } from 'react';
import { expect, it } from 'vitest';
import { apiGet } from '../lib/api';
import { API_BASE_URL } from '../lib/config';
import { healthResponseSchema } from '../lib/contract';
import { renderWithProviders } from './render';
import { server } from './msw/server';

// Harness sample only: a throwaway form that exercises the
// render -> user-event -> fetch -> MSW path. Not a product feature.
function HealthCheckForm() {
  const [result, setResult] = useState('');

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    try {
      const health = await apiGet('/health', healthResponseSchema);
      setResult(`API ${health.status}, database ${health.db}`);
    } catch {
      setResult('API unavailable');
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <button type="submit">Check API</button>
      <p role="status">{result}</p>
    </form>
  );
}

it('drives a form through the real fetch path against MSW', async () => {
  const { user } = renderWithProviders(<HealthCheckForm />);

  await user.click(screen.getByRole('button', { name: /check api/i }));

  expect(await screen.findByRole('status')).toHaveTextContent(
    'API ok, database connected',
  );
});

it('shows the failure path when the API errors', async () => {
  server.use(
    http.get(`${API_BASE_URL}/health`, () =>
      HttpResponse.json({ message: 'boom' }, { status: 500 }),
    ),
  );
  const { user } = renderWithProviders(<HealthCheckForm />);

  await user.click(screen.getByRole('button', { name: /check api/i }));

  expect(await screen.findByText('API unavailable')).toBeInTheDocument();
});
