import { render, screen } from '@testing-library/react';
import { AllProviders } from '../../helpers/tests';
import App from '.';

it('renders expected texts', () => {
  render(
    <AllProviders>
      <App />
    </AllProviders>
  );
  const element1 = screen.getByText(/Dictionary App/i);
  const element2 = screen.getByText(/History/i);
  const element3 = screen.getByText(/Vocab/i);

  expect(element1).toBeInTheDocument();
  expect(element2).toBeInTheDocument();
  expect(element3).toBeInTheDocument();
});
