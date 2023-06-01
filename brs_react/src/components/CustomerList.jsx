import React, { useEffect, useState } from 'react';
import styles from '../styles/CustomerList.module.css';
import AdminService from '../services/AdminService';
import { Navigate } from 'react-router-dom';
import AdminHeader from './AdminHeader';

const CustomerList = ({ name }) => {
    if (name === "Customer") {
        var onGet = AdminService.getAllCustomer
        var onDelete = AdminService.deleteCustomer
        var onAdd = AdminService.addCustomer
    }
    else if (name === "Operator") {
        var onGet = AdminService.getAllOperator
        var onDelete = AdminService.deleteOperator
        var onAdd = AdminService.addOperator
    }

    const [customers, setCustomers] = useState([])
    const [newCustomerName, setNewCustomerName] = useState('');
    const [newCustomerPhone, setNewCustomerPhone] = useState('');
    const adminLoggedIn = localStorage.getItem("adminLoggedIn");

    useEffect(() => {
        onGet().then(res => {
            setCustomers(res.data)
        });
    },)

    const handleAdd = (name, phone) => {
        onAdd(name, phone).then((res) => {
            console.log(res.status);
            console.log(res.data);
        })
        setNewCustomerName('');
        setNewCustomerPhone('');
    }

    return (
        <>
            {adminLoggedIn ? <><AdminHeader />
                <div className={styles.customerListContainer}>
                    <h2>{name} List</h2>
                    <div className={styles.addCustomerForm}>
                        <input
                            type="text"
                            placeholder="Name"
                            value={newCustomerName}
                            onChange={(e) => setNewCustomerName(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Phone"
                            value={newCustomerPhone}
                            onChange={(e) => setNewCustomerPhone(e.target.value)}
                        />
                        <button className={styles.addButton} onClick={() => handleAdd(newCustomerName, newCustomerPhone)} >
                            Add {name}
                        </button>
                    </div>
                    <ul className={styles.customerList}>
                        {customers.map((customer) => (
                            <li key={customer.id} className={styles.customerListItem}>
                                <div className={styles.customerId}>{customer.id}</div>
                                <div className={styles.customerDetails}>
                                    <span className={styles.customerName}>{customer.name}</span>
                                    <span>{customer.phone}</span>
                                </div>
                                <div className={styles.customerActions}>
                                    <button className={styles.deleteButton} onClick={() => onDelete(customer.id)} >
                                        Delete
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div></> : <Navigate to={"/adminLogin"} />}
        </>
    );
};


export default CustomerList;
