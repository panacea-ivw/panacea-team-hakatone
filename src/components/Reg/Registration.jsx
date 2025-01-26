import React, { useState } from 'react';
import { auth } from '../Auth/supabaseConfig';
import { Link, useNavigate } from 'react-router-dom';
import PassImg from '../../assets/img/show.png';
import './Registration.css';

function Registration() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [showError, setShowError] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setError('');
        setShowError(false);

        const { error } = await auth.signUp({ email, password });
        if (error) {
            setError(error.message);
            setShowError(true);
        } else {
            navigate('/complete-registration');
        }
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const closeError = () => {
        setShowError(false);
    };

    return (
        <>
            <div className="cont">
            <div className="reg-page">
            <div className="page">
                <div className="sign-page">
                    <h1>Регистрация</h1>
                    <form onSubmit={handleRegister}>
                        <input
                            className='input'
                            type="email"
                            name="Email"
                            id="Email"
                            placeholder='E-mail'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <div className="password-container">
                            <input
                                className='input'
                                type={showPassword ? 'text' : 'password'}
                                name="pass"
                                id="pass"
                                placeholder='Пароль'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button type="button" className="toggle-password" onClick={toggleShowPassword}>
                                <img src={showPassword ? PassImg : PassImg} alt="Toggle Password Visibility" />
                            </button>
                        </div>
                        <div className="signUpBtn"><button type="submit">Зарегистрироваться</button></div>
                        <p>Уже есть аккаунт? <Link className='blueLink' to='/login'>Войдите!</Link></p>
                    </form>
                </div>
            </div>
            {showError && (
                <div className="error-popup">
                    <p>{error}</p>
                    <button className="close-error" onClick={closeError}>×</button>
                </div>
            )}
            </div>
            </div>
        </>
    );
}

export default Registration;