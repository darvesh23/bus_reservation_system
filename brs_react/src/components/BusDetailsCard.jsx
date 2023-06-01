import React from "react";
import { BsArrowDown } from 'react-icons/bs'
import { useNavigate } from "react-router-dom";
import styles from "../styles/BusDetailsCard.module.css";

const BusDetailsCard = ({ bus, date }) => {
    const navigate = useNavigate();
    function handleClick() {
        navigate("/bookTicket", { state: { bus, date } });
    }
    const arrivalDate = new Date(bus.artime);
    const depatureDate = new Date(bus.dptime)
    function getDateDifferenceInHours(date1, date2) {
        let date1Milliseconds = date1.getTime();
        let date2Milliseconds = date2.getTime();
        let differenceInMilliseconds = date2Milliseconds - date1Milliseconds;
        let differenceInHours = differenceInMilliseconds / (1000 * 60 * 60);
        differenceInHours = Math.round(differenceInHours * 100) / 100;
        return differenceInHours;
    }
    const duration = getDateDifferenceInHours(depatureDate, arrivalDate);

    return (

        <div className={styles.bus_details_card}>
            <div className={styles.bus_details_card_column}>
                <div className={`${styles.bus_details_card_row} ${styles.date}`}>{depatureDate.toDateString()}</div>
                <div className={`${styles.bus_details_card_row} ${styles.time}`}>{depatureDate.toLocaleTimeString()}</div>
                <div className={`${styles.bus_details_card_row} ${styles.duration}`}>
                    <BsArrowDown />
                    <div >{duration} Hours</div>
                </div>
                <div className={`${styles.bus_details_card_row} ${styles.time}`}>{arrivalDate.toLocaleTimeString()}</div>
                <div className={`${styles.bus_details_card_row} ${styles.date}`}>{arrivalDate.toDateString()}</div>
            </div>
            <div className={styles.bus_details_card_column}>
                <div className={`${styles.bus_details_card_row} ${styles.bus_title}`}>{bus.name}</div>
                <div className={`${styles.bus_details_card_row} ${styles.city}`}>{bus.src} - {bus.dst} </div>
            </div>
            <div className={`${styles.bus_details_card_column} ${styles.fare_col}`}>
                <div className={styles.bus_details_card_row}>₹ {bus.fare}</div>
                <div className={styles.bus_details_card_row}>{bus.seat} seats available</div>
            </div>
            <div className={`${styles.bus_details_card_column} ${styles.book_button}`}>
                <button onClick={handleClick} className={styles.bus_details_card_button}>Book Now</button>
            </div>
        </div>
    );
};

export default BusDetailsCard;
