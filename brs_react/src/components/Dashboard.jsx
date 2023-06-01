import React from 'react';
import styles from '../styles/Dashboard.module.css';
import { Navigate, useNavigate } from 'react-router-dom';
import AdminHeader from './AdminHeader';
const Dashboard = () => {
    const navigate = useNavigate();
    const adminLoggedIn = localStorage.getItem("adminLoggedIn");
    return (
        <>
            {adminLoggedIn ? <><AdminHeader />
                <div className={styles.dashboard_container}>
                    <div className={styles.insight_component}>
                        {/* Insight component content */}
                        {/* You can customize the content of the insight component */}
                    </div>
                    <div className={styles.row_container}>
                        <div className={styles.col}>
                            <div className={styles.card}
                                onClick={() => navigate("/customerControl")}>
                                Customer
                            </div>
                        </div>
                        <div className={styles.col}>
                            <div className={styles.card} onClick={() => navigate("/operatorControl")}>
                                Operator
                            </div>
                        </div>
                    </div>
                </div></> : <Navigate to={"/adminLogin"} />}
        </>
    );
};

export default Dashboard;
