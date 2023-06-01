import React, { useState } from 'react';
import styles from '../styles/AdminLogin.module.css';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (username === 'admin' && password === 'password') {
            localStorage.clear()
            localStorage.setItem('adminLoggedIn', true)
            console.log('Login successful');
            // Redirect to admin dashboard
            navigate("/welcomeAdmin")
        } else {
            console.log('Login failed');
            // Show error message
        }
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Admin Login</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor="username" className={styles.label}>Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={handleUsernameChange}
                        className={styles.input}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="password" className={styles.label}>Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        className={styles.input}
                        required
                    />
                </div>
                <button type="submit" className={styles.button}>Login</button>
            </form>
        </div>
    );
};

export default AdminLogin;
