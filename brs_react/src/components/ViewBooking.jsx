import React, { useEffect, useState } from 'react';
import styles from '../styles/ViewBooking.module.css';
import BookingCard from './BookingCard';
import OperatorService from '../services/OperatorService'
import { Navigate } from 'react-router-dom'
import OperatorHeader from './OperatorHeader';

const ViewBooking = ({ id, onEdit, onDelete }) => {
    const [bookings, setBookings] = useState([])
    const operator = JSON.parse(localStorage.getItem('operator'))
    useEffect(() => {
        OperatorService.getBookingListByOperator(operator.id).then((res) => {
            console.log(res.data);
            setBookings(res.data)
        })
    }, [])
    return (
        <>
            {operator ? <>
                <OperatorHeader />
                <div className={styles.bookingList}>
                    {bookings.map((booking, index) => (
                        <BookingCard booking={booking} key={index} />
                    ))}
                </div></> : <Navigate to='/operatorLogin' />}
        </>
    );
};

export default ViewBooking;
