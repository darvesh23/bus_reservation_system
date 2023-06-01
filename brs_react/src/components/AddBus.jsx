import React, { useState } from 'react'; // import busService or any service for making API calls
import styles from '../styles/AddBus.module.css'; // import CSS module
import OperatorService from '../services/OperatorService'
import { Navigate } from 'react-router-dom'
import OperatorHeader from './OperatorHeader';

const AddBus = () => {
    // Define state variables for the form inputs
    const [name, setName] = useState('');
    const [src, setSrc] = useState('');
    const [dst, setDst] = useState('');
    const [artime, setartime] = useState('');
    const [dptime, setdptime] = useState('');
    const [fare, setFare] = useState('');
    const [seat, setSeat] = useState('');
    const operator = JSON.parse(localStorage.getItem('operator'))
    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Call busService or any other service to add bus with form data
        const busData = {
            name,
            src,
            dst,
            artime,
            dptime,
            fare,
            seat,
            operator: operator.id
        };
        try {
            // Make API call to add bus
            OperatorService.addBus(busData)
            // Reset form inputs
            setName('');
            setSrc('');
            setDst('');
            setartime('');
            setdptime('');
            setFare('');
            setSeat('');
            // Show success message or perform any other action after successful submission
            console.log('Bus added successfully!');
        } catch (error) {
            // Handle error, show error message, or perform any other action
            console.error('Error adding bus:', error);
        }
    };

    return (<>

        {operator ? <>
            <OperatorHeader />
            <div className={styles.container}>
                <h2>Add Bus</h2>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <label className={styles.label} htmlFor="name">Name:</label>
                    <input className={styles.input} type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                    <label className={styles.label} htmlFor="src">Source:</label>
                    <input className={styles.input} type="text" id="src" value={src} onChange={(e) => setSrc(e.target.value)} />
                    <label className={styles.label} htmlFor="dst">Destination:</label>
                    <input className={styles.input} type="text" id="dst" value={dst} onChange={(e) => setDst(e.target.value)} />
                    <label className={styles.label} htmlFor="artime">Arrival Date/Time:</label>
                    <input className={styles.input} type="datetime-local" id="artime" value={artime} onChange={(e) => setartime(e.target.value)} />
                    <label className={styles.label} htmlFor="dptime">Departure Date/Time:</label>
                    <input className={styles.input} type="datetime-local" id="dptime" value={dptime} onChange={(e) => setdptime(e.target.value)} />
                    <label className={styles.label} htmlFor="fare">Fare:</label>
                    <input className={styles.input} type="number" id="fare" value={fare} onChange={(e) => setFare(e.target.value)} />
                    <label className={styles.label} htmlFor="seat">Seat:</label>
                    <input className={styles.input} type="number" id="seat" value={seat} onChange={(e) => setSeat(e.target.value)} />
                    <button type="submit" className={styles.submitButton}>Add Bus</button>
                </form>
            </div></> : <Navigate to='/operatorLogin' />}

    </>
    );
};

export default AddBus;
