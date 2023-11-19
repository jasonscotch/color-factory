import { render, fireEvent } from '@testing-library/react';
import AddColorForm from './AddColorForm';
import { MemoryRouter } from 'react-router-dom';

it('renders AddColorForm correctly', () => {
  render(
    <MemoryRouter>
        <AddColorForm />
    </MemoryRouter>
    );
});

it("matches snapshot", () => {
    const { asFragment } = render(
        <MemoryRouter>
            <AddColorForm />
        </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});

it('adds a new color on form submission', () => {
    const mockAddColor = jest.fn();

    const {getByLabelText, queryByText } = render(
        <MemoryRouter>
            <AddColorForm addColor={mockAddColor} />
        </MemoryRouter>
    );

    const input1 = getByLabelText('Color Name:');
    const input2 = getByLabelText('Color:');
    const submitButton = queryByText('Submit');

    fireEvent.change(input1, { target: { value: 'red' } });
    fireEvent.change(input2, { target: { value: '#ff0000' } });
    fireEvent.click(submitButton);

    expect(mockAddColor).toHaveBeenCalledWith({
        red: '#ff0000'
    });

});
