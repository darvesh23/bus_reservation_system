import React, { useState } from "react";
import styles from "../styles/MyBooking.module.css"; // Import external CSS file for styling
import CustomerService from "../services/CustomerService";
import BookingList from "./BookingList";

const MyBookings = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [bookings, setBookings] = useState(null)

    const handleSearch = async () => {
        await CustomerService.viewMyBooking(name, phone).then(async (res) => {
            // console.log(res.data);
            setBookings(res.data)
        })
    };

    return (
        <>
            <div className={styles.my_bookings_container}>
                <h2 className={styles.my_bookings_heading} >My Booking</h2>
                <div className={styles.my_bookings_input_container}>
                    <input
                        className={styles.my_bookings_input_container_input}
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        className={styles.my_bookings_input_container_input}
                        type="text"
                        placeholder="Phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <button className={styles.my_bookings_input_container_button} onClick={handleSearch}>Search</button>
                </div>
            </div>
            {bookings &&
                <BookingList bookings={bookings} />
            }

        </>
    );
};

export default MyBookings;
