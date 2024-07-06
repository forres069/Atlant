import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import InputBox from "./InputBox";
import SubmitButton from "../../components/SubmitButton"
import "../../css/auth-styles.css";

const Auth = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const response = await axios.post('http://127.0.0.1:8000/auth/users/', {
                email,
                username,
                password,
            });
            if (response.status === 201) {
                navigate('/confirm');
            } else {
                console.error('Ошибка при создании пользователя');
            }
        } catch (error) {
            if (error.response) {
                // Сервер ответил статусом, отличным от 2xx
                setError(error.response.data);
            } else if (error.request) {
                // Запрос был сделан, но ответа не было
                console.error('Запрос был сделан, но ответа не получено');
            } else {
                // Произошла ошибка при настройке запроса
                console.error('Ошибка при настройке запроса', error.message);
            }
        }
    };

    return (
        <div className="main">
            <div className="auth">
                <h1 className="title auth__title">Создание аккаунта</h1>
                <form className="auth__form" onSubmit={handleSubmit}>
                    <span className="auth__errors">
                        {error && <div className="auth__error">{JSON.stringify(error)}</div>}
                    </span>
                    <div className="auth__input">
                        <label className="auth__label">Email</label>
                        <InputBox placeholder="Твой email.." type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="auth__input">
                        <label className="auth__label">Ник</label>
                        <InputBox placeholder="Придумай креативный ник.." type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="auth__input">
                        <label className="auth__label">Пароль</label>
                        <InputBox type="password" placeholder="Придумай пароль.." value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <SubmitButton className="auth__button" type="submit" text="Создать"/>
                </form>
            </div>
        </div>
    );
};

export default Auth;
