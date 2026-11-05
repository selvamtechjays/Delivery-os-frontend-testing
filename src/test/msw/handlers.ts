import { http, HttpResponse } from 'msw';
import { API_BASE_URL } from '../../lib/config';
import { healthFixture } from '../fixtures/health';

export { healthFixture };

/** Default handlers, built from the contract-validated fixtures. Add one per endpoint. */
export const handlers = [
  http.get(`${API_BASE_URL}/health`, () => HttpResponse.json(healthFixture)),
];
