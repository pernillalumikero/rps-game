import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('Should be hidden if NOT clicked', () => {
  render(<App />);
  const result = screen.queryByText("Du valde:")

  expect(result).not.toBeInTheDocument();
});

test('Should be shown if clicked', () => {


  render(<App />);
  const button = screen.getByRole("button", {name: "Sax"})
  fireEvent.click(button)
  const result = screen.getByText("Du valde:")


 
  expect(result).toBeInTheDocument();
});
