import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('increments counter on button click', () => {
  render(<Counter />);
  
  const button = screen.getByRole('button');
  
  fireEvent.click(button);
  
  expect(screen.getByText(/1/i)).toBeInTheDocument(); 
});