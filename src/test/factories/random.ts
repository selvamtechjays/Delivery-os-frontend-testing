import { faker } from '@faker-js/faker';

/** Fixed seed: factory output is identical on every run. */
export const FACTORY_SEED = 20261105;

export function resetFactorySeed(seed: number = FACTORY_SEED): void {
  faker.seed(seed);
}

resetFactorySeed();

export { faker };
