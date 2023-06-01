import React from 'react';
import { useNavigate } from "react-router-dom"

import styles from "../styles/TestFooter.module.css"

const Footer = () => {
    const navigate = useNavigate();
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__container}>
                <div className={styles.footer__row}>
                    <div className={styles.footer__column}>
                        <h3 onClick={() => navigate("/welcomeAdmin")} className={styles.footer__column_title}>Admin</h3>
                        {/* <p className={styles.footer__column_info}>option 1</p>
                        <p className={styles.footer__column_info}>option 2</p> */}
                    </div>
                    <div className={styles.footer__column}>
                        <h3 onClick={() => navigate("/welcomeOperator")} className={styles.footer__column_title}>Operator</h3>
                        {/* <p className={styles.footer__column_info}>option 1</p>
                        <p className={styles.footer__column_info}>option 2</p> */}
                    </div>
                </div>
                <div className={styles.address}>
                    © {new Date().getFullYear()} All rights reserved
                </div>
            </div>
        </footer>
    );
};

export default Footer;
