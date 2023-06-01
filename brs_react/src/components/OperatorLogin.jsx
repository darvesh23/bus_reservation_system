import React, { useState } from 'react';
import operatorStyles from '../styles/OperatorLogin.module.css'; // Import the module CSS
import OperatorService from '../services/OperatorService';
import { useNavigate } from 'react-router-dom';

const OperatorLoginPage = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Perform login/signup logic with name and phone number data
        OperatorService.operatorLogin(name, phone).then(async res => {
            if (await res.data) {
                localStorage.clear()
                localStorage.setItem('operator', JSON.stringify(res.data))
                navigate("/welcomeOperator")
            } else {
                setErrorMessage("Invalid Username/Password")
            }
        })

        // Reset input fields
        setName('');
        setPhone('');
    };

    return (
        <div className={operatorStyles.container}>
            <h1>Login</h1>
            <form onSubmit={handleFormSubmit} className={operatorStyles.form}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={handleNameChange}
                    className={operatorStyles.input}
                />
                <label htmlFor="phone">Phone:</label>
                <input
                    type="text"
                    id="phone"
                    value={phone}
                    onChange={handlePhoneChange}
                    className={operatorStyles.input}
                />
                <button type="submit" className={operatorStyles.button}>
                    Login
                </button>
            </form>
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    );
};

export default OperatorLoginPage;
