import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess, loginFailed } from '../redux/actions/actionAuth';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [rememberMe, setRememberMe] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const isValidEmail = (email) => {
        const emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(email);
    };

    const isValidPassword = (password) => {
        return password.length >= 10; 
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isValidEmail(credentials.email)) {
            setErrorMessage("Adresse e-mail invalide");
            return;
        }
        if (!isValidPassword(credentials.password)) {
            setErrorMessage("Mot de passe invalide. Il doit contenir au moins 6 caractères.");
            return;
        }

        try {
            const response = await fetch("http://localhost:3001/api/v1/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credentials),
            });

            if (response.ok) {
                const data = await response.json();
                const token = data.body.token;

                dispatch(loginSuccess(token));
                sessionStorage.setItem("token", token);
                if (rememberMe) {
                    localStorage.setItem("token", token);
                }

                navigate('/profil');
            } else {
                setErrorMessage("Nom d'utilisateur ou mot de passe incorrect.");
                dispatch(loginFailed("Nom d'utilisateur ou mot de passe incorrect."));
            }
        } catch (error) {
            console.error("Erreur de connexion :", error);
            setErrorMessage("Une erreur est survenue. Veuillez réessayer.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={credentials.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="input-remember">
                <input 
                    type="checkbox" 
                    id="remember-me" 
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                />
                <label htmlFor="remember-me">Remember me</label>
            </div>
            <button type="submit" className="sign-in-button">Sign In</button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
    );
};

export default LoginForm;
