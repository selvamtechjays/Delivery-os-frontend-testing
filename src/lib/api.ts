import type { ZodType } from 'zod';
import { API_BASE_URL } from './config';

/**
 * Thin typed wrapper over fetch; feature code builds on this.
 * Pass a Zod schema to validate the response at the API boundary.
 */
export async function apiGet<T>(path: string): Promise<T>;
export async function apiGet<S extends ZodType>(
  path: string,
  schema: S,
): Promise<S['_output']>;
export async function apiGet(path: string, schema?: ZodType): Promise<unknown> {
  const response = await fetch(`${API_BASE_URL}${path}`);
  if (!response.ok) {
    throw new Error(`GET ${path} failed with status ${response.status}`);
  }
  const body: unknown = await response.json();
  return schema ? schema.parse(body) : body;
}
