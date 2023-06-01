package com.pgs.brs.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.pgs.brs.entity.Booking;
import com.pgs.brs.entity.Customer;

@Service
public interface CustomerService {
	Customer addCustomer(Customer customer);
	void deleteCustomer(Integer id);
	Optional<Customer> getCustomerById(Integer id);
	List<Customer> getAllCustomer();
	Long getNextId();
	List<Booking> getAllBooking(String name,String phone);
}
