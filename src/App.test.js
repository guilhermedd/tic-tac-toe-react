import { render, screen } from '@testing-library/react';
import Board from './Board';
import 'bootstrap/dist/css/bootstrap.min.css';

test('renders learn react link', () => {
  render(<Board />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
