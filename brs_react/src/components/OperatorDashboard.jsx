import React from 'react';
import styles from '../styles/Operatordashboard.module.css';
import { useLocation, useNavigate, Navigate } from 'react-router-dom';
import OperatorHeader from './OperatorHeader';

const OperatorDashboard = () => {
    const navigate = useNavigate()
    const operator = JSON.parse(localStorage.getItem('operator'))
    return (
        <>
            {operator ? <><OperatorHeader />
                <div className={styles.operatorDashboard}>
                    <h1>Operator Dashboard</h1>
                    <div className={styles.cardContainer}>
                        <div className={styles.card} onClick={() => navigate('/viewBooking', { state: { operator } })}>
                            <h2>View Bookings</h2>
                            {/* Add any additional content for the View Bookings card */}
                        </div>
                        <div className={styles.card} onClick={() => navigate('/addBus', { state: { operator } })}>
                            <h2>Add Bus</h2>
                            {/* Add any additional content for the Manage Buses card */}
                        </div>
                    </div>
                </div></> : <Navigate to='/operatorLogin' />}
        </>
    );
};

export default OperatorDashboard;
