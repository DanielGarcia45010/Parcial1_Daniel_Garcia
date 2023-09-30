import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; // Importa useTranslation
import { useNavigate } from 'react-router-dom';

function Login() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!isValidEmail(email)) {
      setError(t('invalidEmail')); 
      return;
    }

    if (password.length < 6) {
      setError(t('shortPassword'));
      return;
    }

    setTimeout(() => {
      navigate('/home');
    }, 2000);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="login-container">
      <h1>{t('login')}</h1> 
      {error && <p className="error-message">{error}</p>}
      <input
        type="text"
        placeholder={t('email')} 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder={t('password')} 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>{t('login')}</button> 
    </div>
  );
}

export default Login;
