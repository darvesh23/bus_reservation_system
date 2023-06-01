import React from "react";
import BookingCard from "./BookingCard";
import styles from "../styles/BookingList.module.css"

const BookingList = ({ bookings }) => {
    return (
        <div className={styles.booking_list}>

            {bookings.map((booking, index) => (
                <>
                    {booking.bid &&
                        <BookingCard
                            key={index}
                            booking={booking}
                        />}
                </>
            ))}
        </div>
    );
};


export default BookingList;
