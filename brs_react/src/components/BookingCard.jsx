import React, { useEffect, useState } from "react";
import styles from "../styles/BookingCard.module.css";
import CustomerService from "../services/CustomerService";

const BookingCard = ({ booking }) => {
    const [bus, setBus] = useState(null);
    const [customer, setCustomer] = useState(null)
    useEffect(() => {
        CustomerService.getBusById(booking.bid).then(res => setBus(res.data))
        CustomerService.getCustomerById(booking.cId).then((res) => {
            console.log("in useeffect:" + res.data);
            setCustomer(res.data)
        })
    }, [booking.bid, booking.cId])

    const handleClick = () => {
        console.log(booking);
        CustomerService.cancelTicket(booking.bid, booking.cId).then((res) => {
            console.log(res)
        })
    }
    return (
        <div className={styles.ticket}>

            {(bus && customer) &&
                <div className={styles.booking_card}>
                    <div className={styles.booking_card_column}>
                        <p className={styles.booking_card_name}>{customer.name}</p>
                        <p className={styles.booking_card_name}>{customer.phone}</p>
                    </div>
                    <div className={styles.booking_card_column}>
                        <p className={styles.booking_card_name}>{bus.name}</p>
                        <div className={styles.bookingcard_row}>
                            <div className={styles.booking_card_departure_details}>
                                <p>{new Date(bus.dptime).toDateString()}</p>
                                <p>{new Date(bus.dptime).toLocaleTimeString()}</p>
                            </div>
                            <div className={styles.booking_card_arrival_details}>
                                <p>{new Date(bus.artime).toDateString()}</p>
                                <p>{new Date(bus.artime).toLocaleTimeString()}</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.booking_card_column}>
                        <p className={styles.booking_card_seats}>{booking.seat}</p>
                        <p className={styles.booking_card_total_fare}>Total Fare:{booking.seat * bus.fare}</p>
                    </div>
                    <div className={styles.booking_card_column}>
                        <button className={styles.booking_card_cancel_button} onClick={handleClick}>Cancel</button>
                    </div>
                </div>}
        </div>
    );
};

export default BookingCard;
