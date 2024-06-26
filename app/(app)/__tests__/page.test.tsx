import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import DashboardPage from '../page';

describe('Home', () => {
  it('renders a heading', () => {
    const { getByRole } = render(<DashboardPage />);

    const heading = getByRole('heading', { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
