import React, { useState } from 'react';
import { auth } from '../Auth/supabaseConfig';
import { Link } from 'react-router-dom';
import './Login.css';
import PassImg from '../../assets/img/show.png'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [showError, setShowError] = useState(false);
    const [resetMessage, setResetMessage] = useState('');
    const [showResetLink, setShowResetLink] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setShowError(false);

        const { error } = await auth.signInWithPassword({ email, password });
        if (error) {
            // Проверка типа ошибки и замена сообщения на свое собственное
            if (error.message.includes('Invalid login credentials')) {
                setError('Неверные учетные данные. Пожалуйста, проверьте свой email и пароль.');
            } else if (error.message.includes('User not found')) {
                setError('Пользователь не найден. Пожалуйста, зарегистрируйтесь.');
            } else if (error.message.includes('Invalid password')) {
                setError('Неверный пароль. Пожалуйста, попробуйте снова.');
            } else {
                setError(error.message);
            }
            setShowError(true);
            setShowResetLink(true); // Показать ссылку для восстановления пароля после неправильного ввода
        } else {
            // Перенаправление на главную страницу после успешного входа
            window.location.href = '/';
        }
    };

    const handlePasswordReset = async () => {
        setResetMessage('');
        if (!email) {
            setResetMessage('Введите почту в поле.');
            return;
        }
        const { error } = await auth.resetPasswordForEmail(email);
        if (error) {
            setResetMessage('Ошибка при отправке письма для сброса пароля.');
        } else {
            setResetMessage('Письмо для сброса пароля отправлено. Пожалуйста, проверьте свою почту.');
        }
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const closeError = () => {
        setShowError(false);
    };

    return (
        <div className="cont">
            <div className="page-log">
            <div className="login-page">
                <h1>Вход</h1>
                <div className="login">
                    <form onSubmit={handleLogin}>
                        <input
                            className='input'
                            type="email"
                            name="loginEmail"
                            id="loginEmail"
                            placeholder='E-mail'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <div className="password-container">
                            <input
                                className='input'
                                type={showPassword ? 'text' : 'password'}
                                name="loginPass"
                                id="loginPass"
                                placeholder='Пароль'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button type="button" className="toggle-password" onClick={toggleShowPassword}>
                                <img src={showPassword ? PassImg : PassImg} alt="Toggle Password Visibility" />
                            </button>
                        </div>
                        <div className="loginBtn"><button type="submit">Войти</button></div>
                        <p>Нет аккаунта? <Link className='blueLink' to='/registration'>Зарегистрируйтесь!</Link></p>
                    </form>
                </div>
            </div>
            {showError && (
                <div className="error-popup">
                    <p>{error}</p>
                    <button className="close-error" onClick={closeError}>×</button>
                </div>
            )}
            {resetMessage && (
                <div className="reset-popup">
                    <p>{resetMessage}</p>
                    <button className="close-reset" onClick={() => setResetMessage('')}>×</button>
                </div>
            )}
        </div>
        </div>
    );
}

export default Login;