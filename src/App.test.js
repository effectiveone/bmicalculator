import { render, screen, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import App from './App';

test('check name of calculator', () => {
  render(<App />);
  const h1tag = screen.getByText(/BMI Calculator/i);
  expect(h1tag).toBeInTheDocument();
});
test('check name of button', () => {
  render(<App />);
  const linkElement = screen.getByText(/calculate/i);
  expect(linkElement).toBeInTheDocument();
});


test('calculation', () => {
  render(<App />);
 const calc = screen.getByTestId( "btn-calc");
 const weight = screen.getByTestId( "input-weight");
 const height = screen.getByTestId( "input-height");

 fireEvent.change(weight, {target: {value: '23'}})
 fireEvent.change(height, {target: {value: '180'}})
fireEvent.click(calc);
const calculation = screen.getByText(/7.1/i);
const info = screen.getByText(/Under Weight/i);

 expect(calculation).toBeInTheDocument();
 expect(info).toBeInTheDocument();


});

