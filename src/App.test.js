import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe('the app screen', () => {
  it('renders my name', () => {
    render(<App />);
    const linkElement = screen.getByText(/emily/i);
    expect(linkElement).toBeInTheDocument();
  })
})