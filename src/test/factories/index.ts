import { faker } from './random';

export { FACTORY_SEED, resetFactorySeed } from './random';

export interface User {
  id: string;
  email: string;
  name: string;
}

export interface ChecklistItem {
  id: string;
  text: string;
  done: boolean;
}

export type Priority = 'low' | 'medium' | 'high';

export interface Task {
  id: string;
  listId: string;
  title: string;
  notes: string;
  priority: Priority;
  dueDate: string | null;
  checklist: ChecklistItem[];
}

export interface TaskList {
  id: string;
  ownerId: string;
  name: string;
}

// Shapes are harness placeholders until the TL publishes the entity contracts.
// Override any field per test: buildTask({ title: 'x' }).

export function buildUser(overrides: Partial<User> = {}): User {
  return {
    id: faker.string.uuid(),
    email: faker.internet.email().toLowerCase(),
    name: faker.person.fullName(),
    ...overrides,
  };
}

export function buildList(overrides: Partial<TaskList> = {}): TaskList {
  return {
    id: faker.string.uuid(),
    ownerId: faker.string.uuid(),
    name: faker.word.words(2),
    ...overrides,
  };
}

export function buildChecklistItem(
  overrides: Partial<ChecklistItem> = {},
): ChecklistItem {
  return {
    id: faker.string.uuid(),
    text: faker.lorem.sentence(),
    done: false,
    ...overrides,
  };
}

export function buildTask(overrides: Partial<Task> = {}): Task {
  return {
    id: faker.string.uuid(),
    listId: faker.string.uuid(),
    title: faker.lorem.words(3),
    notes: '',
    priority: 'medium',
    dueDate: null,
    checklist: [],
    ...overrides,
  };
}
