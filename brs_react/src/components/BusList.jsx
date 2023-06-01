// BusList component
import React from 'react';
import BusDetailsCard from './BusDetailsCard';
import styles from "../styles/BusList.module.css"

const BusList = ({ buses, date }) => {
    return (
        <div className={styles.bus_list}>
            {console.log(date)}
            {buses.map((bus) => (
                <BusDetailsCard key={bus.id} bus={bus} date={date} />

            ))}

            {/* <BusDetailsCard />
            <BusDetailsCard />
            <BusDetailsCard />
            <BusDetailsCard /> */}
        </div>
    );
};

export default BusList;


