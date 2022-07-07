import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './main-page/index';

test('renders learn react link', () => {
  debugger;
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
