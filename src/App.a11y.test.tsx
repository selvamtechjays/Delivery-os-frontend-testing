import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
import App from './App';

it('has no detectable WCAG 2.1 AA violations', async () => {
  const { container } = render(<App />);

  const results = await axe(container, {
    runOnly: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'],
  });

  expect(results).toHaveNoViolations();
});
