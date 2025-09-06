import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CalculatorApp from '../src/CalculatorApp.jsx';

test('basic addition 2 + 3 = 5', async () => {
  render(<CalculatorApp />);
  userEvent.click(screen.getByTestId('btn-2'));
  userEvent.click(screen.getByTestId('btn-+'));
  userEvent.click(screen.getByTestId('btn-3'));
  userEvent.click(screen.getByTestId('btn-equals'));
  expect(screen.getByTestId('display').textContent.includes('5')).toBe(true);
});
