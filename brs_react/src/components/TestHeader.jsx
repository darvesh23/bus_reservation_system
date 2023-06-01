import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from "../styles/TestHeader.module.css"

const Header = () => {
    const navigate = useNavigate()
    return (
        <header className={styles.header}>
            <div className={styles.header__logo}>
                {/* <img src={logo} alt="Logo" className="header__logo-img" /> */}
                <h1 className={styles.header__title} onClick={() => navigate("/")}>Quick Bus</h1>
            </div>
            <nav className={styles.header__nav}>
                <ul className={styles.header__nav_list}>

                    <li className={styles.header__nav_item}>
                        <Link to="/myBooking" className={styles.header__nav_link}>
                            My Booking
                        </Link>
                    </li>
                    <li className={styles.header__nav_item}>
                        <Link to="/contactUs" className={styles.header__nav_link}>
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};


export default Header;
