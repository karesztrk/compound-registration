import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { constants } from 'buffer';
import ExportToggle from './ExportToggle';

describe('ExportToggle', () => {
  it('renders all menu items', () => {
    const onChange = jest.fn();
    const value = true;
    const text = 'text';
    render(<ExportToggle onChange={onChange} value={value} text={text} />);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
  it('fires callback', () => {
    const onChange = jest.fn();
    const value = true;
    const text = 'text';
    const { container } = render(
      <ExportToggle onChange={onChange} value={value} text={text} />,
    );
    userEvent.click(container.querySelector('.toggle'));
    expect(onChange).toBeCalled();
  });
});
