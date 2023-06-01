import React from "react";
import styles from "../styles/OperatorHeader.module.css";
import { useNavigate } from "react-router-dom";

const OperatorHeader = () => {
    const operator = JSON.parse(localStorage.getItem('operator'))
    const navigate = useNavigate()
    const onLogout = () => {
        localStorage.removeItem('operator')
        navigate('/')
    }
    return (
        <div className={styles.header}>
            <div className={styles.left}>Hello, {operator.name}</div>
            <div className={styles.right}>
                <button className={styles.button} onClick={onLogout}>Logout</button>
            </div>
        </div>
    );
};

export default OperatorHeader;
