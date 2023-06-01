package com.pgs.brs.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pgs.brs.entity.Booking;
import com.pgs.brs.entity.Customer;
import com.pgs.brs.repository.BookingRepository;
import com.pgs.brs.repository.CustomerRepository;

@Service
public class CustomerServiceImpl implements CustomerService {
	@Autowired
	private CustomerRepository customerRepository;
	@Autowired
	private BookingRepository bookingRepository;

	public Customer addCustomer(Customer customer) {
		return customerRepository.save(customer);
	}

	public void deleteCustomer(Integer id) {
		customerRepository.deleteById(id);
	}

	public Optional<Customer> getCustomerById(Integer id) {
		return customerRepository.findById(id);
	}

	public List<Customer> getAllCustomer() {
		return (List<Customer>) customerRepository.findAll();
	}

	public Long getNextId() {
		return customerRepository.count()+1;
	}

	public List<Booking> getAllBooking(String name, String phone) {
		List<Customer> customerList = customerRepository.queryByNameAndPhone(name, phone);
		List<Booking> bookingList = new ArrayList<>(); 
		for(Customer c:customerList) {
			List<Booking> tempBookingList = bookingRepository.queryByCid(c.getId());
			bookingList.addAll(tempBookingList);
		}
		return bookingList;
	}

}
