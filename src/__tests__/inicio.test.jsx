import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Inicio from '../data/inicio/Inicio';

describe('Inicio', () => {
  it('debe renderizar el titulo principal de la Tierra Firme', () => {
    render(<Inicio />);
    expect(screen.getByText('Bienvenidos a la Tierra Firme')).toBeInTheDocument();
  });
});