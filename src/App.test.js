import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';
 
test('renders title correctly', () => {
  render(<App />);
  const titleElement = screen.getByText(/React Demo/i);
  expect(titleElement).toBeInTheDocument();
});
