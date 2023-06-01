import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from "../styles/BookTicket.module.css" // Import the CSS file for styling
import CustomerService from '../services/CustomerService';

const BookTicket = () => {
    // State variables to store form data and success/error messages
    const location = useLocation();
    const busDetails = location.state.bus
    const date = location.state.date

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        seats: '',
    });
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // console.log(busDetails);
        // Perform validation on input fields
        if (!formData.name || !formData.phone || !formData.seats) {
            setErrorMessage('Please fill out all the fields.');
        } else {
            // Perform additional validation as needed

            // Create booking object
            const booking = {
                name: formData.name,
                phone: formData.phone,
                seats: formData.seats,
                busDetails,
                date
                // Additional booking information as needed
            };
            ;
            // Store booking object in the database or appropriate data structure
            // Update bus details in the database or appropriate data structure
            // Display success message
            setSuccessMessage('Booking successful!');
            console.log(booking);
            CustomerService.bookTicket(booking)

            // Reset form fields and messages after successful booking
            setFormData({
                name: '',
                phone: '',
                seats: '',
            });
            setErrorMessage('');
            setTimeout(() => {
                setSuccessMessage('');
            }, 2000); // Clear success message after 2 seconds
        }
    };

    return (
        <div className={styles.book_ticket_container}>
            <h2>Book Ticket</h2>
            <form className={styles.book_ticket_form} onSubmit={handleSubmit}>
                <input
                    className={styles.book_ticket_form_input}
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <input
                    className={styles.book_ticket_form_input}
                    type="tel"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
                <input
                    className={styles.book_ticket_form_input}
                    type="number"
                    placeholder="Number of Seats"
                    value={formData.seats}
                    onChange={(e) => setFormData({ ...formData, seats: e.target.value })}
                />
                <button className={styles.book_ticket_form_button} type="submit">Book</button>
            </form>
            {successMessage && <p className={styles.success_message}>{successMessage}</p>}
            {errorMessage && <p className={styles.error_message}>{errorMessage}</p>}
        </div>
    );
};

export default BookTicket;
