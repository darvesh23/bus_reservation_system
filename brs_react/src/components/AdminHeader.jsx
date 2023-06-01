import React from 'react';
import styles from '../styles/OperatorHeader.module.css';
import { useNavigate } from 'react-router-dom';

const AdminHeader = () => {
    const navigate = useNavigate()
    const onLogout = () => {
        localStorage.clear()
        navigate('/')
    }
    return (
        <div className={styles.header}>
            <div className={styles.left}>
                Hello, Admin
            </div>
            <div className={styles.right}>
                <button className={styles.button} onClick={onLogout}>Logout</button>
            </div>
        </div>
    );
};

export default AdminHeader;
