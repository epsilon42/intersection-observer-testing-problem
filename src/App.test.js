import {render, screen} from '@testing-library/react';
import App from './App';
import 'intersection-observer';

test('renders first 3 cards on initial render', () => {
  // PASSES
  render(<App />);
  expect(screen.getAllByText('card ', {exact: false})).toHaveLength(3);
});

test('renders all 12 cards when user has scrolled through to bottom of page', () => {
  render(<App />);
  // How to mock/trigger IntersectionObserver several times?
  expect(screen.getAllByText('card ', {exact: false})).toHaveLength(12);
});
