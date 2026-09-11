import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Foro from '../data/foro/Foro';

describe('Foro', () => {
  it('debe mostrar el mensaje de bienvenida al completar el registro', () => {
    // 1. ARRANGE
    render(<Foro />);

    // 2. ACT: Llenar los campos y enviar
    fireEvent.change(screen.getByPlaceholderText('Nombre completo o Apodo'), { target: { value: 'Carlos' } });
    fireEvent.change(screen.getByPlaceholderText('Correo electrónico'), { target: { value: 'carlos@mail.com' } });
    fireEvent.change(screen.getByPlaceholderText('Contraseña'), { target: { value: '123' } });
    
    fireEvent.click(screen.getByRole('button', { name: /registrarme/i }));

    // 3. ASSERT: Verificar que aparece el foro
    expect(screen.getByText('¡Bienvenido/a a la comunidad, Carlos!')).toBeInTheDocument();
  });
});