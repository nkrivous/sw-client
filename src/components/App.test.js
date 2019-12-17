import App from './App';
import React from 'react';
import { render } from '@testing-library/react';

it('renders application heading', () => {
  const { getByText } = render(<App />);

  expect(getByText('Star Wars Client')).toBeInTheDocument();
});
