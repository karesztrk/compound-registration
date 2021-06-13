import { render, screen } from '@testing-library/react';
import Sidebar from './Sidebar';

describe('Sidebar', () => {
  it('renders all menu items', () => {
    render(<Sidebar />);
    console.log(screen.debug());
    expect(screen.getByRole('link', { name: 'Chemistry' })).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'Chemical Structures' }),
    ).toBeInTheDocument();
  });
});
