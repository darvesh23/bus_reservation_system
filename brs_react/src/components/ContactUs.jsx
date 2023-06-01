import React from 'react';
import styles from '../styles/ContactUs.module.css';
import indoreMap from '../img/a-google-map-showing-the-location-of-indore-city-madhya-pradesh.jpg';

const ContactUs = () => {
    return (
        <div className={styles.container}>
            <div className={styles.mapContainer}>
                <img src={indoreMap} alt="Indore Map" className={styles.map} />
            </div>
            <div className={styles.infoContainer}>
                <h1 className={styles.title}>Contact Us</h1>
                <p className={styles.text}>Email: contact@busmanagement.com</p>
                <p className={styles.text}>Phone: +91 1234567890</p>
            </div>
        </div>
    );
};

export default ContactUs;
