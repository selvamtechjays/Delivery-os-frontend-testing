import { expect, it } from 'vitest';
import {
  buildChecklistItem,
  buildList,
  buildTask,
  buildUser,
  resetFactorySeed,
} from './index';

it('is deterministic for a given seed', () => {
  resetFactorySeed();
  const first = [buildUser(), buildList(), buildTask(), buildChecklistItem()];
  resetFactorySeed();
  const second = [buildUser(), buildList(), buildTask(), buildChecklistItem()];

  expect(second).toEqual(first);
});

it('produces distinct entities between calls', () => {
  expect(buildTask().id).not.toBe(buildTask().id);
});

it('applies overrides', () => {
  const task = buildTask({ title: 'Pay rent', priority: 'high' });

  expect(task).toMatchObject({ title: 'Pay rent', priority: 'high' });
});
