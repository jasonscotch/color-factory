import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ColorList from './ColorList';

const colors = {
    magenta: '#ff00ff',
    cyan: '#00ffff',
    yellow: '#ffff00',
  };

  it('renders ColorList', () => {
    render(
        <MemoryRouter>
            <ColorList colors={colors} />
        </MemoryRouter>
    );
  });

  it('matches snapshot', () => {
    const { asFragment } = render(
        <MemoryRouter>
            <ColorList colors={colors} />
        </MemoryRouter>
    )
  });

  it('renders correctly', () => {
    render(
        <MemoryRouter>
            <ColorList colors={colors} />
        </MemoryRouter>
    );

    expect(screen.getByText('Welcome to the color factory.')).toBeInTheDocument();
    
    expect(screen.getByText('magenta')).toBeInTheDocument();
    expect(screen.getByText('cyan')).toBeInTheDocument();
    expect(screen.getByText('yellow')).toBeInTheDocument();
    

  });

 


