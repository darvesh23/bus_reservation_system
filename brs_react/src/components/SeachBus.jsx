import { FaRegBuilding, } from 'react-icons/fa'
import { AiOutlineCalendar } from 'react-icons/ai'
import styles from "../styles/SearchBus.module.css"
import React, { useState } from 'react';
import BusList from "./BusList";
import CustomerService from "../services/CustomerService"


const SearchBus = () => {
    const [from, setfrom] = useState("")
    const [to, setTo] = useState("")
    const [date, setDate] = useState(new Date());

    const [buses, setBuses] = useState(null)
    const searchBusBySrcAndDst = (from, to, date) => {
        CustomerService.getBusBySrcDstDate(from, to, date).then((res => {
            setBuses(res.data)
        }))
    }
    const handleClick = () => {
        searchBusBySrcAndDst(from, to, date)
    }
    return (
        <>
            <div className={styles.search_bus}>
                <div className={styles.search_bus__form}>
                    <div className={styles.form_input}>
                        <FaRegBuilding style={{ color: "#272558" }} />
                        <input
                            className={styles.search_bus__input}
                            type="text"
                            placeholder="From"
                            name='src'
                            value={from}
                            onChange={(e) => setfrom(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.form_input}>
                        <FaRegBuilding style={{ color: "#272558" }} />
                        <input
                            className={styles.search_bus__input}
                            type="text"
                            placeholder="To"
                            name='dst'
                            value={to}
                            onChange={(e) => setTo(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.form_input}>
                        <AiOutlineCalendar style={{ color: "#272558" }} />
                        <input
                            className={`${styles.search_bus__input} ${styles.search_bus__input_date}`}
                            type="date"
                            name="date"
                            placeholder="Date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                        />
                    </div>


                    <button
                        onClick={handleClick}
                        className={styles.search_bus__button}
                    >Search</button>
                </div>
            </div>
            {buses &&
                <BusList buses={buses} date={date} />
            }
        </>

    );
};

export default SearchBus;

