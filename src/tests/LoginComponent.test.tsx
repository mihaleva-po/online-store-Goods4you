import {render, screen, fireEvent} from '@testing-library/react';
import {describe, it, expect, vi} from 'vitest';
import Login from '../components/login/login.tsx';
import {useLoginUserMutation} from '../redux/services/loginUser.ts';
import {BrowserRouter as Router} from 'react-router-dom';
import '@testing-library/jest-dom';


vi.mock('../context/AuthContext.tsx', () => ({
    useAuth: () => ({
        setUser: vi.fn(),
    }),
}));


vi.mock('../redux/services/loginUser.ts', () => ({
    useLoginUserMutation: vi.fn(() => [
        vi.fn().mockResolvedValue({token: 'fake-token', id: 1, firstName: 'John', lastName: 'Doe'}),
        {isLoading: false, error: null}
    ]),
}));

describe('Login Component', () => {
    it('Отображение формы авторизации и обработка ввода данных', () => {
        render(
            <Router>
                <Login/>
            </Router>
        );

        const loginInput = screen.getByPlaceholderText('Login') as HTMLInputElement;
        const passwordInput = screen.getByPlaceholderText('Password') as HTMLInputElement;

        fireEvent.change(loginInput, {target: {value: 'testuser'}});
        fireEvent.change(passwordInput, {target: {value: 'password123'}});

        expect(loginInput.value).toBe('testuser');
        expect(passwordInput.value).toBe('password123');
    });


    it('обработка ошибок при входе', async () => {
        vi.mocked(useLoginUserMutation).mockReturnValue([
            vi.fn().mockRejectedValue(new Error('Login failed')),
            {isLoading: false, error: 'Incorrect username or password'}
        ]);

        render(
            <Router>
                <Login/>
            </Router>
        );

        fireEvent.change(screen.getByPlaceholderText('Login'), {target: {value: 'testuser'}});
        fireEvent.change(screen.getByPlaceholderText('Password'), {target: {value: 'password123'}});

        fireEvent.click(screen.getByRole('button', {name: /sign in/i}));

        expect(await screen.findByText('Incorrect username or password')).toBeInTheDocument();
    });
});
